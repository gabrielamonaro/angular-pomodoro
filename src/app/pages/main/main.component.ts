import { Component, Input, OnInit } from '@angular/core';
import { last, timeout } from 'rxjs';
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

  play(){
    
    
    const type = this.timer.changeButton();

    let min = parseInt(this.time.slice(0,2));
    let sec = 60;
    let lastMinute = true;
    
      min--;
      
    let secondsTimer = setInterval(() => {
        if(sec>0 && min>=0 )
        { 
          sec--;
          this.showTime(min, sec);
        }
        else if(sec == 0 && min != 0 && lastMinute)
        {
          min--;
          sec = 59;
          this.showTime(min, sec);
          if(min == 0)
          {
            lastMinute = false;
          }
        }
        // else if(min == 0 && sec == 0 && lastMinute)
        // {
        //   sec = 59;
        //   this.showTime(min, sec);
        //   lastMinute = false;
        // }
        else{
          // this.timer.timeout()
          clearInterval(secondsTimer)
          this.timer.timeout()
        }
      
        
      }, 1000)     

        sec--;
        this.showTime(min, sec);



     
  }

  showTime = (min: number, sec: number) =>  this.time = this.timer.setFormat(min)+':'+ this.timer.setFormat(sec)


}
