// Assign roles to HTML Tags
const urlInput = document.getElementById("url_input");
const searchButton = document.getElementById("url_check_btn");
const recipeName = document.getElementById("recipe-name");
const recipeImg = document.getElementById("recipe-img");
const recipeDetails = document.getElementById("recipe-details");

// Button Function
searchButton.addEventListener("click", () => {
  getWebsiteData(urlInput.value);
});

// Function for fetch Info.
const getWebsiteData = async (x) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${x}`
    );
    const data = await res.json();
    if (data.meals === null) {
      console.log("nothing");
      window.alert("No recipe FOund");
    }
    console.log(data.meals);
    const { idMeal, strMeal, strMealThumb } = data.meals[0];
    console.log(idMeal, strMeal);
    // const id = data.meals[0].idMeal;

    const res2 = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const data2 = await res2.json();
    console.log(data2);
    const { strInstructions } = data2.meals[0];
    console.log(strInstructions);

    recipeName.textContent = strMeal;
    recipeImg.src = strMealThumb;
    recipeDetails.textContent = strInstructions;
  } catch (error) {
    console.log(error);
  }
};
