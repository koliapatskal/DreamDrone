import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-video',
  templateUrl: './header-video.component.html',
  styleUrls: ['./header-video.component.scss']
})
export class HeaderVideoComponent {
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
