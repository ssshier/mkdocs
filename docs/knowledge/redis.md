# Redis

[[toc]]

Redis 是完全开源免费的, 遵守BSD协议, 是一个高性能的key-value数据库

## 数据类型

__五种基本数据类型__

String: 常用于 KV 缓存

Hash: 存储结构化数据, 如: 产品信息, 用户信息等

List: 存储列表, 如: 粉丝列表, 文章评论列表等. 可以通过 lrange 命令进行分页查询

Set: 存储去重列表, 如: 粉丝列表等. 可以基于 set 玩儿交集, 并集, 差集的操作. 例如: 求两个人的共同好友列表

Sorted Set: 存储含评分的去重列表, 如: 各种排行榜

__高级数据类型__

Bitmaps, HyperLogLogs, GEO, Streams

## 底层数据结构

简单动态字符串(SDS)

链表

字典

跳跃表

整数集合

## 为什么快

Redis是纯内存操作: 数据存放在内存中, 内存的响应时间大约是100纳秒, 这是Redis每秒万亿级别访问的重要基础

非阻塞I/O: Redis采用epoll作为I/O多路复用技术的实现, 再加上Redis自身的事件处理模型将epoll中的连接, 读写, 关闭都转换为了时间, 不在I/O上浪费过多的时间

单线程避免了线程切换和竞态产生的消耗

## 内存淘汰

Redis 过期策略是: 定期删除 + 惰性删除

- 消极方法 (passive way), 在主键被访问时如果发现它已经失效, 那么就删除它
- 主动方法 (active way), 定期从设置了失效时间的主键中选择一部分失效的主键删除

Redis 内存淘汰策略: 

- noeviction - 当内存使用达到阈值的时候, 所有引起申请内存的命令会报错. 这是 Redis 默认的策略
- allkeys-lru - 在主键空间中, 优先移除最近未使用的 key
- allkeys-random - 在主键空间中, 随机移除某个 key
- volatile-lru - 在设置了过期时间的键空间中, 优先移除最近未使用的 key
- volatile-random - 在设置了过期时间的键空间中, 随机移除某个 key
- volatile-ttl - 在设置了过期时间的键空间中, 具有更早过期时间的 key 优先移除

## 持久化

RDB 即某一时刻的二进制数据快照

AOF 会将写命令不断追加到 AOF 文本日志末尾

建议同时使用 RDB 和 AOF. 用 AOF 来保证数据不丢失, 作为数据恢复的第一选择; 用 RDB 来做不同程度的冷备, 在 AOF 文件都丢失或损坏不可用的时候, 还可以使用 RDB 来进行快速的数据恢复

## 事务

Redis 提供的不是严格的事务, Redis 只保证串行执行命令, 并且能保证全部执行, 但是执行命令失败时并不会回滚, 而是会继续执行下去

## 缓存穿透 缓存雪崩 缓存击穿

__缓存穿透__

缓存穿透是指查询一个一定不存在的数据, 由于缓存是不命中时被动写的, 并且出于容错考虑, 如果从存储层查不到数据则不写入缓存, 这将导致这个不存在的数据每次请求都要到存储层去查询, 失去了缓存的意义. 在流量大时, 可能DB就挂掉了, 要是有人利用不存在的key频繁攻击我们的应用, 这就是漏洞

有很多种方法可以有效地解决缓存穿透问题, 最常见的则是采用布隆过滤器, 将所有可能存在的数据哈希到一个足够大的bitmap中, 一个一定不存在的数据会被 这个bitmap拦截掉, 从而避免了对底层存储系统的查询压力. 另外也有一个更为简单粗暴的方法 (我们采用的就是这种), 如果一个查询返回的数据为空 (不管是数 据不存在, 还是系统故障), 我们仍然把这个空结果进行缓存, 但它的过期时间会很短, 最长不超过五分钟

__缓存雪崩__

缓存雪崩是指在我们设置缓存时采用了相同的过期时间, 导致缓存在某一时刻同时失效, 请求全部转发到DB, DB瞬时压力过重雪崩

缓存失效时的雪崩效应对底层系统的冲击非常可怕. 大多数系统设计者考虑用加锁或者队列的方式保证缓存的单线 程 (进程)写, 从而避免失效时大量的并发请求落到底层存储系统上. 这里分享一个简单方案就时讲缓存失效时间分散开, 比如我们可以在原有的失效时间基础上增加一个随机值, 比如1-5分钟随机, 这样每一个缓存的过期时间的重复率就会降低, 就很难引发集体失效的事件

__缓存击穿__

对于一些设置了过期时间的key, 如果这些key可能会在某些时间点被超高并发地访问, 是一种非常 "热点" 的数据. 这个时候, 需要考虑一个问题: 缓存被 "击穿" 的问题, 这个和缓存雪崩的区别在于这里针对某一key缓存, 前者则是很多key

缓存在某个时间点过期的时候, 恰好在这个时间点对这个Key有大量的并发请求过来, 这些请求发现缓存过期一般都会从后端DB加载数据并回设到缓存, 这个时候大并发的请求可能会瞬间把后端DB压垮

- 使用互斥锁 (mutex key)
- "提前" 使用互斥锁 (mutex key)
- "永远不过期"
- 资源保护


## 消息丢失

Redis Stream 提供了消息的持久化和主备复制功能, 可以让任何客户端访问任何时刻的数据, 并且能记住每一个客户端的访问位置, 还能保证消息不丢失

消费者处理完消息后, 需要执行 XACK 命令告知 Redis, 这时 Redis 就会把这条消息标记为**处理完成**,
如果消费者异常宕机, 肯定不会发送 XACK, 那么 Redis 就会依旧保留这条消息, 待这组消费者重新上线后, Redis 就会把之前没有处理成功的数据, 重新发给这个消费者. 这样一来, 即使消费者异常, 也不会丢失数据


## 更新缓存策略

**Cache Aside**

这是最常用最常用的pattern. 其具体逻辑如下:

失效: 应用程序先从cache取数据, 没有得到, 则从数据库中取数据, 成功后, 放到缓存中

命中: 应用程序从cache中取数据, 取到后返回

更新: 先把数据存到数据库中, 成功后, 再让缓存失效

**Read Through**

Read Through 套路就是在查询操作中更新缓存, 也就是说, 当缓存失效的时候 (过期或), Cache Aside 是由调用方负责把数据加载入缓存, 而 Read Through 则用缓存服务自己来加载, 从而对应用方是透明的. 

**Write Through**

Write Through 套路和 Read Through 相仿, 不过是在更新数据时发生. 当有数据更新的时候, 如果没有命中缓存, 直接更新数据库, 然后返回. 如果命中了缓存, 则更新缓存, 然后再由Cache自己更新数据库 (这是一个同步操作) 

上面的Cache Aside套路中, 应用代码需要维护两个数据存储, 一个是缓存 (Cache), 一个是数据库 (Repository). 所以, 应用程序比较啰嗦. 而 Read/Write Through 套路是把更新数据库 (Repository) 的操作由缓存自己代理了, 所以, 对于应用层来说, 就简单很多了. 可以理解为, 应用认为后端就是一个单一的存储, 而存储自己维护自己的Cache

**Write Behind Caching Pattern**

Write Back 套路, 一句说就是, 在更新数据的时候, 只更新缓存, 不更新数据库, 而我们的缓存会异步地批量更新数据库. 这个设计的好处就是让数据的I/O操作飞快无比 (因为直接操作内存嘛), 因为异步, write backg 还可以合并对同一个数据的多次操作, 所以性能的提高是相当可观的.  上面, 我们没有考虑缓存 (Cache) 和持久层 (Repository) 的整体事务的问题. 比如, 更新Cache成功, 更新数据库失败了怎么吗\? 或是反过来. 关于这个事, 如果你需要强一致性, 你需要使用 "两阶段提交协议" ——prepare, commit/rollback, 比如Java 7 的XAResource, 还有MySQL 5.7的 XA Transaction, 有些cache也支持XA, 比如EhCache. 当然, XA这样的强一致性的玩法会导致性能下降.


## 如何解决Redis的并发竞争key问题

(1)如果对这个key操作, 不要求顺序

这种情况下, 准备一个分布式锁, 大家去抢锁, 抢到锁就做set操作即可, 比较简单

(2)如果对这个key操作, 要求顺序

假设有一个key1,系统A需要将key1设置为valueA,系统B需要将key1设置为valueB,系统C需要将key1设置为valueC.

期望按照key1的value值按照 valueA-->valueB-->valueC 的顺序变化. 这种时候我们在数据写入数据库的时候, 需要保存一个时间戳

假设这会系统B先抢到锁, 将key1设置为{valueB 3:05}. 接下来系统A抢到锁, 发现自己的valueA的时间戳早于缓存中的时间戳, 那就不做set操作了

其他方法, 比如利用队列, 将set方法变成串行访问也可以. 

## Redis和Memcached的区别

1, Redis和Memcache都是将数据存放在内存中, 都是内存数据库. 不过memcache还可用于缓存其他东西, 例如图片, 视频等等; 

2, Redis不仅仅支持简单的k/v类型的数据, 同时还提供list, set, hash等数据结构的存储; 

3, 虚拟内存--Redis当物理内存用完时, 可以将一些很久没用到的 value 交换到磁盘; 

4, 过期策略--memcache在set时就指定, 例如set key1 0 0 8,即永不过期. Redis可以通过例如expire 设定, 例如expire name 10; 

5, 分布式--设定memcache集群, 利用magent做一主多从;Redis可以做一主多从. 都可以一主一从; 

6, 存储数据安全--memcache挂掉后, 数据没了; Redis可以定期保存到磁盘 (持久化); 

7, 灾难恢复--memcache挂掉后, 数据不可恢复; Redis数据丢失后可以通过aof恢复; 

8, Redis支持数据的备份, 即master-slave模式的数据备份; 

9, 应用场景不一样: Redis出来作为NoSQL数据库使用外, 还能用做消息队列, 数据堆栈和数据缓存等; Memcached适合于缓存SQL语句, 数据集, 用户临时性数据, 延迟查询数据和session等. 