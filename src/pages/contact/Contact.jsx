import Navbar from '../../components/navbar/Navbar'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
        <Navbar/>
        
        <div className="contact-content">
            <div className="contact-form">
                <form action="">
                    <input type="text" placeholder='enter your name' />
                    <input type="email" name="" id="" placeholder='your email'/>
                    <textarea name="" id="" placeholder='your message'></textarea>
                    <input type="button" value="send" />
                </form>
            </div>
            <div className="contact-info">
                <div className="email">
                <MdEmail />
                 <p>email@gmail.com</p>
                </div>
                <div className="phone">
                <FaPhoneAlt />
                <p>+963 999 999 999</p>

                </div>
            </div>
        </div>

    </div>
  )
}
