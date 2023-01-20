import { Component, Input, OnInit } from '@angular/core';
import {CircularLineService} from '../../services/circular-line.service'
import {TimerService} from '../../services/timer.service'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() ativo:string = 'clock'
  constructor(private line: CircularLineService, private timer:TimerService) { }

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

  cancel()
  {
    this.timer.firstPlay = true;
    this.line.setLine(0)
  }

 

}
