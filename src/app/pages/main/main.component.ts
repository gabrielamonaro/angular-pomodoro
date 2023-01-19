import { Component, Input, OnInit } from '@angular/core';
import {TimerService} from '../../services/timer.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 @Input() intervalName:string = 'Focuse Time'
 @Input() time = this.timer.time
  constructor(private timer: TimerService) { 
    
  }

  ngOnInit(): void {
  
    
  }

  play(){
    const type = this.timer.changeButton()
    this.timer.verifyButton(type)? {return: {}} : {}
    let lastMinute = true
    let min = parseInt(this.time.slice(0,2))
    let sec = parseInt(this.time.slice(3,5))    

    if(min == 0 && sec == 0)
    {
      this.time = this.timer.config[0]
      this.timer.changeButton()
      return
    }
    
    if (sec == 0)
    {
      sec = 60;
      min --;
    }

    if(this.timer.firstPlay)
    {
      this.timerSet(sec, min, lastMinute)
      this.timer.firstPlay = false
    }
  }

    timerSet(sec: number, min: number, lastMinute:boolean)
  {
    let secondsTimer = setInterval(() => {
      if(sec>0 && min>=0 && this.timer.playing)
      { 
        sec--;
        this.showTime(min, sec)
      }
      else if(sec == 0 && min != 0 && lastMinute && this.timer.playing)
      {
        [min, sec] = this.timer.setNewMinute(min, sec, lastMinute)
        this.showTime(min, sec)
      }
      else{
        if (this.timer.playing)
        {
          clearInterval(secondsTimer)
          this.timer.finished()
        }
      }
    }, 1000)     
      sec--
      this.showTime(min, sec)
  }


  showTime = (min: number, sec: number) =>  this.time = this.timer.setFormat(min)+':'+ this.timer.setFormat(sec)


  
}
