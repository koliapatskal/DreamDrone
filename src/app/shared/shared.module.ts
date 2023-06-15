import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavComponent, AccordionItemComponent],
  imports: [CommonModule, MatIconModule, CdkAccordionModule],
  exports: [HeaderComponent, FooterComponent, SidenavComponent]
})
export class SharedModule {}
