import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  // progressCircle = document.querySelector('#progress');
  // radius:number = this.progressCircle.r.baseVal.value;

  // circunferencia = this.radius * 2 * Math.PI;
  // this.progressCircle.style.strokeDashoffset = this.circunferencia;

  // setProgress(50)
  // function setProgress(percent:number)
  // {
  //     this.progressCircle.style.strokeDashoffset = this.circunferencia - (percent/100) * this.circunferencia;
  // }
}
