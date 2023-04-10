import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SidenavService } from '../../services/sidenav/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMainPage: boolean;
  constructor(private router: Router, private sidenavService: SidenavService) {}
  public ngOnInit(): void {
    this.isMainPage = this.router.url === '/';
  }

  public onSidenavToggle(): void {
    this.sidenavService.toogleSidenav();
  }
}
