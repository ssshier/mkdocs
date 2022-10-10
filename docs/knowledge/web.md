# Web

[[toc]]

## 协议

TCP: 一种面向连接的, 可靠的, 基于字节流的传输层通信协议

Socket: Socket接口其实就是一个门面模式, 它把复杂的TCP/IP协议族隐藏在Socket接口后面

HTTP: HTTP是一个基于TCP/IP通信协议来传递数据

HTTPS TLS SSL: HTTP添加安全套接层

Websocket: 双向全双工的长连接

## 架构

![web](../assets/images/web.png)

- DNS: 全称为Domain Name Server, 即域名解析服务
- Load Balancer: 负载均衡服务器是我们对应用进行横向扩展的关键
- Web Application Servers: 网页应用服务
- Database: 数据库
- Caching Service: 缓存服务
- Job Queue & Servers: 异步任务
- Full-text Search Service: 全文检索
- Services: 微服务拆分
- Data: 数据处理
- Cloud storage: 数据存储云
- CDN: 全称为Content Delivery Network, 即内容分发网络

## 存储

数据库

文件/FS

对象存储

## 缓存

数据库缓存: Memcache, Redis

服务器缓存: 缓存代理服务器或者代理缓存

客户端缓存/浏览器缓存 
- HTTP 缓存
- Web Storage
- App Cache
- IndexedDB
- File System Api

## 安全

Web攻击
- XSS 用户输入校验
- CRSF 设置HttpOnly, 增加Token
- SQL注入 使用预编译语句, 使用ORM
- 文件上传 白名单校验, 上传限制
- DDOS

安全算法 
- 数字摘要  MD5 SHA Hash
- 对称加密算法 DES AES
- 非对称加密算法 RSA

认证
- 摘要认证
- 签名认证

协议
- HTTPS
- OAuth

## 性能

