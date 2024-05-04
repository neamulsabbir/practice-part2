const categories = [
  {
    catId: "01",
    categoryName: "Breakfast & Brunch",
    categoryUrl: "Breakfast&Brunch",
  },
  {
    catId: "02",
    categoryName: "Dessert",
    categoryUrl: "Dessert",
  },
  {
    catId: "03",
    categoryName: "Brunch Haven Delights",
    categoryUrl: "BrunchHavenDelights",
  },
  {
    catId: "04",
    categoryName: "Rise & Dine Eatery",
    categoryUrl: "RiseDineEatery",
  },
  {
    catId: "05",
    categoryName: "Breakfast Oasis Junction",
    categoryUrl: "BreakfastOasisJunction",
  },
];

function getCategories() {
  return categories;
}
function getCategoryById(id) {
  return categories.find((category) => category.catId === id);
}
function getCategoryByName(name) {
  return categories.find((category) => category.categoryName === name);
}

export { getCategories, getCategoryById, getCategoryByName };
