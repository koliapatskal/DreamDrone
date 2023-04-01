import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  public isMainPage: boolean;
  constructor(private router: Router) {}
  public ngOnInit(): void {
    this.isMainPage = this.router.url === '/';
  }

  public onSidenavToggle(): void {
    this.sidenavToggle.emit();
  }
}
