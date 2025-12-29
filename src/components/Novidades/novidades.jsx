import "./novidades.scss"
import BannerNews from "../../assets/imgs/makeBanner.png"

function Novidades() {
    return (
        <>
            <section className="News4u-container">
                <h2>NOVIDADES PARA VOCÊ</h2>
                <img src={BannerNews} alt="imagem de maquiagens espalhadas" />
            </section>
        </>
    )
}

export default Novidades;