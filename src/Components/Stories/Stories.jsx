import React, { useEffect, useRef, useState } from "react";
import './Stories.css';
import CircleImg from "../Card/CircleImg/CircleImg";
import Imgs from '../../assets/bg.jpg';
import { FaCircleChevronRight,FaCircleChevronLeft } from "react-icons/fa6";

const Stories = ({Hiddening}) => {
    const idNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const[moveLeft, setmoveLeft] = useState('left-button')
    
    const ListStory = idNum.map((idNum) => 
        (
            <div className="card-story">
                <CircleImg imgs={Imgs}/>
                <p>Name {idNum}</p>
            </div>
        )
    );

    let numberAmount = 0;
    useEffect(() => {
        if(numberAmount === 0){
            setmoveLeft('hidden');
        }
        
        if(Hiddening === ''){
            setmoveLeft('left-button moveing');
        } else {
            setmoveLeft('left-button');
        }
    });
    
    let scrollPlace = document.querySelector('.story-content');
    
    const handleScroll = (amount) => {
        if(numberAmount < 0){
            numberAmount = 0;
        }

        if(numberAmount > 1200){
            numberAmount = 1200;
        }

        if(numberAmount < 0){
            numberAmount = 0;
        }
        scrollPlace.scrollBy(amount,0)
        
        numberAmount += amount;
        console.log(numberAmount);
    };

    
    return (
        <div className="stories">
            {/* <div>
                <a className={moveLeft} onClick={() => handleScroll(-300)}><FaCircleChevronLeft/></a>
            </div> */}
            <div className="story-content">
               {ListStory}
            </div>
            <div>
                <a className="right-button" onClick={() => handleScroll(300)}><FaCircleChevronRight/></a>
            </div>
        </div>
    )
}

export default Stories;