let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese", "Garlic", "Orageno", "Garam Masala"]
  };

  let ingredientsList = recipeObj.ingredients;

  let ingrHeadingEle = document.getElementById("ingrHeading");
  let imageEle = document.getElementById("image");
  let unorderedList = document.getElementById("unorderedList");

  ingrHeadingEle.textContent = recipeObj.title;
  ingrHeadingEle.classList.add("recipe-title");

  imageEle.setAttribute("src", recipeObj.imgSrc);
  imageEle.classList.add("w-100");

  for(let ingredient of ingredientsList) {
    let michleScott = document.createElement("li");
    michleScott.textContent = ingredient;
    michleScott.classList.add("ingredient");
    unorderedList.appendChild(michleScott);
  }
