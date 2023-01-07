/* || Imports */
import { commentsPosts } from "./commentsclass.js";
import { commentGets} from "./commentgets.js"
import { newMealsWrapperItems } from "./variables.js";
/* ======================================================================== */
let html = "";
/* ======================================================================== */
/* || Add Meall Elemnts */
export const addMealElments = (meals) => {
  meals.forEach((meal) => {
    const addMeal = document.createElement("div");
    addMeal.className = "meal";
    newMealsWrapperItems.appendChild(addMeal);
    html = `
    <img class="meal__img" id="meal__img" src="${meal.image}" alt="${meal.name}" />
    <div class="likes__name__cont">
      <h2 class="meal__name">
        ${meal.name} <span class="meal__conter"></span>
      </h2>
      <div class="likes__cont">
        <img
          class="like__img"
          id="${meal.id}"
          src="./assets/img/heart-line.png"
          alt="like icon"
        />
        <p class="total__likes">${meal.likes} likes</p>
      </div>
    </div>
`;
    addMeal.innerHTML = html;
    /* ======================================================================== */
    /* || Add Comments */
    const newCommentCont = document.createElement("div");
    newCommentCont.className = "new__comment__container";
    addMeal.appendChild(newCommentCont);
    const newComment = document.createElement("button");
    newComment.className = "comment__btn";
    newComment.innerHTML = "Comments";
    newComment.addEventListener("click", () => {
      const newMealDetailsContentComment = document.querySelector(
        ".meal__details__content_Comment"
      );
     console.log(newMealDetailsContentComment,"clicked")
      newMealDetailsContentComment.style.display = "grid";
      newMealDetailsContentComment.innerHTML = `
      <div class="comment__details">
        <div class="btn__close"><button id="close__btn" class="close__btn">&times;</button></div>
        <div class="comment__modal__details">
          <div class="comment__modal__details__detail">
          <div class="comment__modal__details__detail__responsive">
            <img src="${meal.image}" alt="" class="responsive comment__responsive__respo">
            </div>
            <h3>comment</h3>
            <form action="">
              <div class="formcontrol">
                <input type="text" name="name" id="name" placeholder="Please Type your Name" />
              </div>
              <div class="formcontrol">
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div class="formcontrol">
                <input type="submit" value="comment" />
              </div>
            </form>
          </div>
          <div class="comment__modal__details__detail">
            <span>${meal.name}</span>
            <p>
              ${meal.description}
            strInstructions
            </p>
            <h3>comments <span id="comment__numbers"></span></h3>
            <ul id="user__comments">
            </ul>
          </div>
        </div>
      </div>
    `;
      /* ======================================================================== */
      /* || Get Comments */
      commentGets(meal.id).then((d) => {
        const getComments = document.getElementById("comment__numbers");
        if (d.length > 0) {
          getComments.innerHTML = `(${d.length})`;
        } else {
          getComments.innerHTML = "(0)";
        }
        const user__comments = document.getElementById("user__comments");
        d.forEach((item) => {
          user__comments.innerHTML += `
      <li>${`${item.username} : ${item.comment} : ${item.creation_date}`}</li>
      `;
        });
      });
      /* ======================================================================== */
      /* || Close Btn */
      const newCloseBtn = document.querySelector("#close__btn");
      newCloseBtn.addEventListener("click", () => {
        newMealDetailsContentComment.style.display = "none";
      });
      /* ======================================================================== */

      /* || Form */
      const newForm = document.querySelector("form");
      newForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (newForm.name.value === "" || newForm.textarea.value === "") {
          // eslint-disable-next-line no-alert
          alert("Please enter the data");
        } else {
          const newMyData = {
            item_id: meal.id,
            username: newForm.name.value,
            comment: newForm.textarea.value,
          };
          /* ======================================================================== */
          /* || Post Comments */
          commentsPosts(newMyData);
          newForm.name.value = " ";
          newForm.textarea.value = " ";
        }
      });
    });
    newCommentCont.appendChild(newComment);
    /* ======================================================================== */
    /* || Reservation */
    const newReservation = document.createElement("button");
    newReservation.className = "Reservation";
    newReservation.innerHTML = "Reservartion";
    newCommentCont.appendChild(newReservation);
  });
};
