import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RicercaComponent } from './ricerca/ricerca.component';
import { LibrodetailComponent } from './librodetail/librodetail.component';

const routes: Routes = [
  { path: '', redirectTo: 'ricerca', pathMatch: 'full'},
  { path: 'ricerca', component: RicercaComponent},
  { path: 'detail/:n', component: LibrodetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
