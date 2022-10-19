# Python Web Framework

[[toc]]

## Web Framework Compare

### Django

Django 是用于构建网站的免费开源 Web 开发框架. 它于 2003 年创建, 并使用 MTV 模式, 也就是 Model-Template-View 模式, 如果不使用 Django 的模版语法, 也可以认为是 MVC 模式, 即 Model-View-Controler, 对应三个文件: `models.py`, `views.py`, `urls.py`

__优点__

- Django 框架的代码结构统一且清晰易懂, 开发人员可以像做填空题一样添加更多功能, 也可以设计自定义的类或接口, 即简单也不失灵活性, 扩展性
- Django 生态还有一个利器就是 Django Rest Framework (DRF) , DRF 可以轻松搭建具有 REST 风格的 API, 由于它具有模块化和可自定义的架构, 在前后端分离的趋势下, 使用 Django 构建 Web API 也非常容易
- 自带安全性的中间件. Django 通过提供针对联合 SQL 注入和跨站点请求伪造攻击的防御来提供安全性的访问
- Django 生态非常丰富, 第三方类适配的类库也非常多

__缺点__

- Django Models 没有 mixins, 只有简单的继承
- Django 使用的 ORM 是在 SQLAlchemy 之前创建的, 因此 Django ORM 的灵活性较差, 因此它不如 SQLAlchemy

__用例__

Django 可以处理任何规模和容量的项目. 可以将其用于简单站点或高性能站点. 一些用例如下: 

- 高负荷预订引擎
- 购物平台
- 学校管理系统
- 内置用于内部数据的自定义 CRM 系统
- 支持基于 Web 的应用程序的 IOS 和 Android 应用程序
- 管理仪表板, 基于照片的验证, 用于发送用户通知的电子邮件系统等

简而言之, 如果你要做一个上规模, 不断扩展的, 大规模, 商业化的 Web 项目, Django 是你最好的选择

### Flask

Flask 是一个用 Python 编写的微型 Web 框架, 可用于开发简约的 Web 应用程序. Flask 带有诸如模板引擎, 缓存和身份验证之类的选项

它的创建是为了使用 Python 编程语言构建 Web 应用程序. 它被设计为易用, 快速并且可以扩展成为复杂的应用程序或微服务

Flask 更像是创作者 Armin Ronacher 在 4 月 1 日对愚人节的恶作剧, 在其中依赖了Werkzeug 和 Jinja. 令人惊讶的是, 它受到了社区的赞赏, 这使他们在此方面做得更多

__优点__

- 管理仪表板, 基于照片的验证, 用于发送用户通知的电子邮件系统等
- Flask 允许进行单元测试, 并且由于其内置的开发服务器, 集成的支持等, 因此可以通过对一些扩展进行调整来过渡到 Web 框架
- Flask 简单易用, 非常适合初学者使用, 为开发人员提供了更好地学习和理解它的空间. 它还使开发人员可以毫不费力地快速创建应用程序

__缺点__

- Flask 的很多模块由第三方开发, 容易引起安全漏洞
- Flask 具有一个单一的来源, 表示它将依次处理每个请求, 因此, 无论有多少个请求, 它仍然会轮流处理它们, 这会耗费更多时间
- 如果开发人员水平不高, 更容易使用低质量的代码创建一个不良的 Web 应用程序

__用例__

可以将 Flask 用于商业项目. 它可以帮助你快速入门, 但是网站高负荷情况下效果不佳

可以快速实施 Flask 项目, 例如: 

- 电子商务系统
- Facebook / Twitter机器人
- 在线社交网络
- 静态网站

如果你要做一些小型个人项目, 比如聊天机器人, 或者想实现产品的快速原型, 或者喜欢自由的编写代码控制程序的流程, 那么可以选择 Flask, 如果说 Django 是具备半自动驾驶的大型车, 那么 Flask 就是让你自由操纵的手动挡小汽车

### Tornado

Tornado是Facebook开源出来的框架, 其哲学跟Django近乎两个极端

Tornado是异步框架Tornado基本上只算有MVC中C这一层

轻量, 异步非阻塞IO处理方式, 出色的抗负载能力, 协程带来优异的处理性能

__优点__

- 少而精 (轻量级框架) 
- 注重性能优越, 速度快
- 解决高并发 (请求处理是基于回调的非阻塞调用) 
- 异步非阻塞
- Websockets 长连接
- 内嵌 HTTP 服务器
- 单线程的异步网络程序, 默认启动时根据CPU数量运行多个实例, 利用CPU多核的优势
- 自定义模块

__缺点__

- 没有ORM, 提供的支持和模板少, 缺少后台支持, 对小型项目来说开发速度没有Django快
- 模板和数据库部分有很多第三方的模块可供选择, 这样不利于封装为一个功能模块

__用例__

要性能, Tornado 首选, Tornado 适合高度定制, 适合访问量大, 异步情况多的网站

### FastAPI

FastAPI 是用于构建 Web API 的现代, 开源, 快速, 高性能的 Web 框架, 它基于Python 3.6+ 标准类型提示, 支持异步, 正如它的名字, FastAPI 就是为构建快速的 API 而生

__优点__

- 自动类型检查. 这意味着更少的 Bug, 即使在深度嵌套的 JSON 请求中, Fast API 也会验证开发人员的数据类型
- 集众所长, 站在巨人的肩膀上. FastAPI 建立在 JSON Schema (用于验证JSON数据结构的工具) , OAuth 2.0 (用于授权的行业标准协议) 和OpenAPI (这是可公开获得的应用程序编程接口) 之类的标准之上
- 现代化. FastAPI 使使用称为 graphene-python 的 Python 库轻松构建 GraphQL API 
- 快速, 高性能. 可以和 NodeJS 和 Go 相提并论

__缺点__

- FastAPI 相对较新, 因此与其他框架相比, 社区较小, 第三方的教程相对较少

__用例__

- FastAPI 适用于构建高性能的 API, 本身支持异步, 如果要构建异步 API, 可以优先选择 FastAPI
- Netflix 将其用于内部危机管理
- 还可以在部署准备就绪的机器学习模型时完美缩放, 因为当 ML 模型封装在 REST API 并部署在微服务中时, 它在生产中会发挥最佳作用


## Django

### Django REST framework

#### 序列化反序列化相关参数

```
1.通用参数
read_only = True: 当前字段只能进行序列化输出 (用于不需要反序列化输入的字段)
write_only = True: 当前字段只能进行反序列化输入, 不进行序列化输出
required = True: 在反序列化时是必填字段, 默认为True
allow_null = False: 当前字段是否允许传None, 默认是False (必填字段False, 反之则True)
allow_blank = False: 当前字段是否运行为空, 默认是False (必填字段False, 反之则True)
default = xx: 指定在反序列化时, 当前字段没值时所使用的默认值
validators=校验器: 当前字段所使用的校验器 (下面介绍常用的)
error_messages: 包含错误key-value的字段 (下面会举例)
label: 当前字段在前端的api页面中所显示的字段名称
2.选项参数
max_length: 字段最大长度
min_length: 字段最小长度
trim_whitespace: 是否截断空字符串
max_value: 字段最大值
min_value: 字段最小值
```

### Django中间件的5个方法

.process_request : 请求进来时,权限认证

.process_view : 路由匹配之后,能够得到视图函数

.process_exception : 异常时执行

.process_template_responseprocess : 模板渲染时执行

.process_response : 请求有响应时执行

### filter和exclude的区别

两者取到的值都是 QuerySet 对象, filter选择满足条件的, exclude排除满足条件的

### Q & F

**Q对象查询**

Q 对象把关键字参数封装在一起, 并传递给 filter, exclude, get 等查询的方法. 多个 Q 对象之间可以使用 & 或者 | 运算符组合 (符号分别表示与和或的关系), 从而产生一个新的 Q 对象. 当然也可以使用 ~ (非) 运算符来取反, 从而实现 NOT 查询

**F对象查询**

F 对象主要用于模型类的 A 字段属性与 B 字段属性两者的比较, 即操作数据库中某一列的值. 通常是对数据库中的字段值在不获取的情况下进行操作

## Flask

### Flask框架依赖组件

- Route (路由)
- Templates (模板)
- Models (orm模型)
- Blueprint (蓝图)  将不同的功能模块化
- Jinja2 模板引擎

### Flask中g的作用

g: global

g 对象是专门用来来保存用户数据的

g 对象在一次请求中的所有的代码的地方, 都是可以使用的

### Flask中上下文管理主要是涉及的类

RequestContext 封装进来的请求

AppContext 封装app_context

LocalStack 将local对象中的数据维护成一个栈

Local 保存请求上下文对象和app上下文对象

### WTForms组件的作用

WTForms是一个支持多个web框架的form组件, 主要用于对用户请求数据进行验证

## Tornado

## FastAPI
