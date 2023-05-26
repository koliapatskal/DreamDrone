import { filter } from 'rxjs';
import { GalleryDrone } from 'src/app/core/models/drones.model';
import { DronesService } from 'src/app/shared/services/drones/drones.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public drones: GalleryDrone[];

  constructor(private droneService: DronesService) {}

  ngOnInit(): void {
    this.droneService
      .getGalleryDrones()
      .pipe(filter(Boolean))
      .subscribe((drones: GalleryDrone[]) => (this.drones = drones));
  }
}
