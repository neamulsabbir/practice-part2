import Image from "next/image";
import Link from "next/link";

import logoImg from "@/public/assets/images/logo.png";
import UserInfo from "./UserInfo";

const Nav = () => {
	return (
		<nav>
			<div className="container flex justify-between py-6">
				<Link href="/">
					<Image src={logoImg} width={135} height={40} alt="" className="" />
				</Link>

				<ul className="flex gap-4 text-sm text-gray-500">
					<li className="py-2 active">
						<Link href="/">Home</Link>
					</li>

					<li className="py-2">
						<Link href="/recipe">Recipe</Link>
					</li>
					<li className="py-2">
						<Link href="/recipe">About us</Link>
					</li>

					<UserInfo />
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
