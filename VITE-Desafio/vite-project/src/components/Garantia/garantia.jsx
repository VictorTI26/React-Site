import "./garantia.css";

function garantia(){
return (
    <div className="garantia">
    <div className="garantiaSec">
        <img src="./public/images/trofeu.png"/>
        <div>
        <p className="titulo">High Quality</p>
        <p className="textoGarantia">crafted from top materials</p>
    </div>
    </div>
    <div className="garantiaSec">
        <img src="./public/images/garantia.png"/>
        <div>
        <p className="titulo">Warranty Protection</p>
        <p className="textoGarantia">Over 2 years</p>
    </div>
    </div>
    <div className="garantiaSec">
        <img src="./public/images/entrega.png"/>
        <div>
        <p className="titulo">Free Shiping</p>
        <p className="textoGarantia">Order over 150$</p>
    </div>
    </div>
    <div className="garantiaSec">
        <img src="./public/images/suporte.png"/>
        <div>
        <p className="titulo">24/7 Support</p>
        <p className="textoGarantia">Dedicated support</p>
    </div>
    </div>
    </div>
 )
}

export default garantia;