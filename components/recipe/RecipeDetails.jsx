import { getCategoryByName } from "@/dataBase/categoryDB";
import Image from "next/image";
import Link from "next/link";
import DetailsAction from "./DetailsAction";
import RecipeStep from "./RecipeStep";

const RecipeDetails = async ({ recipeDetails }) => {
    const { author, rating, category, name, thumbnail, description, totalTime, activeTime, serves, steps, id } = recipeDetails[0];

    let newThumbnailUrl = thumbnail.replace(/\/\d+x\d+/, '');

  

    const categoryObj = getCategoryByName(category);
    const categoryUrl = `/category/${categoryObj.categoryUrl}/${categoryObj.catId}`

    const socialUrl = `https://lws-assignment-m-8.vercel.app/${name.split(' ').join('')}/${id}`


    return (
        <>
            <section>
                <div className="grid grid-cols-12 container gap-8 justify-items-center">
                    <div className="col-span-12 md:col-span-6 rounded-md">
                        <Image src={newThumbnailUrl} alt=""
                            width={900} height={600}
                            className="w-full h-full rounded-lg object-contain" />
                    </div>
                    <div className="col-span-12 md:col-span-6 py-8 flex flex-col justify-center">
                        <h2 className="font-semibold text-4xl lg:w-8/12 leading-10">{name}</h2>
                        <Link href={categoryUrl} className="text-xs text-[#eb4a36] italic my-2">{category}</Link>
                        <p className="text-gray-600 text-sm my-6 leading-6">{description}</p>

                        <div className="flex gap-4 justify-center divide-x my-12">
                            <div className="flex-1 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                    <path d="M12 7v5l3 3" />
                                </svg>
                                <h3 className="font-medium text-lg text-gray-700 mt-2">Prep time</h3>
                                <p className="text-gray-500 text-sm">{activeTime}</p>
                            </div>
                            <div className="flex-1 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M6.5 17h11" />
                                    <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
                                    <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
                                </svg>
                                <h3 className="font-medium text-lg text-gray-700 mt-2">Cook time</h3>
                                <p className="text-gray-500 text-sm">{totalTime}</p>
                            </div>
                            <div className="flex-1 text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                                </svg>
                                <h3 className="font-medium text-lg text-gray-700 mt-2">Servings</h3>
                                <p className="text-gray-500 text-sm">{serves}</p>
                            </div>
                        </div>

                        <DetailsAction socialUrl={socialUrl} recipeId={id} name={name} />

                    </div>
                </div>
            </section>

            <section>
                <div className="container py-12">
                    <h3 className="font-semibold text-xl py-6">How to Make it</h3>
                    <div>
                        {
                            steps.map((step, index) => <RecipeStep key={index} length={index} content={step} />)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default RecipeDetails;
