function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;