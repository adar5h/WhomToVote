import img from '../assets/images/Capture.png';
import { Link } from 'react-router-dom';
function NavBar() {
    return(
        <div className="flex flex-col w-full bg-blue-900">
            <div className="flex items-center justify-between mx-3 w-full px-6 py-4">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-30 h-16">
                        <img className="w-full h-full" src={img} alt='Logo' />
                    </div>
                    <div className="flex items-center gap-3  rounded bg-white w-full px-3 py-1.5">
                        <input type="search" placeholder="Search Candidate" className=" border-none bg-transparent focus:outline-none w-full" />
                    </div>
                </div>
                <div className="flex gap-5 items-center justify-end">
                    <span className="flex items-center gap-1 cursor-pointer text-gray-300 hover:text-white" >
                        Home
                    </span>
                    <span className="flex items-center gap-1 cursor-pointer text-gray-300 hover:text-white" >
                        About
                    </span>
                    <Link to ={'/'}>
                        <button  className="rounded bg-red-500 text-white px-4 py-1">Sign in</button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
export default NavBar;