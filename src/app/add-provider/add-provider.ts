import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-provider',
  standalone: false,
  templateUrl: './add-provider.html',
  styleUrl: './add-provider.css'
})
export class AddProvider implements OnInit {
  constructor(private providerService: ProviderService , private router:Router){ // injection de la dépendance:le service Users
       //console.log("constructor...")
      }
 
  saveProvider(provider: any) {
   /*alert("Provider saved successfully!");
   console.log("Provider saved successfully!", provider);
   alert(`Provider Name: ${provider.name}, Email: ${provider.email}, Address: ${provider.address}`);*/
   this.providerService.addProvider(provider).subscribe(
    data => //console.log(data),
   this.router.navigate(['/providers']),
    err => console.error('Erreur lors de l\'ajout du provider', err)
     
   )
  }
 ngOnInit(): void {
    // Initialization logic here
  }

}/* ngModel directif pour les formulaires hwa ili baathklna les inputs les val lil provider */

