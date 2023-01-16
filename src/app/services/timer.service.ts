import { Injectable } from '@angular/core';
import { Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { 
  }
  setFormat = (num: any) => num >= 0 && num < 10 ? '0' + num.toString() :  num

}