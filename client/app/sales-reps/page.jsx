import Table from "@/components/Table";
import TdActions from "@/components/TdActions";

async function SalesRepsPage() {
  const res = await fetch("http://localhost:4000/api/salesreps", {
    cache: "no-store",
  });
  const salesReps = await res.json();

  return (
    <div>
      <Table titles={["Name", "Commission rate"]}>
        {salesReps.map((s) => (
          <tr key={s.id} className="*:p-4">
            <td>{s.name}</td>
            <td>%{s.commissionRate}</td>
            <TdActions path="sales-reps" APIpath="salesreps" elementId={s.id} />
          </tr>
        ))}
      </Table>
    </div>
  );
}

export default SalesRepsPage;
