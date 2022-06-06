import {
  FaSpotify,
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaYoutube,
  FaTwitter
} from 'react-icons/fa'
import Accordion from './Accordion'
import { useState } from 'react'
import { footerLinks } from '../data'

const Footer = () => {
  const [data, setData] = useState(footerLinks)
  return (
    <div className="footer main">
      <div className="accordion-parent">
        {data.map((item) => {
          return <Accordion {...item} key={item.id} />
        })}
      </div>
      <div className="footer-icons">
        <a href="">
          <FaSpotify />
        </a>
        <a href="">
          <FaFacebook />
        </a>
        <a href="">
          <FaPinterest />
        </a>
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FaYoutube />
        </a>
        <a href="">
          <FaTwitter />
        </a>
      </div>
      <div className="company-info">
        <ul>
          <li>
            <a href="">privacy policy</a>
          </li>
          <li>
            <a href="">terms of use</a>
          </li>
          <li>
            <a href="">CA supply chain act</a>
          </li>
          <li>
            <a href="">cookie preferences</a>
          </li>
        </ul>
      </div>
      <div className="rights-year">
        <p>© 2022 Starbucks Coffee Company. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
