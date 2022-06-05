import {
  FaChevronDown,
  FaChevronUp,
  FaSpotify,
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaYoutube,
  FaTwitter
} from 'react-icons/fa'
import { useState } from 'react'

const footerLinks = [
  {
    id: 1,
    title: 'about us',
    links: [
      'our company',
      'our coffee',
      'stories and news',
      'starbucks archive',
      'investor relations',
      'customer services'
    ]
  },
  {
    id: 2,
    title: 'about us',
    links: [
      'our company',
      'our coffee',
      'stories and news',
      'starbucks archive',
      'investor relations',
      'customer services'
    ]
  }
]

const Accordion = () => {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <div>
      <div>
        about us
        <button onClick={() => setShowLinks(!showLinks)}>
          {showLinks ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <ul>
        {showLinks && (
          <div>
            <li>our company</li>
            <li>our coffee</li>
            <li>stories and news</li>
            <li>starbucks archive</li>
            <li>investor relations</li>
            <li>customer services</li>
          </div>
        )}
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="footer">
      <div className="">
        {footerLinks.map((item) => {
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
