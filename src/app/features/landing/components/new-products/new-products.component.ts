import SwiperCore, { A11y, FreeMode, Mousewheel, Scrollbar, SwiperOptions } from 'swiper';

import { Component } from '@angular/core';

SwiperCore.use([Scrollbar, A11y, FreeMode, Mousewheel]);

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent {
  public config: SwiperOptions = {
    freeMode: true,
    mousewheel: true,
    slidesPerView: 1,
    spaceBetween: 25,
    scrollbar: {
      hide: true
    },
    breakpoints: {
      380: {
        slidesPerView: 1.2
      },
      500: {
        slidesPerView: 1.5
      },
      800: {
        slidesPerView: 1.8
      },
      1050: {
        slidesPerView: 2.2
      },
      1300: {
        slidesPerView: 2.5,
        spaceBetween: 50
      }
    }
  };
}
