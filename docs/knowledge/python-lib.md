# Python Lib

[[toc]]


## SQLAlchemy

::: tip SQLAlchemy 文档
[https://docs.sqlalchemy.org/en/14/](https://docs.sqlalchemy.org/en/14/)

[https://docs.sqlalchemy.org/en/20/](https://docs.sqlalchemy.org/en/20/)
:::


```Python
# PostgreSQL
# default
engine = create_engine("postgresql://scott:tiger@localhost/mydatabase")
# psycopg2
engine = create_engine("postgresql+psycopg2://scott:tiger@localhost/mydatabase")
# pg8000
engine = create_engine("postgresql+pg8000://scott:tiger@localhost/mydatabase")

# MySQL
# default
engine = create_engine("mysql://scott:tiger@localhost/foo")
# mysqlclient (a maintained fork of MySQL-Python)
engine = create_engine("mysql+mysqldb://scott:tiger@localhost/foo")
# PyMySQL
engine = create_engine("mysql+pymysql://scott:tiger@localhost/foo")

# Oracle
engine = create_engine("oracle://scott:tiger@127.0.0.1:1521/sidname")
engine = create_engine("oracle+cx_oracle://scott:tiger@tnsname")

# Microsoft SQL Server
# pyodbc
engine = create_engine("mssql+pyodbc://scott:tiger@mydsn")
# pymssql
engine = create_engine("mssql+pymssql://scott:tiger@hostname:port/dbname")

# SQLite
# sqlite://<nohostname>/<path>
# where <path> is relative:
engine = create_engine("sqlite:///foo.db")
# Unix/Mac - 4 initial slashes in total
engine = create_engine("sqlite:////absolute/path/to/foo.db")
# Windows
engine = create_engine("sqlite:///C:\\path\\to\\foo.db")
# Windows alternative using raw string
engine = create_engine(r"sqlite:///C:\path\to\foo.db")
```

## Numpy

::: tip Numpy 文档
[https://numpy.org/doc/stable/user/index.html#user](https://numpy.org/doc/stable/user/index.html#user)
:::

## Pandas

::: tip Pandas 文档
[https://pandas.pydata.org/docs/user_guide/index.html](https://pandas.pydata.org/docs/user_guide/index.html)
:::


## Pika

::: tip Pika 文档
[https://pika.readthedocs.io/en/stable/](https://pika.readthedocs.io/en/stable/)
:::

```Python
import pika
import json

credentials = pika.PlainCredentials("test", "123456")  # mq用户名和密码
# 虚拟队列需要指定参数 virtual_host, 如果是默认的可以不填
connection = pika.BlockingConnection(
    pika.ConnectionParameters(
        host="127.0.0.1", port=5672, virtual_host="/", credentials=credentials
    )
)
channel = connection.channel()
# 声明exchange, 由exchange指定消息在哪个队列传递, 如不存在, 则创建.durable = True 代表exchange持久化存储, False 非持久化存储
channel.exchange_declare(exchange="python-test", durable=True)
# 声明消息队列, 消息将在这个队列传递, 如不存在, 则创建. durable = True 代表消息队列持久化存储, False 非持久化存储
result = channel.queue_declare(queue="python-test", durable=True)

for i in range(10):
    message = json.dumps({"key": i})
    # 向队列插入数值 routing_key是队列名
    # delivery_mode = 2 声明消息在队列中持久化, delivery_mod = 1 消息非持久化
    channel.basic_publish(
        exchange="",
        routing_key="python-test",
        body=message,
        properties=pika.BasicProperties(delivery_mode=2),
    )
    print(message)
connection.close()


# Consumer
import pika

credentials = pika.PlainCredentials("test", "123456")
connection = pika.BlockingConnection(
    pika.ConnectionParameters(
        host="127.0.0.1", port=5672, virtual_host="/", credentials=credentials
    )
)
channel = connection.channel()
# 申明消息队列, 消息在这个队列传递, 如果不存在, 则创建队列
channel.queue_declare(queue="python-test", durable=False)
# 定义一个回调函数来处理消息队列中的消息, 这里是打印出来
def callback(ch, method, properties, body):
    ch.basic_ack(delivery_tag=method.delivery_tag)
    print(body.decode())


# 用callback来接收消息
# no_ack 设置成 False, 在调用callback函数时, 未收到确认标识, 消息会重回队列. True, 无论调用callback成功与否, 消息都被消费掉
channel.basic_consume("python-test", callback, no_ack=False)
# 开始接收信息, 并进入阻塞状态, 队列里有信息才会调用callback进行处理
channel.start_consuming()
```

## JPype

::: tip JPype 文档
[https://jpype.readthedocs.io/en/latest/userguide.html](https://jpype.readthedocs.io/en/latest/userguide.html)
:::

JPype is a Python module to provide full access to Java from within Python.


```Python
import jpype

jpype.startJVM()
jpype.shutdownJVM()
jpype.getDefaultJVMPath()
jpype.getClassPath(env=True)

jpype.JPackage(*args, **kwargs)
jpype.JClass(jc, loader=None, initialize=True)
```

## Python for Excel

::: tip Python for Excel
[https://www.python-excel.org/](https://www.python-excel.org/)
:::
