/**
 * Created by 零琰其 on 2017/6/25 0025.
 */
window.onload=function () {
    let box = document.querySelector('.box');
    let img = document.querySelectorAll('.pic li');
    let yuan = document.querySelectorAll('.cir li');
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');
    let t = setInterval(move, 2000);
    let now = 0;
    let flag = true;
    function move(dr='r') {
        if (flag) {
            flag = false;
            if (dr =='r') {
                now++;
                if (now ==img.length) {
                    now = 0;
                }
            } else if (dr =='l') {
                now--;
                if (now < 0) {
                    now = img.length - 1;
                }
            }
            for (let i = 0; i < img.length; i++) {
                img[i].classList.remove('active');
                yuan[i].classList.remove('active');
            }
            img[now].classList.add('active');
            yuan[now].classList.add('active');
            img[now].addEventListener('transitionend', function () {
                flag = true;
            })
        }
    }



    yuan.forEach(function (value, index) {
        value.onmouseover = function () {
            for (let i = 0; i < img.length; i++) {
                img[i].classList.remove('active');
                yuan[i].classList.remove('active');
            }
            this.classList.add('active');
            img[index].classList.add('active');
            now = index;
        }
    });
    box.onmouseover = function () {
        clearInterval(t);
    };
    box.onmouseout = function () {
        t = setInterval(move, 2000);
    };
    right.onclick = function () {
        t = setInterval(move, 2000);
    };
    left.onclick = function () {
        move('l');
    };
    window.onscroll=function () {
        let dingbu=document.querySelector('.dingbu');
        let zuogd=document.querySelector('.zuogud');
        console.log(zuogd);

        let ndzshd=document.querySelector('.ndzshd');
        let sObj=document.body.scrollTop==0?document.documentElement:document.body;
        let sTop=sObj.scrollTop;
        if(sTop>ndzshd.offsetTop){
            dingbu.style.display="block";
            zuogd.style.display="block";

        }
        if(sTop<=ndzshd.offsetTop){
            dingbu.style.display="none";
            zuogd.style.display="none";
        }
    }

};

