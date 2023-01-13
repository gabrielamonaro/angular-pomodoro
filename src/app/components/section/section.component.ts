import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() visibility:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeVisibility(){
   if(this.visibility == false)
    {
      this.visibility = true;
    }
    else{
      this.visibility = false;
    }
  }

}
