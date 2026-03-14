import { Routes } from '@angular/router';

export const routes: Routes = [{
    path:'',
    loadComponent: () => import('./posts-table/posts-table').then((module) => module.PostsTable),
  },
  {
    path:'posts',
    loadComponent: () => import('./posts-table/posts-table').then((module) => module.PostsTable),
  },
  {
    path:'summary',
    loadComponent: () => import('./summary/summary').then((module) => module.Summary),
  },
];
