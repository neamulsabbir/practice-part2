import { getCategories } from "@/dataBase/categoryDB";
import Link from "next/link";





const SideBar = () => {

    const categories = getCategories();

    return (
        <div className="col-span-12 md:col-span-3">
            <h3 className="font-bold text-xl">Recipes</h3>
            <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
                {
                    categories.map(category => <li key={category.catId}>

                        <Link className={`hover:text-orange-500`} href={`/category/${category.categoryUrl}/${category.catId}`} >{category.categoryName}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default SideBar;

