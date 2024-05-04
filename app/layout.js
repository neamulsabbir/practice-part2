import Nav from "@/components/NavFiles/Nav";
import { dbConnect } from "@/dataBase/dbConnect";
import AuthProvider from "@/provider/AuthProvider";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khana Khazana",
  description: "Khana Khazana app here you will find food recipe",
  openGraph: {
    images: [
      {
        url: "https://lws-assignment-m-8.vercel.app/api/og",
        width: 900,
        height: 400,
      },
    ],
  },
};

export default async function RootLayout({ children }) {
  //todo: connecting with dataBase from root
  await dbConnect();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Nav />
          <main>{children}</main>
        </AuthProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
