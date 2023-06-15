import { filter } from 'rxjs';
import { CategoryCard } from 'src/app/core/models/category.model';

import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../../../shared/services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  public categoryCards: CategoryCard[];

  constructor(private categoryService: CategoryService) {}

  public ngOnInit(): void {
    this.categoryService
      .getCategoryCards()
      .pipe(filter(Boolean))
      .subscribe((categoryCards: CategoryCard[]) => (this.categoryCards = categoryCards));
  }
}
