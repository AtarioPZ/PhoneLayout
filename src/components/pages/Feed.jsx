import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Feed = () => {
    const [feedItems, setFeedItems] = useState([]);

    const fetchFeedItems = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/activities`);
            if (!response.ok) {
                throw new Error('Error fetching feed items');
            }
            const data = await response.json();
            if (data.length >= 6) {
                setFeedItems([data[5]]); 
            } else {
                console.error('Insufficient data to fetch the 6th item');
            }
        } catch (error) {
            console.error('Error fetching feed items:', error);
        }
    };
    

    useEffect(() => {
        fetchFeedItems();
    }, []);

    return (
        <div className='text-black'>
            <h2 className="text-lg font-semibold mb-4">Activity Feed</h2>
            {feedItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 py-3">
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-600">{new Date(item.created_at).toLocaleDateString()}</span>
                        <span>{new Date(item.created_at).toLocaleTimeString()}</span>
                    </div>
                    <div className="flex items-center">
                        <span className={`mr-2 ${item.direction === 'inbound' ? 'text-green-500' : 'text-red-500'}`}>
                            <FontAwesomeIcon
                                icon={faPhone}
                                className={`w-6 h-6 me-2 ${item.direction === 'inbound' ? 'text-green-500' : 'text-red-500'}`}
                            />
                        </span>
                        <span className="mr-auto">{item.to}</span>
                        <span>{item.call_type}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Feed;
