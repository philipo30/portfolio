import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  onSearch: (query: string) => void;
}

export function Search({ onSearch }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full px-4 py-2 pl-10 rounded-lg border dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
} 