import { SwiperModule } from 'swiper/angular';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { HeaderVideoComponent } from './components/header-video/header-video.component';
import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [LandingComponent, HeaderVideoComponent],
  imports: [CommonModule, SwiperModule, MatIconModule]
})
export class LandingModule {}
