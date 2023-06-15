import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-set-free',
  templateUrl: './set-free.component.html',
  styleUrls: ['./set-free.component.scss']
})
export class SetFreeComponent {
  public isVideoPaused: boolean;

  @ViewChild('video') video: ElementRef;

  public onPauseClick(): void {
    if (this.isVideoPaused) {
      this.video.nativeElement.play();
      this.isVideoPaused = false;
    } else {
      this.video.nativeElement.pause();
      this.isVideoPaused = true;
    }
  }
}
