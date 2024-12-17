import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main.page.component';
import { LoginPageComponent } from './pages/login.page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  }
];
