import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() ativo:string = 'clock'
  constructor() { }

  ngOnInit(): void {
    if(this.ativo == 'clock')
    {
      document.querySelector('#clock')?.classList.add('menu-ativo');
      document.querySelector('#settings')?.classList.remove('menu-ativo');
    }
    else
    {
      document.querySelector('#settings')?.classList.add('menu-ativo');
      document.querySelector('#clock')?.classList.remove('menu-ativo');
    }
  }

 

}
