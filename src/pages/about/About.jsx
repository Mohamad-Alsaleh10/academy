import Navbar from '../../components/navbar/Navbar'
import './about.css'
import about from '../../assets/about.avif'
import Footer from '../../components/footer/Footer'
export default function About() {
  return (
    <div>
        <Navbar/>
        <div className="about-content">
            <div className="img">
                 <img src={about} alt="" />
            </div>
            <div className="about-desc">
                <h3 className="about-title">Our Team</h3>
                <p className="about-desc-parg">
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi ducimus corrupti, voluptates vel dolores tempore nesciunt nihil veritatis cupiditate eaque deserunt! Dignissimos, adipisci amet voluptates dolor libero consequatur quia.
                </p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
