import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-toggle',
  imports: [CommonModule],
  templateUrl: './favorite-toggle.html',
  styleUrl: './favorite-toggle.css',
})
export class FavoriteToggle {
  @Input() fair: any;
  @Input() addLabel = 'Afegir a favorits';
  @Input() removeLabel = 'Treure de favorits';
  @Input() iconOnly = false;

  @Output() favoriteChanged = new EventEmitter<boolean>();

  isFavorite(): boolean {
    if (!this.fair?.activityId) {
      return false;
    }

    return this.getFavorites().some(
      (favorite: any) => favorite.activityId === this.fair.activityId
    );
  }

  toggleFavorite(event?: Event) {
    event?.stopPropagation();

    if (!this.fair?.activityId) {
      return;
    }

    const favorites = this.getFavorites();
    const favoriteIndex = favorites.findIndex(
      (favorite: any) => favorite.activityId === this.fair.activityId
    );

    if (favoriteIndex >= 0) {
      favorites.splice(favoriteIndex, 1);
    } else {
      favorites.push(this.fair);
    }

    this.saveFavorites(favorites);
    this.favoriteChanged.emit(this.isFavorite());
  }

  getButtonLabel(): string {
    return this.isFavorite() ? this.removeLabel : this.addLabel;
  }

  private getFavorites(): any[] {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  private saveFavorites(favorites: any[]) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}
