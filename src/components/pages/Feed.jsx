import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Feed = () => {
    const [feedItems, setFeedItems] = useState([]);

    const fetchFeedItems = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/activities`);
            if (!response.ok) {
                throw new Error('Error fetching feed items');
            }
            const data = await response.json();
            if (data.length >= 5) {
                setFeedItems(data.slice(0, 3));
            } else {
                console.error('Insufficient data to fetch the first 5 items');
            }
        } catch (error) {
            console.error('Error fetching feed items:', error);
        }
    };
    

    useEffect(() => {
        fetchFeedItems();
    }, []);

    return (
        <div className='text-black p-2'>
            <h2 className="text-lg font-semibold mb-4">Activity Feed</h2>
            {feedItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 py-3">
                    <div className="flex items-center justify-center mb-1">
                        <span className="text-gray-600 font-bold">
                            {new Date(item.created_at).toLocaleDateString()}
                        </span>
                    </div>
                    <div className="flex items-center rounded-lg border border-gray-300 p-2">
                        <section>
                            <span className={`mr-2 relative ${item.direction === 'inbound' ? 'text-green-500' : 'text-green-500'}`}>
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="w-6 h-6"
                                />
                                {item.direction === 'inbound' ? (
                                    <FontAwesomeIcon
                                        icon={faArrowDown}
                                        className="absolute top-0 right-0 text-red-500"
                                        style={{ transform: 'translate(50%, -50%)' }}
                                    />
                                ) : (
                                    <FontAwesomeIcon
                                        icon={faArrowUp}
                                        className="absolute top-0 right-0 text-red-500"
                                        style={{ transform: 'translate(50%, -50%)' }}
                                    />
                                )}
                            </span>
                        </section>
                        <section className="flex flex-col ml-2">                           
                        <div className="flex flex-col ml-2">                           
                            <div className="text-base">{item.to}</div>
                            <div className="text-sm text-gray-500">{item.call_type}</div>
                        </div>
                        </section>
                        <span className="ml-auto">{new Date(item.created_at).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }).toUpperCase()}</span>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default Feed;
