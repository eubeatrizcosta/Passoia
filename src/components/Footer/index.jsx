import "./footer.scss"
import pix from "../../assets/pix.png";
import boleto from "../../assets/boleto.png";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import Instagram from "../../assets/Instagram.png";
import Facebook from "../../assets/Facebook.png";
import YouTube from "../../assets/YouTube.png";
import Twitter from "../../assets/Twitter.png";

function Footer() {
  return (
    <>
    <section className="Footer-container">
        <div className="footer-content">
            <div className="footer-section">
                <h3>ATENDIMENTO</h3>
                <ul>
                    <li><a href="#">Fale Conosco</a></li>
                    <li><a href="#">Perguntas Frequentes</a></li>
                    <li><a href="#">Meus Pedidos</a></li>
                    <li><a href="#">Nossas Lojas</a></li>
                </ul>
            </div>
            
            <div className="footer-section">
                <h3>FORMAS DE PAGAMENTO</h3>
                <div className="payment-methods">
                        <img src={mastercard}alt="Logo MasterCard"/>
                        <img src={visa} alt="Logo Visa" />
                        <img src={pix} alt="Logo Pix" />
                        <img src={boleto} alt="Logo Boleto" />
                </div>
            </div>
            
            <div className="footer-section">
                <h3>SIGA-NOS NAS REDES SOCIAIS</h3>
                <div className="social-icons">
                    <img src={Instagram} alt="Logo Instagram" />
                    <img src={Facebook} alt="Logo Facebook" />
                    <img src={YouTube} alt="Logo Youtube" />
                    <img src={Twitter} alt="Logo Twitter" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer;