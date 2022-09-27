import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer-section">
        <div class="container">
          <div class="footer-cta mt-3 mb-3">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find us</h4>
                    <span>1010 Avenue, sw 54321, chandigarh</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Call us</h4>
                    <span>9876543210 0</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content mt-2">
            <div class="row">
              <div class="col-xl-4 col-lg-4 ">
                <div class="">
                 
                    <a  href="index.html">
                     <h2 className="d-flex justify-content-center">PJ Club</h2>
                    </a>
                    <p className="text-light text-start d-flex justify-content-center">
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit.
                    </p>
                  
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    {/* <h3>Useful Links</h3> */}
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                   
                    
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#">
                      <i class="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-google-plus-g google-bg"></i>
                    </a>
                  </div>
                  {/* <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div> */}
                  {/* <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div> */}
                  {/* <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>
                    Copyright &copy; 2018, All Right Reserved{" "}
                    <a href="https://codepen.io/anupkumar92/">Anup</a>
                  </p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <div id="foot" className="row pb-3">
        <div className="col-md-3 mt-3 ">
          <div style={{ marginLeft: "15px" }}>
            <h5 className="">PJ Club</h5>
            <Link className="Linkk" to="./home">Home</Link>
          </div>
        </div>
        <div className="col-md-3 mt-3">
          <div style={{ marginLeft: "15px" }}>
            <h4>Contact Us</h4>
            <>
              <>Email:pj@gmail.com</>
              <br />
              <>Phone:+1646524892</>
              <br />
              <>Address:br st,Nyc,USA</>
            </>
          </div>
        </div>
        <div className="col-md-3 mt-3">
          <div style={{ marginLeft: "15px" }}>
            <h4>Contact Us</h4>
            <>
              <>Email:pj@gmail.com</>
              <br />
              <>Phone:+1646524892</>
              <br />
              <>Address:br st,Nyc,USA</>
            </>
          </div>
        </div>
        <div className="col-md-3 mt-3 d-flex ">
          <div style={{ marginLeft: "15px" }}>
            <h4>Follow Us</h4>
            <a href="https://web.facebook.com/profile.php?id=100004528784980">
              <i className="fab fa-facebook-square text-primary fs-2 me-2"></i>
            </a>
            <a href="https://www.youtube.com/c/KasirAhmod">
              <i className="fab fa-youtube-square text-danger fs-2 me-2"></i>
            </a>

            <i className="fab fa-instagram-square fs-2 me-2"></i>
            <i className="fab fa-snapchat fs-2 text-warning me-2"></i>
          </div>
        </div>
      </div>
      <div className="footer2 ">
        <small className="d-flex justify-content-center">
          {" "}
          <Link className="nav-link fs-5 text-light" to="/policy">
            <small>Policy & policy | Terms of Services | Cookies</small>
          </Link>
        </small>
        <small className="d-flex justify-content-center">
          © 2021 all rights reserved by <span>pj</span>
        </small>
      </div> */}
    </div>
  );
};

export default Footer;
