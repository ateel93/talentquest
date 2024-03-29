import { Link } from 'react-router-dom';
// import './index.css';


function NavBar() {
    return (
        <div>
            <nav className="bg-blue-300 py-0.5">
             <a
                    href="/"
                    className="px-1.5 hover:bg-blue-400 rounded btn active"
                >
                Home
                </a>
               <a
                    href="/apply"
                    className="px-1.5 hover:bg-blue-400 rounded"
                >
                Apply
                </a>
                <a
                    href="/track"
                    className="px-1.5 hover:bg-blue-400 rounded"
                >
                Tracker
                </a>
                <a
                    href="/network"
                    className="px-1.5 hover:bg-blue-400 rounded"
                >
                Network
                </a>
                <a
                    href="/login"
                    className="px-1.5 hover:bg-blue-400 rounded"
                >
                Login
                </a>
                <a
                    href="/profile"
                    className="px-1.5 hover:bg-blue-400 rounded"
                >
                My Profile
                </a>
                <a
                    href="/help"
                    className="px-1.5 hover:bg-blue-400 rounded"
                >
                Help
                </a>
            </nav>
        </div>
    )
}

export default NavBar;