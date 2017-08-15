## React 路由练习
### 技术总结:    
1. 路由的两种写法:        
            	
	`<Router><App /></Router>`    
	`<Router><Route path="/" component={组件}/></Router>`   
     
2. 	component里面即可以写组件，也可以接收一个函数,在这个函数中需要return一个组件。这个函数的参数中，有个match,他可以显示当前的路由是什么。
3. 	/:id就是 / + 路由地址，通过match.params.id可以很方便的找到当前的路由是什么。
4. exact:       
	path	location.pathname	exact	matches?
	/one	/one/two			true	no
	/one	/one/two			false	yes
        
5. strict:    
	path	location.pathname	matches?
	/one/	/one				no
	/one/	/one/				yes
	/one/	/one/two			yes