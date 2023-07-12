import { useEffect, useState } from "react"
import '../Styles/Movies.css'
import Movieslogic from "./moviesLogic"

const Movies = () => {
    let [favouritesData, setfavsData]=useState([])
    
    useEffect(()=>{
        let fetchData=async()=>{
            let response = await fetch('http://localhost:2000/favourites')
            let data =await response.json()
            setfavsData(data)
        }
        fetchData()
    },[])
   
    let handleRemove=(id,title)=>{
        setfavsData(favouritesData.filter(x => x.id !== id))
        alert(`${title} has been removed`)
    }
    return ( 
        <div className="movies">
            <Movieslogic title="Favourites of All Time" data={favouritesData} data2={handleRemove}/>
            <br />
            <br />
            <Movieslogic title="Top Rated" data={favouritesData.filter(x=>x.rating>=4.5)} data2={handleRemove} />
            <br />
            <br />
            <Movieslogic title="Top English Movies and TV Shows" data={favouritesData.filter(x=>x.language==='english')} data2={handleRemove} />

        </div>
     );
}
 
export default Movies;