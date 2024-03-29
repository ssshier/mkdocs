# Middware

[[toc]]

## RabbitMQ

### 特点

RabbitMQ是一款使用Erlang语言开发的, 实现AMQP(高级消息队列协议)的开源消息中间件.

- 可靠性 - 支持持久化, 传输确认, 发布确认等保证了MQ的可靠性
- 灵活的分发消息策略 - 这应该是RabbitMQ的一大特点. 在消息进入MQ前由Exchange(交换机)进行路由消息. 分发消息策略有: 简单模式, 工作队列模式, 发布订阅模式, 路由模式, 通配符模式
- 支持集群 - 多台RabbitMQ服务器可以组成一个集群, 形成一个逻辑Broker
- 多种协议 - RabbitMQ支持多种消息队列协议, 比如 STOMP, MQTT 等等
- 支持多种语言客户端 - RabbitMQ几乎支持所有常用编程语言, 包括 Java, .NET, Ruby 等等
- 可视化管理界面 - RabbitMQ提供了一个易用的用户界面, 使得用户可以监控和管理消息 Broker
- 插件机制 - RabbitMQ提供了许多插件, 可以通过插件进行扩展, 也可以编写自己的插件

### 消息生产消费

- 生产者client端指定服务端地址以及vhost虚拟主机, 连接服务端
- 建立连接后, 创建Channel信道, 设置此信道的属性
- 通过信道, 声明交换机, 队列, 绑定关系, 以及相关属性
- 通过信道, 发送Message消息到Exchange交换机
- 交换机通过binding绑定关系与RoutingKey路由键, 将消息分发到对应的Queue队列
- 消费者client通过服务端地址以及vhost连接服务端
- 建立连接后, 创建信道, 设置信道属性
- 通过信道, 开启消费者监听队列, 从队列中获取消息进行消费
- 根据是否延迟确认, 确认消息已经被正常消费成功后, 消息从队列中删除

### 组成

**Broker**: 消息队列服务进程. 此进程包括两个部分: Exchange和Queue

**Exchange**: 消息队列交换机. 按一定的规则将消息路由转发到某个队列

**Queue**: 消息队列, 存储消息的队列

**Producer**: 消息生产者. 生产方客户端将消息同交换机路由发送到队列中

**Consumer**: 消息消费者. 消费队列中存储的消息

### Exchange的四种类型

__Direct Exchange__

完全匹配型交换机, 通过RoutingKey路由键将交换机和队列进行绑定,  消息被发送到exchange时, 需要根据消息的RoutingKey, 来进行匹配, 只将消息发送到完全匹配到此RoutingKey的队列

__Fanout exchange__

扇出类型交换机, 此种交换机, 会将消息分发给所有绑定了此交换机的队列, 此时RoutingKey参数无效. 很像子网广播, 每台子网内的主机都获得了一份复制的消息. 简单点说就是发布订阅

__Topic Exchange__

主题交换机, 如果从用法上面翻译可能叫通配符交换机会更加贴切. 这种交换机是使用通配符去匹配, 路由到对应的队列. 通配符有两种: "*" ,  "#". 需要注意的是通配符前面必须要加上"."符号

\* 符号: 有且只匹配一个词. 比如 a.*可以匹配到"a.b", "a.c", 但是匹配不了"a.b.c"

\# 符号: 匹配一个或多个词. 比如"rabbit.#"既可以匹配到"rabbit.a.b", "rabbit.a", 也可以匹配到"rabbit.a.b.c"

__Headers Exchange__

headers信息类型交换机, 此类型交换机不通过routingkey路由键来分发消息, 而是通过消息内容中的headers属性来进行匹配. headers类型交换器性能差, 在实际中并不常用

## Kafka

Kafka是Apache旗下的一款分布式流媒体平台, Kafka是一种高吞吐量, 持久性, 分布式的发布订阅的消息队列系统

### 特点

- 高吞吐量: 可以满足每秒百万级别消息的生产和消费

- 持久性: 有一套完善的消息存储机制, 确保数据高效安全且持久化

- 分布式: 基于分布式的扩展; Kafka的数据都会复制到几台服务器上, 当某台故障失效时, 生产者和消费者转而使用其它的Kafka

### 概念

Kafka作为一个集群运行在一个或多个服务器上, 服务器可以跨多个机房, 是分布式的发布订阅消息队列系统

Kafka集群将记录流存储在称为Topic的类别中

每条记录由键值 (key, value) 和一个时间戳组成

### API

- Producer API: 生产者API允许应用程序将一组记录发布到一个或多个Kafka Topic中
- Consumer API: 消费者API允许应用程序订阅一个或多个Topic, 并处理向他们传输的记录流
- Streams API: 流API允许应用程序充当流处理器, 从一个或者多个Topic中消费输入流, 并将输出流生成为一个或多个输出主题, 从而将输入流有效地转换为输出流
- Connector API: 连接器API允许构建和运行可重用的生产者或消费者, 这些生产者或消费者将Kafka Topic连接到现有的应用程序或数据系统. 例如: 连接到关系数据库的连接器可能会捕获对表的每次更改. 