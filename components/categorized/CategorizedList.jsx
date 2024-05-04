import RecipeCard from "../recipe/RecipeCard";

const CategorizedList = ({ recipes, category }) => {

    return (
        <section className="container py-8">
            <h3 className="font-semibold text-xl">{category}</h3>
            {
                recipes.length > 0 ? <> <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">

                    {recipes.map((recipe, index) => (

                        <RecipeCard key={index} recipe={recipe} />

                    ))}
                </div> </> : <> <div className="flex items-center justify-center h-screen">
                    <h2 className="text-2xl">No data Found</h2>
                </div></>
            }
        </section>
    );
};

export default CategorizedList;