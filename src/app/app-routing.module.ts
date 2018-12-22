import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RicercaComponent } from './ricerca/ricerca.component';

const routes: Routes = [
  { path: '', component: RicercaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
