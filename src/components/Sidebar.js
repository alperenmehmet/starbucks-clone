import React from 'react'
import { useGlobalContext } from '../context'
import {
  FaMapMarkerAlt,
  FaAlignJustify,
  FaRegWindowClose
} from 'react-icons/fa'
const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext()

  React.useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('no-scroll')
    }
  }, [isSidebarOpen])
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar ' : 'sidebar'}`}>
      <div className="sidebar-container">
        <div className="sidebar-content">
          <ul className="sidebar-links">
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Rewards</a>
            </li>
            <li>
              <a href="">Gift Cards</a>
            </li>
          </ul>
          <ul className="sidebar-buttons">
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
            <li>
              <a href="">
                <FaMapMarkerAlt className="icon-map" />
                <span>Find a store</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
