import EditForm from "@/components/form/EditForm";

const inputs = [
  { type: "text", name: "title", label: "Title" },
  { type: "float", name: "price", label: "Price" },
  { type: "float", name: "cost", label: "Cost" },
  { type: "number", name: "stock", label: "Stock" },
  { type: "date", name: "createdAt", label: "Created at" },
];

export async function generateMetadata({ params }) {
  const { productId } = params;
  const res = await fetch(`http://localhost:4000/api/products/${productId}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return {
    title: `${data.title} Product`,
  };
}

async function ProductPage({ params }) {
  const { productId } = params;

  const res = await fetch(`http://localhost:4000/api/products/${productId}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <EditForm
      path="products"
      elementId={productId}
      data={data}
      inputs={inputs}
    />
  );
}

export default ProductPage;
