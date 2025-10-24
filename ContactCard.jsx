export default function ContactCard({ contact }) {
  return (
    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800">{contact.name}</h2>
      <p className="text-gray-600">{contact.phone}</p>
      {contact.email && (
        <p className="text-gray-500 text-sm">{contact.email}</p>
      )}
    </div>
  );
}
