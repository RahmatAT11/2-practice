import { Link, Outlet } from "react-router-dom";

function NavigationBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Ini A</Link>
                    </li>
                    <li>
                        <Link to="/menu-b">Ini B</Link>
                    </li>
                    <li>
                        <Link to="/menu-c">Ini C</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default NavigationBar;