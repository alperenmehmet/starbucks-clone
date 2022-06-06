import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Accordion = ({ title, links }) => {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <div className="accordion">
      <div className="accordion-header">
        <p>{title}</p>
        <button
          className="down-up-btn"
          onClick={() => setShowLinks(!showLinks)}
        >
          {showLinks ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <ul>
        {links.map((item, index) => showLinks && <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Accordion
