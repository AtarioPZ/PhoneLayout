import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSliders } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div>
            <div className="border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-black dark:text-black">
                    <li className="me-2">
                        <div className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg group">
                         <FontAwesomeIcon icon={faPhone} className="w-6 h-6 me-2 text-green-500 dark:text-green-500 dark:group-hover:text-green-600" />
                         <span className="text-lg font-bold p-1 ">Activity</span>
                        </div>
                    </li>
                    <li className="me-2">
                        <a href="#" className="inline-flex items-center justify-center p-4 text-base font-bold border-b-2 border-red-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                            Inbox
                        </a>
                    </li>
                    <li className="me-2">
                        <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                            All Calls
                        </a>
                    </li>
                    <li className="me-2">
                        <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                        <FontAwesomeIcon icon={faSliders} className="w-6 h-6 me-2 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-600" rotation={90} />

                        </a>
                    </li>        
                </ul>
            </div>
        </div>
    );
}

export default Header;
