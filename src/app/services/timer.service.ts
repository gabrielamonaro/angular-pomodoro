import { Injectable } from '@angular/core';
import { Input } from '@angular/core';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TimerService {
  time = '30:00'
  focuseTime = ''
  shortBreak = ''
  longBreak = ''
  sections = ''

  setFocuseTime(newTime: string)
  {
    this.focuseTime = newTime;
    this.time = newTime;
  }

  getFocuseTime()
  {
    return this.focuseTime;
  }

  constructor() { 
  }
  setFormat = (num: any) => num >= 0 && num < 10 ? '0' + num.toString() :  num

}