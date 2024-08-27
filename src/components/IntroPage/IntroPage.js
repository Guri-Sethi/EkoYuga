import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './IntroPage.css'
import frame1 from '../images/Frame 1.jpg'
import frame2 from '../images/Frame 2.jpg'
import frame3 from '../images/Frame 3.jpg'
import frame4 from '../images/Frame 4.jpg'
import frame5 from '../images/Frame 5.jpg'
import img1 from '../images/Ewaste1.jpg'
import img2 from '../images/introPic1.jpg'
import logo from '../images/fullLogo.png'
import bulbLogo from '../images/bulblogo.png'
import Stats from '../images/Stats.PNG';
import garbage from '../images/garbage.png'
import network from '../images/network.png'
import swap from '../images/swap.png'
import credit from '../images/coin.png'
import education from '../images/puzzle.png'
import partner from '../images/code-of-conduct.png'
import logoWhite from '../images/EkoYugaWhite.png'
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ClientPage from '../ClientPage/ClientPage';

function IntroPage() {
  const [showLogin, setShowLogin] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    setShowLogin(true);
  }
  const scrollToHeader = () => {
    const footerSection = document.getElementById('header');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToFooter = () => {
    const footerSection = document.getElementById('footer');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToWhoAreWe = () => {
    const footerSection = document.getElementById('whoAreWe');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      {!showLogin ? (
        <div>
          <nav>
            <Link to='/' onClick={scrollToHeader}>
              <div className="logo"><img src={logo} alt="" id='logo' /></div>
            </Link>
            <div className="items">
              <ul id='navUl'>
                <li id='navLi'><Link to='/' onClick={scrollToFooter}>Contact Us</Link></li>
                <li id='navLi'><Link to='/' onClick={scrollToWhoAreWe}>Who are we ?</Link></li>
                <li id='navLi'>
                  <div className="dropdown" id='dropdown'>
                    <a className="btn dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Knowledge Hub
                    </a>
                    <ul className="dropdown-menu" id='dropdownMenuLink' aria-labelledby="dropdownMenuLink">
                      <li><a className="dropdown-item" href="https://namoewaste.com/" target="_blank" rel="noopener noreferrer">namoEwaste</a></li>
                      <li><a className="dropdown-item" href="https://greene.gov.in/" target="_blank" rel="noopener noreferrer">Greene</a></li>
                      <li><a className="dropdown-item" href="https://www.epa.gov/international-cooperation/cleaning-electronic-waste-e-waste" target="_blank" rel="noopener noreferrer">EPA US E-waste site</a></li>
                      <li><a className="dropdown-item" href="https://ewasteindia.com/" target="_blank" rel="noopener noreferrer">E-waste India</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
              <button onClick={handleLogin} id='mainBtn'>Login</button>
            </div>
          </nav>
          <div id='header'/>
          <div className="content">
            <img src={img1} alt="img" id='img1' />
            <div id="shortLogo"><img src={bulbLogo} alt="logo" id='bulb' /></div>
            <div className='LogoText'>EkoYuga</div>
          </div>
          <div className="intro">
            <div className="introHead">
              <span>"E-Waste: The Problem, The Promise, The Solution"</span>
            </div>
            <div className="briefIntro">
              <p>
                <span>Electronic waste, or e-waste</span>, refers to discarded electronic devices and electrical equipment that have reached the end of their useful life. This includes everything from old smartphones and laptops to obsolete appliances and electronic gadgets. E-waste poses a significant environmental challenge due to the hazardous materials it contains, such as lead, mercury, and cadmium, which can leach into the soil and water if not properly managed.
                <br />
                <br />
                At EkoYuga, we're committed to tackling this issue head-on by providing a platform that facilitates responsible disposal and recycling of e-waste. By choosing EkoYuga, you're not only decluttering your space but also contributing to a cleaner and more sustainable planet. Join us in the fight against e-waste pollution today!
              </p>
            </div>
          </div>
          <div className="carousel">
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={frame1} className="d-block w-50" alt="..." />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={frame2} className="d-block w-50" alt="..." />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={frame3} className="d-block w-50" alt="..." />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={frame4} className="d-block w-50" alt="..." />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src={frame5} className="d-block w-50" alt="..." />
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div id='whoAreWe' style={{height:'100px'}}></div>
          <h1>Who are We ?</h1>
          <div className="information">
            <div className="left">
              "Welcome to EkoYuga – your trusted partner in E-waste management. We are the bridge connecting conscientious individuals and responsible e-waste facilitators. Our mission is to make recycling electronics effortless, eco-friendly, and rewarding. With EkoYuga, you can contribute to a sustainable future while responsibly disposing of your household electronic waste. Join us in the journey towards a greener, cleaner tomorrow."
            </div>
            <div className="right"><img src={img2} alt="" id='img2' /></div>
          </div>
          <div className="stats">
            <img src={Stats} alt="" id='stats' />
          </div>
          <h1 id='serviceAndSol'>Services and Solutions</h1>
          <div className="services">
            <div className="sols" id='one'>
              <div className="solHead">
                <img src={garbage} alt="" className='solImages' />
                <h2>E-Waste Disposal</h2>
              </div>
              <div className="solContent">
                <ul>
                  <li><strong>Facilitator Selection:</strong> Choose from a list of authorized e-waste facilitators near you to ensure proper disposal.</li>
                  <li><strong>Pickup Scheduling:</strong> Schedule a convenient pickup time for your e-waste with the chosen facilitator.</li>
                </ul>
              </div>
            </div>
            <div className="sols" id='two'>
              <div className="solHead">
                <img src={network} alt="" className='solImages' />
                <h2>Facilitator Network</h2>
              </div>
              <div className="solContent">
                <ul>
                  <li><strong>Verified Partners:</strong> We maintain a database of authorized e-waste facilitators to ensure that your e-waste is in safe hands.</li>
                  <li><strong>Convenient Locator:</strong> Use our tool to find the nearest e-waste facilitators, promoting responsible disposal practices.</li>
                </ul>
              </div>
            </div>
            <div className="sols" id='three'>
              <div className="solHead">
                <img src={swap} alt="" className='solImages' />
                <h2>Circular Economy Promotion</h2>
              </div>
              <div className="solContent">
                <ul>
                  <li><strong>Waste Collector Empowerment:</strong> Waste collectors can register as verified sellers on our platform, creating profiles and listing refurbished or recycled products.</li>
                  <li><strong>Encouraging Reuse:</strong> We promote the reuse of electronic devices, reducing the demand for new ones and conserving resources.</li>
                </ul>
              </div>
            </div>
            <div className="sols" id='four'>
              <div className="solHead">
                <img src={credit} alt="" className='solImages' />
                <h2>Credit Point Rewards</h2>
              </div>
              <div className="solContent">
                <ul>
                  <li><strong>Credit Point Rewards:</strong> Earn credit points by disposing of e-waste, which can be redeemed for discounts on various e-commerce platforms.</li>
                  <li><strong>Financial Incentives:</strong> Our system ensures that responsible e-waste disposal not only benefits the environment but also your wallet.</li>
                </ul>
              </div>
            </div>
            <div className="sols" id='five'>
              <img src={education} alt="" className='solImages' />
              <div className="solHead">
                <h2>Education and Awareness</h2>
              </div>
              <div className="solContent">
                <ul>
                  <li><strong>Information Resources:</strong> Access valuable information, resources, and tips on e-waste disposal, recycling, and the environmental impact of improper disposal.</li>
                  <li><strong>Promoting Responsible Choices:</strong> We believe that informed users are more likely to make responsible decisions regarding their e-waste.</li>
                </ul>
              </div>
            </div>
            <div className="sols" id='six'>
              <img src={partner} alt="" className='solImages' />
              <div className="solHead">
                <h2>Partnership Opportunities</h2>
              </div>
              <div className="solContent">
                <ul>
                  <li><strong>E-commerce Partnerships:</strong> If you're an e-commerce platform interested in partnering with us to offer credit point redemption, contact us to explore collaboration opportunities.</li>
                  <li><strong>Environmental Organizations:</strong> We welcome partnerships with environmental organizations and initiatives that align with our mission.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer' id='footer'>
            <div className="ekoYuga">
              <img src={logoWhite} alt="" id='logoWhite' />
            </div>
            <div className="links">
              <ul id='blogs'>
                <li>Join Us</li>
                <li>Our Works</li>
                <li>Blogs</li>
                <li>FAQ'S</li>
              </ul>
              <h3 id='Connect'>Connect With Us</h3>
              <div className="socialMedia">
                <div className="socioIcons"><IconButton ><InstagramIcon style={{fontSize: "32px"}} /></IconButton></div>
                <div className="socioIcons"><IconButton><FacebookIcon style={{ fontSize: "32px" }} /></IconButton></div>
                <div className="socioIcons"><IconButton><TwitterIcon style={{ fontSize: "32px" }} /></IconButton></div>
                <div className="socioIcons"><IconButton><LinkedInIcon style={{ fontSize: "32px" }} /></IconButton></div>
              </div>
            </div>
            <div className="contactUs">
              <h3>Query:</h3>
              <form>
                <input type="email" placeholder='email' />
                <br />
                <br />
                <textarea name="query" id="" cols="30" rows="4" placeholder='Your Query' style={{resize:"none"}}></textarea>
                <br />
                <button id='sendBtn'>Send</button>
              </form>
            </div>
          </div>
        </div>) : null}
      {showLogin && <ClientPage/>}
    </>
  )
}

export default IntroPage