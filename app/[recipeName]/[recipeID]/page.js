import RecipeDetails from "@/components/recipe/RecipeDetails";
import { getRecipeDetails } from "@/dataBase/queries";

export async function generateMetadata({ params, searchParams }, parent) {
	const recipeDetails = await getRecipeDetails(params.recipeID);

	const { thumbnail, image, name, description } = recipeDetails[0];

	return {
		title: `Khana Khazana - ${name}`,
		description: description,
		openGraph: {
			title: `Khana Khazana - ${name}`,
			images: [thumbnail, image],
		},
	};
}

const RecipieDetail = async ({ params }) => {
	const recipeDetails = await getRecipeDetails(params.recipeID);

	return <RecipeDetails recipeDetails={recipeDetails} />;
};

export default RecipieDetail;
