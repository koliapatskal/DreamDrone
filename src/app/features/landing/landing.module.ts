import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GetNowComponent } from './components/get-now/get-now.component';
import { NewProductsComponent } from './components/new-products/new-products.component';
import {
  PhotoDescriptionComponent
} from './components/photo-description/photo-description.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { WhyThisDroneComponent } from './components/why-this-drone/why-this-drone.component';
import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [
    LandingComponent,
    GetNowComponent,
    PhotoDescriptionComponent,
    WhyThisDroneComponent,
    NewProductsComponent,
    ReviewsComponent
  ],
  imports: [CommonModule]
})
export class LandingModule {}
