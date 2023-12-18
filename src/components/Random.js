import Spinner from "./Spinner"
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Random(){
    const {gif, fetchData, loading} = useGif();

    return (
    <div className="w-1/2 bg-green-400 border border-black rounded-lg flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className="text-2xl underline font-bold uppercase mt-[15px]">A Random GIF</h1>
        
        {loading ? <Spinner/> : <img src={gif} width="450"/>}
        
        <button onClick={() => fetchData()} className="w-10/12 bg-white py-2 rounded-lg mb-[20px]">Generate</button>
    </div>
    );
}

export default Random;