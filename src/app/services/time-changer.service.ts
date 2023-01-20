import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeChangerService {

  constructor() { }

  updateSec(sec: number, min: number)
  {
    if (sec == 0) {
      sec = 60;
      min--;
    }
    return [sec,min]
  }

  setNewMinute(min: number, sec:number, lastMinute: boolean)
  {
    min--
    sec = 59
    min == 0 ? lastMinute = false : {}
    return [min, sec]
  }


}
