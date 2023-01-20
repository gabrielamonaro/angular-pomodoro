import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import {SequencesManagerService} from '../../services/sequences-manager.service'
import { count } from 'rxjs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, AfterViewChecked {
  constructor(
    private timer: TimerService,
    private sequences: SequencesManagerService
    ) { }
  ngAfterViewChecked(): void { }

  ngOnInit(): void { }

  @Input() pomodoroItem = 1;    //contador de intervalo
  @Input() intervalName: string = this.timer.intervalName[0] //nome do intervalo atual
  @Input() time = this.timer.time //tempo atual
  counter:number = 0  // contador do nome do intervalo
  lastPeriod:boolean = false  //flag se é último intervalo
  firstPlay:boolean = true
  total:number = 0

   go() {
    this.pomodoroItem == (parseInt(this.timer.config[3])*2)-1 ? this.lastPeriod = true : {} //verificando se é último intervalo
    const type = this.timer.changeButton()  // recebendo valor do botão - se é play ou pause
    this.timer.verifyButton(type) ? { return: {} } : {}//verificando botao e alterando flag playing (se botao = play é false - isso pq para clicar no play, o tempo deve estar parado)
    let lastMinute = true //acionando flag lastMinute como verdadeiro
    let min = parseInt(this.time.slice(0, 2)) //captando minuto
    let sec = parseInt(this.time.slice(3, 5)) //captando segundos

    if (min == 0 && sec == 0) { //se o cronometro estiver zerado - seta o valor do próximo intervalo

      
      if(this.timer.pomodoro.length == this.pomodoroItem)
      {
        this.time = '00:00'
      }
      else{
        this.time = this.timer.pomodoro[this.pomodoroItem] 
        this.pomodoroItem++ //anda com o intervalo
      }
      
      this.timer.changeButton() //muda o botão para voltar a ter opção 'play' 
      this.intervalName = this.timer.intervalName[this.counter] //pega o nome do próximo intervalo e coloca na tela
      
      return;
    }

    this.intervalName = this.timer.intervalName[this.counter] //colocando nome do intervalo na tela
    if(this.firstPlay)
    {
      this.pomodoroItem%2 != 0 ? this.sequences.currentCircle(): {} //
      this.firstPlay = false;
    }

    if (sec == 0) {
      sec = 60;
      min--;
    }

    if (this.timer.firstPlay) {
      this.setTotal(sec, min)
      this.timerSet(sec, min, lastMinute);
      this.timer.firstPlay = false;
    }
  }

  timerSet(sec: number, min: number, lastMinute: boolean) {
    let secondsTimer = setInterval(() => {
      if (sec > 0 && min >= 0 && this.timer.playing) {
        this.funcao(this.getPercentage(sec, min))
        sec--;
        
        this.showTime(min, sec);
      } else if (sec == 0 && min != 0 && lastMinute && this.timer.playing) {
        [min, sec] = this.timer.setNewMinute(min, sec, lastMinute);
        this.funcao(this.getPercentage(sec, min))
        this.showTime(min, sec);
      } else {
        if (this.timer.playing) {
          this.funcao(this.getPercentage(sec, min))
          clearInterval(secondsTimer);
          this.timer.finished();
          this.pomodoroItem%2 != 0? this.sequences.nextCircle() :{}
          this.lastPeriod? this.counter = 0 : this.counter++
          this.firstPlay = true;
        }


      }
    }, 1000);
    sec--;
    this.showTime(min, sec);
  }

  showTime = (min: number, sec: number) =>
    (this.time = this.timer.setFormat(min) + ':' + this.timer.setFormat(sec));


    funcao(percentage: number)
  {
    const progressCircle = document.querySelector('#progress')
    let radius = progressCircle?.getAttribute('r')
    let circunferencia
    if(radius)
    {
      circunferencia = parseInt(radius) * 2 * Math.PI
    }
    this.setProgress(progressCircle, 100-percentage, circunferencia)
  }
  
  setProgress(progressCircle: any, percent: number, circunferencia: any )
  {
      if(progressCircle)
      {
        progressCircle.style.strokeDashoffset = circunferencia - (percent/100) * circunferencia;
      }
  }
  
  setTotal(sec: number, min: number)
  {
    this.total = sec + 60*min
  }
  getPercentage(sec: number, min: number)
  {
      const atual = sec + 60*min
      return (atual*100)/this.total
  }
}


