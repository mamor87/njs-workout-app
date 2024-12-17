import { Component } from '@angular/core';

@Component({
  selector: 'ui-center-layout',
  standalone: true,
  template: `
    <main>
      <ng-content></ng-content>
    </main>
  `,
  styles: `
  html,
  body,
  main {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
  }
  main {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }`,
})
export class CenterLayoutComponent {}
