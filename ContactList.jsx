import ContactCard from "./ContactCard";

export default function ContactList({ contacts }) {
  if (contacts.length === 0) {
    return <p className="text-gray-500 text-center mt-4">No contacts found.</p>;
  }

  return (
    <div className="space-y-3 mb-6">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
}
