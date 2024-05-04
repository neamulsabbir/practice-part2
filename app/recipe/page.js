import RecipeCard from "@/components/recipe/RecipeCard";
import { getAllRecipe } from "@/dataBase/queries";

export const metadata = {
  title: "Khana Khazana - All Recipe",
  description: "Khana Khazana app here you will find food recipe",
  openGraph: {
    images: [
      {
        url: `https://lws-assignment-m-8.vercel.app/api/og?title=Khana Khazana - All Recipe`,
        width: 900,
        height: 400,
      },
    ],
  },
};

const RecipePage = async () => {
  const allRecipe = await getAllRecipe();
  return (
    <section className="container py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8 justify-items-center">
        {allRecipe.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default RecipePage;
