import { Component, OnInit } from '@angular/core';
import { Article } from '../models';
import { Provider } from '../models';
import { Users } from '../services/users'; 
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.css'] // corrigé ici
})
export class Home implements OnInit {
  providers: Provider[] = [
    { id: 1, name: 'Samsung', address: 'Korea', email: 'samsung@gmail.com' },
    { id: 2, name: 'Apple', address: 'USA', email: 'apple@gmail.com' },
    { id: 3, name: 'Xiaomi', address: 'China', email: 'xiaomi@gmail.com' }
  ];

   listUsers= new BehaviorSubject<any | null>(null);;

  constructor(private userService:Users){ // injection de la dépendance:le service Users
   //console.log("constructor...")
  }
  ngOnInit(): void {
    //console.log("ngOnInit ...")
    this.userService.getUsers().subscribe({
      next: (data:any) => {
        console.log(data)
        this.listUsers.next(data);

      },
      error: (err) => {
        console.error('Erreur récupération users', err);

      }
    });
  }}