import { Component, OnInit } from '@angular/core';

import { SidenavService } from './shared/services/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'DreamDrone';
  public isSidenavOpen: boolean;

  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {
    this.sidenavService.isSidenavOpen.subscribe((isOpen: boolean) => (this.isSidenavOpen = isOpen));
  }
}
