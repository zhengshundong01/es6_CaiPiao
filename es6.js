let和const命令
	let命令
		lei的用法类似与var，但是所声明的变量只有在let所在的代码块内才有效：
		{
			let a =10;
			var b=1;
		}
		a //此处会报错 a is not defined
		b //1
		
		for循环的计数器，很适合使用let命令
		for(let i = 0;i<10;i++){
			
		}
		console.log(i)//i is not defined
	不存在变量提升
		var命令会发生“变量提升”的现象，即变量可以在声明之前使用，值为undefined
		conselo.log(foo) //输出undefined
		var foo = 2;
		
		//let情况
		conselo.log(bar) //报错
		let bar = 2;
	暂时性死区
		let命令声明变量之前，该变量都是不可用的
		var tmp =123;
		if(true){
			tmp=111; //报错
			let tmp;
		}
		
		if(true){
			tmp='abc'; //报错
			conselo.log(tmp); //报错
			
			let tmp; //暂时性死区结束
			conselo.log(tmp); // undefined

			tmp=123;
			conselo.log(tmp); //123
			
			function bar(x=y,y=2){
				return[x,y];
			}
			bar();
			上面代码中，调用bar函数之所以报错，是因为参数x默认等于另一个参数y，但是此时参数y并没有声明，
			属于死区，所以报错。
			function bar(x=2,y=x){
				return[x,y]//[2,2]
			}
			这样就对了
			
			此外，下面代码也会报错：
			var x=x;
			let x=x;//报错
			
		不允许重复声明：
			function func(){ //报错
				let a =10;
				var a =1;
			}
			function func(){ //报错
				let a =10;
				let a =1;
			}
			
			因此不能再函数内部重新声明参数；
			function func(arg){ //报错
				let arg =10;
			}
			function func(arg){ //不报错
				{
					let arg =10;
				}
			}
		块级作用域
		es6的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号就会报错
			// 不报错
			'use strict';
			if (true) {
			  function f() {}
			}

			// 报错
			'use strict';
			if (true)
			  function f() {}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			}