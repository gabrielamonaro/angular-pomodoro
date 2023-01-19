import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import {SequencesManagerService} from '../../services/sequences-manager.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  constructor(
    private timer: TimerService,
    private sequences: SequencesManagerService
    ) {
  }

  ngOnInit(): void {}


  @Input() intervalName: string = 'Focuse Time';
  @Input() time = this.timer.time;
  @Input() pomodoroItem = this.sequences.pomodoroItem

  
   go() {
    const type = this.timer.changeButton();
    this.timer.verifyButton(type) ? { return: {} } : {};
    let lastMinute = true;
    let min = parseInt(this.time.slice(0, 2));
    let sec = parseInt(this.time.slice(3, 5));

    if (min == 0 && sec == 0) {
      this.timer.pomodoro.length != this.sequences.pomodoroItem? this.time = this.timer.pomodoro[this.sequences.pomodoroItem] : {}
      this.sequences.pomodoroItem++
      
      this.timer.changeButton();
      return;
    }

    this.pomodoroItem%2 != 0 ? this.sequences.currentCircle(): {}

    if (sec == 0) {
      sec = 60;
      min--;
    }

    if (this.timer.firstPlay) {
      this.timerSet(sec, min, lastMinute);
      this.timer.firstPlay = false;
    }
  }

  timerSet(sec: number, min: number, lastMinute: boolean) {
    let secondsTimer = setInterval(() => {
      if (sec > 0 && min >= 0 && this.timer.playing) {
        sec--;
        this.showTime(min, sec);
      } else if (sec == 0 && min != 0 && lastMinute && this.timer.playing) {
        [min, sec] = this.timer.setNewMinute(min, sec, lastMinute);
        this.showTime(min, sec);
      } else {
        if (this.timer.playing) {
          clearInterval(secondsTimer);
          this.timer.finished();
          this.sequences.nextCircle();

        }
      }
    }, 1000);
    sec--;
    this.showTime(min, sec);
  }

  showTime = (min: number, sec: number) =>
    (this.time = this.timer.setFormat(min) + ':' + this.timer.setFormat(sec));
}
