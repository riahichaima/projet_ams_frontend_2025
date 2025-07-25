export interface Provider {
  id: number;
  name: string;
  address: string;
  email: string;

  
}
export interface Article {
  id: number; // optionnel si généré automatiquement
  libelle: string;
  price: number;
  provider: Provider;
}

