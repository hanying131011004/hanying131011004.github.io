let start=document.querySelector(".start");
let left=document.querySelector(".left");
let scor=document.querySelector("#scor");
let state=document.querySelector("#state");
let life=document.querySelector("#life");
let pause=document.querySelector(".pause");

class Game{
    constructor(left,scor,state,life){
        this.left=left;
        this.scor=scor;
        this.scornum=0;
        this.state=state;
        this.statenum=1;
        this.life=life;
        this.lifenum=5;
        this.num=3;
        this.obj={};
        this.flag=true;
        this.speed=5;
        this.st=null;
        this.height=window.innerHeight;
    }
    //在原型身上添加的方法
    start(){
        for(var i=0;i<this.num;i++){
            this._creatLetter();
        }
        this._move();
        this._keydown();
    }
    _creatLetter(){
        let newdiv=document.createElement("div");
        //newdiv.className="letter";

        //判断字母重复
        do {
            let randomNum = Math.floor(Math.random() * 26 + 65);
            var randomLetter = String.fromCharCode(randomNum);
        }while(this.obj[randomLetter]);//判断是否有randomletter这个字母
        //
        newdiv.style.cssText=`
            width: 80px;
            height: 80px;
            text-align: center;
            line-height: 80px;
            font-size: 0;
            font-weight: bold;
            color: #6CCAB8;
            border-radius: 10px;
            position: absolute;
            background:url(img/${randomLetter}.png) ;
            background-size:contain;
        `;
        //判断位置重复，重复再循环
        do {
            var randomLeft = Math.random() * 720;
        }while (this._checkLetter(randomLeft));

        //保存，添加属性，以对象形式保存randomLetter对应的值
        this.obj[randomLetter]={left:randomLeft,ele:newdiv};

        newdiv.style.left=randomLeft+"px";

        let randomTop=-Math.random()*300;
        newdiv.style.top=randomTop+"px";

        newdiv.innerHTML=randomLetter;

        this.left.appendChild(newdiv);
    }
    _checkLetter(left){
        for(let i in this.obj){
            if(left>this.obj[i].left-80&&left<this.obj[i].left+80){
                return true;
            }
        }
    }

    _move(){
        this.st=setInterval(function () {
            for(let i in this.obj){
                let top=this.obj[i].ele.offsetTop;
                top+=this.speed;
                this.obj[i].ele.style.top=top+"px";
                if(top>this.height){
                    this.lifenum--;
                    this.life.innerHTML=this.lifenum;
                    this.left.removeChild(this.obj[i].ele);//从页面清空
                    delete this.obj[i];//删除添加的属性
                    this._creatLetter();
                    if(this.lifenum==0){
                        this._gameover();
                    }
                }
            }
        }.bind(this),60);//bind方法改变this的指向
    }

    _keydown(){
        this.keydownHandler=function (e) {
            let kc=e.keyCode;
            let letter=String.fromCharCode(kc);
            if(this.obj[letter]){
                this.left.removeChild(this.obj[letter].ele);
                delete this.obj[letter];
                this._creatLetter();
                this.scornum++;
                this.scor.innerHTML=this.scornum;
                if(this.scornum%10===0){
                    this._upstate();
                }
            }
        }.bind(this);
        document.addEventListener("keydown",this.keydownHandler);
//            document.onkeydown=function (e) {
//                let kc=e.keyCode;
//                let letter=String.fromCharCode(kc);
//                if(this.obj[letter]){
//                    this.left.removeChild(this.obj[letter].ele);
//                    delete this.obj[letter];
//                    this._creatLetter();
//                    this.scornum++;
//                    this.scor.innerHTML=this.scornum;
//                    if(this.scornum%10===0){
//                        this._upstate();
//                    }
//                }
//            }.bind(this);
    };

    _upstate(){
        this.statenum++;
        this.state.innerHTML=this.statenum;
        if(this.statenum<3){
            this._creatLetter();
        }else {
            this.speed++;
        }
    }

    _gameover(){
        alert(`游戏结束，得分${this.scornum}`);
        this.left.innerHTML="";
        this.obj={};
        this.scornum=0;
        this.scor.innerHTML=0;
        this.statenum=1;
        this.state.innerHTML=1;
        this.lifenum=5;
        this.life.innerHTML=5;
        clearInterval(this.st);
        this.flag=true;
    }
    pause(){
        clearInterval(this.st);
        document.removeEventListener("keydown",this.keydownHandler);
    }
    run(){
        this._move();
        document.addEventListener("keydown",this.keydownHandler);
    }
}
let game=new Game(left,scor,state,life);
start.onclick=function () {
    if(game.flag){
        game.flag=false;
        game.start();
//           this.style.color="#ccc";
    }
}
let flag=true;
pause.onclick=function () {
    if(flag){
        game.pause();
        this.value="继续";

    }else {
        game.run();
        this.value="暂停";
    }
    flag=!flag;
}
