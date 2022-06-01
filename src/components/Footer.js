import {
  FaChevronDown,
  FaSpotify,
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='about-us'>
        <h3>
          about us
          <span>
            <FaChevronDown />
          </span>
        </h3>
        <ul>
          <li>our company</li>
          <li>our coffee</li>
          <li>stories and news</li>
          <li>starbuks archive</li>
          <li>investor relations</li>
          <li>customer services</li>
        </ul>
      </div>
      <div className='careers'>
        <h3>
          careers
          <span>
            <FaChevronDown />
          </span>
        </h3>
        <ul>
          <li>culture and values</li>
          <li>inclusion, diversity and equity</li>
          <li>college achievement plan</li>
          <li>alumni community</li>
          <li>U.S. careers</li>
          <li>international careers</li>
        </ul>
      </div>
      <div className='social-impact'>
        <h3>
          social-impact
          <span>
            <FaChevronDown />
          </span>
        </h3>
        <ul>
          <li>people</li>
          <li>planet</li>
          <li>environmental and social reporting</li>
        </ul>
      </div>
      <div className='for-business-partners'>
        <h3>
          for business partners
          <span>
            <FaChevronDown />
          </span>
        </h3>
        <ul>
          <li>landlord support center</li>
          <li>suppliers</li>
          <li>corporote gift card sales</li>
          <li>office and foodservice coffee</li>
        </ul>
      </div>
      <div className='order-and-pickup'>
        <h3>
          order and pickup
          <span>
            <FaChevronDown />
          </span>
        </h3>
        <ul>
          <li>order on the app</li>
          <li>order on the web</li>
          <li>delivery</li>
          <li>order and pickup options</li>
          <li>explore and find coffee for home</li>
        </ul>
      </div>
      <div className='footer-icons'>
        <a href=''>
          <FaSpotify />
        </a>
        <a href=''>
          <FaFacebook />
        </a>
        <a href=''>
          <FaPinterest />
        </a>
        <a href=''>
          <FaInstagram />
        </a>
        <a href=''>
          <FaYoutube />
        </a>
        <a href=''>
          <FaTwitter />
        </a>
      </div>
      <div className='company-info'>
        <ul>
          <li>
            <a href=''>privacy policy</a>
          </li>
          <li>
            <a href=''>terms of use</a>
          </li>
          <li>
            <a href=''>CA supply chain act</a>
          </li>
          <li>
            <a href=''>cookie preferences</a>
          </li>
        </ul>
      </div>
      <div className='rights-year'>
        <p>© 2022 Starbucks Coffee Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
