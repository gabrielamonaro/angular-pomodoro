import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CircularLineService {

  constructor() { }

  setLine(percentage: number)
  {
    const progressCircle = document.querySelector('#progress')
    let radius = progressCircle?.getAttribute('r')
    let circumference
    if(radius)
    {
      circumference = parseInt(radius) * 2 * Math.PI
    }
    this.setProgress(progressCircle, 100-percentage, circumference)
  }
  
  setProgress(progressCircle: any, percent: number, circumference: any )
  {
      if(progressCircle)
      {
        progressCircle.style.strokeDashoffset = circumference - (percent/100) * circumference;
      }
  }

  setTotal(sec: number, min: number)
  {
    return sec + 60*min
  }
  getPercentage(sec: number, min: number, total: number)
  {
      const atual = sec + 60*min
      return ((atual*100)/total)
  }

}
