import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"gear-check-1cad0","appId":"1:285535573750:web:d0958713f7188c4fad3ed7","storageBucket":"gear-check-1cad0.appspot.com","apiKey":"AIzaSyDsBSEuRZa7PLNiDZIaKOmXeTytEy3h74o","authDomain":"gear-check-1cad0.firebaseapp.com","messagingSenderId":"285535573750"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
