import React, { useState } from "react";
import Spinner from "./Spinner"
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Tag(){

    const [tag, setTag] = useState("");
    const {gif, fetchData, loading} = useGif(tag);

    return (
    <div className="w-1/2 bg-blue-400 border border-black rounded-lg flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className="text-2xl underline font-bold uppercase mt-[15px]">Random {tag} GIF</h1>
        
        {loading ? <Spinner/> : <img src={gif} width="450"/>}

        <input 
            className="w-10/12 py-2 rounded-lg mb-[3px] text-center"
            placeholder=""
            value={tag}
            onChange={(event) => setTag(event.target.value)}
        />
        
        <button onClick={() => fetchData(tag)} className="w-10/12 bg-white py-2 rounded-lg mb-[20px]">Generate</button>
    </div>
    );
}

export default Tag;