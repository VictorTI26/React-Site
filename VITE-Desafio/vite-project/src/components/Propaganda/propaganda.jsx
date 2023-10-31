import "./propaganda.css";

function propaganda() {
    return (
        <div className="propaganda">
            <img src="./public/images/Banner.jpg" alt="Banner" />
            <div className="cardPropaganda">
                <p className="textoPropaganda">New Arrival</p>
                <p className="tituloPropaganda">Discover Our New Collection</p>
                {/* <p className="tituloPropaganda"></p> */}
                <p className="textoPropaganda">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button>BUY NOW</button>
            </div>
            <div className="browse">
            <text className="frase">Browse the Range</text>
            <p className="subfrase">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
        
    );
    }

export default propaganda;