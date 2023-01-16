import { Component, Input, OnInit } from '@angular/core';
import {TimerService} from '../../services/timer.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 @Input() intervalName:string = 'Focuse Time'
 @Input() time = '25:00'
  constructor(private timer: TimerService) { }

  ngOnInit(): void {
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
