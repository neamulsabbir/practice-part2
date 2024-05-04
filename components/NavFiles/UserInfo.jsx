"use client";

import { useAuth } from "@/Hooks/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserInfo = () => {
	const { auth, setAuth } = useAuth();

	const pathname = usePathname();

	const handelLogOut = () => {
		setAuth(null);
	};

	if (auth?.id) {
		return (
			<li className="flex gap-2">
				{pathname === "/" && <p className="py-2 font-bold  "> Hello, {auth && auth?.firstName}</p>}
				<button onClick={handelLogOut} className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
					LogOut
				</button>
			</li>
		);
	}

	return (
		<>
			<li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
				<Link href="/login">Login</Link>
			</li>
		</>
	);
};

export default UserInfo;
