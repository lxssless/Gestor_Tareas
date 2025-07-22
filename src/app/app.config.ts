import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideFirebaseApp(() =>
      initializeApp({
          apiKey: "AIzaSyAk-1ENgrVORxc9TAjuC0S0CoIU1isi6G4",
          authDomain: "gestordetareas-pw.firebaseapp.com",
          projectId: "gestordetareas-pw",
          storageBucket: "gestordetareas-pw.firebasestorage.app",
          messagingSenderId: "574014203356",
          appId: "1:574014203356:web:82f59b7e3ebc32a20a5b19"
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
