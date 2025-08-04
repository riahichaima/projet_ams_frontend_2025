import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProviderService } from '../services/provider-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // pour ngModel

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

  constructor(private providerService: ProviderService) {}

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

  startUpdate(provider: any) {
    // on clone l'objet pour éditer sans modifier directement la liste
    this.editedProvider = { ...provider };
  }

  cancelUpdate() {
    this.editedProvider = null;
  }

  confirmUpdate() {
    this.providerService.updateProvider( this.editedProvider).subscribe({
      next: () => {
        alert("Provider mis à jour !");
        this.editedProvider = null;
        this.loadProviders();
      },
      error: (err) => {
        console.error("Erreur lors de la mise à jour", err);
      }
    });
  }
}
