import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  signal,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ui-password',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mat-form-field>
    <mat-label>{{ label() }}</mat-label>
    <input matInput [type]="type()" />
    <mat-icon
      matIconSuffix
      [fontIcon]="actionIcon()"
      (click)="toggleIcon()"
    ></mat-icon>
    <mat-hint>{{ hint() }}</mat-hint>
  </mat-form-field>`,
  styles: ``,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
})
export class PasswordComponent {
  private hideText = signal(false);
  label = input('');
  hint = model('');
  value = model('');
  actionIcon = computed(() =>
    this.hideText() ? 'visibility_off' : 'visibility'
  );
  type = computed(() => (this.hideText() ? 'text' : 'password'));

  toggleIcon() {
    this.hideText.set(!this.hideText());
  }
}
