# ELK

[[toc]]

## Elasticsearch

### API

```
GET /my-index-000001/_search

GET /my-index-000001/_search?from=40&size=20
{
  "query": {
    "term": {
      "user.id": "kimchy"
    }
  }
}
```



### 调优

#### 硬件选择

选择性能更好的磁盘

#### 分片策略

设置合理的分片数: 分片会占用更多的资源

一般不超过节点数的3倍, 节点数 <= 主分片数* (副本数+1)

推迟分片分配

#### 路由选择

`shard = hash(routing) % number_of_primary_shards`

routing默认为文档id

不带routing查询会查询所有

#### 写入速度优化

加大 Translog Flush, 减少 Iops, Writeblock

增大 Index Refresh 间隔, 减少 Segment merger 次数

调整 Bulk 线程池和队列

优化节点间的任务分布

优化 Lucene 层的索引建立, 降低 CPU 及 IO


#### 内存设置

最好不超过内存大小的50%


### 面试

#### 为什么要使用Elasticsearch

大数据查询

全文索引

#### master选择

ZenDiscovery  Ping Unicast

配置node可以成为master节点

#### 集群脑裂

多个master

导致原因: 网络问题 节点负载 内存回收

解决方法: 减少误判 选举触发 角色分离 (master data false)

#### 倒排索引

将关键字和数据进行关联, 保存在倒排表中, 然后将查询内容进行分词后在倒排表中查询, 最后匹配数据

#### 使用Elasticsearch进行索引时需要注意

不需要索引的字段, 一定要明确定义出来, 因为默认是自动建索引的

同样的道理, 对于String类型的字段, 不需要analysis的也需要明确定义出来, 因为默认也是会analysis的

选择有规律的ID很重要, 随机性太大的ID(比如java的UUID)不利于查询
