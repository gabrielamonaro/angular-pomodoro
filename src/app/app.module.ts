import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BtnComponent } from './components/btn/btn.component';
import { PlayButtonComponent } from './components/play-button/play-button.component';
import { PomodoroComponent } from './components/pomodoro/pomodoro.component';
import { TimerComponent } from './components/timer/timer.component';
import { MenuComponent } from './components/menu/menu.component';
import { SectionComponent } from './components/section/section.component';
import { CircleComponent } from './components/circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    SettingsComponent,
    BtnComponent,
    PlayButtonComponent,
    PomodoroComponent,
    TimerComponent,
    MenuComponent,
    SectionComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
