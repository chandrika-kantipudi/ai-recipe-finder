function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <div className="search-container">
      <input
  type="text"
  placeholder="Search recipes..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  }}
/>

      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;