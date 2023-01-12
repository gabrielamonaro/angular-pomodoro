import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {
  @Input() dots:number[] = [10,3,60,85]

  constructor() { }

  ngOnInit(): void {
  }

  


}
