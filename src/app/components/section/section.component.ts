import { Component, Input, OnInit } from '@angular/core';
import {TimerService } from '../../services/timer.service'
import sections_data from "../../../assets/data/sections_data.json"
@Component({

  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  visibility:boolean[] = [false,false,false,false];
  sections = sections_data;
  @Input() focuseTime =''
  @Input() id_option =''
 
  constructor(private timer:TimerService) { }

  ngOnInit(): void {
    
  }

  changeVisibility(id: number){
   if(this.visibility[id-1] == false)
    {
      this.visibility[id-1] = true;
     
    }
    else{
      this.visibility[id-1] = false;
    }
  }

  Clicou(p: any){
    
    console.log(p.value)
    console.log(p.id_group)
    // const functionName = "set" + (p.id_group)
    // console.log(functionName)
    this.id_option = (p.name)
    this.timer.setFocuseTime(p.value)
    console.log (this.timer.getFocuseTime())
    this.changeVisibility(1);
  
  }

}
