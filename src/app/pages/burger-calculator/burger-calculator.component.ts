import { Component } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
import { Ingredient } from '../../model/ingredient.model';
import { CalculatedIngredient } from '../../model/calculated-ingredient.model';
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

    const results: CalculatedIngredient[] = selectedIngredients.map(
      (ingredient) => {
        const totalNeeded =
          ingredient.quantityPerBurger * this.quantityOfBurgers;
        const packagesNeeded = Math.ceil(
          totalNeeded / ingredient.packageQuantity
        );
        const cost = packagesNeeded * ingredient.packagePrice;

        let subResults: CalculatedIngredient[] = [];

        if (ingredient.subIngredients && ingredient.subIngredients.length > 0) {
          subResults = ingredient.subIngredients.map((subIng) => {
            const subTotalNeeded =
              subIng.quantityPerBurger * this.quantityOfBurgers;
            const subPackagesNeeded = Math.ceil(
              subTotalNeeded / subIng.packageQuantity
            );
            const subCost = subPackagesNeeded * subIng.packagePrice;

            return {
              ...subIng,
              totalNeeded: subTotalNeeded,
              packagesNeeded: subPackagesNeeded,
              cost: subCost,
            };
          });
        }

        return {
          ...ingredient,
          totalNeeded,
          packagesNeeded,
          cost,
          subResults,
        };
      }
    );

    const totalCost = results.reduce((sum, item) => {
      if (item.subResults && item.subResults.length > 0) {
        const subTotal = item.subResults.reduce(
          (subSum, sub) => subSum + sub.cost,
          0
        );
        return sum + subTotal;
      } else {
        return sum + item.cost;
      }
    }, 0);

    const costPerBurger = totalCost / this.quantityOfBurgers;

    this.calculationResult = { results, totalCost, costPerBurger };
  }

  selectAllIngredients() {
    this.selectedIngredientIds = this.allIngredients.map(
      (ingredient) => ingredient.id
    );
  }

  selectAllSauces(): void {
    const sauceIds = this.allIngredients
      .filter((ingredient) => ingredient.isSauce)
      .map((ingredient) => ingredient.id);

    this.selectedIngredientIds = Array.from(
      new Set([...this.selectedIngredientIds, ...sauceIds])
    );
  }
}
