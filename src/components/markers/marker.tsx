import React, { CSSProperties, FC, HTMLAttributes } from "react";
import "./Marker.css";

export interface MarkerProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    style?: CSSProperties;
    icon?: string;
}

const Marker: FC<MarkerProps> = ({ className = "", icon, ...rest }) => {
    return (
        <div className={`marker ${className}`} {...rest}>
            <img src={icon} alt={icon} />
            <div className="test">
                <img
                    src="https://images.pexels.com/photos/5800420/pexels-photo-5800420.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="test"
                />
            </div>
        </div>
    );
};

export default Marker;
