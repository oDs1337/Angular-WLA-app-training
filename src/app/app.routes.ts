import { Routes } from '@angular/router';
import { DrinkList } from '@features/drink-list/containers/drink-list/drink-list';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'drinks-list',
  },
  {
    path: 'drinks-list',
    component: DrinkList,
  },
];
