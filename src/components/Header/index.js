// Write your JS code here
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="FinalEl34">
    <div className="rowArrangeEl32">
      <img
        className="imageSizeEl"
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="headingEl">Wave</h1>
    </div>

    <ul className="unorderedEl">
      <li className="listEl">
        <Link to="/">Home</Link>
      </li>
      <li className="listEl">
        <Link to="/about">About</Link>
      </li>
      <li className="listEl">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default withRouter(Header)
