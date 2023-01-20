import {Component, Input, OnInit } from '@angular/core';
import {TimerService} from '../../services/timer.service'

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
 @Input() time = '';
 
 progressCircle = document.querySelector('#progress');

  constructor(private timer: TimerService) {
  }

  ngOnInit(): void {
    
  }
  
  

}
