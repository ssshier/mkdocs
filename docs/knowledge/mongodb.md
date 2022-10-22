# MongoDB

[[toc]]

MongoDB 是一个基于分布式文件存储的数据库. 由 C++ 语言编写. 旨在为 WEB 应用提供可扩展的高性能数据存储解决方案

MongoDB 将数据存储为一个文档, 数据结构由键值(key=>value)对组成. MongoDB 文档类似于 JSON 对象. 字段值可以包含其他文档, 数组及文档数组

## 特点

- 文档结构的存储方式, 能够更便捷地获取数据
- 内置GridFS, 支持大容量存储
- 海量数据下, 性能优越
- 动态查询
- 全索引支持, 扩展到内部对象和内嵌数组
- 查询记录分析
- 高效存储二进制大对象 (比如照片和视频)
- 复制 (复制集)和支持自动故障恢复
- 内置Auto-Sharding自动分片支持云级扩展性, 分片简单
- MapReduce支持复杂聚合

::: tip
MongoDB 4.2 之后支持多文档事务
:::

## BSON文档

BSON文档的最大大小为16 MB

最大文档大小有助于确保单个文档不会使用过多的RAM或在传输过程中占用过多的带宽. 要存储大于最大大小的文档, MongoDB提供了GridFS API

MongoDB支持BSON文档嵌套的级别不超过100

## Objecld

ObjectId 是一个12字节 BSON 类型数据, 有以下格式: 

前4个字节表示时间戳
接下来的3个字节是机器标识码
紧接的两个字节由进程id组成 (PID)
最后三个字节是随机数

## 副本集

副本集是一组托管相同数据集的mongo实例. 在副本集中, 一个节点是主节点, 另一个是辅助节点. 从主节点到辅助节点, 所有数据都会复制

## Profiler

MongoDB数据库分析器显示针对数据库的每个操作的性能特征. 您可以使用探查器找到比其慢的查询

```javascript
// 为所有数据库开启慢查询记录
db.setProfilingLevel(2)
// 指定数据库, 并指定阈值慢查询 , 超过20毫秒的查询被记录
use test
db.setProfilingLevel(1, { slowms: 20 })
// 随机采集慢查询的百分比值, sampleRate 值默认为1, 表示都采集, 0.42 表示采集42%的内容
db.setProfilingLevel(1, { sampleRate: 0.42 }) 

// 查询慢查询级别和其它信息
db.getProfilingStatus()
// 仅返回慢查询级别
db.getProfilingLevel()
// 禁用慢查询记录
db.setProfilingLevel(0)

// 查询最近的10个慢查询日志
db.system.profile.find().limit(10).sort( { ts : -1 } ).pretty()
```
