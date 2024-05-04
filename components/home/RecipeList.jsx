
import { getAllRecipe } from '@/dataBase/queries';
import RecipeCard from '../recipe/RecipeCard';

const RecipeList = async () => {
    const allRecipe = await getAllRecipe();
    return (
        <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
                {allRecipe.map((recipe, index) => (

                    <RecipeCard key={index} recipe={recipe} />

                ))}
            </div>
        </div>
    );
};

export default RecipeList;
