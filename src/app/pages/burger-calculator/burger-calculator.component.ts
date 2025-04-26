import { Component } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { Ingredient } from '../../model/ingredient.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-burger-calculator',
  imports: [CommonModule, FormsModule],
  templateUrl: './burger-calculator.component.html',
  styleUrl: './burger-calculator.component.scss',
})
export class BurgerCalculatorComponent {
  allIngredients: Ingredient[] = [];
  selectedIngredientIds: number[] = [];
  quantityOfBurgers = 1;
  calculationResult: any = null;

  constructor(private ingredientService: IngredientService) {
    this.allIngredients = this.ingredientService.getIngredients();
  }

  toggleIngredient(id: number) {
    const index = this.selectedIngredientIds.indexOf(id);
    if (index > -1) {
      this.selectedIngredientIds.splice(index, 1);
    } else {
      this.selectedIngredientIds.push(id);
    }
  }

  calculate() {
    const selectedIngredients = this.allIngredients.filter((ing) =>
      this.selectedIngredientIds.includes(ing.id)
    );

    const results = selectedIngredients.map((ingredient) => {
      const totalNeeded = ingredient.quantityPerBurger * this.quantityOfBurgers;
      const packagesNeeded = Math.ceil(
        totalNeeded / ingredient.packageQuantity
      );
      const cost = packagesNeeded * ingredient.packagePrice;

      return {
        ...ingredient,
        totalNeeded,
        packagesNeeded,
        cost,
      };
    });

    const totalCost = results.reduce((sum, item) => sum + item.cost, 0);
    const costPerBurger = totalCost / this.quantityOfBurgers;

    this.calculationResult = { results, totalCost, costPerBurger };
  }

  selectAllIngredients() {
    this.selectedIngredientIds = this.allIngredients.map(
      (ingredient) => ingredient.id
    );
  }
}
