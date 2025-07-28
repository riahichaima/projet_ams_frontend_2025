import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ListeProviders } from './liste-providers/liste-providers';

const routes: Routes = [
  { path: 'users', component: Home },
  { path: 'providers', component: ListeProviders }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
