import React from 'react';
import './CircleImg.css';

const CircleImg = (promp) => {
    return (
        <div className="circle">
            <img src={promp.imgs}/>
        </div>
    )
}

export default CircleImg;