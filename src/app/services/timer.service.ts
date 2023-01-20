import {Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})  

export class TimerService {

  constructor() { 
  }

  pomodoro:string[] = ['25:00','00:05','25:00'] 
  config = ['25:00','05:00','15:00','2']
  time = this.pomodoro[0]
  intervalName: string[] = ["Focuse Time", "Short Break", "Focuse Time"]
  intervalsAux :string[] = ['25:00','05:00','15:00','2']
  sections:string = '2';
  firstPlay = true
  playing = true

  
  setValues()
  {
    this.config = this.intervalsAux
    this.time = this.intervalsAux[0]
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

  sequencesMaker(value: number)
  {
    this.pomodoro = []
    let shortBreakCounter = 0;
    this.intervalName = []
    for(let i=0; i<value; i++)
    {
      this.pomodoro.push(this.config[0])
      this.intervalName.push('Focuse Time')
      if(shortBreakCounter == 3 && i != value-1)
      {
        this.pomodoro.push(this.config[2])
        this.intervalName.push('Long Break')

        shortBreakCounter = 0
      }
      else{
        i != value-1?this.pomodoro.push(this.config[1]):{}
        this.intervalName.push('Short Break')
        shortBreakCounter++
      }      
    }
  }

  
}




