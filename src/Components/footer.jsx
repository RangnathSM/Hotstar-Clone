import '../Styles/footer.css'
const Footer = () => {
    return ( 
         <div className="footer">
           <div className="footer_logo">
            <img src="images/NavLogo.svg" alt="" />
           </div>
           <div className="nav_links">
                <ul>
                    <li><a href="">Terms and Conditions</a></li>
                    <li><a href="">Send us Feedback</a></li>
                    <li><a href="">Help</a></li>
                </ul>
           </div>
           <div className="desc">
             <p>© 1996-2022, Hotstar.com, Inc. or its affiliates</p>
           </div>
         </div>
     );
}
 
export default Footer;