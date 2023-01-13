import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import sections_data from "../../../assets/data/sections_data.json"
@Component({

  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  visibility:boolean[] = [false,false,false,false];
  sections = sections_data;
 
  constructor() { }

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


}
