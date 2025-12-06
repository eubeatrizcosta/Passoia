import Batom from '../../assets/Batom.png'
import BatomLiquido from '../../assets/BatomLiquido.png'
import BatomOceane from '../../assets/BatomOceane.png'
import base from '../../assets/base.png'
import fivestars from '../../assets/fivestars.png'
import corazul from '../../assets/corazul.png'
import corvermelho from '../../assets/corvermelho.png'
import cormarrom from '../../assets/cormarrom.png'
import corbase from '../../assets/corbase.png'
import vermelho from '../../assets/vermelho.png'
import azul from '../../assets/azul.png'
import marrom from '../../assets/marrom.png'
import './lancamentos.scss'
import { useState } from 'react'
function Lancamentos () {

  const [LipsColor, setLipsColor] = useState(vermelho);

  return (
    <section className="release-section">
      <h2>APROVEITE OS LANÇAMENTOS</h2>
      <div className="release-container">
        
        <div className="release-imgs">
          <img src={Batom} alt="imagem com batom longo" />
          <img src={BatomLiquido} alt="Imagem com batom Liquído" />
          <img src={BatomOceane} alt="imagem com Batom preto" />
        </div>

        <div className="release-preview">
          <img src={LipsColor} alt="Imagem de uma mulher com batom" />
        </div>

        <div className="release-info">
          <img className="release-stars-info" src={fivestars} alt="estrelas de avaliacao"/>
          <h3>Matte Premium</h3>
          <p>Cores disponíveis</p>


          <div className="release-info-pallet">
                    <img 
                        onClick={()=>setLipsColor(azul)}
                        onMouseOver={()=>setLipsColor(azul)} 
                        src={corazul} 
                        alt="circulo azul" 
                    />

         <img 
                        
                    onClick={()=>setLipsColor(vermelho)} 
                        onMouseOver={()=>setLipsColor(vermelho)} 
                        src={corvermelho} 
                        alt="circulo vermelho" 
                    />
                    <img 
                        onClick={()=>setLipsColor(marrom)} 
                        onMouseOver={()=>setLipsColor(marrom)} 
                        src={cormarrom} 
                        alt="circulo marrom" 
                    />
                    <img 
                        onClick={()=>setLipsColor(base)} 
                        onMouseOver={()=>setLipsColor(base)} 
                        src={corbase} 
                        alt="circulo cor base" 
                    />

                    </div>
          <h4>Descrição</h4>
          <h5>O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.</h5>
        </div>
  </div>
    </section>
  )
}
export default Lancamentos