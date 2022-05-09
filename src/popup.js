'use strict';

export default class PopUp{//export default: 클래스 바깥으로 노출시키기--다른 js에서 import PopUp from "./popup.js";
    constructor(){
        this.popUp=document.querySelector('.pop-up');
        this.popUpText=document.querySelector('.pop-up__message');
        this.popUpRefresh=document.querySelector('.pop-up__refresh');
        this.popUpRefresh.addEventListener('click', ()=>{
            this.onClick && this.onClick();
            this.hide();
        });
    }

    setClickListener(onClick){
        this.onClick = onClick;
    }

    showWithText(text){
        this.popUpText.innerText=text;
        this.popUp.classList.remove('pop-up--hide');
    }

    hide(){
        this.popUp.classList.add('pop-up--hide');
    }
};