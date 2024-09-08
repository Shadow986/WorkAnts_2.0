import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <img src='/images/logo3.png' alt='WorkAnts logo' className='logomin' />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+(27) 011 412 1293</h3>
              <h3>+(27) 073 246 1964</h3>
              <br />
              <button className='button-primary'>Request for quote</button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/agency'>About us</Link>
              </li>
              <li>
                <Link href='/team'>Our team</Link>
              </li>
              <li>
                <Link href='/showcase'>Showcase</Link>
              </li>
              <li>
                <Link href='/'>Projects</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/'>Building</Link>
              </li>
              <li>
                <Link href='/'>Architecture</Link>
              </li>
              <li>
                <Link href='/'>Property Development</Link>
              </li>
              <li>
                <Link href='/'>Construction Works</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='www.facebook.com'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='www.whatsapp.com'>
                    <FaWhatsapp size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='www.instagram.com'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='www.linkedin.com'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2005. WORKANTS CONSULTING ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>WORKANTS CONSULTING</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
