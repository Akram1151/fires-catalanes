import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CATALAN_FAIRS } from '../../../model/fairs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fires-list',
  imports: [CommonModule],
  templateUrl: './fires-list.html',
  styleUrl: './fires-list.css',
})
export class FiresList {

  @Input() comarca: string | null = null;
  @Input() mode: 'slider' | 'grid' = 'grid';

  fairs = CATALAN_FAIRS;
  filteredFairs: any[] = [];

  // Pagination state
  page = 1;
  pageSize = 12;
  get totalPages() {
    return Math.ceil(this.filteredFairs.length / this.pageSize);
  }
  get pagedFairs() {
    const start = (this.page - 1) * this.pageSize;
    return this.filteredFairs.slice(start, start + this.pageSize);
  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // si ve de routing
    this.route.queryParams.subscribe(params => {
      if (params['comarca']) {
        this.comarca = params['comarca'];
      }
      this.filterFairs();
    });
  }

  ngOnChanges() {
    this.filterFairs();
  }

  filterFairs() {
    if (!this.comarca) {
      this.filteredFairs = this.fairs;
      return;
    }

    this.filteredFairs = this.fairs.filter(
      f => f.regionName === this.comarca
    );
    this.page = 1; // Reset page on filter
  }

  goToDetail(fair: any) {
    this.router.navigate(['/fair-detail'], {
      state: { fair }
    });
  }

  nextPage() {
    if (this.page < this.totalPages) this.page++;
  }
  prevPage() {
    if (this.page > 1) this.page--;
  }
}