import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeaturesRoutingModule } from './features-routing.module';
import { LandingModule } from './landing/landing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, FeaturesRoutingModule, LandingModule]
})
export class FeaturesModule {}
