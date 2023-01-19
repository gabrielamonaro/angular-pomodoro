import { Component, Input, OnInit } from '@angular/core';
import {TimerService } from '../../services/timer.service'
import sections_data from "../../../assets/data/sections_data.json"
import {SequencesManagerService} from '../../services/sequences-manager.service'
@Component({

  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  visibility:boolean[] = [false,false,false,false];
  sections = sections_data;
  @Input() id_option: string[] = this.timer.config
 
  constructor(
    private timer:TimerService,
    private sequencia:SequencesManagerService
    ) { }

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

  Clicou(element: any, p: any){
    element.id != 3 ? this.id_option[0] = (p.value) : this.timer.sequencesMaker(p.value)
    this.timer.setValues(p.value, element.id)
    this.changeVisibility(element.id);
    this.timer.firstPlay = true;
  }


}
