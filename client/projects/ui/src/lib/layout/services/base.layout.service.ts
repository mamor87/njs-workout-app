import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class BaseLayoutService {
  private _leftSidebarVisibility = new BehaviorSubject(false);
  private _rightSidebarVisibility = new BehaviorSubject(false);

  leftSidebarVisibility = this._leftSidebarVisibility.asObservable();
  rightSidebarVisibility = this._rightSidebarVisibility.asObservable();

  toggleLeftSidebarVisibility() {
    this._leftSidebarVisibility.next(!this._leftSidebarVisibility.value);
  }

  toggleRightSidebarVisibility() {
    this._rightSidebarVisibility.next(!this._rightSidebarVisibility.value);
  }
}
