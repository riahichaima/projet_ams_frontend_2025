import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProviderService } from '../services/provider-service';
@Component({
  selector: 'app-liste-providers',
  standalone: false,
  templateUrl: './liste-providers.html',
  styleUrl: './liste-providers.css'
})
export class ListeProviders implements OnInit {
  listProviders= new BehaviorSubject<any | null>(null);;
     
  
    constructor(private providerService: ProviderService){ // injection de la dépendance:le service Users
     //console.log("constructor...")
    }
  ngOnInit(): void {
    //console.log("ngOnInit ...")
    this.providerService.getProviders().subscribe({
      next: (data:any) => {
        console.log(data)
        this.listProviders.next(data);

      },
      error: (err) => {
        console.error('Erreur récupération Providers', err);

      }
    });
  }}

  
