import { Component, Input, OnInit } from '@angular/core';
import {TimerService} from '../../services/timer.service'
import {CircularLineService} from '../../services/circular-line.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  @Input() focuseTime = '25:00'
  constructor(private timer: TimerService, private line: CircularLineService ) { }

  ngOnInit(): void {
  }
  save()
  {
    this.timer.sequencesMaker(parseInt(this.timer.config[3]))
    this.timer.setValues()
    this.timer.firstPlay = true;
    this.timer.sections = this.timer.config[3]
    this.line.setLine(0)
  }

  cancel()
  {
    this.timer.firstPlay = true;
    this.line.setLine(0)
  }
}
