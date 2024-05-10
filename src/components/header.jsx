import Navbar from "./navbar";

const Header = () => {
    return(
        <div id="main">
            <Navbar/>
            <div className="names">
                <h1><span>Launch Your App</span> with confidence and cretivity</h1>
                <p className="details">Lorem ipsum dolor sit amet consectetur 
               quas doloremque ipsum</p>
               <a href="#" className="cv-btn">Download</a>
            </div>

        </div>

    );

}
export default Header;