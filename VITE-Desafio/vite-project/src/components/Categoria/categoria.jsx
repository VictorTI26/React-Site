import "./categoria.css";

function categoria() {
    return(
        <div className="categoria">
            <div className="browse">
            <text className="frase">Browse the Range</text>
            <p className="subfrase">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card">
            <img src="./public/images/Dining.png" alt="Card"/>
            <img src="./public/images/Living.png" alt="Card"/>
            <img src="./public/images/Bedroom.png" alt="Card"/>
        </div>  
        <div className="nomeCategoria">
            <text>Dining</text>
            <text>Living</text>
            <text>Bedroom</text>
        </div>
        </div>
    );
}
    
export default categoria;