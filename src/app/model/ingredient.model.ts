export interface Ingredient {
  id: number;
  name: string;
  packagePrice: number; // Preço do pacote (em reais)
  packageQuantity: number; // Quantidade que vem no pacote (gramas, unidades, fatias)
  quantityPerBurger: number; // Quanto usa em cada hambúrguer
  subIngredients?: Ingredient[];
  isSauce?: boolean; // Indica se o ingrediente é um molho
}
