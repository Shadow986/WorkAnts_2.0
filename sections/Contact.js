import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiPhone, FiHelpCircle, FiMessageCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiPhone size={30} className='icons' />
                  <h3>(+27) 11-412-12930</h3>
                  <h3>(+27) 73-246-1964</h3>
                  <h3>(+27) 83-375-1363</h3>
                  <span>Call us: Mon - Fri 9:00 - 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>New York</h3>
                  <span>990 Madison Ave, Midtown Manhattan, 2th Floor, NY 10022</span>
                </div>
                <div className='box'>
                  <FiMessageCircle size={30} className='icons' />
                  <h3>daniels@workants.co.za</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>daniels@workants.co.za</h3>
                  <span>Engineer at WorkAnts</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <BsFacebook size={25} />
                  </a>
                </li>
                <li className='icon'>
                  <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={25} />
                  </a>
                </li>
                <li className='icon'>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram size={25} />
                  </a>
                </li>
                <li className='icon'>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin size={25} />
                  </a>
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>

              <form>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>your budget</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>timeframe</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols='30' rows='10'></textarea>
                </div>
                <button className='button-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
