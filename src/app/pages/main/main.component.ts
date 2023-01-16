import { Component, Input, OnInit } from '@angular/core';
import {TimerService} from '../../services/timer.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 @Input() intervalName:string = 'Focuse Time'
  constructor(private timer: TimerService) { }

  ngOnInit(): void {
  }



}
