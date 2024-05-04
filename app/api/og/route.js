import { ImageResponse } from "next/og";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const hasTitle = searchParams.has("title");

  const title = hasTitle ? searchParams.get("title") : "Khana Khajna app";

  return new ImageResponse(
    (
      <div tw="text-7xl text-[#eb4a36] bg-teal-100 w-full h-full flex text-center items-center justify-center">
        {title}
      </div>
    ),
    {
      width: 900,
      height: 400,
    }
  );
}
