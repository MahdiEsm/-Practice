import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingridient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Hamburger',
         'Meat + onion + tomato + mozzarella cheese + lettuce',
          'https://www.mashed.com/img/gallery/fast-food-hamburgers-ranked-worst-to-best/intro-1540401194.jpg',
          [
              new Ingredient('Soda', 3),
              new Ingredient('FrenchFrize', 2)
          ]),
          new Recipe('Pizza',
          'Bologna + Sweet pepper + tomato + pizza cheese + olive',
           'https://lh3.googleusercontent.com/uyfYScpIdIRdW_octxwXMnSPxJ64yfM4hUmDwGk6NeOs9jTeYcIpxJaPpwY4RFZwTj4kdJsK=w1080-h608-p-no-v0',
           [
            new Ingredient('Soda', 3),
            new Ingredient('FrenchFrize', 2)
           ]),
      ]
    
      constructor(private slService: ShoppingListService) {}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes.slice()[index];
      }

      addIngToShoppingList(ingridients: Ingredient[]){
        this.slService.addIngredients(ingridients);
      }
}