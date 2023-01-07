import { Meals } from "./mealsclass.js";

export class ApiLink {
  static ApiUrl = "https://themealdb.com/api";

  static async mealsGet() {
    const RESPONSE = await fetch(`${ApiLink.ApiUrl}/json/v1/1/search.php?s=`);
    const { meals } = await RESPONSE.json();
    return meals;
  }

  static async mealsGetAll() {
    const arrObj = await this.mealsGet();
    // eslint-disable-next-line max-len
    const mealsArray = arrObj.map(
      (meal) =>
        new Meals(
          meal.idMeal,
          meal.strMeal,
          meal.strMealThumb,
          meal.strInstructions
        )
    );
    return mealsArray;
  }
}
