import BarChart from "@/components/dashboard/BarChart";
import ChartCard from "@/components/dashboard/ChartCard";
import PieCahrt from "@/components/dashboard/PieChart";
import Link from "next/link";

async function Dashborad() {
  const resSales = await fetch("http://localhost:4000/api/sales", {
    cache: "no-store",
  });
  const sales = await resSales.json();

  if (!sales.length)
    return (
      <div className="h-96 flex justify-center items-center">
        <div className="text-center space-y-5">
          <h2 className="font-bold text-2xl text-slate-700">
            You need to create new sales to see the dashboard.
          </h2>
          <p className="text-lg *:underline text-emerald-500">
            Go to <Link href="/sales">Sales</Link>
          </p>
        </div>
      </div>
    );

  const resSalesReps = await fetch(
    "http://localhost:4000/api/salesreps/countSales",
    {
      cache: "no-store",
    }
  );

  const salesReps = await resSalesReps.json();

  return (
    <div>
      <div className="mb-5 space-y-5">
        <h2 className="font-bold text-2xl">Dashboard</h2>
        <hr />
      </div>
      <div>
        <div className="flex justify-between w-full py-3 px-4 border border-slate-200 rounded-md">
          <div>
            <h2 className="font-bold text-xl">Total sales</h2>
            <p>{sales.length}</p>
          </div>
          <div>
            <h2 className="font-bold text-xl">Total price</h2>
            <p>${sales.map((s) => s.totalPrice).reduce((a, b) => a + b)}</p>
          </div>
        </div>
        <div className="lg:flex *:grow lg:space-x-5">
          <ChartCard title="Sales">
            <BarChart salesData={sales} />
          </ChartCard>
          <ChartCard title="Sales reps rank" bitHeight={true}>
            <PieCahrt salesRepsData={salesReps} />
          </ChartCard>
        </div>
      </div>
    </div>
  );
}

export default Dashborad;
