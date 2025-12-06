import "./banner.scss"
import BannerHero from '../../assets/banner.png'


function Banner(){
  return (
    <>
    <div className="banner-container">
      <img src={BannerHero} alt="Uma mulher com uma linha de cosmético" />
    </div>
    </>
  )
}

export default Banner


