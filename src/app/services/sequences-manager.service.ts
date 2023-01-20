import { InvokeFunctionExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SequencesManagerService {
  sections: string[]= ['Focuse Time', 'Short Break','Long Break']
  constructor() { }

  first:boolean = true;



  currentCircle(){
    const primeiroCirculo = document.querySelectorAll('.next')[0];
    primeiroCirculo.classList.remove('next')
    primeiroCirculo.classList.add('current')
  }


  nextCircle()
  { 
      const primeiroCirculo = document.querySelectorAll('.current')[0];
      primeiroCirculo.classList.add('previous')
      primeiroCirculo.classList.remove('current')
  }
  
  
  
}
