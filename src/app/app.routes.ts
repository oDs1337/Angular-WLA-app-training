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
  {
    path: 'drink-details/:id',
    loadComponent: () =>
      import(
        '@features/drink-details/containers/drink-details/drink-details'
      ).then((m) => m.DrinkDetails),
  },
];
