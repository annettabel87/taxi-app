import { BASE_URL } from "@/app/(constants)/constants";
import type { ISearchResult } from "@/app/(interfaces)/interfaces";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  const { searchParams } = new URL(request.url);
  const searchData = searchParams.get("q");
  try {
    const response = await fetch(
      `${BASE_URL}?q=${searchData}?language=ru&limit=8&session_token=[GENERATED-UUID]&country=RU&access_token=${process.env.MAPBOX_ACCES_TOKEN}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const searchResult = (await response.json()) as ISearchResult;
    return NextResponse.json( searchResult.suggestions , { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка, попробуйте снова"
    
    },
      { status: 500 }
    );
  }
}
