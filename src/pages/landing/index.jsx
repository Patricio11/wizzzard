
import "./index.css"
import Header from '../../components/landing/header'
import Footer from '../../components/landing/footer'
import Abount from "../../components/landing/content/about"
import Offer from "../../components/landing/content/offer"
import Contact from "../../components/landing/content/contact"

const Landing = () => {

  return (
    <div className='landing-container'>
        
        <Header />
        
        <div className="content-container">
          <Abount />
          <Offer />
          <Contact />
        </div>
       
        <Footer />
        
    </div>
  )
}

export default Landing