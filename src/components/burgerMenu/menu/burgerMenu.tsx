import { NavLink } from "react-router"
import "./burgerMenu.scss"

interface BurgerMenuProps {
    active: boolean;
    setActive: (newValue: boolean) => void;
}

const menuItems = [
    { label: "Accueil", path: "/" },
    { label: "Projets", path: "/projects" },
    { label: "À propos", path: "/about" },
    { label: "Contact", path: "/contact" },
]

function BurgerMenu({ active, setActive }: BurgerMenuProps) {
    const closeMenu = () => setActive(false);

    return (
        <nav className={`burgerMenu ${active ? "active" : ""}`}>
            <ul className="menuList">
                {menuItems.map((item, index) => (
                    <li 
                        key={item.path} 
                        className="menuItem"
                        style={{ transitionDelay: `${index * 0.05}s` }}
                    >
                        <NavLink 
                            to={item.path} 
                            className={({ isActive }) => `menuLink ${isActive ? "active" : ""}`}
                            end={item.path === "/"}
                            onClick={closeMenu}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default BurgerMenu