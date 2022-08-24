# Linux

[[toc]]

## 常用命令

### chmod

Linux chmod (英文全拼: change mode)命令是控制用户对文件的权限的命令

Linux/Unix 的文件调用权限分为三级 : 文件所有者 (Owner), 用户组 (Group), 其它用户 (Other Users)

### chown

Linux chown (英文全拼: change owner)命令用于设置文件所有者和文件关联组的命令

```shell
# 把 /var/run/httpd.pid 的所有者设置 root: 
chown root /var/run/httpd.pid

# 将文件 file1.txt 的拥有者设为 runoob, 群体的使用者 runoobgroup:
chown runoob:runoobgroup file1.txt

# 将当前前目录下的所有文件与子目录的拥有者皆设为 runoob, 群体的使用者 runoobgroup:
chown -R runoob:runoobgroup *

# 把 /home/runoob 的关联组设置为 512 (关联组ID), 不改变所有者: 
chown :512 /home/runoob
```

### chgrp

Linux chgrp (英文全拼: change group)命令用于变更文件或目录的所属群组

```
[root@localhost test]# ll
---xrw-r-- 1 root root 302108 11-13 06:03 log2012.log
[root@localhost test]# chgrp -v bin log2012.log
"log2012.log" 的所属组已更改为 bin

[root@localhost test]# ll
---xrw-r-- 1 root bin  302108 11-13 06:03 log2012.log
```