import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CenterLayoutComponent, InputComponent, PasswordComponent,  } from '../../../projects/ui/src/public-api';

@Component({
  selector: 'login-page',
  standalone: true,
  template: `<ui-center-layout>
    <mat-card>
      <mat-card-header>
        <p>Login</p>
      </mat-card-header>
      <mat-card-content>
        <ui-input label="test" [(hint)]="loginHint" />
        <br />
        <ui-password label="password" />
      </mat-card-content>
    </mat-card>
  </ui-center-layout>`,
  imports: [CenterLayoutComponent, MatCardModule, InputComponent, PasswordComponent],
})
export class LoginPageComponent {
  loginHint = signal('');
}
