import DashboardLayout from "../components/Dashboardlayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-gray-700 font-semibold">Total Income</h2>
          <p className="text-2xl font-bold text-green-500">₹0</p>
        </div>

        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-gray-700 font-semibold">Total Expense</h2>
          <p className="text-2xl font-bold text-red-500">₹0</p>
        </div>

        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-gray-700 font-semibold">Balance</h2>
          <p className="text-2xl font-bold text-blue-500">₹0</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
