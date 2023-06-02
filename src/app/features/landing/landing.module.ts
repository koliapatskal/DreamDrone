import { SwiperModule } from 'swiper/angular';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { CategoryListComponent } from './components/category-list/category-list.component';
import { HeaderVideoComponent } from './components/header-video/header-video.component';
import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [LandingComponent, HeaderVideoComponent, CategoryListComponent],
  imports: [CommonModule, SwiperModule, MatIconModule, HttpClientModule]
})
export class LandingModule {}
