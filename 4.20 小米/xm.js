//banner
{
	const bannerbox = document.querySelector('.bannerimg');
	const ul = document.querySelector('.bannerimg ul');
	const prev = document.querySelector('.prev');
	const next = document.querySelector('.next');
	let num = 1;
	ul.style.marginLeft = '-1226px';
	function move () {
		num++;
		if (num == 8) {
			num =1;
		}
		if (num == 0) {
			num = 7;
		}
		ul.style.marginLeft = -num * 1226 + 'px';
	};
	let set = setInterval(move,3000);
	bannerbox.onmouseover = function () {
		clearInterval(set);
	}
	bannerbox.onmouseout = function () {
		set = setInterval(move,3000);
	};

	prev.onclick = function () {
		num-=2;
		move();
	};

	next.onclick = function () {
		move();
	}
}


//小米明星单品
{
	const danpinbox = document.querySelector('.danpintupian');
	const ul = document.querySelector('.danpintupian ul');
	let num = 0;
	function move () {
		num++;
		if(num == 2) {
			num =0;
		}
		ul.style.marginLeft = -num * 1240 + 'px';
		ul.style.transition = 'all 0.8s';
	}
	let st = setInterval(move,5000);
	ul.onmouseover = function () {
		clearInterval(st);
	}
	ul.onmouseout = function () {
		st = setInterval(move,5000);
	}
}


// 内容
{
	const uls = document.querySelectorAll('.box');
	uls.forEach(function (ele) {
		m(ele);
	})
	function m (uls) {
		const prev = uls.querySelector('.qian');
		const lis = uls.querySelector('.box ul');
		const dots = uls.querySelectorAll('.dolls div');
		console.log(dots);

		const next = uls.querySelector('.hou');
		// console.log(prev,next);
		let num = 0;
		dots[num].style.background = 'red';
		next.onclick = function () {
			if (num == 3) {
				return;
			}
			dots.forEach(function (ele,index) {
				ele.style.background = '#b0b0b0';
			});
			num++;
			dots[num].style.background = 'red';
			lis.style.left = -num * 296 + 'px';
		};
		prev.onclick = function () {
			if (num == 0) {
				return;
			};
			dots.forEach(function (ele,index) {
				ele.style.background = '#b0b0b0';
			});
			num--;
			dots[num].style.background = 'red';
			lis.style.left = - num * 296 + 'px';
		
		};
		dots.forEach(function (ele,index) {
			ele.onclick = function () {
				dots.forEach(function (ele) {
					ele.style.background = '#b0b0b0';
				})
				dots[index].style.background = 'red';
				lis.style.left = -index *296+'px';
			}
		})
	}

}