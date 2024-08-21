import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { path } = params;
  const res = await fetch(`http://localhost:4000/api/${path}`, {
    next: { revalidate: 3 },
  });
  const products = await res.json();
  return NextResponse.json(products);
}

export async function POST(request, { params }) {
  const { path } = params;
  const formData = await request.formData();

  const newElement = {};

  for (const pair of formData.entries()) {
    newElement[pair[0]] = isNaN(+pair[1]) ? pair[1] : +pair[1];
  }

  const res = await fetch(`http://localhost:4000/api/${path}`, {
    method: "POST",
    body: JSON.stringify(newElement),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return NextResponse.json(data);
}
