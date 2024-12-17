import { Component, inject } from "@angular/core";
import { BaseLayoutService } from "../../../projects/ui/src/public-api";
import { BaseLayoutComponent } from "../../../projects/ui/src/lib/layout/base.component";

@Component({
  selector: 'main-page',
  standalone: true,
  template: `
  <ui-base-layout>
    <h1>MainPage</h1>
  <ui-base-layout>
  `,
  imports: [BaseLayoutComponent],
  providers: [BaseLayoutService]
})
export class MainPageComponent {
  baseLayoutService = inject(BaseLayoutService);

  toggleLeftSidebar() {
    this.baseLayoutService.toggleLeftSidebarVisibility();
  }

  toggleRightSidebar() {
    this.baseLayoutService.toggleRightSidebarVisibility();
  }
}
