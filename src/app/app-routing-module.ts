import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ListeProviders } from './liste-providers/liste-providers';
import { AddProvider } from './add-provider/add-provider';
import { UpdateProvider } from './update-provider/update-provider';

const routes: Routes = [
  { path: 'users', component: Home },
  { path: 'providers', component: ListeProviders },
  { path: 'addProvider', component: AddProvider },
  { path: 'updateProvider/:id', component: UpdateProvider } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
