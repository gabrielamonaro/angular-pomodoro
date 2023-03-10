import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import {TimerService } from '../../services/timer.service';
import {SequencesManagerService} from '../../services/sequences-manager.service'
import {CircularLineService} from '../../services/circular-line.service'
import {TimeChangerService} from '../../services/time-changer.service'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(
    private timer: TimerService,
    private sequences: SequencesManagerService,
    private line:CircularLineService,
    private timeChanger: TimeChangerService
    ) { }
  ngOnDestroy(): void {

    this.line.setLine(100)
    const type = this.timer.changeButton()  
    this.timer.verifyButton(type) ? { return: {} } : {}
    clearInterval(this.secondsTimer);
  }

  ngOnInit(): void { }

  @Input() pomodoroItem = 1;    //contador de intervalo
  @Input() intervalName: string = this.timer.intervalName[0] //nome do intervalo atual
  @Input() time = this.timer.time //tempo atual
  counter:number = 0  // contador do nome do intervalo
  lastPeriod:boolean = false  //flag se é último intervalo
  firstPlay:boolean = true
  total:number = 0
  secondsTimer:any 

   go() {

    this.pomodoroItem == (parseInt(this.timer.config[3])*2)-1 ? this.lastPeriod = true : {} //verificando se é último intervalo
    const type = this.timer.changeButton()  // recebendo valor do botão - se é play ou pause
    this.timer.verifyButton(type) ? { return: {} } : {}//verificando botao e alterando flag playing (se botao = play é false - isso pq para clicar no play, o tempo deve estar parado)
    let lastMinute = true //acionando flag lastMinute como verdadeiro
    
    let min = parseInt(this.time.slice(0, 2))
    let sec = parseInt(this.time.slice(3, 5))

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
      this.showIntervalName() //pega o nome do próximo intervalo e coloca na tela
      return;
    }

    this.showIntervalName()

    if(this.firstPlay)
    {
      this.pomodoroItem%2 != 0 ? this.sequences.currentCircle(): {} //
      this.firstPlay = false;
    }

   [sec,min] = this.timeChanger.updateSec(sec, min)

    if (this.timer.firstPlay) {
      this.total = this.line.setTotal(sec, min)
      this.timerSet(sec, min, lastMinute);
      this.timer.firstPlay = false;
    }
  }

  timerSet(sec: number, min: number, lastMinute: boolean) {

  this.secondsTimer = setInterval(() => {

    

      if (sec > 0 && min >= 0 && this.timer.playing) {
        sec--;
        this.line.setLine(this.line.getPercentage(sec-1, min, this.total))
        this.showTime(min, sec);
      } else if (sec == 0 && min != 0 && lastMinute && this.timer.playing) {
        [min, sec] = this.timeChanger.setNewMinute(min, sec, lastMinute);
        this.line.setLine(this.line.getPercentage(sec-1, min, this.total))
        this.showTime(min, sec);
      }
      
      else {
        if (this.timer.playing) {
          this.line.setLine(100)
          clearInterval(this.secondsTimer);
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

  showIntervalName = () => this.intervalName = this.timer.intervalName[this.counter]
}


