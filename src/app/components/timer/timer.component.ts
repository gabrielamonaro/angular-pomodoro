import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { last } from 'rxjs';
import {TimerService} from '../../services/timer.service'

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
 @Input() time = '02:00';
 
  
  constructor(private timer: TimerService) {
  }

  ngOnInit(): void {
    this.play()
  }
  
  play(){
    let min = parseInt(this.time.slice(0,2));
    let sec = 60;
    let lastMinute = true;

    let minuteTimer = setInterval(() => {
      min>=0 ? min-- : {}
    },60000)
    
      min--;
      
    let secondsTimer = setInterval(() => {
        if(sec>0 && min>=0)
        { 
          sec--;
          this.showTime(min, sec);
        }
        else if(min == 0 && sec == 0 && lastMinute)
        {
          sec = 59;
          this.showTime(min, sec);
          lastMinute = false;
        }
        else{
          clearInterval(minuteTimer)
          clearInterval(secondsTimer)
        }
      }, 1000)     
  
      sec--;
      this.showTime(min, sec);
  }

  showTime = (min: number, sec: number) =>  this.time = this.timer.setFormat(min)+':'+ this.timer.setFormat(sec)

}
