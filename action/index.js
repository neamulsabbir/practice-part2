"use server";

import { dbConnect } from "@/dataBase/dbConnect";
import UserModel from "@/models/usersModel";
import { replaceMongoIdInObject } from "@/utils/replaceMongoIdInObject";
import mongoose from "mongoose";
import { redirect } from "next/navigation";

async function registerAction(formData) {
	await dbConnect();
	const userData = Object.fromEntries(formData);
	await UserModel.create(userData);

	redirect("/login");
}

async function loginAction(formData) {
	try {
		const data = Object.fromEntries(formData);

		const userData = { email: data?.email, password: data?.password };

		const response = await UserModel.find(userData).lean();

		if (response[0]?.firstName) {
			return replaceMongoIdInObject(response[0]);
		} else {
			return;
		}
	} catch (error) {
		throw Error(error.message);
	}
}

async function toggleFavoriteAction(recipeId, authId) {
	await dbConnect();
	try {
		const user = await UserModel.findById(new mongoose.Types.ObjectId(authId));

		if (user) {
			const foundIsFavorite = user.favourites.find((id) => id.toString() === recipeId);

			if (foundIsFavorite) {
				user.favourites.pull(new mongoose.Types.ObjectId(recipeId));
				user.save();
				return false;
			} else {
				user.favourites.push(new mongoose.Types.ObjectId(recipeId));
				user.save();
				return true;
			}
		}
	} catch (error) {
		throw Error(error.message);
	}
}

export { loginAction, registerAction, toggleFavoriteAction };
