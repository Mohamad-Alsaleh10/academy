import Cursoul from '../../components/cursoul/Cursoul'
import Footer from '../../components/footer/Footer'
import Map from '../../components/map/Map'
import Navbar from '../../components/navbar/Navbar'
import Portfolio from '../../components/portfolio/Portfolio'
import './home.css'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Cursoul/>
        <Portfolio/>
        <Map/>
        <Footer/>
    </div>
  )
}
