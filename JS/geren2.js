//myskill
let canvas1 = document.querySelector('#can1');
let canvas2 = document.querySelector('#can2');
let canvas3 = document.querySelector('#can3');
let canvas4 = document.querySelector('#can4');

function progress(canvas,persent,color) {
    let cobj = canvas.getContext('2d');
    let [width,height] = [canvas.width,canvas.height];
    let maxAngel = 360 * persent / 100;
    cobj.lineWidth = 10;
    cobj.strokeStyle = color;
    cobj.translate(width / 2, height / 2);
    let angle = 0;
    cobj.font = '20px  微软雅黑';
    cobj.textAlign = 'center';
    cobj.textBaseline = 'middle';
    function fn() {
        angle++;
        cobj.clearRect(-width/2,-height/2,width,height);
        cobj.beginPath();
        cobj.arc(0,0,width * 0.4,-Math.PI/2,angle*Math.PI/180-Math.PI/2);
        cobj.fillText(Math.round(angle / 360 * 100)  + '%',0,0);
        cobj.stroke();
        if (angle > maxAngel){
            return;
        };
        requestAnimationFrame(fn);
    };
    fn();
}
let obj;
let flag111=true;
window.addEventListener("scroll",function () {
    obj = document.body.scrollTop == 0?document.documentElement:document.body;
    let st = obj.scrollTop;
    if (st> 950&&flag111){
        flag111=false;
        progress(canvas1,90,'yellowgreen');
        progress(canvas2,85,'yellow');
        progress(canvas3,85,'cyan');
        progress(canvas4,80,'greenyellow');
    }
});
