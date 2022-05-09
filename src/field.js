'use strict';
import * as sound from './sound.js';//sound라는 이름으로 다 import한다

const CARROT_SIZE=80;

export const ItemType = Object.freeze({
    carrot: 'carrot',
    bug: 'bug',
});

export class Field{
    constructor(carrotCount, bugCount){
        this.carrotCount=carrotCount;
        this.bugCount=bugCount;
        this.field=document.querySelector('.game__field');
        this.fieldRect=this.field.getBoundingClientRect();
        this.field.addEventListener('click',this.onClick);
    }

    init(){
        this.field.innerHTML='';//reset됨
        this._addItem('carrot', this.carrotCount, './img/carrot.png');
        this._addItem('bug', this.bugCount, './img/bug.png');
    }

    setClickListener(onItemClick){
        this.onItemClick=onItemClick;
    }

    _addItem(className, count, imgPath){
        const x1=0;
        const y1=0;
        const x2=this.fieldRect.width - CARROT_SIZE;//맨끝 모서리에는 carrot_size만큼 삐져나올수있기때문에
        const y2=this.fieldRect.height - CARROT_SIZE;
        for(let i=0; i<count; i++){
            const item=document.createElement('img');
            item.setAttribute('class',className);
            item.setAttribute('src', imgPath);
            item.style.position='absolute';
            const x= randomNumber(x1, x2);
            const y=randomNumber(y1, y2);
            item.style.left=`${x}px`;
            item.style.top=`${y}px`;
            this.field.appendChild(item);
    
    
        }
    }

    onClick = event => {
        const target=event.target;
        // console.log(target);

        if(target.matches('.carrot')){
            //당근!
            target.remove();
            sound.playCarrot();
            this.onItemClick && this.onItemClick(ItemType.carrot);
        }else if(target.matches('.bug')){
            //벌레!
            this.onItemClick && this.onItemClick(ItemType.bug);
        }
    }
}

function randomNumber(min, max){
    return Math.random() * (max-min)+ min;
}

