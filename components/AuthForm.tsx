export default function AuthForm() {
  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <input className="w-full border p-2 mb-3 rounded" placeholder="Email" />
      <input
        className="w-full border p-2 mb-4 rounded"
        type="password"
        placeholder="Password"
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded">
        Masuk
      </button>
    </div>
  );
}
