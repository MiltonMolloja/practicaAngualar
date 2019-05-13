import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { Punto01Component } from './components/punto01/punto01.component';
import { Punto02Component } from './components/punto02/punto02.component';
import { Punto03Component } from './components/punto03/punto03.component';
import { Punto04Component } from './components/punto04/punto04.component';
import { Punto05Component } from './components/punto05/punto05.component';


const routes: Routes = [
  {path: 'footer', component: FooterComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'punto01', component: Punto01Component},
  {path: 'punto02', component: Punto02Component},
  {path: 'punto03', component: Punto03Component},
  {path: 'punto04', component: Punto04Component},
  {path: 'punto05', component: Punto05Component},
  {path: '**', component: Punto01Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
