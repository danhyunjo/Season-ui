import React from "react"
import './RedGiftBox.css'
import redHat from './assets/giftBoxRedHat.svg';
import redBody from './assets/giftBoxRedBody.svg';

const RedGiftBox = () => {
    return (
        <div className="gift-box">
            <div className="lid">
                <img
                    src={redHat}
                    alt='redHat'
                />
            </div>
            <div className="box-body">
                <img
                    src={redBody}
                    alt='redBody'
                />
            </div>
        </div>
    );
};

export default RedGiftBox;