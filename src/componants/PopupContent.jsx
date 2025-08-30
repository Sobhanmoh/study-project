import { createPortal } from "react-dom"

const PopupContent = ({ copied }) => {
  return createPortal(
  <section>
    {copied && (
    <div 
        style={{position: "absolute", 
        bottom: "3rem", 
        left: "50%" 
        }}>
        Copied to Clipboard
    </div>
    )}
    </section>,
    document.querySelector("#popup-content")
  )
}

export default PopupContent