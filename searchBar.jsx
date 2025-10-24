export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full max-w-md mb-4 p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
    />
  );
}
