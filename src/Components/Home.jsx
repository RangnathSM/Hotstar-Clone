
const Home = () => {
    let db = [
        {
            image:"images/img1.jpg"
        },
        {
            image:"images/img2.jpg"
        }
    ]
    return ( 
        <div className="home">
            <div className="banner">
                <div className="description">
                    <p>All time best and noteworthy movies in just one click.</p>
                    <button>Subscribe Now</button>
                </div>
                <div className="banner_image">
                    <img width="900" src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-11-25/ctp_desk-39b07654-1ec7-4897-a389-8dd23c04a6c4.jpg" alt="" />
                </div>
            </div>
            <div className="movies_list">
                
                <div className="head">
                <h1>Recomended For You</h1>
                </div>

                <div className="imgs">
                <img src="images/img1.jpg" alt="" />
                <img src="images/img2.jpg" alt="" />
                <img src="images/img3.jpg" alt="" />
                <img src="images/img4.jpg" alt="" />
                </div>
                
            </div>
        </div>
     );
}
 
export default Home;