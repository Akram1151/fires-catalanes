import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteToggle } from '../../elements/favorite-toggle/favorite-toggle';

@Component({
  selector: 'app-favorits',
  imports: [CommonModule, FavoriteToggle],
  templateUrl: './favorits.html',
  styleUrl: './favorits.css',
})
export class Favorits {
  favorites: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favorites = this.getFavorites();
  }

  getFavorites(): any[] {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  goToDetail(fair: any) {
    this.router.navigate(['/fair-detail'], {
      state: { fair }
    });
  }
}
