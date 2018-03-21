安装依赖：npm install
启动项目：npm run dev
打开项目：http://localhost:8080/dist/my_compontent.html

一 组件介绍
1  Minput
    props
    
       name              type                 描述
     1 validate          正则表达式                        该input需要验证的正则表达式，传入后
     2 isCheck           Number               声明了该变量后，当需要验证该input的数据时，对应该数字加一处理
     3 value             String               通过v-model绑定，可实时返回input的数据
     
    event
        name              描述
    1   on-blur			  @on-blur input失去焦点的时候触发
    1   on-change		  @on-change input内容改变的时候触发
    1   on-input		  @on-input input输入数据的时候触发



2  Mstar  评分组件
    props
       name              type                 描述
     1 imgUrl            数组                        	  【好评图片url，差评图片url】
     2 activeNum         Number               初始化好评分数




3  Mscroll   滚动组件
        name
    props
       name              	type                 描述
     1 scrollBottomOffset   Number               滚动到距离底部多久时触发on-scroll-bottom事件
     2 isCf           		Bollean              是否触发on-scroll-bottom事件
     
    event
        name              			描述											参数
    1   on-scroll-bottom		    @on-scroll-bottom 触发底部时触发				无
    2   on-scroll	  				@on-scroll 滚动触发							(position),type为json,对应left和top
    
    
4   Mhover   hover组件
        name
    props
       name              	type                 描述
     1 nodeName   			String               hover最外层的标签名称
     2 dir         			String               水平排列为horizontal，垂直为vertical
     
5   mangnify   放大镜组件   未完成
     
    
  	| 水果        | 价格    |  数量  |
    | --------   | -----:   | :----: |
    | 香蕉        | $1      |   5    |
    | 苹果        | $1      |   6    |
    | 草莓        | $1      |   7    |

   

   