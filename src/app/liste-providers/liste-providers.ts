import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProviderService } from '../services/provider-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // pour ngModel
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-providers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './liste-providers.html',
  styleUrls: ['./liste-providers.css']
})
export class ListeProviders implements OnInit {
  listProviders = new BehaviorSubject<any[]>([]);
  editedProvider: any = null;  // provider en cours d'édition

  constructor(private providerService: ProviderService , private router:Router) {}

  ngOnInit(): void {
    this.loadProviders();
  }

  loadProviders() {
    this.providerService.getProviders().subscribe({
      next: (data: any[]) => {
        this.listProviders.next(data);
      },
      error: (err) => {
        console.error('Erreur récupération Providers', err);
      }
    });
  }

  deleteProvider(id: number) {
    if (confirm("Confirmer la suppression ?")) {
      this.providerService.deleteProvider(id).subscribe({
        next: () => {
          alert("Provider supprimé !");
          this.loadProviders();
        },
        error: (err) => {
          console.error("Erreur lors de la suppression", err);
        }
      });
    }
  }

  updateProvider(id: any) {
    this.router.navigate(['/updateProvider',  id]);
   
  }
}
//وَقَالَ ٱلۡمَلِكُ ٱئۡتُونِي بِهِۦٓ أَسۡتَخۡلِصۡهُ لِنَفۡسِيۖ فَلَمَّا كَلَّمَهُۥ قَالَ إِنَّكَ ٱلۡيَوۡمَ لَدَيۡنَا مَكِينٌ أَمِينٞ