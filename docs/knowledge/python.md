# Python

[[toc]]

## 数据类型

数值类型, 字符串, 列表, 元组, 字典, 集合


可变数据类型: 列表, 字典, 集合

不可变数据类型: 数值类, 字符串, 元组

## 迭代器 生成器

- 可迭代对象 (Iterable) 是实现了 `__iter__` 方法的对象, 通过调用 `iter()` 方法可以获得一个迭代器 (Iterator)
- 迭代器(Iterator)是实现了 `__iter__` 方法和 `__next__` 方法的对象
- `for...in...` 的迭代实际是将可迭代对象转换成迭代器, 再重复调用 `next()` 方法实现的
- 生成器 (Generator) 是一个特殊的迭代器, 它的实现更简单优雅, `yield` 是生成器实现 `__next__` 方法的关键. 它作为生成器执行的暂停恢复点, 可以对 `yield` 表达式进行赋值, 也可以将 `yield` 表达式的值返回

::: tip
Python2中的迭代器是 `next` 方法
:::

## 闭包

如果在一个内部函数里, 对在外作用域(但不是在全局作用域)的变量进行引用, 那么内部函数就被认为是闭包

## 实例方法 类方法 静态方法

__实例方法__: 是类实例化对象的方法, 只有实例对象可以调用, 形参为 `self` , 指代对象本身

__类方法__: 是类对象的方法, 在定义时需要在上方使用 `@classmethod` 进行装饰,形参为 `cls`, 表示类对象, 类对象和实例对象都可调用

__静态方法__: 是一个任意函数, 在其上方使用 `@staticmethod` 进行装饰, 可以用对象直接调用, 静态方法实际上跟该类没有太大关系

```python
class A(object):
    def foo(self,x):
        print "executing foo(%s,%s)"%(self,x)

    @classmethod
    def class_foo(cls,x):
        print "executing class_foo(%s,%s)"%(cls,x)

    @staticmethod
    def static_foo(x):
        print "executing static_foo(%s)"%x

a=A()
```


| #       | 实例方法     | 类方法            | 静态方法      |
| :------ | :-------    | :------------- | :-------------- |
| a = A() | a.foo(x)    | a.class_foo(x) | a.static_foo(x) |
| A       | 不可用       | A.class_foo(x) | A.static_foo(x) |

## `__new__` & `__init__`

- `__new__` 是一个静态方法, 而 `__init__` 是一个实例方法
- `__new__` 方法会返回一个创建的实例, 而 `__init__` 什么都不返回
- `__new__` 返回一个 `cls` 的实例时后, `__init__` 才能被调用
- 创建一个新实例时调用 `__new__`, 初始化一个实例时用 `__init__`

## Python自省

自省就是面向对象的语言所写的程序在运行时, 所能知道对象的类型. 简单一句就是运行时能够获得对象的类型, 比如: 
- `type()`
- `dir()`
- `getattr()`
- `hasattr()`
- `isinstance()`

## object & type

- type 是一切 type 的类型
- object 是所有对象的基类, type 也继承自 object
- object 的 type 是 type

## 进程 线程 协程

进程是指在系统中正在运行的一个应用程序, 是CPU的最小工作单元

线程是程序执行中一个单一的顺序控制流程, 是程序执行流的最小单元, 是处理器调度和分派的基本单位

协程是一种比线程更加轻量级的存在, 协程不是被操作系统内核所管理, 而完全是由程序所控制

## GIL

GIL 并不是 Python 的特性, 它是在实现 Python 解释器 (CPython) 时所引入的概念.

也就是任意时刻, Python 只有一个线程在运行

## GC

Python GC主要使用引用计数 (reference counting) 来跟踪和回收垃圾. 在引用计数的基础上, 通过 "标记-清除" (mark and sweep) 解决容器对象可能产生的循环引用问题, 通过 "分代回收" (generation collection) 以空间换时间的方法提高垃圾回收效率

触发垃圾回收
- 调用 `gc.collect()`
- gc 模块的计数器达到阀值
- 程序退出