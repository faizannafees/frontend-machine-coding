import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = ({ items }) => {

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

  return !items || (items.length === 0) ? "No items available" : (
    <div className="accordion">
        {items.map((item, idx) => (
            <div className="accordion-item" key={idx}>
                <button className="accordion-title" onClick={() => handleToggle(idx)}>{item.title}
                    {openIndex === idx ? <FaChevronUp className="right" />
                    : <FaChevronDown className="right" />}
                </button>
                {openIndex === idx && <div className="accordion-content">{item.content}</div>}
            </div>
        ))}
    </div>
  )
}

export default Accordion;