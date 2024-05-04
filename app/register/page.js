import Register from "@/components/auth/Register";
export const metadata = {
	title: "Khana Khazana - Register",
	description: "Khana Khazana app here you will find food recipe",
	openGraph: {
		images: [
			{
				url: `https://lws-assignment-m-8.vercel.app/api/og?title=Khana Khazana - Sing up`,
				width: 900,
				height: 400,
			},
		],
	},
};
const RegisterPage = () => {
	return <Register />;
};

export default RegisterPage;
