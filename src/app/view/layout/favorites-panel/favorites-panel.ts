import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteToggle } from '../../elements/favorite-toggle/favorite-toggle';

@Component({
  selector: 'app-favorites-panel',
  imports: [CommonModule, FavoriteToggle],
  templateUrl: './favorites-panel.html',
  styleUrl: './favorites-panel.css',
})
export class FavoritesPanel {
  isOpen = false;
  favorites: any[] = [];

  constructor(private router: Router) {}

  togglePanel() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.loadFavorites();
    }
  }

  closePanel() {
    this.isOpen = false;
  }

  loadFavorites() {
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  goToDetail(fair: any) {
    this.closePanel();
    this.router.navigate(['/fair-detail'], {
      state: { fair }
    });
  }

  @HostListener('window:favoritesUpdated')
  onFavoritesUpdated() {
    this.loadFavorites();
  }

  @HostListener('window:storage')
  onStorageChange() {
    this.loadFavorites();
  }
}
