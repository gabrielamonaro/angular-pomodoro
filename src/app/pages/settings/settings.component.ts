import { Component, Input, OnInit } from '@angular/core';
import {TimerService} from '../../services/timer.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  @Input() focuseTime = '25:00'
  constructor(private timer: TimerService ) { }

  ngOnInit(): void {
  }
  save()
  {
    this.timer.sequencesMaker(parseInt(this.timer.config[3]))
    this.timer.setValues()
  }

}
