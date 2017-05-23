import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	/** pinakas me recipes */
	/** to recipes pairnei ta data apo to recipe model*/
	recipes: Recipe[] = [
		new Recipe('A Test Recipe', 'This is simply a test','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/1024px-Chicken-kathi-roll-recipe.jpg'),
		new Recipe('A Test Recipe', 'This is simply a test','https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/1024px-Chicken-kathi-roll-recipe.jpg')
	
	];

  constructor() { }

  ngOnInit() {
  }

}
