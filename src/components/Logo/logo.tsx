import { type JSX, type CSSProperties } from "react";
import "./logo.scss"

interface LogoProps {
    className?: string;
    style?: CSSProperties;
    size?: number;
}

function Logo({ className = "", style, size }: LogoProps): JSX.Element {
    const sizeStyle = size ? { "--logo-size": `${size}px` } as CSSProperties : {};
    
    return <>
        <div 
            className={`logoContainer ${className}`.trim()} 
            style={{ ...sizeStyle, ...style }}
        >
            <img className="logoPenguin" src="/penguin.svg" draggable="false"></img>
            <div className="secondCircle"></div>
        </div>
    </>
}

export default Logo;