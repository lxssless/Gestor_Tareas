import { Routes } from '@angular/router';
export class TaskCategoryComponent {}
export class TaskDetailComponent {}

export default [
  {
    path: '',
    loadComponent: () => import('./task-list/task-list.component'),
  },
  {
    path: 'new',
    loadComponent: () => import('./task-form/task-form.component'),
  },
  {
    path: 'edit/:idTask',
    loadComponent: () => import('./task-form/task-form.component'),
  },
  {
    path: 'detail/:idTask',
  loadComponent: () => import('./task-detail/task-detail.component').then(m => m.TaskDetailComponent),
  },
  {
  path: 'categories',
  loadComponent: () =>
  import('./task-category/task-category.component').then(m => m.TaskCategoryComponent),

}

] as Routes;
