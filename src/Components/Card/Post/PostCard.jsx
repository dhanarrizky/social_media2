import React, { useState } from "react";
import './PostCard.css';
import Imgs from '../../../assets/bg.jpg';
import { FaRegHeart, FaHeart, FaRegCommentAlt, FaRegBookmark, FaBookmark } from "react-icons/fa";

const PostCard = (promp) => {
    const[LoveLike,setLoveLike] = useState(<FaRegHeart/>)
    const[Love,setLove] = useState(false)

    const[SaveIcons,setSaveIcons] = useState(<FaRegBookmark/>)
    const[SaveIcon,setSave] = useState(false)
    
    const HandlLike = () => {
        if(Love == false){
            setLoveLike(<FaHeart />)
            setLove(true);
        } else {
            setLoveLike(<FaRegHeart />)
            setLove(false);
        }
    }

    const HandlSave = () => {
        if(SaveIcon == false){
            setSaveIcons(<FaBookmark />)
            setSave(true);
        } else {
            setSaveIcons(<FaRegBookmark />)
            setSave(false);
        }
    }

    return (
        <div className="post-card">
            <p className="hidden">{promp.id}</p>
            <div className="img-content">
                <img src={Imgs} alt="#" />
            </div>
            <div className="title">
                <h3>This is for title</h3>
            </div>
            <div className="caption">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam modi excepturi deserunt minus dolorum! Similique voluptate tenetur adipisci hic iste aut. Dolorum voluptatibus quia tenetur assumenda illum cumque dolore et!</p>
            </div>
            <div className="like-group">
                <div>
                    <div onClick={() => HandlLike()} className="like">{LoveLike}</div>
                    <div className="comment"><FaRegCommentAlt /></div>
                </div>
                <div>
                    <div onClick={() => HandlSave()} className="save">{SaveIcons}</div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;