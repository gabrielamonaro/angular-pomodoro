import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SequenceError } from 'rxjs';
import { MainComponent } from './pages/main/main.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
 
  {path: '', component: MainComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
