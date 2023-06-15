import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements AfterContentInit {
  @ContentChild('accordionBody') accordionBody: ElementRef;

  ngAfterContentInit(): void {
    console.log(this.accordionBody);
  }
}
