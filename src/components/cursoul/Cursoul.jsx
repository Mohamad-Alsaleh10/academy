import './cursoul.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import back from '../../assets/back1.jpg'
export default function Cursoul() {
  return (

    <Splide aria-label="My Favorite Images">
  <SplideSlide>
    <img src={back} alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src={back} alt="Image 2"/>
  </SplideSlide>
</Splide>
  )
}
