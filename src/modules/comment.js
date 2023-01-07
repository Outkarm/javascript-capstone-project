import {
  newmealDetailsContentHomeComment,
  newRecipeCloseBtnHomeComment,
  newSectOneItem2,
  newMealCommentHome,
} from "./variables.js";
import { newWindo } from "./api.js";
import { postComments, getCD } from "./addcomments.js";

const mealCommentModalHome = (meal) => {
  // meal = meal[0];
  let id = meal.idMeal;
  console.log(id);
  const recipeTitle = document.createElement("h2");
  recipeTitle.classList.add("recipe__title");
  recipeTitle.innerText = meal.strMeal;
  recipeTitle.id = meal.idMeal;
  newmealDetailsContentHomeComment.append(recipeTitle);
  const commentCont = document.createElement("div");
  commentCont.classList.add("comment__cont");
  newmealDetailsContentHomeComment.append(commentCont);
  const sectOneContItem2Form = document.createElement("form");
  sectOneContItem2Form.method = "post";
  sectOneContItem2Form.id = "sect__one__cont__item2__form";
  sectOneContItem2Form.classList.add("sect__one__cont__item2__form");
  commentCont.append(sectOneContItem2Form);
  const nameEnt = document.createElement("input");
  nameEnt.type = "text";
  nameEnt.name = "user";
  nameEnt.classList.add("name");
  nameEnt.placeholder = "Your  Name";

  sectOneContItem2Form.append(nameEnt);
  const commentEnt = document.createElement("input");
  commentEnt.type = "text";
  commentEnt.name = "comment";
  commentEnt.classList.add("comment__input");
  commentEnt.placeholder = "Your Thoughts";

  sectOneContItem2Form.append(commentEnt);
  const subBtn = document.createElement("button");
  subBtn.classList.add("sub__btn");

  subBtn.innerText = "Submit";
  subBtn.addEventListener("click", () => {
    let n = nameEnt.value;
    let c = commentEnt.value;
    postComments(id, n, c);
  });
  sectOneContItem2Form.append(subBtn);
  const sectOneContItem1Item2 = document.createElement("div");
  sectOneContItem1Item2.id = "sect__one__cont__item1__item2";
  sectOneContItem1Item2.classList.add("sect__one__cont__item1__item2");
  commentCont.append(sectOneContItem1Item2);
  const recipeMealImg = document.createElement("div");
  recipeMealImg.classList.add("recipe__meal__img");
  newmealDetailsContentHomeComment.append(recipeMealImg);
  const theImg = document.createElement("img");
  theImg.src = meal.strMealThumb;
  theImg.alt = "pizza";
  recipeMealImg.append(theImg);
  const recipeLink = document.createElement("div");
  recipeLink.classList.add("recipe__link");
  newmealDetailsContentHomeComment.append(recipeLink);
  const watchVid = document.createElement("a");
  watchVid.href = meal.strYoutube;
  watchVid.target = "blank";
  watchVid.innerText = "Watch Video";
  recipeLink.append(watchVid);
  newmealDetailsContentHomeComment.parentElement.classList.add("showRecipe");

  getCD(sectOneContItem1Item2, id);
  // const newCommentBtn = document.getElementById("comment__btn");

  // const newCommetBtnHom = document.getElementById("comment__btn");
  // const newScoreForm = document.getElementById("sect__one__cont__item2__form");
  // const newScoreList = document.getElementById("sect__one__cont__item1__item2");
  // const apiEndpoint =
  //   "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0hv6N1ThBvh5uDeVdjVD/comments/?item_id=item1";
  // const apiGameUrl =
  //   "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";

  // newScoreForm.addEventListener("submit", (event) => {
  //   event.preventDefault();
  //   const myUserInput = newScoreForm.elements.user;
  //   const myScoreInput = newScoreForm.elements.score;

  //   const newScore = {
  //     user: myUserInput.value,
  //     score: myScoreInput.value,
  //   };
  //   console.log("test");
  //   addMyNewScore(newScore);
  //   getAllMyGameScores();

  //   myUserInput.value = "";
  //   myScoreInput.value = "";
  // });

  // const addMyNewScore = async (myNewScore) => {
  //   try {
  //     const rest = await fetch(apiEndpoint, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(myNewScore),
  //     });

  //     const myData = await rest.json();

  //     if (!rest.ok) {
  //       return myData;
  //     }
  //     getAllGameScores();
  //     displayFeeback(myData.result);
  //     return myData;
  //   } catch (error) {
  //     return error;
  //   }
  // };

  // const showScores = ({ user, score }) => {
  //   const myelement = document.createElement("div");
  //   myelement.className = "score__item__par";
  //   myelement.innerHTML = `
  //                   <div class="score__item"><i class="fa-solid fa-user-tie"></i><p class="name">${user}</p><p class="score">${score}</p></div>
  //                     `;

  //   return myelement;
  // };

  // const getAllMyGameScores = async () => {
  //   try {
  //     const rest = await fetch(
  //       `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0hv6N1ThBvh5uDeVdjVD/comments`
  //     );
  //     const myData = await rest.json();
  //     console.log(rest);

  //     if (!rest.ok) {
  //       return myData;
  //     }

  //     const myScores = myData.result;

  //     newScoreList.innerHTML = "";
  //     myScores.forEach((element) => {
  //       newScoreList.appendChild(showScores(element));
  //     });

  //     return myScores;
  //   } catch (error) {
  //     return error;
  //   }
  // };

  // getAllMyGameScores();
};

/* || Remove Recipe */
newRecipeCloseBtnHomeComment.addEventListener("click", () => {
  newmealDetailsContentHomeComment.parentElement.classList.remove("showRecipe");
});
export { mealCommentModalHome as default };
