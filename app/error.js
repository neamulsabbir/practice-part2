"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Oops! Something went wrong!
        </h2>
        <p className="text-red-500 mb-8">{error?.message}</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => reset()}
            className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
