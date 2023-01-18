import { Component, Input, OnInit } from '@angular/core';
import { first, last, timeout } from 'rxjs';
import {TimerService} from '../../services/timer.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 @Input() intervalName:string = 'Focuse Time'
 @Input() time = this.timer.time
  constructor(private timer: TimerService) { }

  ngOnInit(): void {
  }

  firstPlay = true
  playing = true

  play(){
   
    const type = this.timer.changeButton()
    if (type == 'play')
    {
      this.playing = false
      return
    }
    else{
      this.playing = true
    }
    let min = parseInt(this.time.slice(0,2))
    let sec = parseInt(this.time.slice(3,5))    

    if(min == 0 && sec == 0)
    {
      this.time = this.timer.config[0]
      this.timer.changeButton()
      return
    }
    let lastMinute = true
    if (sec == 0)
    {
      sec = 60;
      min --;
    }

    if(this.firstPlay)
    {
      this.timerSet(sec, min, lastMinute)
      this.firstPlay = false
    }
    
    
  }

  timerSet(sec: number, min: number, lastMinute:boolean)
  {
    let secondsTimer = setInterval(() => {
      if(sec>0 && min>=0 && this.playing)
      { 
        sec--;
        this.showTime(min, sec)
      }
      else if(sec == 0 && min != 0 && lastMinute && this.playing)
      {
        min--
        sec = 59
        this.showTime(min, sec)
        min == 0 ? lastMinute = false : {}
      }
      else{
        if (this.playing)
        {
          clearInterval(secondsTimer)
          this.timer.timeout()
          this.timer.changeButton()
          this.firstPlay = true
        }
      }
    }, 1000)     
      sec--
      this.showTime(min, sec)
  }

  showTime = (min: number, sec: number) =>  this.time = this.timer.setFormat(min)+':'+ this.timer.setFormat(sec)


}
