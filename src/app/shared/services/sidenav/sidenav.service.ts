import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  public isSidenavOpen = new BehaviorSubject<boolean>(false);

  public toogleSidenav(): void {
    const newValue = !this.isSidenavOpen.getValue();
    this.isSidenavOpen.next(newValue);
  }
}
