import {
  FaMapMarkerAlt,
  FaAlignJustify,
  FaRegWindowClose
} from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
import { useGlobalContext } from '../context'
const Navbar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext()

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img
            src="https://seeklogo.com/images/S/starbucks-coffee-logo-0639383401-seeklogo.com.png"
            alt="logo"
            className="navbar-logo"
          />
          <button className="toggle-btn" onClick={toggleSidebar}>
            {isSidebarOpen ? <MdOutlineClose /> : <FaAlignJustify />}
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <a href="">MENU</a>
          </li>
          <li>
            <a href="">REWARDS</a>
          </li>
          <li>
            <a href="">GIFT CARDS</a>
          </li>
        </ul>
        <ul className="nav-buttons">
          <li>
            <a href="">
              <FaMapMarkerAlt className="icon-map" />
              <span>Find a store</span>
            </a>
          </li>
          <li>
            <a href="" className="btn white-btn">
              Sign in
            </a>
          </li>
          <li>
            <a href="" className="btn black-btn">
              Join now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
