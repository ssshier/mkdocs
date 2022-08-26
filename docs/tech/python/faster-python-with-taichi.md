# Faster Python with Taichi

[[toc]]


## 安装

```shell
pip install taichi
```

## 用例

### 计算素数个数

**加速前**

```python
def is_prime(n: int):
    result = True
    for k in range(2, int(n ** 0.5) + 1):
        if n % k == 0:
            result = False
            break
    return result


def primes(n: int) -> int:
    count = 0
    for k in range(2, n):
        if is_prime(k):
            count += 1
    return count


print(primes(10000000))
```

```shell
$ time python test.py 
664579

real    1m15.332s
user    0m0.015s
sys     0m0.015s
```

**加速后**

```python
import taichi as ti

ti.init()


@ti.func
def is_prime(n: int):
    result = True
    for k in range(2, int(n ** 0.5) + 1):
        if n % k == 0:
            result = False
            break
    return result


@ti.kernel
def primes(n: int) -> int:
    count = 0
    for k in range(2, n):
        if is_prime(k):
            count += 1
    return count


print(primes(10000000))
```

```shell
$ time python test.py 
[Taichi] version 1.1.2, llvm 10.0.0, commit f25cf4a2, win, python 3.8.10
[Taichi] Starting on arch=x64
664579

real    0m1.584s
user    0m0.000s
sys     0m0.046s
```

