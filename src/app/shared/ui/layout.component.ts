import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthStateService } from '../data-access/auth-state.service';

@Component({
  standalone: true,
  imports: [RouterModule, RouterLink],
  selector: 'app-layout',
  template: `
  <!-- FONDO GRADIENTE DESENFOCADO -->
<div class="absolute top-0 left-0 w-full h-[60px] bg-gradient-to-r blur-md from-red-700 via-orange-500 to-yellow-400 opacity-95 z-[-1]"></div>

<header class="h-[60px] mb-4 w-full px-4 relative z-10">
  <nav class="flex items-center justify-between h-full">
    <!-- Logo con redirección -->
    <a routerLink="/" class="flex items-center space-x-2">
      <img src="/tarea.png" alt="Logo" class="h-8 w-auto" />
      <span class=" text-white dark:text-yellow-400 font-bold text-xl hidden sm:inline">Mis Tareas</span>
    </a>
    <!-- Botón salir -->
    <button
      type="button"
      class="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-500 font-medium rounded-md text-sm px-4 py-2 dark:bg-yellow-600"
      (click)="logOut()"
    >
      Salir
    </button>
  </nav>
</header>
<router-outlet />
  `,
})
export default class LayoutCompoent {
  private _authState = inject(AuthStateService);
  private _router = inject(Router);

  async logOut() {
    await this._authState.logOut();
    this._router.navigateByUrl('/auth/sign-in');
  }
}
