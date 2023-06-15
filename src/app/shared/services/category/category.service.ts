import { Observable } from 'rxjs';
import { CategoryCard } from 'src/app/core/models/category.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  public getCategoryCards(): Observable<CategoryCard[]> {
    return this.http.get<CategoryCard[]>('assets/mock/categoryCards.json');
  }
}
