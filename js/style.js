
	var totPage = document.querySelector('.totPage')
	var pages = document.querySelectorAll('li[class*=totPage]')
	var wsh = window.outerHeight; 
	var wsw = window.outerWidth; 
	//console.log(wsh,wsw)
	$('body').css({height:wsh})
	
	$('li[class*=totPage]').each(function(i,ele){
		$(ele).css({height:wsh})
	})
	var onoff = true;
	var num=0;
	addWheel(document,fnup,fndown)
	function fnup(){//滚轮往上滑
		if(onoff){
			num++;
			if(num>=0){
				num=0
			}
			var target = num*wsh;
			color();
		    span[-num].className = 'active';
			move(totPage,'top',1000,target,'easeInStrong')
			onoff=!onoff;
			setTimeout(function(){
				onoff=!onoff;
			},1000)
		}
	}
	function fndown(){//滚轮往下滑
		if(onoff){
			num--;
			if(num<= -pages.length){
				num=-(pages.length-1)
			}
			var target = num*wsh;
			move(totPage,'top',1000,target,'easeInStrong');
			color();
			span[-num].className = 'active';
			onoff=!onoff;
			setTimeout(function(){
				onoff=!onoff;
			},1000)
		}
	}
	var box1 = document.getElementById('box1');
	//console.log(box1)
    var span = box1.getElementsByTagName('span');
    for(var i=0;i<span.length;i++){//通过点击圆点切换屏幕
		span[i].index = i;
		span[i].onclick = function(){
			color();
			this.className = 'active';
			num = -this.index;
			var target = num*wsh;
		    move(totPage,'top',1000,target,'linear');
		}
	}	
	function color(){
		for(var i=0;i<span.length;i++){
			span[i].className = 'blur';
		}
	}
	/*******************************************page1*****************************************************/
	$('.nav_right input').on('mouseenter',function(){
		this.style.background= 'deepskyblue';
	    this.style.border= '1px solid deepskyblue';
	})
	$('.nav_right input').on('mouseleave',function(){
		this.style.background= 'rgba(255,255,255,0)';
	    this.style.border= '1px solid #fff';
		
	})
	$('.totPage_1 input').eq(2).on('focus',function(){//密码框
		if(this.type == 'text'){
			this.value = ''
			this.type = 'password'
			this.style.color = '#000';
			this.style.background = '#fff'
		}
	})
	$('.totPage_1 input').eq(2).on('blur',function(){//密码框
		if(this.value == ''){
			this.value = '密码'
			this.type = 'text'
			
		}
			console.log(this.value)
			var test =  /.{6,16}/.test(this.value);
			if(!test){
				$('.test span').eq(1).fadeIn(1000)
			}else{
			$('.test span').eq(1).fadeOut(1000);
		}
		
		this.style.color = '#fff'
		this.style.background = ''
	})
	$('.totPage_1 input').eq(1).on('focus',function(){//账户名
		if(this.value == '邮箱或手机号'){
			this.value = '';
			this.style.color = '#000'
			this.style.background = '#fff'
		}
	})
	//console.log($('.totPage_1 input'))
	$('.totPage_1 input').eq(1).on('blur',function(){//账户名
		if(this.value == ''){
			this.value = '邮箱或手机号';
		}
		console.log(this.value)
		var test = /^[1][3-9]\d{9}/.test(this.value)
		if(!test){
			$('.test span').eq(0).fadeIn(1000);
		}else{
			$('.test span').eq(0).fadeOut(1000);
		}
		
		this.style.color = '#fff'
		this.style.background = ''
	})
	var stop = false;
	$('button').on('mouseenter',function(){
		stop = false;
		moveWhile()
	})
	
	function moveWhile(){//登录按钮中的递归
		if(stop){
			return;
		}
		$('button i')[0].className = 'hover';
		setTimeout(function(){
			$('button i')[0].className = 'back';
			
		},1500)
		setTimeout(moveWhile,3000)
	}
	$('button').on('mouseleave',function(){
		stop = true;
	})	
	$('button').on('click',function(){
		
		if($('.totPage_1 input').eq(1).val()=='邮箱或手机号'){
			$('.totPage_1 input')[1].focus()
			$('.totPage_1 input').eq(1).val('')
			$('.totPage_1 input').eq(1).css({color:'#000',background:'#fff'})
		}else if($('.totPage_1 input').eq(1).val()!=''&&$('.totPage_1 input').eq(2).val()=='密码'){
			$('.totPage_1 input')[2].focus()
			$('.totPage_1 input').eq(2).val('')
			$('.totPage_1 input').eq(2).css({color:'#000',background:'#fff'})
		}
	})
/*****************************************page2*************************************************/
var nun=0;
var add ;
var addonoff = true;
$('.content_left').on('click',function(){
	if(addonoff){
		addonoff=false;
		nun--;
		if(nun<0){
			nun=0;
			return
		}
		console.log(nun)
		if(add>1){
			$('.timeline')[nun].style.transform = 'translateX(-100%)';
		}else{
			$('.timeline')[nun].style.transform = 'translateX(0)';
			
		}
		$('.timeline')[nun+1].style.transform = 'translateX(0)';
		add=nun
		
	}
	setTimeout(function(){
		addonoff = true;
	},1000)
})
$('.content_right').on('click',function(){
	if(addonoff){
		addonoff=false;
		nun++;
		if(nun>=10){
			nun=9
			return
		}
		if(add>=1){
			$('.timeline')[nun-1].style.transform = 'translateX(-200%)';
		}else{
			$('.timeline')[nun-1].style.transform = 'translateX(-100%)';
		}
		
		$('.timeline')[nun].style.transform = 'translateX(-100%)';
		add=nun
		
	}
	
	setTimeout(function(){
		addonoff = true;
	},1000)
})




/*********************************************page3******************************************/

setInterval(function(){
	var top = $('.box ul').position().top;
	$('.box ul').animate({top:'+=-60px'},500,'linear',function(){
		if(top<=-430){
			$('.box ul').css('top','-10px')
		}
	})
},1500)
/*********************************************page4************************************************/

$('.null').on('mouseenter',function(){
	this.children[0].className = 'chanel_txt chanel_active'

})
$('.null').on('mouseleave',function(){
	this.children[0].className = 'chanel_txt chanel_blur'
})








