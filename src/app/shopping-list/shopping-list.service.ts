
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingridient.model";

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    ingredients:Ingredient [] =[
        new Ingredient('apple', 5),
        new Ingredient('tomato', 10)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }
    
      addIngredient(ingridient: Ingredient){
        this.ingredients.push(ingridient);
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingridient: Ingredient[]){
        this.ingredients.push(...ingridient)
        this.ingredientsChanged.next(this.ingredients.slice())
      }
}