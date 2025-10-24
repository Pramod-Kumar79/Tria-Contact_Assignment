import { useState } from "react";

export default function AddContactForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    onAdd(form);
    setForm({ name: "", phone: "", email: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mt-6 p-4 bg-white rounded-lg shadow space-y-3"
    >
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email (optional)"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
      >
        Add Contact
      </button>
    </form>
  );
}
