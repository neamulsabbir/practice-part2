"use client";
import { useAuth } from "@/Hooks/useAuth";
import { loginAction } from "@/action";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
	const [error, setError] = useState("");

	const { auth, setAuth } = useAuth();
	const router = useRouter();

	async function onSubmit(event) {
		event.preventDefault();
		try {
			const formData = new FormData(event.currentTarget);
			const found = await loginAction(formData);

			if (found) {
				setAuth(found);
				router.push("/");
				toast.success(`welcome ${found?.firstName} ${found?.lastName} login success .`);
			} else {
				setError("Please provide valid email or password");
			}
		} catch (err) {
			setError(err.message);
		}
	}

	return (
		<>
			<h4 className="font-bold text-2xl">Sign in</h4>
			<form className="login-form" onSubmit={onSubmit}>
				<div>
					<label htmlFor="email">Email Address</label>
					<input type="email" name="email" id="email" />
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" />
				</div>

				<button type="submit" className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4">
					Login
				</button>
			</form>

			{error && <div className="text-red-500">{error}</div>}

			<p className="text-center text-xs text-gray-600">Or</p>

			<Link href="/register" className="underline text-sm mx-auto block text-gray-600 mt-4 text-center">
				Create New Account
			</Link>
		</>
	);
};

export default Login;
