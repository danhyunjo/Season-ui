import React from "react"
import './GreenGiftBox.css'
import greenHat from './assets/giftBoxGreenHat.svg';
import greenBody from './assets/giftBoxGreenBody.svg';

const GreenGiftBox = () => {
    return (
        <div className="gift-box">
            <div className="lid">
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
            </div>
        </div>
    );
};

export default GreenGiftBox;