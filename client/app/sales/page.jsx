import Table from "@/components/Table";
import TdActions from "@/components/TdActions";

async function SalesPage() {
  const res = await fetch("http://localhost:4000/api/sales", {
    cache: "no-store",
  });
  const sales = await res.json();

  return (
    <div>
      <Table
        titles={["Sales rep", "Product", "Quanity", "Total price", "Sale date"]}
      >
        {sales.map((s) => (
          <tr key={s.id} className="*:p-4">
            <td>{s.salesRep.name}</td>
            <td>{s.product.title}</td>
            <td>{s.quanity}</td>
            <td>${s.totalPrice}</td>
            <td>{new Date(s.createdAt).toLocaleDateString()}</td>
            <TdActions path="sales" APIpath="sales" elementId={s.id} />
          </tr>
        ))}
      </Table>
    </div>
  );
}

export default SalesPage;
