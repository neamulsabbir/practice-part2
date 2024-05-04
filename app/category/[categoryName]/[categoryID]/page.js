import CategorizedList from "@/components/categorized/CategorizedList";
import { getCategoryById } from "@/dataBase/categoryDB";
import { getRecipesByCategory } from "@/dataBase/queries";

export async function generateMetadata({ params, searchParams }, parent) {
  const category = getCategoryById(params.categoryID);
  return {
    title: `Khana Khazana - ${category.categoryName}`,
    openGraph: {
      images: [
        {
          url: `https://lws-assignment-m-8.vercel.app/api/og?title=Khana Khazana - ${category.categoryName}`,
          width: 900,
          height: 400,
        },
      ],
    },
  };
}

const categoryPage = async ({ params }) => {
  const category = getCategoryById(params.categoryID);

  const recipes = await getRecipesByCategory(category.categoryName);

  return (
    <>
      <CategorizedList recipes={recipes} category={category.categoryName} />
    </>
  );
};
export default categoryPage;
