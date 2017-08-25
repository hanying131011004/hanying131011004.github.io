//banner
{
	const bannerlist = document.querySelectorAll('.imgbox ul li');
	const dolls = document.querySelectorAll('.dolls div');
	var banner = document.querySelector('.banner');
	console.log(banner);

	// console.log(bannerlist);
	// console.log(dolls);
	var colors = ['#E8E8E8','#FE7295','#E8E8E8','#E8E8E8','#84CEF1']
	dolls.forEach(function (ele,index) {
		ele.onmouseover = function () {
			for (var i = 0; i < dolls.length; i++) {
				bannerlist[i].classList.remove('active');
				dolls[i].classList.remove('active');
			}
			bannerlist[index].classList.add('active');
			dolls[index].classList.add('active');
			banner.style.background = colors[index];
			num = index;
		}
	});
	let num = 0;
	let move = function () {
		num++;
		if (num == dolls.length) {
			num = 0;
		}
		for (var i = 0; i < dolls.length; i++) {
			dolls[i].classList.remove('active');
			bannerlist[i].classList.remove('active');
		}
		bannerlist[num].classList.add('active');
		dolls[num].classList.add('active');
		banner.style.background = colors[num];
	}
	let controltime = setInterval(move,3000);
	banner.onmouseover =function () {
		clearInterval(controltime);
	}		

	banner.onmouseout = function () {
		controltime = setInterval(move, 3000);
	}
}

//直播右
{
	const lis = document.querySelectorAll('.liveright ul li');
	const masks = document.querySelectorAll('.liveright ul li .mask');
	// console.log(lis);
	// console.log(masks);
	lis.forEach(function (ele,index) {
		ele.onmouseover = function () {
			masks[index].style.opacity = '1';
		}
		ele.onmouseout = function () {
			masks[index].style.opacity = '0';
		}
	})
}
// 直播左
{
	const imgscale = document.querySelectorAll('.lltop .bimg');
	const smimgs =document.querySelectorAll('.llcenter .smimg');
	const masks = document.querySelectorAll('.llcenter .smimg .mask');
	console.log(imgscale);
	console.log(smimgs);
	console.log(masks);
	smimgs.forEach(function (ele,index) {
		for (var i = 0; i < smimgs.length; i++) {
			imgscale[index].style.zIndex = '0';
			masks[i].style.display = 'none';
		}
		ele.onmouseover = function () {
			masks[index].style.display = 'block';
			imgscale[index].style.zIndex = '1';
		}
		ele.onmouseout = function () {
			masks[index].style.display = 'none';
			imgscale[index].style.zIndex = '0';
		}
	});

	const livelist = document.querySelector('.livelist');
	const ul = document.querySelector('.livelist ul');
	let num = 0;
	function move () {
		num++;
		ul.style.marginTop = `${-num * 40}px`;
		ul.style.transition = 'all 1s';
	}
	let st = setInterval(move,2000);
	ul.addEventListener('transitionend',function () {
		if (num == 2) {
			ul.style.transition = 'none';
			ul.style.marginTop = '0';
			num = 0;
		}
	})
}	


// 美丽人生
{
	const tr = document.querySelector('.moveadd');
	const ul = document.querySelector('.moveadd ul');
	ul.style.marginTop = '0px';
	let num = 0;
	function move () {
		num++;
		if (num == 1) {
			ul.style.transition = 'all 1s';
		}
		ul.style.marginTop = `${-num * 30}px`;
		ul.style.transition = 'all 1s';
	}
	let set = setInterval(move,2000);
	ul.addEventListener('transitionend',function () {
		if (num == 3) {
			ul.style.marginTop = '0';
			ul.style.transition = 'none';
			num =0;
		}
	})
}

// 顶部
{
	const yincang = document.querySelector('.search');
	const sidenav = document.querySelector('.sidenav');
	// console.log(yincang);
	window.onscroll = function () {
		var judge = document.body.scrollTop == 0?document.documentElement:document.body;
		if (judge.scrollTop > 800) {
			yincang.style.top = '0';
			yincang.style.transition = 'all 1s';
		}else{
			yincang.style.top = '-50px';
		}
		if (judge.scrollTop > 1000) {
			sidenav.style.left = '3px';
			sidenav.style.transform = 'scale(1)';
			sidenav.style.transition = 'all 0.6s';
		}else{
			sidenav.style.left = '-39px';
			sidenav.style.transform = 'scale(0.2,0.5)';
			sidenav.style.transition = 'all 0.6s';
		}
	}
}

// 侧栏导航
{
	const anniu = document.querySelectorAll('.sidenav ul li'); 
	console.log(anniu);
	const floors = document.querySelectorAll('main .maincenter .section3');
	console.log(floors);
	var colorarr = ['#ea5f8d','#0aa6e8','#64c333','#f15453','#19c8a9','#f7a945','#FF0036'];
	let obj;
	window.addEventListener('scroll',function () {
		obj = document.body.scrollTop == 0?document.documentElement:document.body;
		let st = obj.scrollTop;
		anniu.forEach(function (ele,index) {
			ele.onclick = function () {
				for(var i = 1 ; i < anniu.length; i++) {
					anniu[i].style.background = '';
				}
				anniu[index].style.background = colorarr[index];	
				animate(obj,{scrollTop:floors[index-1].offsetTop},1000);
			}
		});
	})
}
