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
    slidesPerView: 2.5,
    spaceBetween: 50,
    scrollbar: {
      hide: true
    }
  };
}
