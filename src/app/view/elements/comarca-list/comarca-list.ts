import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CATALAN_FAIRS } from '../../../model/fairs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comarca-list',
  imports: [CommonModule],
  templateUrl: './comarca-list.html',
  styleUrl: './comarca-list.css',
})
export class ComarcaList {
  fairs = CATALAN_FAIRS;

  comarques: any[] = [];

  // Pagination state
  page = 1;
  pageSize = 12;
  get totalPages() {
    return Math.ceil(this.comarques.length / this.pageSize);
  }
  get pagedComarques() {
    const start = (this.page - 1) * this.pageSize;
    return this.comarques.slice(start, start + this.pageSize);
  }

  @Input() mode: 'slider' | 'grid' = 'slider';

  @Output() comarcaSelected = new EventEmitter<string>();

  constructor(private router: Router) {
    this.getUniqueComarques();
  }

  getUniqueComarques() {
    const mapa = new Map();

    this.fairs.forEach(f => {
      if (!mapa.has(f.regionName)) {
        mapa.set(f.regionName, {
          name: f.regionName,
          fires: [],
        });
      }

      mapa.get(f.regionName).fires.push(f);
    });

    this.comarques = Array.from(mapa.values()).map(c => ({
      name: c.name,
      totalFires: c.fires.length,
    }));
  }

  selectComarca(name: string) {
  if (this.mode === 'slider') {
    // HOME
    this.comarcaSelected.emit(name);
  } else {
    // PÀGINA COMARQUES
    this.router.navigate(['/fires'], {
      queryParams: { comarca: name }
    });
  }
}
  nextPage() {
    if (this.page < this.totalPages) this.page++;
  }
  prevPage() {
    if (this.page > 1) this.page--;
  }
}