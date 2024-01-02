import React from "react";
import './Search.css';

const Search = (promp) => {
    return (
        <div className={promp.clsName}>
            <div className="search-form">
                <form action="#">
                    <input type="text" placeholder="Search..."/>
                    <button>Search</button>
                </form>
            </div>
            <div className="result-form">
                this is for result form
            </div>
        </div>
    )
}

export default Search;