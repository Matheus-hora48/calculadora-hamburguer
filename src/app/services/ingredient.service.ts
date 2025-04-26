import { Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  private ingredients: Ingredient[] = [
    {
      id: 1,
      name: 'Bacon',
      packagePrice: 18.1,
      packageQuantity: 8,
      quantityPerBurger: 1,
    },
    {
      id: 2,
      name: 'Queijo Cheddar',
      packagePrice: 19.1,
      packageQuantity: 8,
      quantityPerBurger: 1,
    },
    {
      id: 3,
      name: 'Cebola Caramelizada',
      packagePrice: 6.25,
      packageQuantity: 490,
      quantityPerBurger: 30,
    },
    {
      id: 4,
      name: 'Hambúrguer 160g',
      packagePrice: 85,
      packageQuantity: 2500,
      quantityPerBurger: 160,
    },
    {
      id: 5,
      name: 'Pão',
      packagePrice: 15,
      packageQuantity: 520,
      quantityPerBurger: 90,
    },
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }
}
