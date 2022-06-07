import React from 'react'
import { useGlobalContext } from '../context'
const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext()

  React.useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('no-scroll')
    }
  }, [isSidebarOpen])
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar ' : 'sidebar'}`}>
      <div className="sidebar-container">Inside Sidebar</div>
    </aside>
  )
}

export default Sidebar
