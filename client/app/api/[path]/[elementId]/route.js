import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { path, elementId } = params;
  const res = await fetch(`http://localhost:4000/api/${path}/${elementId}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return NextResponse.json(data);
}

export async function PUT(request, { params }) {
  const { path, elementId } = params;
  const formData = await request.formData();

  const updatedElement = {};

  for (const pair of formData.entries()) {
    updatedElement[pair[0]] = isNaN(+pair[1]) ? pair[1] : +pair[1];
  }

  if (updatedElement.createdAt) {
    updatedElement.createdAt = new Date(updatedElement.createdAt);
  }

  const res = await fetch(`http://localhost:4000/api/${path}/${elementId}`, {
    method: "PUT",
    body: JSON.stringify(updatedElement),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return NextResponse.json(data);
}

export async function DELETE(request, { params }) {
  const { path, elementId } = params;

  const res = await fetch(`http://localhost:4000/api/${path}/${elementId}`, {
    method: "DELETE",
  });
  const data = await res.json();

  return NextResponse.json(data);
}
