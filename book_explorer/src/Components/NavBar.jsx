import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

function NavBar(){

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Books">Books</Link>
            </nav>
        </div>
    );
}

export default NavBar;
