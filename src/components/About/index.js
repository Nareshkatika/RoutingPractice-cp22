// Write your JS code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div>
    <Header />
    <div className="ArrangeEl1">
      <img
        className="imageEl"
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
      />
      <h1 className="headingEl">About</h1>
      <p className="paragraphEl">
        I Love to create! I am a frontend web developer
      </p>
    </div>
  </div>
)

export default About
