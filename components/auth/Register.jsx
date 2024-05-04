import { registerAction } from "@/action";
import Link from "next/link";
import RegisterBtn from "./RegisterBtn";

const Register = () => {
	return (
		<>
			<h4 className="font-bold text-2xl">Sign Up</h4>
			<form className="login-form" action={registerAction}>
				<div>
					<label htmlFor="firstName">First Name</label>
					<input type="text" name="firstName" id="firstName" required />
				</div>

				<div>
					<label htmlFor="lastName">Last Name</label>
					<input type="text" name="lastName" id="lastName" required />
				</div>
				<div>
					<label htmlFor="email">Email Address</label>
					<input type="email" name="email" id="email" required />
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" required />
				</div>
				<RegisterBtn />
			</form>

			<p className="text-center text-xs text-gray-600">Or</p>

			<Link href="/login" className="underline text-sm mx-auto block text-gray-600 mt-4 text-center">
				Login
			</Link>
		</>
	);
};

export default Register;
