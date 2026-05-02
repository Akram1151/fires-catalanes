import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './view/layout/header/header';
import { FavoritesPanel } from './view/layout/favorites-panel/favorites-panel';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    FavoritesPanel
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fires-catalanes');

  constructor(private router: Router) {}

  showFavoritesPanel(): boolean {
    return !this.router.url.startsWith('/favorites')
      && !this.router.url.startsWith('/favorits');
  }
}
