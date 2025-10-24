import { useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "John Doe", phone: "9876543210", email: "john@example.com" },
    {
      id: 2,
      name: "Jane Smith",
      phone: "9123456780",
      email: "jane@example.com",
    },
    {
      id: 3,
      name: "Alice Brown",
      phone: "9988776655",
      email: "alice@example.com",
    },
    {
      id: 4,
      name: "Pramod Kumar",
      phone: "9389988062",
      email: "pk123@gmail.com",
    },
  ]);

  const [search, setSearch] = useState("");
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddContact = () => {
    if (!newContact.name || !newContact.phone) return;
    setContacts([...contacts, { ...newContact, id: contacts.length + 1 }]);
    setNewContact({ name: "", phone: "", email: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center gap-2">
          📞 Contact List
        </h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search contacts..."
          className="w-full border rounded-lg px-3 py-2 mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Contact List */}
        <div className="space-y-4 mb-6">
          {filteredContacts.length > 0 ? (
            filteredContacts.map((c) => (
              <div
                key={c.id}
                className="border rounded-xl p-3 bg-gray-50 hover:bg-indigo-50 transition"
              >
                <p className="font-semibold text-gray-800">{c.name}</p>
                <p className="text-sm text-gray-600">{c.phone}</p>
                {c.email && <p className="text-sm text-gray-500">{c.email}</p>}
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">No contacts found</p>
          )}
        </div>

        {/* Add Contact Form */}
        <div className="border-t pt-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Add New Contact
          </h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded-lg px-3 py-2 mb-2 text-gray-700"
            value={newContact.name}
            onChange={(e) =>
              setNewContact({ ...newContact, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full border rounded-lg px-3 py-2 mb-2 text-gray-700"
            value={newContact.phone}
            onChange={(e) =>
              setNewContact({ ...newContact, phone: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email (optional)"
            className="w-full border rounded-lg px-3 py-2 mb-3 text-gray-700"
            value={newContact.email}
            onChange={(e) =>
              setNewContact({ ...newContact, email: e.target.value })
            }
          />
          <button
            onClick={handleAddContact}
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Add Contact
          </button>
        </div>
      </div>
    </div>
  );
}
