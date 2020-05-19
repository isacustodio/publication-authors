import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationComponent } from './publication/publication.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'publication', component: PublicationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
