import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';


import { Link } from 'react-router-dom';

function Footer() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        console.log(`Subscribing ${email} to the newsletter...`);
      
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email })
        };
      
        fetch('/api/subscribe', requestOptions)
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to subscribe');
            }
            console.log('Subscribed successfully');
          })
          .catch(error => {
            console.error(error);
          });
      
        e.target.reset();
      };
      
      
  return (
    <div className='footer-container relative rounded-lg overflow-hidden shadow-lg'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Join the MAZINGIRA🌿 newsletter to receive updates about our environmental events and beneficiary stories.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form onSubmit={handleSubmit}>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button type='submit' className='btn'>
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            {/* <Link to='/'>Destinations</Link> */}
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              MAZINGIRA🌿
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Mazingira © 2023</small>
          <div className='social-icons'>
  <Link
    className='social-icon-link facebook'
    to='/'
    target='_blank'
    aria-label='Facebook'
  >
    <FaFacebookF />
  </Link>
  <Link
    className='social-icon-link instagram'
    to='/'
    target='_blank'
    aria-label='Instagram'
  >
    <FaInstagram />
  </Link>
  <Link
    className='social-icon-link youtube'
    to='/'
    target='_blank'
    aria-label='Youtube'
  >
    <FaYoutube />
  </Link>
  <Link
    className='social-icon-link twitter'
    to='/'
    target='_blank'
    aria-label='Twitter'
  >
    <FaTwitter />
  </Link>
  <Link
    className='social-icon-link twitter'
    to='/'
    target='_blank'
    aria-label='LinkedIn'
  >
    <FaLinkedin />
  </Link>
</div>
        </div>
      </section>
    </div>
  );
}

export default Footer;