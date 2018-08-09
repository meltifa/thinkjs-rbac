# thinkjs-rbac

实现思路参考
https://blog.csdn.net/zhangfei8625/article/details/43483777

数据库里建了3个用户，lilei，hanmeimei，lucy，密码都是123。

登录后可以在页面看到权限的priv数组，数字对应下面列表的访问权限，比如1就是有权访问第一个链接。

做了关联查询，查1次用户就能把权限列表拿到了。