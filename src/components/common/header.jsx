import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSliders } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/feed") {
      setActiveLink("Activity");
    } else if (location.pathname === "/all-calls") {
      setActiveLink("All Calls");
    } else {
      setActiveLink("Activity");
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-black dark:text-black">
          <li className="me-2">
            <div className="inline-flex items-center justify-center p-4 text-base font-bold border-b-2">
              <FontAwesomeIcon
                icon={faPhone}
                className="w-6 h-6 me-2 text-green-500 dark:text-green-500 dark:group-hover:text-green-600"
              />
              <span className={`text-lg p-1 ${activeLink === "Activity" ? "font-bold" : ""}`}>{activeLink}</span>
            </div>
          </li>
          <li className="me-2">
            <Link
              to="/feed"
              className={`inline-flex items-center justify-center p-4 text-base font-bold border-b-2 ${
                activeLink === "Activity"
                  ? "border-red-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              }`}
              aria-current={activeLink === "Activity" ? "page" : undefined}
              onClick={() => setActiveLink("Activity")}
            >
              Inbox
            </Link>
          </li>
          <li className="me-2">
            <Link
              to="/all-calls"
              className={`inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg ${
                activeLink === "All Calls"
                  ? "border-red-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                  : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              }`}
              onClick={() => setActiveLink("All Calls")}
            >
              All Calls
            </Link>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
              <FontAwesomeIcon
                icon={faSliders}
                className="w-6 h-6 me-2 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-600"
                rotation={90}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
