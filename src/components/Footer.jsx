import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <>
      <div className="footerBody">

        <footer className="footer">
          <div className="decorative-border"></div>


          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>

          <div className="footer-container">
            <div className="footer-header">
              <h1 className="footer-title">SUNDEEP STUDIO</h1>
              <p className="footer-subtitle">Capturing Life's Precious Moments</p>
            </div>

            <div className="footer-content">

              <div className="footer-section">
                <h3 className="section-title">Get In Touch</h3>
                <ul className="contact-info">
                  <li className="contact-item">
                    <div className="contact-icon-wrapper">
                      <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <span className="contact-text">123 Photography Street<br />Creative City, Mumbai</span>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon-wrapper">
                      <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <span className="contact-text">+91 00000 00000</span>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon-wrapper">
                      <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <span className="contact-text">hello@Sundeepstudio.com</span>
                  </li>
                  <li className="contact-item">
                    <div className="contact-icon-wrapper">
                      <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                      </svg>
                    </div>
                    <span className="contact-text">Monday - Saturday<br />9:00 AM - 7:00 PM</span>
                  </li>
                </ul>
              </div>


              <div className="footer-section">
                <h3 className="section-title">Our Services</h3>
                <ul className="services-list" style={{ gap: "25px" }}>
                  <li>Wedding Photography</li>
                  <li>Portrait Sessions</li>
                  <li>Family Photography</li>
                  <li>Event Photography</li>
                  <li>Digital Photo Editing</li>
                </ul>
              </div>


              <div className="footer-section">
                <h3 className="section-title">Follow Our Journey</h3>
                <div className="social-links">
                  <a href="https://www.instagram.com" className="social-link" title="Instagram"
                    rel="noopener noreferrer" target="_blank">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com" className="social-link" title="Facebook"
                    rel="noopener noreferrer" target="_blank">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="https://twitter.com" className="social-link" title="Twitter" rel="noopener noreferrer"
                    target="_blank">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="https://hi.wikipedia.org"
                    className="social-link" title="Wikipedia" rel="noopener noreferrer" target="_blank">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M12.081 12.932c-.78 1.611-1.849 3.792-2.379 4.776-.513.896-.94.776-1.278.024-.324-.718-2.262-4.749-3.045-6.493-.75-1.665.546-1.539 1.013-.307.467 1.232 1.894 4.747 2.379 5.493.485-.746 2.379-5.493 2.379-5.493zm4.97-9.932h-9.976c-1.293 0-2.345 1.045-2.345 2.333v15.334c0 1.288 1.052 2.333 2.345 2.333h9.976c1.293 0 2.345-1.045 2.345-2.333v-15.334c0-1.288-1.052-2.333-2.345-2.333zm-2.015 17.665c0 .114-.093.207-.207.207h-5.656c-.114 0-.207-.093-.207-.207v-13.33c0-.114.093-.207.207-.207h5.656c.114 0 .207.093.207.207v13.33zm-1.865-11.496h-1.926v.951h.685v8.567h.556v-8.567h.685v-.951zm2.993 0h-.556v9.518h.556v-9.518z" />
                    </svg>
                  </a>
                  <a href="https://www.youtube.com" className="social-link" title="YouTube"
                    rel="noopener noreferrer" target="_blank">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>


            <div className="footer-bottom">
              <nav className="footer-nav" style={{ fontSize: '3rem', fontFamily: 'Apercu, sans-serif' }}>
                <a href="">Gallery</a>
                <a href="">About</a>
                <a href="">Services</a>
                <a href="">Contact</a>
                <a href="">Testimonials</a>
              </nav>
              <div className="copyright">
                © 2000 Sundeep Studio. All rights reserved. | Crafted with passion for photography.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
