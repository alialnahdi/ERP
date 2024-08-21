import CreateForm from "@/components/form/CreateForm";

export const metadata = {
  title: "Create product",
  description: "Creating new product page.",
};

const inputs = [
  { type: "text", name: "title", label: "Title" },
  { type: "float", name: "price", label: "Price" },
  { type: "float", name: "cost", label: "Cost" },
  { type: "number", name: "stock", label: "Stock" },
];

function createProductPage() {
  return <CreateForm path="products" inputs={inputs} />;
}

export default createProductPage;
