import mongoose from "mongoose";
import { dbConnect } from "./dbConnect";

const { default: RecipeModel } = require("@/models/recipesModel");
const { replaceMongoIdInArray } = require("@/utils/replaceMongoIDInArray");

async function getAllRecipe() {
  await dbConnect();
  try {
    let allRecipe = [];

    allRecipe = await RecipeModel.find().lean();

    return replaceMongoIdInArray(allRecipe);
  } catch (error) {
    throw Error(error.message);
  }
}

async function getRecipeDetails(recipeID) {
  await dbConnect();
  try {
    let recipe = [];

    recipe = await RecipeModel.findOne(
      new mongoose.Types.ObjectId(recipeID)
    ).lean();

    return replaceMongoIdInArray([recipe]);
  } catch (error) {
    throw Error(error.message);
  }
}

async function getRecipesByCategory(categoryName) {
  await dbConnect();
  try {
    let recipeByCategory = [];

    recipeByCategory = await RecipeModel.find({
      category: categoryName,
    }).lean();

    return replaceMongoIdInArray(recipeByCategory);
  } catch (error) {
    throw Error(error.message);
  }
}

export { getAllRecipe, getRecipeDetails, getRecipesByCategory };
