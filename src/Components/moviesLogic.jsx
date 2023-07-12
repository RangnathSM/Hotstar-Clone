const Movieslogic = (props) => {
    let header=props.title
    let favouritesData=props.data
    let handleRemove=props.data2

    return ( 
        <div className="movieslogic">
            <div className="favs">
                <h1>{header}</h1>
                {favouritesData.map((data)=>(
                    <div className="favs_list">
                        <h2>{data.title}</h2>
                        <p>{data.language}/{data.genre}</p>
                        <p>{data.rating}⭐</p>
                        <button onClick={()=>{handleRemove(data.id,data.title)}}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Movieslogic;