import { Component } from '@angular/core';

import { SidenavService } from '../../services/sidenav/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  constructor(private sidenavService: SidenavService) {}

  public onSidenavToggle() {
    this.sidenavService.toogleSidenav();
  }
}
