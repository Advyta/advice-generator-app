import image1 from "../images/pattern-divider-desktop.svg";
import image2 from '../images/pattern-divider-mobile.svg'

export default function AdviceDivider() {
  return (
    <>
        <div className='py-4 d-none d-sm-block'>
            {/* Show this divider on screens larger than 375px */}
            <img src={image1} alt="divider" />
        </div>
        <div className='py-4 d-sm-none'>
            {/* Show this divider on screens of 375px or less */}
            <img src={image2} alt="divider" />
        </div>
    </>
  )
}
