import { Component } from '@angular/core';
import { ComarcaList } from '../../elements/comarca-list/comarca-list';

@Component({
  selector: 'app-comarques',
  imports: [ComarcaList],
  templateUrl: './comarques.html',
  styleUrl: './comarques.css',
})
export class Comarques {}
