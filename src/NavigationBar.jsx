import { Link } from "react-router-dom";

function NavigationBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/menu-a">Ini A</Link>
                </li>
                <li>
                    <Link to="/menu-b">Ini B</Link>
                </li>
                <li>
                    <Link to="/menu-c">Ini C</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;