import { Component, Input, OnInit } from '@angular/core';
import sections_data from "../../../assets/data/sections_data.json"
@Component({

  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() visibility:boolean[] = [false,false,false,false];
  sections = sections_data;
 
  constructor() { }

  ngOnInit(): void {
    
  }

  changeVisibility(id: number){
   if(this.visibility[id] == false)
    {
      this.visibility[id] = true;
    }
    else{
      this.visibility[id] = false;
    }
  }

}
