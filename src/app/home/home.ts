import { Component } from '@angular/core';
import { Article } from '../models';
import { Provider } from '../models';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  providers:Provider[] = [
    {id: 1, name: 'samsung', address: 'kore', email:'samsung@gmail.com' },
    {id: 2, name: 'apple', address: 'usa', email:'apple@gmail.com' },
    {id: 3, name: 'xiaomi', address: 'china', email:'xiaomi@gmail.com' }
  ];

}
