import { useState } from 'react'
import '../Styles/celebs.css'

const Celebs = () => {
    let images1 = [
        {
            img:'images/VR.webp',
            id:1
        },
        {
            img:'images/Robert.jpg',
            id:2
        },
        {
            img:'images/Puneeth.jpg',
            id:3
        },
        {
            img:'images/shivanna.jpg',
            id:4
        }
    ]

    let[imagesData,Setimages]=useState(images1)

    let handleimages=(id)=>
    {
        Setimages(imagesData.filter(x => x.id !== id))
    }
     

    return ( 
        <div className="celebs_list">
            <div className="celebs_images">
            {
                    imagesData.map((data)=>(
                        <div className="images">
                            <img src= {data.img} alt="" style={{width:'300px'}}/>
                            <button onClick={()=>{handleimages(data.id)}}>Remove</button>
                        </div>
                    ))
            }
        </div>
        </div>
     );
}
 
export default Celebs;