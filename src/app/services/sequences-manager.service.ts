import { InvokeFunctionExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SequencesManagerService {
  
  constructor() { }

  pomodoroItem:number = 1;
  first:boolean = true;
  

  currentCircle(){
    if(this.pomodoroItem%2 != 0 )
    {
    console.log(this.pomodoroItem)
    const primeiroCirculo = document.querySelectorAll('.next')[0];
    primeiroCirculo.classList.remove('next')
    primeiroCirculo.classList.add('current')
    }
  }


  nextCircle()
  { 
    if(this.pomodoroItem%2 != 0)
    { 
      const primeiroCirculo = document.querySelectorAll('.current')[0];
      primeiroCirculo.classList.add('previous')
      primeiroCirculo.classList.remove('current')
    }
    

  }
  
  
  
}
