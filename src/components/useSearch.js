import { useState, useEffect } from "react";

const useSearch = (data, searchText) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchText === "") {
        setFilteredData(data);
      } else {
        const lowercasedSearchText = searchText.toLowerCase();
        const filtered = data.filter(
          (student) =>
            student.forename.toLowerCase().includes(lowercasedSearchText) ||
            student.surname.toLowerCase().includes(lowercasedSearchText) ||
            student.form.toLowerCase().includes(lowercasedSearchText)
        );
        setFilteredData(filtered);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchText, data]);

  return filteredData;
};

export default useSearch;
