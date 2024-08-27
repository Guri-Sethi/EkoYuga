import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ClientPage.css'
import cart from '../images/cart.png'
import photo from '../images/Ewaste1.jpg'
import logo from '../images/fullLogo.png'
import logoWhite from '../images/EkoYugaWhite.png'
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import GpsFixedSharpIcon from '@mui/icons-material/GpsFixedSharp';


function ClientPage() {
  const [showModal, setShowModal] = useState(true);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <nav id='clientNav'>
        <Link to='/'>
          <div className="logo"><img src={logo} alt="" id='logo' /></div>
        </Link>
        <div className="items" id="clientItems">
          <ul id='navUl'>
            <li id='navLi'><Link to='/' onClick="{scrollToFooter}">History</Link></li>
            <li id='navLi'><Link to='/' onClick="{scrollToWhoAreWe}">EkoPoints</Link></li>
            <li id='navLi'>
              <div className="dropdown" id='dropdown'>
                <a className="btn dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Knowledge Hub
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="https://namoewaste.com/" target="_blank" rel="noopener noreferrer">namoEwaste</a></li>
                  <li><a className="dropdown-item" href="https://greene.gov.in/" target="_blank" rel="noopener noreferrer">Greene</a></li>
                  <li><a className="dropdown-item" href="https://www.epa.gov/international-cooperation/cleaning-electronic-waste-e-waste" target="_blank" rel="noopener noreferrer">EPA US E-waste site</a></li>
                  <li><a className="dropdown-item" href="https://ewasteindia.com/" target="_blank" rel="noopener noreferrer">E-waste India</a></li>
                </ul>
              </div>
            </li>
            <li id='navLi'><Link to='/' onClick="{scrollToFooter}"><img src={cart} id="cart" alt="" /></Link></li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div className={`clientContainer ${showModal ? "blurred-content" : ""}`}>
        <div className="clientLocation">
          <div className="location">
            <LocationOnTwoToneIcon style={{ fontSize: "32px" }} />

            <form className="location-form-inline my-2 my-lg-0">
              <input className="location-form-control mr-sm-2" type="search" placeholder="Location" aria-label="Search" />
              <button className="locationBtn my-2 my-sm-0" type="submit">Search</button>
            </form>
            <IconButton>
              <GpsFixedSharpIcon style={{ fontSize: "32px" }} />
            </IconButton>
            <p style={{ fontWeight: "bold" }}>Near Me</p>
          </div>
          <div className="clientBtns">
            <button className="dispose" id='dispose'>Dispose</button>
            <button className="dispose" id='purchase'>Purchase</button>
          </div>
        </div>

        <div className="clientContent">
          <div className="clientFilter">
            <h3 style={{ textAlign: "center" }}>Filter</h3>
            <div className="filterOptions">
              <h6 style={{ fontWeight: "bold" }}>Type:</h6>
              <ul id="filterUl">
                <li><label htmlFor="">Large Appliances <input type="checkbox" /></label></li>
                <li><label htmlFor="">Small Appliances <input type="checkbox" /></label></li>
                <li><label htmlFor="">IT & Telecom equips <input type="checkbox" /></label></li>
                <li><label htmlFor="">Consumer Electronics <input type="checkbox" /></label></li>
                <li><label htmlFor="">Lighting Equipments <input type="checkbox" /></label></li>
                <li><label htmlFor="">Batteries <input type="checkbox" /></label></li>
                <li><label htmlFor="">Others <input type="checkbox" /></label></li>
              </ul>
              <hr style={{ border: "1px solid grey" }} />
              <h6 style={{ fontWeight: "bold" }}>Distance:</h6>
              <ul id="filterUl">
                <li><input type="number" placeholder='in kms' min="0" /></li>
              </ul>
              <hr style={{ border: "1px solid grey" }} />
              <h6 style={{ fontWeight: "bold" }}>Rating:</h6>
              <ul id="filterUl">
                <li><label htmlFor="">5 <input type="radio" name='rating' /></label></li>
                <li><label htmlFor="">4 <input type="radio" name='rating' /></label></li>
                <li><label htmlFor="">3 <input type="radio" name='rating' /></label></li>
                <li><label htmlFor="">2 <input type="radio" name='rating' /></label></li>
                <li><label htmlFor="">1 <input type="radio" name='rating' /></label></li>
              </ul>
            </div>
            <br />
            <hr style={{ border: "1.6px solid black" }} />
            <h3 style={{ textAlign: "center" }}>Sort By:</h3>
            <ul id="filterUl">
              <li><label htmlFor="" >Price Low to High <input type="radio" name='sorting' /></label></li>
              <li><label htmlFor="">Price High to Low <input type="radio" name='sorting' /></label></li>
            </ul>
          </div>
          <div className="clientWindow">
            <div className="clientCards">
              <div className="productImage">
                <img src={photo} alt="" className='collectorImage' />
              </div>
              <div className="collectorDetails">
                <p>Company name</p>
                <p>address</p>
                <p>GST no.</p>
                <p>EkoVerified</p>
                <button id='getDetails'>Get Details</button>
              </div>
            </div>
            <div className="clientCards">
              <div className="productImage">
                <img src={photo} alt="" className='collectorImage' />
              </div>
              <div className="collectorDetails">
                <p>Company name</p>
                <p>address</p>
                <p>GST no.</p>
                <p>EkoVerified</p>
                <button id='getDetails'>Get Details</button>
              </div>
            </div>
            <div className="clientCards">
              <div className="productImage">
                <img src={photo} alt="" className='collectorImage' />
              </div>
              <div className="collectorDetails">
                <p>Company name</p>
                <p>address</p>
                <p>GST no.</p>
                <p>EkoVerified</p>
                <button id='getDetails'>Get Details</button>
              </div>
            </div>
            <div className="clientCards">
              <div className="productImage">
                <img src={photo} alt="" className='collectorImage' />
              </div>
              <div className="collectorDetails">
                <p>Company name</p>
                <p>address</p>
                <p>GST no.</p>
                <p>EkoVerified</p>
                <button id='getDetails'>Get Details</button>
              </div>
            </div>
            <div className="clientCards">
              <div className="productImage">
                <img src={photo} alt="" className='collectorImage' />
              </div>
              <div className="collectorDetails">
                <p>Company name</p>
                <p>address</p>
                <p>GST no.</p>
                <p>EkoVerified</p>
                <button id='getDetails'>Get Details</button>
              </div>
            </div>
            <div className="clientCards">
              <div className="productImage">
                <img src={photo} alt="" className='collectorImage' />
              </div>
              <div className="collectorDetails">
                <p>Company name</p>
                <p>address</p>
                <p>GST no.</p>
                <p>EkoVerified</p>
                <button id='getDetails'>Get Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal-overlay ${showModal ? "show" : ""}`}>
        {/* Login Modal */}
        <div className={`login-modal ${showModal ? "show" : ""}`} onClick={(e) => e.stopPropagation()}>
          {/* Your login form content goes here */}
          <h2 style={{ textAlign: "center" }}>Login</h2>
          <form id='loginForm' onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
            {/* Login form fields */}
            <input type="text" placeholder='UserName/Email ID/ Contact' className='loginInput' required />
            {/* <br /> */}
            <input type='password' placeholder='password' className='loginInput' required />
            {/* <br /> */}
            <button className='loginInput' id='loginBtn'>login</button>
          </form>
          <hr />
          <div className="clientSignUp">
            <p style={{ textAlign: "center" }}>Not having account ?</p>
            <a href="/">Sign Up</a>
          </div>
        </div>
      </div>
      <div className='footer' id='clientFooter'>
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
            <div className="socioIcons"><IconButton><InstagramIcon style={{ fontSize: "32px" }} /></IconButton></div>
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
            <textarea name="query" id="" cols="30" rows="4" placeholder='Your Query'></textarea>
            <br />
            <button id='sendBtn'>Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ClientPage
