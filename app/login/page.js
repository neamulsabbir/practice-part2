import Login from "@/components/auth/Login";

export const metadata = {
	title: "Khana Khazana - Login",
	description: "Khana Khazana app here you will find food recipe",
	openGraph: {
		images: [
			{
				url: `https://lws-assignment-m-8.vercel.app/api/og?title=Khana Khazana - Login`,
				width: 900,
				height: 400,
			},
		],
	},
};

const LogInPage = () => {
	return <Login />;
};

export default LogInPage;
