import "./footer.css";

function footer(){
    return(
        <div className="footer">
            <div className="principal">
        <div className="inicio">
            <p className="funiro">Funiro.</p>
            <p className="tituloFooter">400 University Drive Suite 200 Coral Gables,</p>
            <p className="tituloFooter">FL 33134 USA</p>
        </div>
        <div className="infos">
            <p className="tituloFooter">Links</p>
            <div className="textoFooter">
            <p>Home</p>
            <p>Shop</p>
            <p>About</p>
            <p>Contact</p>
            </div>
        </div>
        <div className="infos">
            <p className="tituloFooter">Help</p>
            <div className="textoFooter">
            <p>Payment Options</p>
            <p>Returns</p>
            <p>Privacy Policies</p>
            </div>
        </div>
        <div className="infos">
            <p className="tituloFooter">Newsletter</p>
            <div className="newsletter">
            <p className="email">Enter Your Email Addres</p>
            <div className="final">
            <p className="subscribe">SUBSCRIBE</p>
        </div>
        </div>
        </div>
            </div>
            <p className="direitos">2023 furino. All rights reserved</p>
        </div>
    )
}

export default footer;