import { useContext } from "react";
import { Link } from "react-router-dom";
import { PiDotsThreeOutlineVerticalDuotone } from "react-icons/pi";
import { AuthContext } from "../PRobider/AuthProvider";
import ThemeToggle from "../theam";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut().then(() => {
            console.log("User logged out");
        }).catch((error) => {
            console.error("Logout error:", error);
        });
    };

    return (
        <div className="navbar bg-teal-400 w-full mb-10 fixed top-0 left-0 z-50">
            {/* Mobile Dropdown */}
            <details className="dropdown lg:hidden">
                <summary className="btn btn-ghost">
                    <PiDotsThreeOutlineVerticalDuotone />
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/allsporteq">All Sports Equipment</Link></li>
                    <li><Link to="/eqepment">Add Equipment</Link></li>
                    <li><Link to="/myequipment">My Equipment List</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </details>

            {/* Logo */}
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl text-blue-600 italic">
                    A Sports <br /> Equipment Store
                </a>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-center hidden lg:flex gap-4">
                <Link to="/" className="font-mono">Home</Link>
                <Link to="/allsporteq">All Sports Equipment</Link>
               
                
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </div>

            {/* User Section */}
            <div className="navbar-end gap-2">
                {/* If logged in */}
                {user?.email ? (
                    <div className="dropdown dropdown-end">
                        <div
                            className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                            data-tip={user.displayName || "User"}
                            tabIndex={0}
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    src={user.photoURL || "https://via.placeholder.com/150"}
                                    alt="User Avatar"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <p className="text-sm text-gray-500">
                                    Logged in as <strong>{user.displayName}</strong>
                                </p>
                            </li>
                            <li className="text-gray-500">
                            <Link to="/myequipment">My Equipment List</Link>
                            </li>
                            <li className="text-gray-500">
                            <Link to="/eqepment">Add Equipment</Link>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="btn btn-error w-full">
                                    Log Out
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    // If not logged in
                    <Link to="/login" className="btn btn-primary">
                        Login
                    </Link>
                )}

                {/* Theme Toggle */}
                <div className="flex-none">
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};

export default Navber;
