import { useState, useEffect } from "react"
import Logo from "../Logo/logo"
import "./header.scss"
import BurgerButton from "../burgerMenu/button/burgerButton";
import BurgerMenu from "../burgerMenu/menu/burgerMenu";

function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [burgerMenuToggle, setBurgerMenuToggle] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup: supprimer le listener quand le composant est démonté
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="header">
                {windowWidth < 600 ?
                    null :
                    <div className="space" />
                }
                <div className="namePart">
                    {windowWidth < 600 ?
                        <div className="smallSpace" /> :
                        <></>
                    }
                    <Logo className="logo" />
                    <div className="name">The Penguin</div>
                </div>
                {windowWidth < 600 ?
                    null :
                    <>
                        <div className="maxSpace"></div>
                    </>
                }
                <BurgerButton active={burgerMenuToggle} setActive={setBurgerMenuToggle} />
                {windowWidth < 600 ?
                    null :
                    <>
                        <div className="space" />
                    </>
                }
            </div>
            <BurgerMenu active={burgerMenuToggle} setActive={setBurgerMenuToggle}/>
        </>
    )
}

export default Header