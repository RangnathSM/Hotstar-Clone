import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/addFavourites.css'
const AddFavourites = () => {

    let [title,setTitle]= useState("")
    let [genre, setGenre]= useState("")
    let [language, setLanguage]= useState("")
    let [rating,setRating]= useState("")
    let navigate = useNavigate()

    let handleSubmit =(e)=>{
        e.preventDefault()
        let data={title, genre, language, rating}
        fetch('http://localhost:2000/favourites',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert('Movie Added Successfully')
        navigate('/movies')
    }
    let reset = ()=>{
        setTitle("")
        setGenre("")
        setLanguage("")
        setRating("")
    }
    return ( 
        <div className="addFavourites">
            <h1>Add to Favourites</h1>
            <div className="form">
                <div className="form_image">
                    <img src="https://mobimg.b-cdn.net/v3/fetch/50/5081f28733ce69397d496a2dfdcedc2d.jpeg" alt="" />
                </div>
            <div className="form_input">
                        <form action="" onSubmit={handleSubmit}>
                         <div className="title">
                            <input type="text" placeholder="enter title" value={title} onChange={(e)=>setTitle(e.target.value)} />
                         </div>
                         <div className="genre">
                            <input type="text" placeholder="enter genre of the movie" value={genre} onChange={(e)=>setGenre(e.target.value)} />
                         </div>
                         <div className="language">
                            <input type="text" placeholder="enter language" value={language} onChange={(e)=>setLanguage(e.target.value)}/>
                         </div>
                         <div className="rating">
                            <input type="text" placeholder="enter rating" value={rating} onChange={(e)=>setRating(e.target.value)}/>
                         </div>
                         <button type='Submit'>Add To Favourites</button>
                         <button type='Reset' onClick={reset}>Reset</button>
                        </form>
                    </div>
            </div>
        </div>
     );
}
 
export default AddFavourites;