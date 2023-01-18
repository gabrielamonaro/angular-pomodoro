import { Injectable } from '@angular/core';
import { Input } from '@angular/core';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})  


export class TimerService {
 
  
  config = ['25:00','05:00','15:00','4']
  time = this.config[0]

  firstPlay = true
  playing = true
  
  //focuseTime, shortBreak, longBreak,sections 

  setValues(newTime: string, id: number)
  {
    console.log(this.config[id])
    this.config[id] = newTime;
    if( id!=3)
    {
      this.time = newTime;
    }
    console.log(this.config)
    
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

  setNewMinute(min: number, sec:number, lastMinute: boolean)
  {
    min--
    sec = 59
    min == 0 ? lastMinute = false : {}
    return [min, sec]
  }

  finished()
  {
    if (this.playing)
    {
      this.timeout()
      this.changeButton()
      this.firstPlay = true
    }
  }
 

  timeout()
  {
    const audio = new Audio(document.querySelector('#time_out')?.attributes[1].value);
    audio.play();
  }

  verifyButton(type:string) //main.ts no play()
  {
    if (type == 'play')
    {
      this.playing = false
      return true
    }
    else{
      this.playing = true
      return false
    }
  }

}


