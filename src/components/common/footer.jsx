import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faPhone, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="mt-auto bg-white">
            <div className="text-gray-500 w-full flex justify-between  py-4 px-8 text-white">
                <div className="flex justify-center items-center">
                    <FontAwesomeIcon icon={faPhone} size="lg" className="mx-4" />
                </div>
                <div className="flex justify-center items-center">
                    <FontAwesomeIcon icon={faUser} size="lg" className="mx-4" />
                </div>
                <div className="flex justify-center items-center">
                    <div className="rounded-full bg-green-500 w-14 h-14 flex justify-center items-center">
                    <FontAwesomeIcon icon={faTh} size="lg" className="mx-4 text-white w-8 h-8" />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <FontAwesomeIcon icon={faCog} size="lg" className="mx-4" />
                </div>
                <div className="flex justify-center items-center">
                    <div className="rounded-full bg-green-500 w-2 h-2 flex justify-center items-center"></div> 
                </div>
            </div>
        </div>
    )
}

export default Footer;
