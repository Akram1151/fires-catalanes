import { Component } from '@angular/core';
import { CATALAN_FAIRS } from '../../../model/fairs';

@Component({
  selector: 'app-comarca-list',
  templateUrl: './comarca-list.html',
  styleUrl: './comarca-list.css',
})
export class ComarcaList {
  fairs = CATALAN_FAIRS;

  comarques: any[] = [];

  constructor() {
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

    this.comarques = Array.from(mapa.values()).map(c => {
      const municipis = new Set(c.fires.map((f: any) => f.municipalityName));

      return {
        name: c.name,
        totalFires: c.fires.length,
        totalMunicipis: municipis.size,
      };
    });
  }
}