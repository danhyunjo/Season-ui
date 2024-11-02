import React, { useState } from "react"
import './GreenGiftBox.css'
import greenHat from './assets/giftBoxGreenHat.svg';
import greenBody from './assets/giftBoxGreenBody.svg';
import popper from './assets/popper.svg';

const GreenGiftBox = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [showPopper, setShowPopper] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setShowPopper(false);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleTransitionEnd = () => {
        if (isHovered) {
            setShowPopper(true);
        }
    }

    return (
        <div
            className="gift-box"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`lid ${isHovered ? "hovered" : ""}`}
                onTransitionEnd={handleTransitionEnd}
            >
                <img
                    src={greenHat}
                    alt='greenHat'
                />
            </div>
            <div className="box-body">
                <img
                    src={greenBody}
                    alt='greenBody'
                />
                {showPopper && (
                    <img src={popper} alt="popper" className="popper" />
                )}
            </div>
        </div>
    );
};

export default GreenGiftBox;