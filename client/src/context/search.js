import { useState, useContext, createContext } from "react";

const SearchContex = createContext();

const SearchProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    keyword: "",
    results: [],
  });

  return (
    <SearchContex.Provider value={[auth, setAuth]}>
      {children}
    </SearchContex.Provider>
  );
};

const useSearch = () => useContext(SearchContex);

export { useSearch, SearchProvider };
