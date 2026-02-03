import "./burgerButton.scss"

interface BurgerButtonProps {
    active: boolean;
    setActive: (newValue: boolean) => void;
}

function BurgerButton({active, setActive}: BurgerButtonProps) {
    return (
        <button 
            className={`burgerButton ${active ? "active" : ""}`} 
            onClick={() => setActive(!active)}
            aria-label="Menu"
            aria-expanded={active}
        >
            <span className="top" />
            <span className="middle" />
            <span className="bottom" />
        </button>
    )
}

export default BurgerButton