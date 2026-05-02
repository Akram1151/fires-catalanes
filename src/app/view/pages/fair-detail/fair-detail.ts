import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FavoriteToggle } from '../../elements/favorite-toggle/favorite-toggle';

@Component({
    selector: 'app-fair-detail',
    standalone: true,
    imports: [CommonModule, FavoriteToggle],
    templateUrl: './fair-detail.html',
    styleUrl: './fair-detail.css',
})
export class FairDetail {

    fair: any = null;
    constructor(private location: Location) {
        this.loadFair();
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

    goBack() {
        this.location.back();
    }
}
