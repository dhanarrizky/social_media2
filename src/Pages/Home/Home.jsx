import React, { useEffect, useState } from "react";
import './Home.css';
import Navbar from "../../Components/Navbar/Navbar";
import Stories from "../../Components/Stories/Stories";
import PostCard from "../../Components/Card/Post/PostCard";
import Search from "../../Components/Search/Search";

const Home = () => {
    const[Hiddening, setHiddening] = useState('hidden');
    const[shortContent, setShortContent] = useState('content')

    useEffect(() => {
        if(Hiddening === ''){
            setShortContent('content short-content')
        } else {
            setShortContent('content')
        }
    });

    const Postlist = [1,2,3,4,5,6,7,8,9,10,0,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,0,1,2,3,4,5,6,7,8,9,10]
    
    const listPost = Postlist.map((Postlist)=>
        (
            <PostCard id={Postlist}/>
        )
    )



    return (
        <div className="home">
            <Navbar Hiddening={Hiddening} setHiddening={setHiddening}/>
            <div className={shortContent}>
                <Stories Hiddening={Hiddening}/>
                {listPost}
            </div>
        </div>
    )
}

export default Home;