import "./index.css";
import {
  /* || Hmberger */
  newHamburger,
  newNavMenue,
  /* || Screen Loader */
  newScreenLoader,
  newSectOneCont,
  /* || NavLinkes */
  newSearchNavLink,
  newMealsNavLink,
  newContactNavLink,
  /* || Wrappers */
  newMealsWrapper,
  newMSearchMealsWrapper,
  newContactMealsWrapper,
  /* || Comment Modal */
  newMealDetailsContentComment
} from "./modules/variables.js";
import { addMealElments } from "./modules/render.js";
/* import Api from "./modules/api_class.js"; */
import { ApiLink } from "./modules/apiclass";
/* import ApiLikes from "./modules/api_likes_class.js"; */
import { LikesApi } from "./modules/apiLikesclass";
/* import mealsCounter from "./modules/meals_counter.js"; */
import mealsCounter  from "./modules/countermeals";

/* ======================================================================== */
/* || Humberger Menut Function  */
newHamburger.addEventListener("click", () => {
  newHamburger.classList.toggle("active");
  newNavMenue.classList.toggle("active");
});
/* ======================================================================== */
/* || Screen Loader Function */
const loader = () => {
  newSectOneCont.classList.add("hide");
  newScreenLoader.classList.remove("hide");
  setTimeout(() => {
    newScreenLoader.classList.add("hide");
    newSectOneCont.classList.remove("hide");
  }, 1000);
};
/* ======================================================================== */
/* || Wrapper Loader Function */
/* || Search Meals Link */
newSearchNavLink.addEventListener("click", (e) => {
  e.preventDefault();
  loader();
  if (newMealsWrapper.classList.contains("show")) {
    newMealsWrapper.classList.replace("show", "hide");
    newMealsNavLink.classList.remove("active");
    newMSearchMealsWrapper.classList.replace("hide", "show");
    newSearchNavLink.classList.add("active");
    newSectOneCont.classList.replace("sect__one__cont", "add__back");
  } else {
    newContactMealsWrapper.classList.replace("show", "hide");
    newContactNavLink.classList.remove("active");
    newSearchNavLink.classList.add("active");
    newMSearchMealsWrapper.classList.replace("hide", "show");
    newSectOneCont.classList.replace("contact__back", "add__back");
  }
});
/* ======================================================================== */
/* || Contact Meals Link */
newContactNavLink.addEventListener("click", (e) => {
  e.preventDefault();
  loader();
  if (newMealsWrapper.classList.contains("show")) {
    newMealsWrapper.classList.replace("show", "hide");
    newMealsNavLink.classList.remove("active");
    newContactMealsWrapper.classList.replace("hide", "show");
    newContactNavLink.classList.add("active");
    newSectOneCont.classList.replace("sect__one__cont", "contact__back");
  } else {
    newMSearchMealsWrapper.classList.replace("show", "hide");
    newSearchNavLink.classList.remove("active");
    newContactMealsWrapper.classList.replace("hide", "show");
    newContactNavLink.classList.add("active");
    newSectOneCont.classList.replace("add__back", "contact__back");
  }
});

/* ======================================================================== */
/* || Meals Link */
newMealsNavLink.addEventListener("click", (e) => {
  e.preventDefault();
  loader();
  if (newMSearchMealsWrapper.classList.contains("show")) {
    newMSearchMealsWrapper.classList.replace("show", "hide");
    newSearchNavLink.classList.remove("active");
    newMealsWrapper.classList.replace("hide", "show");
    newMealsNavLink.classList.add("active");
    newSectOneCont.classList.replace("add__back", "sect__one__cont");
  } else {
    newContactMealsWrapper.classList.replace("show", "hide");
    newContactNavLink.classList.remove("active");
    newMealsWrapper.classList.replace("hide", "show");
    newMealsNavLink.classList.add("active");
    newSectOneCont.classList.replace("contact__back", "sect__one__cont");
  }
});

/* ======================================================================== */
/* || Meals Loader */
window.addEventListener("load", async () => {
  const newLikes = await LikesApi.likeGet();
  const newMeal = await ApiLink.mealsGetAll();
  const newMeals = newMeal.map((meal) => {
    const likesArr = newLikes.filter((like) => like.item_id === meal.id);
    meal.likesChanger = likesArr.length && likesArr[0].likes;
    return meal;
  });
  addMealElments(newMeals);
  const mealCounters = document.querySelectorAll(".meal__conter");
  let counter = 1;

  mealCounters.forEach((meal) => {
    meal.innerHTML = `Meal ${counter}`;
    counter += 1;
  });
  mealsCounter();
/* ======================================================================== */
/* || Likes */
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("like__img")) {
      if (event.target.src.includes("heart-line")) {
        event.target.src = "./assets/img/heart-fill.png";
        LikesApi.likePost(event.target.id);
        newMeals.forEach((meal) => {
          if (meal.id === event.target.id) {
            const counterLikes = event.target.nextElementSibling;
            counterLikes.innerHTML = `${meal.likes + 1} likes`;
          }
        });
      } else {
        event.target.src = "./assets/img/heart-line.png";
        newMeals.forEach((meal) => {
          if (meal.id === event.target.id) {
            const counterLikes = event.target.nextElementSibling;
            counterLikes.innerHTML = `${meal.likes} likes`;
          }
        });
      }
    }
  });
});

/* ======================================================================== */

