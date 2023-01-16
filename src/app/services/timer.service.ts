import { Injectable } from '@angular/core';
import { Input } from '@angular/core';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})  


export class TimerService {
 
  time = '30:00'
  config = ['25:00','05:00','15:00','4']
  //focuseTime, shortBreak, longBreak,sections 

  setValues(newTime: string, id: number)
  {
    this.config[id-1] = newTime;
    this.time = newTime;
  }



  constructor() { 
  }
  setFormat = (num: any) => num >= 0 && num < 10 ? '0' + num.toString() :  num

 
}

