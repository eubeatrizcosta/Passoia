import "./looks.scss"
import Card from '../../assets/Card.png'
import Card1 from '../../assets/Card1.png'
import Card2 from '../../assets/Card2.png'
import Card3 from '../../assets/Card3.png'

 

function Looks() {
    return (
        <>
            <section className="Looks-Container">
                <h2>LOOKS E DICAS DE MAQUIAGEM</h2>
                <div className="cards-container">
                    <img src={Card} alt="Imagem com uma modelo e um texto escrito Lábios"/>
                    <img src={Card1} alt="Imagem com uma modelo e um texto escrito Olhos"/>
                    <img src={Card2} alt="Imagem com uma modelo e um texto escrito Rosto"/>
                    <img src={Card3} alt="Imagem com uma modelo e um texto escrito Tendencia"/>
                </div>
            </section>
        </>
    )
}

export default Looks