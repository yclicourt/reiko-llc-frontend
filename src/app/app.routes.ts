import { Routes } from '@angular/router';

// Routes for the application
export const routes: Routes = [

    {
        path:'',
        loadComponent:()=>import('./pages/home/home.component')
    }
];
