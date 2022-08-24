# Core

[[toc]]

## 双指针

### 2. 两数相加

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        p: ListNode = ListNode(0)
        tmp = p
        up = 0
        while l1 or l2 or up:
            next_val = up
            if l1:
                next_val += l1.val
                l1 = l1.next
            if l2:
                next_val += l2.val
                l2 = l2.next

            up = next_val // 10
            add = next_val % 10

            p.next = ListNode(add)
            p = p.next
        return tmp.next
```

## 二叉树

### 226. 翻转二叉树

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:

    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return root
        root.left, root.right = root.right, root.left
        if root.left:
            self.invertTree(root.left)
        if root.right:
            self.invertTree(root.right)
        return root
```

### 124. 二叉树中的最大路径和

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.ans = float("-inf")

    def maxPathSum(self, root: TreeNode) -> int:
        def maxGain(node):
            if not node:
                return 0
            left = max(0, maxGain(node.left))
            right = max(0, maxGain(node.right))
            self.ans = max(self.ans, left + right + node.val)
            return max(left, right) + node.val
        maxGain(root)
        return self.ans
```

## 动态规划

### 322. 零钱兑换

```python
class Solution:

    def __init__(self):
        self.dp = None

    def coinChange(self, coins: List[int], amount: int) -> int:
        self.dp = [-2 for _ in range(amount + 1)]
        return self._coinChange(coins, amount)

    def _coinChange(self, coins, amount):
        if amount == 0:
            return 0
        elif amount < 0:
            return -1
        if self.dp[amount] != -2:
            return self.dp[amount]
        res = float("inf")
        for coin in coins:
            sub = self._coinChange(coins, amount - coin)
            if sub == -1:
                continue
            res = min(res, sub + 1)
        self.dp[amount] = -1 if res == float("inf") else res
        return self.dp[amount]
```

## 回溯法

### 46. 全排列

```python
class Solution:

    def __init__(self):
        self.res = []

    def permute(self, nums: List[int]) -> List[List[int]]:

        track = list()
        self.dfs(nums, track)
        return self.res

    def dfs(self, nums, track):
        if len(track) == len(nums):
            # print(track, nums)
            self.res.append(track[:])
            return
        for i in nums:
            if i in track:
                continue
            track.append(i)
            self.dfs(nums, track)
            track.remove(i)
```

### 51. N 皇后

```python
from typing import List
from copy import deepcopy


class Solution:

    def __init__(self):
        self.res = []
        self.board_size = 0

    def solveNQueens(self, n: int) -> List[List[str]]:
        self.board_size = n
        board = [["." for _ in range(n)] for _ in range(n)]
        self.dfs(board, 0)
        # 输出
        self.res = [["".join(col) for col in bd] for bd in self.res]
        return self.res

    def dfs(self, board, row):
        if row == self.board_size:
            self.res.append(deepcopy(board))
            return
        for col in range(self.board_size):
            if not self.is_valid(board, row, col):
                continue
            board[row][col] = "Q"
            self.dfs(board, row + 1)
            board[row][col] = "."

    def is_valid(self, board, row, col):
        # 检查列
        for i in range(row):
            if board[i][col] == "Q":
                return False
        # 检查左上
        for i in range(1, row + 1):
            if col - i >= 0 and board[row - i][col - i] == "Q":
                return False
        # 检查右上
        for i in range(1, row + 1):
            if col + i < self.board_size and board[row - i][col + i] == "Q":
                return False
        return True
```

## 广度优先搜索

### 111. 二叉树的最小深度

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        depth = 1
        q = []
        q.append(root)
        while q:
            for _ in range(len(q)):
                node: TreeNode = q.pop(0)
                if node.left is None and node.right is None:
                    return depth
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            depth += 1
```

### 773. 滑动谜题

```python
class Solution:
    def slidingPuzzle(self, board: List[List[int]]) -> int:
        neighbors = {0: (1, 3), 1: (0, 2, 4), 2: (1, 5), 3: (0, 4), 4: (1, 3, 5), 5: (2, 4)}
        start = tuple(board[0] + board[1])
        end = (1, 2, 3, 4, 5, 0)
        q = deque()
        q.append(start)
        visited = {start}
        step = 0
        while q:
            for _ in range(len(q)):
                cur = q.popleft()
                if cur == end:
                    return step
                cur = list(cur)
                pos = cur.index(0)
                for i in neighbors[pos]:
                    new_cur = cur[:]
                    new_cur[pos], new_cur[i] = new_cur[i], new_cur[pos]
                    new_cur = tuple(new_cur)
                    if new_cur not in visited:
                        visited.add(new_cur)
                        q.append(new_cur)
            step += 1
        return -1
```

### 剑指 Offer II 109. 开密码锁

```python
class Solution:

    def up(self, s, i):
        s = [i for i in s]
        if s[i] == "9":
            s[i] = "0"
        else:
            s[i] = str(int(s[i]) + 1)
        return "".join(s)

    def down(self, s, i):
        s = [i for i in s]
        if s[i] == "0":
            s[i] = "9"
        else:
            s[i] = str(int(s[i]) - 1)
        return "".join(s)

    def openLock(self, deadends: List[str], target: str) -> int:
        q = deque()
        q.append("0000")
        visited = {"0000"}
        step = 0
        while q:
            for _ in range(len(q)):
                s = q.popleft()
                if s in deadends:
                    continue
                if s == target:
                    return step
                for i in range(4):
                    up_s = self.up(s, i)
                    if up_s not in visited:
                        q.append(up_s)
                        visited.add(up_s)
                    down_s = self.down(s, i)
                    if down_s not in visited:
                        q.append(down_s)
                        visited.add(down_s)
            step += 1
        return -1
```

## 滑动窗口
