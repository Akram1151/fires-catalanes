import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
    selector: 'app-fair-detail',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './fair-detail.html',
    styleUrl: './fair-detail.css',
})
export class FairDetail {

    fair: any = null;
    isFavorite = false;

    constructor(private location: Location) {
        this.loadFair();
        this.loadFavoriteState();
    }

    loadFair() {
        const data = history.state?.fair;

        if (data) {
            this.fair = data;
            localStorage.setItem('lastFair', JSON.stringify(data));
        } else {
            const saved = localStorage.getItem('lastFair');
            if (saved) this.fair = JSON.parse(saved);
        }
    }

    loadFavoriteState() {
        const favs = this.getFavorites();
        this.isFavorite = favs.some(
            (f: any) => f.activityId === this.fair?.activityId
        );
    }

    toggleFavorite() {
        let favs = this.getFavorites();

        const index = favs.findIndex(
            (f: any) => f.activityId === this.fair.activityId
        );

        if (index >= 0) {
            favs.splice(index, 1);
            this.isFavorite = false;
        } else {
            favs.push(this.fair);
            this.isFavorite = true;
        }

        localStorage.setItem('favorites', JSON.stringify(favs));
    }

    getFavorites() {
        return JSON.parse(localStorage.getItem('favorites') || '[]');
    }

    goBack() {
        this.location.back();
    }

    isFav() {
        return this.isFavorite;
    }
}