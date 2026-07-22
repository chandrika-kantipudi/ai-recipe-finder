import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch() {
    alert(`Searching for ${searchTerm}`);
  }

  return (
    <>
      <Header />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
    </>
  );
}

export default App;