function AdminDashboard() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-xl font-semibold">New Inquiries</h3>
          <p className="text-2xl text-blue-600 mt-2">12</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-xl font-semibold">Low Stock Items</h3>
          <p className="text-2xl text-red-600 mt-2">3</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-xl font-semibold">Total Products</h3>
          <p className="text-2xl text-green-600 mt-2">24</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
