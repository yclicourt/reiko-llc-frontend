import { Routes } from '@angular/router';

// Routes for the application
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'transport',
    loadComponent: () => import('./pages/transport/transport.component'),
  },
  {
    path: 'storage',
    loadComponent: () => import('./pages/storage/storage.component'),
  },
  {
    path: 'logistic',
    loadComponent: () => import('./pages/logistic/logistic.component'),
  },
];
