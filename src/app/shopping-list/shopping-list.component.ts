import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: [
  ]
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient [] =[
    new Ingredient('apple', 5),
    new Ingredient('tomato', 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
