import Link from "next/link";

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h2 className="text-3xl font-bold mb-4">Oops! Page Not Found</h2>
			<Link
				href="/"
				className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
			>
				Return Home
			</Link>
		</div>
	);
};
export default NotFound;
