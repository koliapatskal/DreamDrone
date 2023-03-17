import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMainPage: boolean;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.isMainPage = this.router.url === '/';
  }
}
