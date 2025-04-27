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
      subIngredients: [
        {
          id: 6,
          name: 'Cebola',
          packagePrice: 5.5,
          packageQuantity: 1000,
          quantityPerBurger: 25.5, // (416.5 / 490) * 30 ≈ 25.5
        },
        {
          id: 7,
          name: 'Açúcar',
          packagePrice: 6.19,
          packageQuantity: 1000,
          quantityPerBurger: 3, // (49 / 490) * 30 ≈ 3
        },
        {
          id: 8,
          name: 'Shoyu',
          packagePrice: 6.6,
          packageQuantity: 150,
          quantityPerBurger: 1.5, // (24.5 / 490) * 30 ≈ 1.5
        },
      ],
    },
    {
      id: 4,
      name: 'Hambúrguer 160g',
      packagePrice: 5.8,
      packageQuantity: 160,
      quantityPerBurger: 160,
    },
    {
      id: 5,
      name: 'Pão',
      packagePrice: 15,
      packageQuantity: 6,
      quantityPerBurger: 1,
    },
    {
      id: 9,
      name: 'Maionese de alho',
      packagePrice: 14.1,
      packageQuantity: 470,
      quantityPerBurger: 15,
      isSauce: true,
      subIngredients: [
        {
          id: 10,
          name: 'Maionese',
          packagePrice: 23,
          packageQuantity: 400,
          quantityPerBurger: 0.5,
        },
        {
          id: 11,
          name: 'Creme de leite',
          packagePrice: 4,
          packageQuantity: 200,
          quantityPerBurger: 1,
        },
        {
          id: 12,
          name: 'Cebola em pó',
          packagePrice: 4.8,
          packageQuantity: 30,
          quantityPerBurger: 1,
        },
        {
          id: 13,
          name: 'Endro picado',
          packagePrice: 5,
          packageQuantity: 20,
          quantityPerBurger: 1,
        },
        {
          id: 14,
          name: 'Alho assado',
          packagePrice: 6,
          packageQuantity: 50,
          quantityPerBurger: 50,
        },
      ],
    },
    {
      id: 17,
      name: 'Molho Umami',
      packagePrice: 16.0,
      packageQuantity: 380,
      quantityPerBurger: 15,
      isSauce: true,
      subIngredients: [
        {
          id: 18,
          name: 'Maionese Base',
          packagePrice: 23,
          packageQuantity: 400,
          quantityPerBurger: 0.375,
        },
        {
          id: 19,
          name: 'Katchup',
          packagePrice: 12,
          packageQuantity: 379,
          quantityPerBurger: 0.343,
        },
        {
          id: 20,
          name: 'Shoyu',
          packagePrice: 4,
          packageQuantity: 15,
          quantityPerBurger: 0.167,
        },
        {
          id: 21,
          name: 'Vinagre de maçã',
          packagePrice: 7,
          packageQuantity: 750,
          quantityPerBurger: 0.033,
        },
        {
          id: 22,
          name: 'Mostarda amarela',
          packagePrice: 12.3,
          packageQuantity: 370,
          quantityPerBurger: 0.068,
        },
        {
          id: 24,
          name: 'Mel ou glucose',
          packagePrice: 30,
          packageQuantity: 500,
          quantityPerBurger: 15,
        },
      ],
    },
    {
      id: 25,
      name: 'Maionese de wasabi',
      packagePrice: 3.4,
      packageQuantity: 50,
      quantityPerBurger: 5,
      isSauce: true,
      subIngredients: [
        {
          id: 26,
          name: 'Gengibre em pó',
          packagePrice: 4.75,
          packageQuantity: 15,
          quantityPerBurger: 1,
        },
        {
          id: 27,
          name: 'Wasabi',
          packagePrice: 10,
          packageQuantity: 50,
          quantityPerBurger: 1,
        },
        {
          id: 43,
          name: 'Mostarda amarela',
          packagePrice: 12.3,
          packageQuantity: 370,
          quantityPerBurger: 15,
        },
        {
          id: 28,
          name: 'Maionese',
          packagePrice: 23,
          packageQuantity: 400,
          quantityPerBurger: 0.075,
        },
        {
          id: 29,
          name: 'Creme de leite',
          packagePrice: 4,
          packageQuantity: 200,
          quantityPerBurger: 0.075,
        },
      ],
    },
    {
      id: 30,
      name: 'Molho especial',
      packagePrice: 6.5,
      packageQuantity: 150,
      quantityPerBurger: 15,
      isSauce: true,
      subIngredients: [
        {
          id: 31,
          name: 'Molho Barbecue',
          packagePrice: 14.4,
          packageQuantity: 400,
          quantityPerBurger: 15,
        },
        {
          id: 32,
          name: 'Ketchup',
          packagePrice: 12,
          packageQuantity: 397,
          quantityPerBurger: 30,
        },
        {
          id: 33,
          name: 'Mostarda amarela',
          packagePrice: 12.3,
          packageQuantity: 370,
          quantityPerBurger: 15,
        },
        {
          id: 34,
          name: 'Molho Inglês',
          packagePrice: 3.09,
          packageQuantity: 150,
          quantityPerBurger: 15,
        },
        {
          id: 35,
          name: 'Creme de leite',
          packagePrice: 4,
          packageQuantity: 200,
          quantityPerBurger: 0.035, // 7 / 200
        },
        {
          id: 36,
          name: 'Molho Tabasco',
          packagePrice: 32,
          packageQuantity: 60,
          quantityPerBurger: 0.5,
        },
        {
          id: 37,
          name: 'Maionese',
          packagePrice: 23,
          packageQuantity: 400,
          quantityPerBurger: 0.15, // 60 / 400
        },
      ],
    },
    {
      id: 38,
      name: 'Mostarda com mel',
      packagePrice: 2.7,
      packageQuantity: 40,
      quantityPerBurger: 7,
      isSauce: true,
      subIngredients: [
        {
          id: 39,
          name: 'Mostarda Dijon',
          packagePrice: 16.5,
          packageQuantity: 200,
          quantityPerBurger: 0.075, // 15 / 200
        },
        {
          id: 40,
          name: 'Creme de leite',
          packagePrice: 4,
          packageQuantity: 200,
          quantityPerBurger: 0.075, // 15 / 200
        },
        {
          id: 41,
          name: 'Mel ou glucose',
          packagePrice: 30,
          packageQuantity: 500,
          quantityPerBurger: 15,
        },
        {
          id: 42,
          name: 'Vinagre de maçã',
          packagePrice: 7.1,
          packageQuantity: 750,
          quantityPerBurger: 0.0067, // 5 / 750 ≈ 0.0067
        },
      ],
    },
    {
      id: 44,
      name: 'Maionese',
      packagePrice: 23,
      packageQuantity: 400,
      quantityPerBurger: 15,
      isSauce: true,
    },
    {
      id: 45,
      name: 'Ketchup',
      packagePrice: 12,
      packageQuantity: 379,
      quantityPerBurger: 15,
      isSauce: true,
    },
    {
      id: 46,
      name: 'Mostarda Amarela',
      packagePrice: 12.3,
      packageQuantity: 370,
      quantityPerBurger: 15,
      isSauce: true,
    },
    {
      id: 47,
      name: 'Molho Barbecue',
      packagePrice: 14.4,
      packageQuantity: 400,
      quantityPerBurger: 15,
      isSauce: true,
    },
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }
}
