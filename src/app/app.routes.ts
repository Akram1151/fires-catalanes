import { Routes } from '@angular/router';
import { Home } from './view/pages/home/home';
import { Fires } from './view/pages/fires/fires';
import { Favorits } from './view/pages/favorits/favorits';
import { Comarques } from './view/pages/comarques/comarques';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'comarques',
        component: Comarques
    },
    {
        path: 'fires',
        component: Fires
    },
    {
        path: 'favorits',
        component: Favorits
    }
];
