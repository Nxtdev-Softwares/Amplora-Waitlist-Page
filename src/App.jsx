import React from 'react'

import { Zap } from 'lucide-react';
import { Clapperboard } from 'lucide-react';
import { Wrench } from 'lucide-react';
import { Goal } from 'lucide-react';
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import amploraLogo from './assets/amploraLogo.svg'
import Kevvin from './assets/Kevvin.jpg'
import Lois from './assets/Lois.jpg'
import bulletContentUI from './assets/bulletContentUI.png'

import postBreakdownUi from './assets/postBreakdownUi.png'
import contentUi from './assets/contentPlanUi.png'
import WhatsWorkingUi from './assets/WhatsWorkingUi.png'

export default function App() {

  const shareUrl = "https://amplora.com/waitlist";
  const shareText = encodeURIComponent(
    "Join the Amplora waitlist and start turning your content into predictable clients!"
  );

  return (
    <div className="app-wrapper bg-white text-dark">
      {/* Global spacing helpers */}
      <header className="nav-bar py-4">
        {/* Placeholder for logo and simple nav */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            {/* Placeholder logo mark */}
            <img src={amploraLogo} alt="" />
            <span className="fw-bold text-black">Amplora</span>
          </div>
          <nav className="d-none d-md-flex align-items-center gap-4">
            {/* Placeholder nav links */}
            <a href="#features" className="nav-link text-black">Features</a>
            <a href="#waitlist" className="nav-link text-black">Waitlist</a>
            <a href="#contact" className="nav-link text-black">Contact</a>
            <a href="#cta" className="btn btn-primary btn-lg">Get started</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section container d-flex align-items-center justify-content-center flex-column">
          {/* Left: headline + subheadline + paragraph + waitlist input */}
            {/* Big bold heading */}
            <p className="lead text-secondary mb-3 d-flex d-md-none">
              Most coaches have no clue which content actually brings them clients.
            </p>
            <h1 className="display-heading fw-extrabold text-black mb-3">
              Stop guessing what content works.
            </h1>
            {/* Subheadline */}
            <p className="lead text-secondary mb-3  d-none d-md-flex">
              Most coaches have no clue which content actually brings them clients.
            </p>
            {/* Body paragraph */}
            <h5 className="body-text mb-2">
              Amplora helps coaches and creators understand why content reaches, resonates, and brings clients - so growth becomes predictable.
            </h5>
            {/* Waitlist form (front-end only, no backend logic) */}
             <div className="d-flex justify-content-center align-items-center mt-4 mt-md-5 mb-2" style={{maxWidth: "520px", width: "95%"}}>
              <input type="text" placeholder='Enter your email here...' className='waitlist-email-input'/>
              <button className='join-btn'>Join Now</button>
            </div>
            {/* Social proof placeholder */}
            <div className="d-flex placeholder-profile mt-3 align-items-center gap-2 ms-2 ms-md-0">
              <div className="" style={{minWidth: "57px"}}>
                <img src={Kevvin} alt="" className='img-1'/>
                <img src={Lois} alt="" className='img-2'/>
              </div>
              <h6>Kevvin, Minul and 2+ more joined</h6>
            </div>
            
      </section>

      {/* Feature + Pain Sections (alternating layout) */}
      <main id="features" className="my-section-spacing">
        {/* Section 1: text left, visual right */}
        <section className="feature-section card border-0 shadow-soft p-4 px-2 p-md-5 mb-3 pt-md-5 pb-md-3">
          <div className="row d-flex align-items-start gy-4  d-flex justify-content-center align-items-center">
            {/* Text block */}
            <div className="col-12 col-md-6 col-lg-5">
              <h2 className="section-heading fw-extrabold text-black mb-md-4 mb-2"> Stop guessing why some posts explode and others flop</h2>
              <p className="section-subheading text-secondary mb-4">
                Most coaches post every day, but have no idea why one post performs while another dies. Amplora breaks down your content performance - showing what works, what doesn’t, and the simple patterns behind it.
              </p>
            </div>
            {/* Visual mockup */}
            <div className="col-12 col-md-6 col-lg-7 d-flex justify-content-center justify-content-md-end align-items-center">
              <div className="visual-mockup d-flex justify-content-center align-items-center">
                <img src={postBreakdownUi} alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: text right, visual left */}
        <section className="feature-section card border-0 shadow-soft p-4 px-2 p-md-5 mb-3 pt-md-5 pb-md-3">
          <div className="row align-items-start gy-4">
            {/* Visual mockup (order first on desktop) */}
            <div className="col-12 col-md-6 col-lg-7  d-flex justify-content-center justify-content-md-start align-items-center order-md-1 order-2">
              <div className="visual-mockup d-flex justify-content-center align-items-center">
                <img src={contentUi} alt="" />
              </div>
            </div>
            {/* Text block (order second on desktop) */}
            <div className="col-12 col-md-6 col-lg-5 order-md-2 order-1">
              <h2 className="section-heading fw-extrabold text-black mb-md-4 mb-2">Stop spending hours guessing what to post next</h2>
              <p className="section-subheading text-secondary mb-4">
                Coaches spend countless hours posting daily without knowing if it will reach the right audience. Amplora shows the best content to post over the next 7 days - so you can focus on what actually converts.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: text left, visual right */}
        <section className="feature-section card border-0 shadow-soft p-4 px-2 p-md-5 mb-3 pt-md-5 pb-md-3">
          <div className="row align-items-start gy-4">
            {/* Text block */}
            <div className="col-12 col-md-6 col-lg-5">
              <h2 className="section-heading fw-extrabold text-black mb-md-4 mb-2">Know exactly what to improve in every post</h2>
              <p className="section-subheading text-secondary mb-4">
                Many coaches post thinking “this will work” - then it flops. Amplora gives actionable feedback for every post, showing what to fix next time and what you did well.
              </p>
            </div>
            {/* Visual mockup */}
             <div className="col-12 col-md-6 col-lg-7  d-flex justify-content-center justify-content-md-end align-items-center">
              <div className="visual-mockup d-flex justify-content-center align-items-center">
                <img src={WhatsWorkingUi} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Waitlist Section */}
      <section id="waitlist" className=" my-section-spacing" style={{maxWidth: '100%', width: "100%"}}>
        <div className="p-4 p-md-5">
          {/* Headline + Subheadline */}
          <div className="text-center mb-4 mb-md-5">
            <h2 className="text-black mb-2">Only 16 Spots Left to Get Predictable Content Wins</h2>
            <p className="section-subheading text-secondary">
              Be one of the first 20 coaches to get exclusive early access, behind-the-scenes updates, and a sneak peek at the tools that will make your content convert predictably.
            </p>
            <h5>Join now and get the official launch date immediately - no FOMO, no surprises. Kevvin, Minul, and 2+ more coaches have already secured their spots. Only 16 remaining.</h5>
          </div>

          <div className="row bullets-container d-flex justify-content-center align-items-center" style={{maxWidth: "1250px", width: "95%", justifySelf: "center"}}>
            <div className="col-12 col-md-6">

              <div className="bullet-card">
                <Zap className='icon'/>
                <div className="content">
                  <h3>Early Access</h3>
                  <p>be among the first to use Amplora</p>
                </div>
              </div>

              <div className="bullet-card">
                <Clapperboard className='icon'/>
                <div className="content">
                  <h3>Behind-the-Scenes Updates</h3>
                  <p>see how we’re building it in real-time</p>
                </div>
              </div>

              <div className="bullet-card">
                <Wrench className='icon'/>
                <div className="content">
                  <h3>Sneak Peek Tools</h3>
                  <p>understand what makes content convert predictably</p>
                </div>
              </div>

              <div className="bullet-card">
                <Goal className='icon'/>
                <div className="content">
                  <h3>Limited Spots</h3>
                  <p>only 16 remaining out of 20</p>
                </div>
              </div>
              
            </div>
            <div className="d-none d-md-flex col-12 col-md-6">
              <img src={bulletContentUI} alt="" />
            </div>
          </div>

        </div>
      </section>

      <section className='waitlist-form-page d-flex justify-content-center align-items-center flex-column text-center'>
        <h1>Get Locked In</h1>
        <h5>Join the waitlist today and get early access, behind-the-scenes updates, and the official launch date directly in your inbox.</h5>

        <div className="d-flex justify-content-center align-items-center mt-1 mt-md-4 form-container">
          <input type="text" placeholder='Enter your email here...' className='waitlist-email-input'/>
          <button className='join-btn'>Join Now</button>
        </div>

          <div className="text-center mt-md-4 mt-3">
            <div className="d-inline-flex gap-3">
              <a
                  href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  className="social-icon"
              >
                <button type="button" className="sharing-btn"><FaWhatsapp className='share-icon'/></button>
              </a>
              
              <a
                  href={shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Instagram"
                  className="social-icon"
                >
                <button type="button" className="sharing-btn"><FaInstagram className='share-icon'/></button>
              </a>

              <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="social-icon"
                >
                <button type="button" className="sharing-btn"><FaFacebook className='share-icon'/></button>
              </a>

              <a
                  href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="social-icon"
                >
                <button type="button" className="sharing-btn"><FaTwitter className='share-icon'/></button>
              </a>
              
              <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="social-icon"
                >
                <button type="button" className="sharing-btn"><FaLinkedin className='share-icon'/></button>
              </a>
            </div>
          </div>

      </section>

      {/* Footer */}
      <footer id="contact" className="container py-5">
        <div className="">
          <h5 className="fw-bold text-black mb-2">Amplora</h5>
          <p className="text-muted">
            Placeholder company info. Minimal, clean, and modern. Add address or tagline here.
          </p>
        </div>
        <div className="text-muted small mt-3">© 2026. All rights reserved.</div>
      </footer>
    </div>
  )
}
