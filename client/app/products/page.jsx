import Table from "@/components/Table";
import TdActions from "@/components/TdActions";

async function ProductsPage() {
  const res = await fetch("http://localhost:4000/api/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <div>
      <Table titles={["Title", "Price", "Stock", "Cost", "Created at"]}>
        {products.map((p) => (
          <tr key={p.id} className="*:p-4">
            <td>{p.title}</td>
            <td>${p.price}</td>
            <td>{p.stock}</td>
            <td>${p.cost}</td>
            <td>{new Date(p.createdAt).toLocaleDateString()}</td>
            <TdActions path="products" APIpath="products" elementId={p.id} />
          </tr>
        ))}
      </Table>
    </div>
  );
}

export default ProductsPage;
