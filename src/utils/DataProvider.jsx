/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [archivedData, setArchivedData] = useState([]);

  const addToArchive = (data) => {
    setArchivedData([...archivedData, data]);
  };

  const removeFromArchive = (id) => {
    const updatedData = archivedData.filter(item => item.id !== id);
    setArchivedData(updatedData);
  };

  console.log(archivedData);

  return (
    <DataContext.Provider value={{ archivedData, addToArchive, removeFromArchive }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
