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
    this.visibility[id-1] == false?  this.visibility[id-1] = true : this.visibility[id-1] = false;

  }

  Clicou(element: any, p: any){
    this.id_option[element.id] = (p.value)
    this.intervalAux(p.value, element.id)
    this.changeVisibility(element.id);
     }

  intervalAux(value: string, id:number)
  {
    this.timer.intervalsAux[id] = value;
  }



}
