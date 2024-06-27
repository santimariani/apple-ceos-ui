import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/ceos">CEO List</Link></li>
                    <li><Link to="/ceos/add">Add CEO Form</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout; 