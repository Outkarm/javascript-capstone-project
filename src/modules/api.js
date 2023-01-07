import {
  newHumburger,
  newNavMenu,
  newMealDetailsContent,
  newMealDetailsContentHome,
  newRecipeCloseBtnHome,
  newMealLlist,
  newRecipeCloseBtn,
  newSearchBtn,
  newSectOneItem2,
} from "./variables.js";
import { getLikes } from "./getLikes.js";
import { addLike } from "./getLikes.js";
import mealCommentModalHome from "./comment.js";

import Meal from "./meals.js";

/*  import { ApiLikes } from './getLikes.js'; */

const totalMeals = document.querySelector(".total__meals");
const totalMealsSearch = document.querySelector(".total__meals__search");

function mealRecipeModal(meal) {
  meal = meal[0];
  let html = `
  <h2 class="recipe__title">${meal.strMeal}</h2>
              <p class="recipe__catagory">${meal.strCategory}</p>
              <div class="recipe__instruct">
                <h3>Instraction</h3>
                <p>
                 ${meal.strInstructions}
                </p>
              </div>
              <div class="recipe__meal__img">
                <img src="${meal.strMealThumb}" alt="Piza" />
              </div>
              <div class="recipe__link">
                <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
              </div>`;
  newMealDetailsContent.innerHTML = html;
  newMealDetailsContent.parentElement.classList.add("showRecipe");
}

/* || Meals Page */
export const newWindo = window.addEventListener("load", async () => {
  const likesD = await getLikes();
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  )
    .then((response) => response.json())
    .then((data) => {
      // let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          const mealItem = document.createElement("div");
          const id = meal.idMeal;
          mealItem.classList.add("meal__item");
          mealItem.id = meal.idMeal;
          newSectOneItem2.append(mealItem);
          const mealImg = document.createElement("div");
          mealImg.classList.add("meal__img");
          mealItem.append(mealImg);
          const img = document.createElement("img");
          img.src = meal.strMealThumb;
          img.alt = "IndianFood";
          img.classList.add("piza__pic");
          mealImg.append(img);
          const mealNameHome = document.createElement("div");
          mealNameHome.classList.add("meal__name__home");
          mealItem.append(mealNameHome);
          const mealHead = document.createElement("h2");
          mealHead.innerText = meal.strMeal;
          mealNameHome.append(mealHead);
          const mealCo = document.createElement("span");
          mealCo.classList.add("meal__counter");
          mealHead.append(mealCo);
          const recipeBtnHome = document.createElement("a");
          recipeBtnHome.classList.add("recipe__btn__home");
          recipeBtnHome.innerText = "Get Recipe";
          recipeBtnHome.addEventListener("click", () => {
            mealRecipeModalHome(meal);
          });
          mealNameHome.append(recipeBtnHome);
          const likeCommentHome = document.createElement("div");
          likeCommentHome.classList.add("like__comment__home", "show");
          likeCommentHome.id = "like__comment__home";
          mealItem.append(likeCommentHome);
          const likyHome = document.createElement("div");
          likyHome.classList.add("liky__home");
          likyHome.id = "liky__home";
          likeCommentHome.append(likyHome);
          const hearLinePic = document.createElement("img");
          hearLinePic.src = "assets/img/heart-line.png";
          hearLinePic.alt = "heart_line";
          hearLinePic.classList.add("hear__line__pic");
          hearLinePic.id = meal.idMeal;
          likyHome.append(hearLinePic);
          const newLike = document.createElement("div");
          newLike.classList.add("new__like");
          likyHome.append(newLike);
          const counterHome = document.createElement("h4");
          counterHome.classList.add("counter__home");
          counterHome.id = "counter__home";
          let liked = false;
          likesD.forEach((e) => {
            if (hearLinePic.id === e.item_id) {
              counterHome.innerText = e.likes;
            }
            likyHome.addEventListener("click", () => {
              if (mealItem.id === e.item_id) {
                if (liked === false) {
                  e.likes += 1;
                  counterHome.innerText = e.likes;
                  liked = true;
                } else {
                  e.likes -= 1;
                  counterHome.innerText = e.likes;
                  liked = false;
                }
                e.likes = Math.floor(counterHome.innerText);
                addLike(e.item_id, e.likes);
              }
            });
          });

          newLike.append(counterHome);
          const likeP = document.createElement("p");
          likeP.classList.add("like__p");
          likeP.innerText = "Like";
          newLike.append(likeP);
          const comment = document.createElement("div");
          comment.classList.add("comment");
          likeCommentHome.append(comment);
          comment.addEventListener("click", () => {
            mealCommentModalHome(meal);
          });
          const commentBtn = document.createElement("a");
          commentBtn.classList.add("comment__btn");
          commentBtn.id = `comment__btn ${meal.idMeal}`;
          commentBtn.innerText = "Comment";
          comment.append(commentBtn);
        });
      }
    });
  const mealCounter = document.querySelectorAll(".meal__counter");

  const mealsCounter = () => {
    if (mealCounter.length < 1) {
      totalMeals.innerHTML = ` (${0})`;
      return 0;
    }
    totalMeals.innerHTML = ` (${mealCounter.length})`;
    return mealCounter.length;
  };

  mealsCounter();

  /* class Api {
    static URL = 'https://themealdb.com/api';
  
    static async getMeals() {
      const RESPONSE = await fetch(`${Api.URL}/json/v1/1/search.php?s=`);
      const { meals } = await RESPONSE.json();
      return meals;
    }
  
    static async getAllMeals() {
      const arrObj = await this.getMeals();
      // eslint-disable-next-line max-len
      const arrMeals = arrObj.map((meal) => new Meal(meal.idMeal, meal.strMeal, meal.strMealThumb, meal.strInstructions));
      return arrMeals;
    }
  }
                */

  const newLikeCounter = document.getElementById("counter__home");
  const newScoreList = document.getElementById("sect__one__cont__item1__item2");
  const apiEndpoint =
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/re1HkEZMNg4HkLPPFhkd/scores/";
  const apiGameUrl =
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";

  /* const MEALS = await Api.getAllMeals();
                const LIKES = await likesApi.likesGet();
                const newMeals = MEALS.map((meal) => {
                  const likesArr = LIKES.filter((like) => like.item_id === meal.id);
                  meal.changeLikes = likesArr.length && likesArr[0].likes;
                  return meal;
                }); */
  /*  document.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                      if (e.target.classList.contains('hear__line__pic')) {
                        if(e.target.src.includes('heart-line')) {
                          e.target.src = 'assets/img/heart-fill.png';
                          
                          newMeals.forEach((meal) => {
                            if (meal.id === e.target.id) {
                              const counterLikes = e.target.nextElementSibling; 
                              newLikeCounter.innerHTML = `${meal.likes + 1} likes`;
                            }
                          }); 

                            } else {
                              e.target.src = 'assets/img/heart-line.png';
                            }
                      }
                     }) */
});

/* class likesApi {
  static likeApUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IXJFUIasaU3NTiCbJHbl/likes/';

  static async likesGet() {
    const response = await fetch(likesApi.likeApUrl);
    const data = await response.json();
    return data;
    
  };
 
  static async likesPost(id) {
    const response = await fetch(likesApi.likeApUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return data;
  }
} */

function mealRecipeModalHome(meal) {
  // meal = meal[0];
  let html = `
    <h2 class="recipe__title">${meal.strMeal}</h2>
                <p class="recipe__catagory">${meal.strCategory}</p>
                <div class="recipe__instruct">
                  <h3>Instraction</h3>
                  <p>
                   ${meal.strInstructions}
                  </p>
                </div>
                <div class="recipe__meal__img">
                  <img src="${meal.strMealThumb}" alt="Piza" />
                </div>
                <div class="recipe__link">
                  <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
                </div>`;
  newMealDetailsContentHome.innerHTML = html;
  newMealDetailsContentHome.parentElement.classList.add("showRecipe");
}
/* || Show Rcipe PopUp */
// newSectOneItem2.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (e.target.classList.contains("recipe__btn__home")) {

// });

/* || Create a modal */

/* || Remove Recipe */
newRecipeCloseBtnHome.addEventListener("click", () => {
  newMealDetailsContentHome.parentElement.classList.remove("showRecipe");
});

/* || Search Meals Page */
export const newSearchMeal = newSearchBtn.addEventListener("click", () => {
  let searchInputTxt = document.getElementById("serarch__content").value.trim();
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`
  )
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += `
              <div class="meal__item" data-id="${meal.idMeal}">
                <div class="meal__img">
                  <img
                    src="${meal.strMealThumb}"
                    alt="IndianFood"
                    class="piza__pic"
                  />
                </div>
                <div class="meal__name">
                  <h2>${meal.strMeal}</h2><span class="meal__counter__search"></span>
                  <a href="" class="recipe__btn">Get Recipe</a>
                </div>
                <div class="like__comment__home show" id="like__comment__home">
                        <div class="liky__home" id="liky__home">
                          <img
                          src="assets/img/heart-line.png"
                          alt="heart_line"
                          class="hear__line__pic"
                          img-id="${meal.idMeal}"
                           />
                           <div class="new__like">
                           <h4 id="counter__home" class="counter__home">0</h4>
                          <p class"like__p">Like</p>
                          </div>
                        </div>
                           <div class="comment"> 
                            <a href="" class="comment__btn" id="comment__btn" comment-id="${meal.idMeal}">Comment</a>
                           </div>
                    </div> 
              </div>`;
        });
        newMealLlist.classList.remove("notFound");
      } else {
        html = "Sorry, we didn't find any meal!";
        newMealLlist.classList.add("notFound");
      }
      newMealLlist.innerHTML = html;

      const mealCounterSearch = document.querySelectorAll(
        ".meal__counter__search"
      );

      const mealsCounterSearch = () => {
        if (mealCounterSearch.length < 1) {
          totalMealsSearch.innerHTML = ` (${0})`;
          return 0;
        }
        totalMealsSearch.innerHTML = ` (${mealCounterSearch.length})`;
        return mealCounterSearch.length;
      };

      mealsCounterSearch();
    });
});

/* || Get the Recipe of the Meal */
// newMealLlist.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (e.target.classList.contains("recipe__btn")) {
//     let mealItem = e.target.parentElement.parentElement;
//     fetch(
//       `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`
//     )
//       .then((response) => response.json())
//       .then((data) => mealRecipeModal(data.meals));
//   }
// });

/* || Create a modal */

/* || Remove Recipe */

// newRecipeCloseBtn.addEventListener("click", () => {
//   newMealDetailsContent.parentElement.classList.remove("showRecipe");
// });

/* || Contact */
export const newContactEl = document.getElementById("sect__one__items__item3");
newContactEl.innerHTML = `
<h1>Contact Information</h1>
      <p>Do you have any Information or do you just want to say "Hello"? <br> You can reach out to us!</p>
      <ul>
        <li>Our e-mail: mrkamin2@gmail.com</li>
        <li>Our phone number: 009259904851</li>
        <li>Our address: Awesome Park, 22803 London, U.K</li>
      </ul>
`;
