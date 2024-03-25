import { useData } from "../../utils/DataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Archives = () => {
    const { archivedData } = useData(); 
    
    const flattenedArchivedData = archivedData.flatMap(item => item);

    return (
        <div className="text-black">
            <h2>Archived Items</h2>
            {flattenedArchivedData.length > 0 ? (
                flattenedArchivedData.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 py-3">
                        <div className="flex items-center justify-center mb-1">
                            <span className="text-gray-600 font-bold">
                                Date: {new Date(item.created_at).toLocaleDateString()}
                            </span>
                        </div>
                        <div className="flex items-center rounded-lg border border-gray-300 p-2 hover:bg-gray-100 cursor-pointer">
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
                                    <div className="text-base">To: {item.to}</div>
                                    <div className="text-sm text-gray-500">Call Type: {item.call_type}</div>
                                </div>
                            </section>
                            <span className="ml-auto">Duration: {item.duration}</span>
                        </div>
                    </div>
                ))
            ) : (
                <p>No archived items.</p>
            )}
        </div>
    );
}

export default Archives;
