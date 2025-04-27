import { Ingredient } from "./ingredient.model";

export interface CalculatedIngredient extends Ingredient {
  totalNeeded: number;
  packagesNeeded: number;
  cost: number;
  subResults?: CalculatedIngredient[];
}
