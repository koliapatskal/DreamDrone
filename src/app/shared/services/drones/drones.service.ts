import { Observable } from 'rxjs';
import { GalleryDrone } from 'src/app/core/models/drones.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DronesService {
  constructor(private http: HttpClient) {}

  public getGalleryDrones(): Observable<GalleryDrone[]> {
    return this.http.get<GalleryDrone[]>('assets/mock/galleryDrones.json');
  }
}
