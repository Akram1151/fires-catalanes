import { Component } from '@angular/core';
import { CATALAN_FAIRS } from '../../../model/fairs';
import { ComarcaList } from '../../elements/comarca-list/comarca-list';
import { FiresList } from '../../elements/fires-list/fires-list';


@Component({
  selector: 'app-home',
  imports: [ComarcaList, FiresList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public fairs: any[] = CATALAN_FAIRS;

  selectedComarca: string | null = null;

  onComarcaSelected(comarca: string) {
    this.selectedComarca = comarca;
  }
}
