import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BaseLayoutService } from './services/base.layout.service';

@Component({
  selector: 'ui-base-layout',
  standalone: true,
  providers: [BaseLayoutService],
  template: `
    <main>
      <div class="header" #header>
        <ng-content select="[slot='header']"></ng-content>
      </div>
      <div class="content-wrapper" [style.height]="contentHeight">
        @if (this.leftSidebarVisible()) {
        <div class="left-sidebar" #leftSidebar>
          <ng-content select="[slot='left-sidebar']"></ng-content>
        </div>
        }
        <div class="content">
          <ng-content></ng-content>
        </div>
        @if (this.rightSidebarVisible()) {
        <div class="right-sidebar" #rightSidebar>
          <ng-content select="[slot='right-sidebar']"></ng-content>
        </div>
        }
      </div>
      <div class="footer" #footer>
        <ng-content select="[slot='footer']"></ng-content>
      </div>
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
    margin-top: -16px;
  }
  .header {
    width: 100%;
    height: 50px;
  }
  .footer {
    width: 100%;
    height: 50px;
  }
  .content-wrapper {
    display: flex;
  }
  .content {
    width: 100%;
    height: 100%;
  }
  .header:empty,
  .left-sidebar:empty,
  .right-sidebar:empty,
  .footer:empty {
    display: none;
  }
  `,
})
export class BaseLayoutComponent {
  private baseLayoutService = inject(BaseLayoutService);

  @Input() offset = 16;
  @Input() headerHeight = 50;
  @Input() footerHeight = 50;

  @ViewChild('header', { static: true }) header: ElementRef | null = null;
  @ViewChild('leftSidebar', { static: true }) leftSidebar: ElementRef | null =
    null;
  @ViewChild('rightSidebar', { static: true }) rightSidebar: ElementRef | null =
    null;
  @ViewChild('footer', { static: true }) footer: ElementRef | null = null;

  leftSidebarVisible = toSignal(this.baseLayoutService.leftSidebarVisibility);
  rightSidebarVisible = toSignal(this.baseLayoutService.rightSidebarVisibility);

  get hasHeader() {
    return (
      (this.header && this.header.nativeElement.children.length > 0) === true
    );
  }

  get hasLeftSidebar() {
    return (
      (this.leftSidebar &&
        this.leftSidebar.nativeElement.children.length > 0) === true
    );
  }

  get hasRightSidebar() {
    return (
      (this.rightSidebar &&
        this.rightSidebar.nativeElement.children.length > 0) === true
    );
  }

  get hasFooter() {
    return (
      (this.footer && this.footer.nativeElement.children.length > 0) === true
    );
  }

  get contentHeight() {
    let additive = this.offset;
    if (this.hasHeader) {
      additive += this.headerHeight;
    }
    if (this.hasFooter) {
      additive += this.footerHeight;
    }
    return `calc(100% - ${additive}px)`;
  }
}
