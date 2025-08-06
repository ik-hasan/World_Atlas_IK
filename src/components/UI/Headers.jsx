import { NavLink } from "react-router-dom"

export const Headers =()=>{
    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="logo">
                        <NavLink>
                            <h1>WorldAtlas</h1>
                        </NavLink>
                    </div>

                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/country"  className={({ isActive }) => (isActive ? "active-link" : "")}>Country</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact"  className={({ isActive }) => (isActive ? "active-link" : "")}>Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}