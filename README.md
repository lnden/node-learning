# node-learning
A node learning libraryA node learning library

9   express 

10*  body-parser  

11*   cookie-parser/cookie-session

12-13*   jade template

14 ejs* ejs template

15 multer* multer

16 consolidate*  express.Router();*

17.数据库建表~uer_table

18.引入mysql*  使用 INSERT INTO user_table*  库名、表名、字段加

19.数据库建表   blog  创建三个表  banner_table/article_table/user_table

20.blog*    mysql数据库 实战nodejs 完成banners渲染

21.blog*    article渲染

22.blog*    文章页面渲染 日期处理，内容转义输出

23.blog*    实现 赞功能，代码冗余

24.数据库mysql 简介

25/26.增删改查，子句介绍 WHERE GROUP ORDER LIMIT
筛选、合并、排序、限制

SELECT class,COUNT(class) FROM student_table
WHERE score>60
GROUP BY class
ORDER BY COUNT(class) DESC
LIMIT 2;

27.new project,创建数据字典

28.前半部分定义数据字典，后半部分数据库建表8张表

29.首先添加admin表，
	route:
		普通用户-前端部分
		管理员用户-后台管理部分
	搭建服务器server*,添加测试router,1.js/2.js/1.ejs

30.注释测试模板以及router,1.js/2.js/1.ejs/server.use..

1).管理员登录开始
2).数据库不能明文密码出现,md5三次以上加密，并且配备后缀

31.搭建登录模块，准备开发banner管理页面

32.已经实现 添加数据  读取数据  删除数据 

33.banner部分已经完成，整合文件目录，拆分路由模块

34.添加custom页面逻辑  实现上传图片，添加评论

35. 用户评论已经完成，增删改查  上传图片，冗余代码~