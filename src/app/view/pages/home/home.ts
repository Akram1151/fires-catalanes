import { Component } from '@angular/core';
import { CATALAN_FAIRS } from '../../../model/fairs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public fairs: any[] = CATALAN_FAIRS;
}
