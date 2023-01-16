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
 @Input() time = '';
 
  constructor(private timer: TimerService) {
  }

  ngOnInit(): void {
  }
  

}
