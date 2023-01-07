const mealsCounter = () => {
  const mealCounter = document.querySelectorAll('.meal__conter');
  const totalMeals = document.querySelector('.total__meals');

  if (mealCounter.length < 1) {
    totalMeals.innerHTML = ` (${0})`;
    return 0;
  }
  totalMeals.innerHTML = ` (${mealCounter.length})`;
  return (mealCounter.length);
};

export default mealsCounter;