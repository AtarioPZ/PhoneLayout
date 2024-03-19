import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const AllCalls = () => {
    const [allCalls, setAllCalls] = useState([]);

    const fetchAllCalls = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/activities`);
            if (!response.ok) {
                throw new Error('Error fetching all calls');
            }
            const data = await response.json();
            setAllCalls(data);
        } catch (error) {
            console.error('Error fetching all calls:', error);
        }
    };
    
    useEffect(() => {
        fetchAllCalls();
    }, []);

    return (
        <div className="text-black p-3">
            <h2 className="text-lg font-semibold mb-4">All Calls</h2>
            {allCalls.map((call, index) => (
                <div key={index} className="border-b border-gray-200 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="mr-2 relative text-green-500">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="w-6 h-6"
                            />
                            <FontAwesomeIcon
                                icon={faArrowUp}
                                className="absolute top-0 right-0 text-green-900"
                                style={{ transform: 'translate(50%, -50%)' }}
                            />
                        </span>
                        <div className="flex flex-col ml-2">                           
                            <div className="text-base">{call.to}</div>
                            <div className="text-sm text-gray-500">{call.call_type}</div>
                        </div>
                    </div>
                    <span className="text-gray-600">{new Date(call.created_at).toLocaleDateString()}</span>
                </div>
            ))}
        </div>
    );
}

export default AllCalls;
