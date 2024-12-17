import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'ui-input',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mat-form-field>
    <mat-label>{{ label() }}</mat-label>
    <input matInput type="text" />
    <mat-hint>{{ hint() }}</mat-hint>
  </mat-form-field>`,
  styles: ``,
  imports: [MatFormFieldModule, MatInputModule],
})
export class InputComponent {
  label = input('');
  hint = model('');
  value = model('');
}
