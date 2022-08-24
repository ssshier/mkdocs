# Sort

[[toc]]

## 冒泡排序

冒泡排序 (Bubble Sort) 也是一种简单直观的排序算法. 它重复地走访过要排序的数列, 一次比较两个元素, 如果他们的顺序错误就把他们交换过来. 走访数列的工作是重复地进行直到没有再需要交换, 也就是说该数列已经排序完成. 这个算法的名字由来是因为越小的元素会经由交换慢慢 "浮" 到数列的顶端

```python
def bubbleSort(arr):
    for i in range(1, len(arr)):
        for j in range(0, len(arr)-i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
```

## 选择排序

选择排序是一种简单直观的排序算法, 无论什么数据进去都是 O(n²) 的时间复杂度. 所以用到它的时候, 数据规模越小越好. 唯一的好处可能就是不占用额外的内存空间了吧

```python
def selectionSort(arr):
    for i in range(len(arr) - 1):
        # 记录最小数的索引
        minIndex = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[minIndex]:
                minIndex = j
        # i 不是最小数时, 将 i 和最小数进行交换
        if i != minIndex:
            arr[i], arr[minIndex] = arr[minIndex], arr[i]
    return arr
```

## 插入排序

插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴, 但它的原理应该是最容易理解的了, 因为只要打过扑克牌的人都应该能够秒懂. 插入排序是一种最简单直观的排序算法, 它的工作原理是通过构建有序序列, 对于未排序数据, 在已排序序列中从后向前扫描, 找到相应位置并插入

插入排序和冒泡排序一样, 也有一种优化算法, 叫做拆半插入

```python
def insertionSort(arr):
    for i in range(len(arr)):
        preIndex = i-1
        current = arr[i]
        while preIndex >= 0 and arr[preIndex] > current:
            arr[preIndex+1] = arr[preIndex]
            preIndex-=1
        arr[preIndex+1] = current
    return arr
```

## 希尔排序

希尔排序, 也称递减增量排序算法, 是插入排序的一种更高效的改进版本. 但希尔排序是非稳定排序算法

希尔排序是基于插入排序的以下两点性质而提出改进方法的: 

- 插入排序在对几乎已经排好序的数据操作时, 效率高, 即可以达到线性排序的效率
- 但插入排序一般来说是低效的, 因为插入排序每次只能将数据移动一位

希尔排序的基本思想是: 先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序, 待整个序列中的记录 "基本有序" 时, 再对全体记录进行依次直接插入排序

```python
def shellSort(arr):
    import math
    gap=1
    while(gap < len(arr)/3):
        gap = gap*3+1
    while gap > 0:
        for i in range(gap,len(arr)):
            temp = arr[i]
            j = i-gap
            while j >=0 and arr[j] > temp:
                arr[j+gap]=arr[j]
                j-=gap
            arr[j+gap] = temp
        gap = math.floor(gap/3)
    return arr
```

## 归并排序

归并排序 (Merge sort) 是建立在归并操作上的一种有效的排序算法. 该算法是采用分治法 (Divide and Conquer) 的一个非常典型的应用

作为一种典型的分而治之思想的算法应用, 归并排序的实现由两种方法: 

- 自上而下的递归 (所有递归的方法都可以用迭代重写, 所以就有了第 2 种方法)
- 自下而上的迭代

```python
def mergeSort(arr):
    import math
    if(len(arr)<2):
        return arr
    middle = math.floor(len(arr)/2)
    left, right = arr[0:middle], arr[middle:]
    return merge(mergeSort(left), mergeSort(right))

def merge(left,right):
    result = []
    while left and right:
        if left[0] <= right[0]:
            result.append(left.pop(0))
        else:
            result.append(right.pop(0));
    while left:
        result.append(left.pop(0))
    while right:
        result.append(right.pop(0));
    return result
```
## 快速排序

快速排序是由东尼·霍尔所发展的一种排序算法. 在平均状况下, 排序 n 个项目要 Ο(nlogn) 次比较. 在最坏状况下则需要 Ο(n2) 次比较, 但这种状况并不常见. 事实上, 快速排序通常明显比其他 Ο(nlogn) 算法更快, 因为它的内部循环 (inner loop)可以在大部分的架构上很有效率地被实现出来

```python
def quickSort(arr, left=None, right=None):
    left = 0 if not isinstance(left,(int, float)) else left
    right = len(arr)-1 if not isinstance(right,(int, float)) else right
    if left < right:
        partitionIndex = partition(arr, left, right)
        quickSort(arr, left, partitionIndex-1)
        quickSort(arr, partitionIndex+1, right)
    return arr

def partition(arr, left, right):
    pivot = left
    index = pivot+1
    i = index
    while  i <= right:
        if arr[i] < arr[pivot]:
            swap(arr, i, index)
            index+=1
        i+=1
    swap(arr,pivot,index-1)
    return index-1

def swap(arr, i, j):
    arr[i], arr[j] = arr[j], arr[i]
```
## 堆排序

堆排序 (Heapsort) 是指利用堆这种数据结构所设计的一种排序算法. 堆积是一个近似完全二叉树的结构, 并同时满足堆积的性质: 即子结点的键值或索引总是小于 (或者大于) 它的父节点. 堆排序可以说是一种利用堆的概念来排序的选择排序. 分为两种方法: 

- 大顶堆: 每个节点的值都大于或等于其子节点的值, 在堆排序算法中用于升序排列
- 小顶堆: 每个节点的值都小于或等于其子节点的值, 在堆排序算法中用于降序排列

堆排序的平均时间复杂度为 Ο(nlogn)

```python
def buildMaxHeap(arr):
    import math
    for i in range(math.floor(len(arr)/2),-1,-1):
        heapify(arr,i)

def heapify(arr, i):
    left = 2*i+1
    right = 2*i+2
    largest = i
    if left < arrLen and arr[left] > arr[largest]:
        largest = left
    if right < arrLen and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        swap(arr, i, largest)
        heapify(arr, largest)

def swap(arr, i, j):
    arr[i], arr[j] = arr[j], arr[i]

def heapSort(arr):
    global arrLen
    arrLen = len(arr)
    buildMaxHeap(arr)
    for i in range(len(arr)-1,0,-1):
        swap(arr,0,i)
        arrLen -=1
        heapify(arr, 0)
    return arr
```

## 计数排序

计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中. 作为一种线性时间复杂度的排序, 计数排序要求输入的数据必须是有确定范围的整数

```python
def countingSort(arr, maxValue):
    bucketLen = maxValue+1
    bucket = [0]*bucketLen
    sortedIndex =0
    arrLen = len(arr)
    for i in range(arrLen):
        if not bucket[arr[i]]:
            bucket[arr[i]]=0
        bucket[arr[i]]+=1
    for j in range(bucketLen):
        while bucket[j]>0:
            arr[sortedIndex] = j
            sortedIndex+=1
            bucket[j]-=1
    return arr
```

## 桶排序

桶排序是计数排序的升级版. 它利用了函数的映射关系, 高效与否的关键就在于这个映射函数的确定. 为了使桶排序更加高效, 我们需要做到这两点: 

- 在额外空间充足的情况下, 尽量增大桶的数量
- 使用的映射函数能够将输入的 N 个数据均匀的分配到 K 个桶中

```python
def bucktetSort(numList,bucketNum):
    if len(numList) == 0 or len(numList) == 1:
        return numList
    maxNum = max(numList)
    minNum = min(numList)   
    bucketSize = (maxNum - minNum + 1) // bucketNum   # 根据桶的数量找到每个桶的范围
    buckets = [[] for i in range(bucketNum)]
    for i in range(len(numList)):     # 将各个数分配到各个桶
        buckets[(numList[i] - minNum) // bucketSize].append(numList[i])
    for i in range(bucketNum):       # 桶内排序, 可以使用各种排序方法
        buckets[i].sort()
    res = []
    for i in range(len(buckets)):   # 分别将各个桶内的数提出来, 压入结果
        for j in range(len(buckets[i])):
            res.append(buckets[i][j])
    return res
```

## 基数排序

基数排序是一种非比较型整数排序算法, 其原理是将整数按位数切割成不同的数字, 然后按每个位数分别比较. 由于整数也可以表达字符串 (比如名字或日期) 和特定格式的浮点数, 所以基数排序也不是只能使用于整数

```python

def radixSort(array):
    max_num = max(array)
    place = 1
    while max_num >= 10**place:
        place += 1
    for i in range(place):
        buckets = [[] for _ in range(10)]
        for num in array:
            radix = int(num/(10**i) % 10)
            buckets[radix].append(num)
        j = 0
        for k in range(10):
            for num in buckets[k]:
                array[j] = num
                j += 1
    return array
```