import "./index.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container top-footer">
        <div className="top-footer-row">
          <div className="footer-col">
            <h4>Contact us</h4>
            <a href="mailto:info@wizzzardsa.com" id="wi-email" >
              <div className="icon-box-wizz">

                <img src="images/landing/email.png" alt="wizzard email" />
              
                <span>info@wizzzardsa.com</span>
              </div>
            </a>
          </div>
          <div className="footer-col">
              <h4>Follow us</h4>
              <div className="icon-box-wizz">

                <a href="https://www.instagram.com/p/B-b3H3KngXq/?igshid=yvm5uyg1cxbz" target="_blank">
                    
                  <img src="images/landing/instagram.png" alt="wizzard instagram" />
                </a>
                <a href="https://twitter.com/wizzzardsa?s=09" target="_blank">
                  <img src="images/landing/twitter.png" alt="wizzard twitter" />
                </a>
              </div>
          </div>
          <div className="footer-col">
            <h4>Privacy and Security</h4>
            <ul id="footer-menu">
              <li>
                <a href="/acceptable-policy">Acceptable use policy</a>
              </li>
              <li>
                <a href="/cookies-policy">Cookies policy</a>
              </li>
              <li>
                <a href="/email-disclaimer">Disclaimer</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy policy</a>
              </li>
              <li>
                <a href="/refund-policy">Refund policy</a>
              </li>
              <li>
                <a href="/terms-conditions">Terms and conditions</a>
              </li>
            </ul>
          </div>
        </div>

      </div>


      <footer id="landin-footer">
        <p>&copy; 2023 Wizzzard. All rights reserved.</p>
        
      </footer>
    </div>
  )
}

export default Footer