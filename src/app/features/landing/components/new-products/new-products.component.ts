import SwiperCore, {
  A11y, Autoplay, Controller, Navigation, Pagination, Scrollbar, Swiper, Thumbs, Virtual, Zoom
} from 'swiper';

import { Component } from '@angular/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Virtual, Zoom, Autoplay, Thumbs, Controller]);

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent {}
