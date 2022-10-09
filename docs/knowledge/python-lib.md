# Python Lib

[[toc]]


## SQLAlchemy

::: SQLAlchemy 文档
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

::: Numpy 文档
[https://numpy.org/doc/stable/user/index.html#user](https://numpy.org/doc/stable/user/index.html#user)
:::

## Pandas

::: Pandas 文档
[https://pandas.pydata.org/docs/user_guide/index.html](https://pandas.pydata.org/docs/user_guide/index.html)
:::

## JPype

::: JPype 文档
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
