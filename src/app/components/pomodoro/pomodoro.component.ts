import { AfterContentChecked, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {TimerService} from '../../services/timer.service'
import {SequencesManagerService} from '../../services/sequences-manager.service'

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {
  constructor(
    private timer:TimerService, 
    private sequences:SequencesManagerService
  ) {

   }




 
//Pomodoro Sequence: 
// focuseTime ; ShortBreak; 
// focuseTime; ShortBreak; 
// focuseTime; ShortBreak; 
// focuseTime; longBreak

//each section will be: focuseTime + Break
//after 3 shortBreak, next will be longer

  @Input() dots:number[] = [10,3,60,85]
  @Input() pomodoro:string[] = this.timer.pomodoro;
  @Input() circlesPositions: number[]= [10,35,60,85,110,135,160,185]
  @Input() linesPositions: number[] = [15,40,65,90,115,140,165]

  @Input() widthBox:number = 0;

  @Input() newCircles:number[] = []
  @Input() newLines: number[] = []



  ngOnInit(): void {

     const  sections= parseInt(this.timer.config[3])
     if(sections >= 6)
     {
      this.widthBox = ((sections+9)*5) + (15*(sections)-1);
     }
     else{
      this.widthBox = ((sections+3)*5) + (15*(sections));
     }
    

    for(let i=0; i<parseInt(this.timer.config[3]); i++)
    {
        this.newCircles.push(this.circlesPositions[i])
    }
    for(let i=0; i<parseInt(this.timer.config[3])-1; i++)
    {
        this.newLines.push(this.linesPositions[i])
    }
  }

}
