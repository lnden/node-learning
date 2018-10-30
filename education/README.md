数据字典 --- 定数据字段

1.首页
	banner			banner_table
						ID			
						title 			varchar(32)
						description 	varchar(300)
						href			varchar(300)
						
	产品介绍		intro_table
						ID
						title 			varchar(32)
						description		varchar(300)
						href			varchar(300)

	用户评价		custom_evaluation_table
						ID
						title 			varchar(32)
						description 	varchar(200)
						src 			varchar(300)

2.技术				news_table
						ID
						title 			varchar(100)
						summary   		varchar(500)
						href  			varchar(300)
						icon_src 		varchar(300)
						big_pic 		varchar(300)
						content		 	text

3.关于我们			aboutus_table
						ID
						title			varchar(200)
						content			text
						pic-src   		varchar(300)
						href		 	varchar(300)


4.blog 				blog_table
						ID
						title 			varchar(100)
						pic_src			varchar(300)
						pic_big_src		varchar(300)
						summary   		varchar(500)
						content		 	text
						post_time		timestamp
						author			varchar(32)
						n_views			int

5.contact(联系)		contact_table
						ID
						street			varchar(50)
						phone			varchar(20)
						fax   			varchar(20)
						email		 	varchar(32)
						weibo			varchar(40)
						wechat			varchar(40)
						map				?

	地址+地图		
	发送联系消息	msg_table

						ID
						name			varchar(16)
						email			varchar(32)
						phone   		varchar(20)
						subject		 	text

admin_table
	ID
	username	varchar(32)
	password	int