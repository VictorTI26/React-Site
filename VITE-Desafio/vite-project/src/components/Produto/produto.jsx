import "./produto.css";
function produto() {
  return (
    <div className="produto">
      <p className="titulo-principal">Our Products</p>

      <div className="row">
        <div className="singular">
          <img src="./public/images/Syltherine.png" alt="Logo" />
          <div className="espaco">
            <p className="titulo">Syltherine</p>
            <p className="texto">Stylish cafe chair</p>
            <div className="preco">
              <p className="titulo-preco">Rp 2.500.000</p>
              <p className="texto-preco">Rp 3.500.000</p>
            </div>
          </div>
        </div>
        <div className="singular">
          <img src="./public/images/Leviosa.png" alt="Logo" />
          <div className="espaco">
            <p className="titulo">Leviosa</p>
            <p className="texto">Stylish cafe chair</p>
            <div className="preco">
              <p className="titulo-preco">Rp 2.500.000</p>
            </div>
          </div>
        </div>
        <div className="singular">
          <img src="./public/images/Lolito.png" alt="Logo" />
          <div className="espaco">
            <p className="titulo">Lolito</p>
            <p className="texto">Luxury big sofa</p>
            <div className="preco">
              <p className="titulo-preco">Rp 7.000.000</p>
              <p className="texto-preco">Rp 14.000.000</p>
            </div>
          </div>
        </div>
        <div className="singular">
          <img src="./public/images/Respira.png" alt="Logo" />
          <div className="espaco">
            <p className="titulo">Respira</p>
            <p className="texto">Outdoor bar table and stool</p>
            <div className="preco">
              <p className="titulo-preco">Rp 500.000</p>
            </div>
          </div>
        </div>
      </div>
      {/* separação */}
      <div className="row2">
        <div className="singular">
          <img src="./public/images/Grifo.png" alt="Logo" />
          <div className="espaco">
            <p className="titulo">Grifo</p>
            <p className="texto">Night lamp</p>
            <div className="preco">
              <p className="titulo-preco">Rp 1.500.000</p>
            </div>
          </div>
        </div>
        <div className="singular">
          <img src="./public/images/Muggo.png" alt="Logo" />
          <div className="espaco">
            <p className="titulo">Muggo</p>
            <p className="texto">Small mug</p>
            <div className="preco">
              <p className="titulo-preco">Rp 150.000</p>
            </div>
          </div>
        </div>
        <div className="singular">
          <img src="./public/images/Pingky.png" alt="Logo" />
          <div className="espaco">
            <p className="titulo">Pingky</p>
            <p className="texto">Cute bed set</p>
            <div className="preco">
              <p className="titulo-preco">Rp 7.000.000</p>
              <p className="texto-preco">Rp 14.000.000</p>
            </div>
          </div>
        </div>
        <div className="singular">
          <img src="./public/images/Potty.png" alt="Logo" />
          <div className="espaco">
            <p className="titulo">Potty</p>
            <p className="texto">Minimalist flower pot</p>
            <div className="preco">
              <p className="titulo-preco">Rp 500.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default produto;