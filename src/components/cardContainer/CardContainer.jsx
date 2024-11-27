import React from 'react'
import './cardContainer.css'
import Card from '../card/Card'
import image1 from '../../assets/back1.jpg'
import image2 from '../../assets/3.jpeg'
import image3 from '../../assets/4.jpeg'
import image4 from '../../assets/5.jpeg'

export default function CardContainer() {
  return (
    <div className='cardContainer'>
       <Card title="first" desc="tttttttttttt" image={image1}/>
       <Card title="second" desc="dddddddd" image={image2}/>
       <Card title="third" desc="rrrrr" image={image3}/>
       <Card title="fourth" desc="wwww" image={image4}/>

    </div>
  )
}
