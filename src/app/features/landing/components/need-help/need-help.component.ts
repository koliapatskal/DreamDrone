import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-need-help',
  templateUrl: './need-help.component.html',
  styleUrls: ['./need-help.component.scss']
})
export class NeedHelpComponent implements AfterViewInit {
  @ViewChild('storeImg') storeImg: ElementRef;
  @ViewChild('findButton') findButton: ElementRef;

  public ngAfterViewInit(): void {
    this.setListeners();
  }

  private setListeners(): void {
    const hoverClassName = 'hover';

    this.storeImg.nativeElement.onmouseover = () => {
      this.findButton.nativeElement.classList.add(hoverClassName);
    };
    this.storeImg.nativeElement.onmouseleave = () => {
      this.findButton.nativeElement.classList.remove(hoverClassName);
    };

    this.findButton.nativeElement.onmouseover = () => {
      this.storeImg.nativeElement.classList.add(hoverClassName);
    };
    this.findButton.nativeElement.onmouseleave = () => {
      this.storeImg.nativeElement.classList.remove(hoverClassName);
    };
  }
}
