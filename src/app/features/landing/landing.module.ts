import { SwiperModule } from 'swiper/angular';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, SwiperModule],
})
export class LandingModule {}
