/* eslint-disable no-unused-vars */
import { useState } from 'react';

const DataStore = () => {
    const [archivedData, setArchivedData] = useState([]);
    
    const addToArchive = (data) => {
        setArchivedData([...archivedData, data]);
    };

    const removeFromArchive = (id) => {
        const updatedData = archivedData.filter(item => item.id !== id);
        setArchivedData(updatedData);
    };


    return (
        <div>
            
        </div>
    );
};

export default DataStore;
