import { Injectable } from '@angular/core';
import { Input } from '@angular/core';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})  


export class TimerService {
 
  time = '01:00'
  config = ['25:00','05:00','15:00','4']
  
  //focuseTime, shortBreak, longBreak,sections 

  setValues(newTime: string, id: number)
  {
    console.log(this.config[id])
    this.config[id] = newTime;
    if( id!=3)
    {
      this.time = newTime;
    }
    
  }

  constructor() { 
  
  }
  setFormat = (num: any) => num >= 0 && num < 10 ? '0' + num.toString() :  num

  changeButton(){
    const botao = document.querySelector('#botao');
    
    if(botao?.getAttribute("type") == "play")
    {
      botao.setAttribute("type", "pause")
      botao?.classList.add('button-pause');
      botao?.classList.remove('button-play')
      return 'pause'
    }
    else{
      botao?.setAttribute("type", "play")
      botao?.classList.add('button-play');
      botao?.classList.remove('button-pause')
      return 'play'
   }  
  }

  timeout()
  {
    const audio = new Audio(document.querySelector('#time_out')?.attributes[1].value);
    audio.play();
  }


 
}


