/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTimes, faArchive } from '@fortawesome/free-solid-svg-icons';

const CallModal = ({ item, onClose }) => {
  const [isArchived, setIsArchived] = useState(item.is_archived);

  const handleToggleArchive = () => {
    const updatedArchiveStatus = !isArchived;
    setIsArchived(updatedArchiveStatus);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const modalContent = document.getElementById("modal-content");
      if (modalContent && !modalContent.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-60">
      <div id="modal-content" className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faUser} className="w-8 h-8 mr-2 text-blue-500" />
            <h3 className="text-lg font-semibold text-blue-500">Call Details</h3>
          </div>
          <button onClick={onClose} className="text-gray-500 focus:outline-none hover:text-gray-700">
            <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
          </button>
        </div>
        <div className="text-sm text-gray-700">
          <p><strong>Sender:</strong> {item.to}</p>
          <p><strong>Call Type:</strong> {item.call_type}</p>
          <p><strong>Date:</strong> {new Date(item.created_at).toLocaleDateString()}</p>
          <p><strong>Time:</strong> {new Date(item.created_at).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }).toUpperCase()}</p>
          <p><strong>Duration:</strong> {item.duration}</p>
          <p><strong>Archived:</strong> {isArchived ? 'Yes' : 'No'}</p>          
          {!isArchived && (
            <div className="flex justify-center mt-4">
              <button onClick={handleToggleArchive} className="bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600">
                <FontAwesomeIcon icon={faArchive} className="mr-2" />
                Archive
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallModal;
