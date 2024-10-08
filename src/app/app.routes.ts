import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './landing/login/login.component';
import { SignupComponent } from './landing/signup/signup.component';
import { MainContainerComponent } from './main-container/main-container.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component:LoginComponent },
    { path: 'signup', component:SignupComponent },
    { path: 'maincontainer', component: MainContainerComponent }
];
