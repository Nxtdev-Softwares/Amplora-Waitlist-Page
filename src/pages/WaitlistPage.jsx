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

import amploraLogo from '../assets/amploraLogo.svg'
import Kevvin from '../assets/Kevvin.jpg'
import Lois from '../assets/Lois.jpg'
import bulletContentUI from '../assets/bulletContentUI.png'

import postBreakdownUi from '../assets/postBreakdownUi.png'
import contentUi from '../assets/contentPlanUi.png'
import WhatsWorkingUi from '../assets/WhatsWorkingUi.png'
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";

function WaitlistPage() {

  const navigate = useNavigate();
  const shareUrl = "https://nxtdev-softwares.github.io/Amplora-Waitlist-Page/";
  const shareText = encodeURIComponent(
    "Join the Amplora waitlist and start turning your content into predictable clients!"
  );

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);  
  const [showSuccess, setShowSuccess] = useState(false);

  const IS_TEST_MODE = false;

  const waitlistMembers = 15;
  const joinedNumber = 3;

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInstagramShare = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied! Open Instagram and paste to share.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Please enter your email.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      if (!IS_TEST_MODE) {
        // Real submission to Sheety
        const url = "https://api.sheety.co/13000793e3eae1c815a1c576886bea71/waitlistSignups/sheet1";

        const body = {
          sheet1: {
            timestamp: new Date().toISOString(),
            email: trimmedEmail,
          },
        };

        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        if (!response.ok) throw new Error("Sheety submission failed");

        const json = await response.json();
        console.log("Sheety response:", json);

      } else {
        // Simulate a successful submission in test mode
        console.log("Test mode active — skipping Sheety");
        await new Promise((resolve) => setTimeout(resolve, 500)); // small delay for UX
      }

      // Common after-success logic
      setEmail("");
      navigate("/SuccessPage");

      setTimeout(() => setError(""), 3000);

    } catch (err) {
      console.error("Submission failed:", err);
      alert("Submission failed: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };


  // images
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.3, 
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (imgRef1.current) observer.observe(imgRef1.current);
    if (imgRef2.current) observer.observe(imgRef2.current);
    if (imgRef3.current) observer.observe(imgRef3.current);

    return () => {
      if (imgRef1.current) observer.unobserve(imgRef1.current);
      if (imgRef2.current) observer.unobserve(imgRef2.current);
      if (imgRef3.current) observer.unobserve(imgRef3.current);
    };
  }, []);

  return (
    <>
      <meta
        name="description"
        content="Automate marketing with the help of AI. Schedule Posts, Advanced analytics, 
      automatic upload with AI. The most creative social media marketing automation software"
      />

      <meta
        name="keywords"
        content="bininstructions, nxtdev, Amplora, Marketing Automation Tool, Automate Marketing, Automate Content Creation, Content Creator Studio,
      Marketing Agency, Marketing automation platform, Amplora Marketing Automation Tool"
      />

    <div className="app-wrapper bg-white text-dark">
      {/* Global spacing helpers */}
      <header className="nav-bar py-4 d-md-grid d-none">
        {/* Placeholder for logo and simple nav */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            {/* Placeholder logo mark */}
            <img src={amploraLogo} alt="" />
            <span className="">Amplora</span>
          </div>
          <nav className="d-none d-md-flex align-items-center gap-4">
            {/* Placeholder nav links */}
            <a href="#features" className="the-nav-link d-none d-md-flex">Features</a>
            <a href="#waitlist" className="the-nav-link d-none d-md-flex">Waitlist</a>
            <a href="#contact" className="the-nav-link d-none d-md-flex">Contact</a>
            <a href="#waitlist-cta" className="d-none d-md-flex"  style={{textDecoration: "none"}}>
              <button className='cta'>Join Now</button>
            </a>
          </nav>
        </div>
      </header>

      <div className="nav-bar d-flex d-md-none d-flex justify-content-center align-items-center">
        <div className="d-flex align-items-center gap-2 justify-content-center">
            {/* Placeholder logo mark */}
            <img src={amploraLogo} alt="" />
            <span className="">Amplora</span>
          </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="hero-section  d-flex align-items-center justify-content-center flex-column">
          {/* Left: headline + subheadline + paragraph + waitlist input */}
            {/* Big bold heading */}
            <h1 className="display-heading fw-extrabold mb-3">
              Stop guessing what content <span style={{color: "#4F6BFF"}}>works.</span>
            </h1>
            {/* Body paragraph */}
            <h5 className="body-text mb-2">
              See exactly which posts turn followers into high-ticket clients.
            </h5>
            <p className="mb-3 d-flex text-center justify-content-center">
              Built for coaches who want predictable leads - not viral luck.
            </p>
            {/* Waitlist form (front-end only, no backend logic) */}
             <div className="d-flex justify-content-center align-items-center mt-4 mt-md-5 mb-2" style={{maxWidth: "520px", width: "95%"}}>
              <form onSubmit={handleSubmit} className="form-input d-flex justify-content-center align-items-center " style={{maxWidth: "520px", width: "95%"}}>
                
                {error && <p className="error-text">{error}</p>}

                <input type="text" placeholder='Enter email here...' className='waitlist-email-input d-flex d-md-none'
                value={email} onChange={(e) => {setEmail(e.target.value); setError(""); }} required/>

                <input type="text" placeholder='Enter your email here...' className='waitlist-email-input d-none d-md-flex'
                value={email} onChange={(e) => {setEmail(e.target.value); setError(""); }} required/>


                <button className='join-btn' type="submit">
                  {isSubmitting ? "Submitting..." : "Join Now"}
                </button>
              </form>
            </div>
            {/* Social proof placeholder */}
            <div className="d-flex placeholder-profile mt-3 align-items-center gap-2 ms-2 ms-md-0">
              <div className="" style={{minWidth: "57px"}}>
                <img src={Kevvin} alt="" className='img-1'/>
                <img src={Lois} alt="" className='img-2'/>
              </div>
              <h6>Kevvin, Lois + {joinedNumber} more joined · {waitlistMembers} spots left</h6>
            </div>
            
      </section>

      <section className="features-wrapper py-5">
      <div className="container">
        
        {/* Section 1: Pattern Recognition */}
        <div className="row align-items-center feature-row mb-5 pb-lg-5">
          <div className="col-lg-6 order-lg-1 content-box">
            <span className="badge-modern">Content Intelligence</span>
            <h2 className="feature-heading">Stop guessing why some posts explode and others flop</h2>
            <p className="feature-subheading">
              Amplora analyzes the "DNA" of your content. We don't just show you numbers; 
              we show you the <strong>specific patterns</strong> from the hook to the 
              call-to-action that actually trigger audience resonance.
            </p>
          </div>
          <div className="col-lg-6 order-lg-2">
            <div className="ui-mockup-container shadow-hover">
              {/* Replace with your specific UI Image */}
              <img ref={imgRef1} src={postBreakdownUi} alt="Pattern Analysis" className="img-fluid rounded-4 fade-slide-right" />
            </div>
          </div>
        </div>

        {/* Section 2: Conversion Tracking (Reversed) */}
        <div className="row align-items-center feature-row mb-5 pb-lg-5">
          <div className="col-lg-6 order-lg-2 content-box ps-lg-5">
            <span className="badge-modern">Revenue Focus</span>
            <h2 className="feature-heading">Connect your content directly to your revenue</h2>
            <p className="feature-subheading">
              Vanity metrics like likes and shares are lying to you. Amplora tracks the 
              <strong>Invisible Funnel</strong>, showing you exactly which post led to 
              that "I'm interested" DM or booked consultation call.
            </p>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="ui-mockup-container shadow-hover">
              <img ref={imgRef2} src={contentUi} alt="Conversion Tracking" className="img-fluid rounded-4 fade-slide-left" />
            </div>
          </div>
        </div>

        {/* Section 3: Predictability */}
        <div className="row align-items-center feature-row">
          <div className="col-lg-6 order-lg-1 content-box">
            <span className="badge-modern">Growth Strategy</span>
            <h2 className="feature-heading">Make your growth boringly predictable</h2>
            <p className="feature-subheading">
              Turn your content strategy from a "hope for the best" hobby into a 
              <strong> client-generating machine</strong>. Get AI-driven recommendations 
              on what to post next based on what actually converts for you.
            </p>
          </div>
          <div className="col-lg-6 order-lg-2">
            <div className="ui-mockup-container shadow-hover">
              <img ref={imgRef3} src={WhatsWorkingUi} alt="Predictive Analytics" className="img-fluid rounded-4  fade-slide-right" />
            </div>
          </div>
        </div>

      </div>
    </section>

      {/* Waitlist Section */}
      <section id="waitlist" className=" my-section-spacing mt-2 mt-md-4" style={{maxWidth: '100%', width: "100%"}}>
        <div className="p-4 p-md-5">
          {/* Headline + Subheadline */}
          <div className="text-center mb-4 mb-md-5">
            <h2 className="mb-2">Only {waitlistMembers} Spots Left to Stop <span  style={{color: "#4F5468"}}> Guessing </span></h2>

            <h5 className='d-none d-md-flex'>Get early access to Amplora, behind-the-scenes updates, and a first look at the tools turning content into predictable clients. Launch date sent instantly. Kevvin, Lois + {joinedNumber} coaches already joined - only {waitlistMembers} spots left.</h5>
            <h5 className='d-flex d-md-none'>Get early access to Amplora. Join coaches turning content into predictable clients. Kevvin, Lois + {joinedNumber} already joined - only {waitlistMembers} spots left.</h5>
          </div>

          <div className="d-none d-md-flex row bullets-container d-flex justify-content-center align-items-center" style={{maxWidth: "950px", width: "100%", justifySelf: "center"}}> 

          <div className="col-3 d-flex  justify-content-center align-items-center">
            <div className="main-bullet-card">
              <Zap className='icon'/>
              <div className="content">
                <h3>Early Access</h3>
                <p>be among the first to use Amplora</p>
              </div>
            </div>
          </div>

          <div className="col-3 d-flex  justify-content-center align-items-center">
            <div className="main-bullet-card">
              <Clapperboard className='icon'/>
              <div className="content">
                <h3>Behind-the-Scenes Updates</h3>
                <p>see how we’re building it in real-time</p>
              </div>
            </div>
          </div>

          <div className="col-3 d-flex  justify-content-center align-items-center">
            <div className="main-bullet-card">
              <Wrench className='icon'/>
              <div className="content">
                <h3>Sneak Peek Tools</h3>
                <p>understand what makes content convert predictably</p>
              </div>
            </div>
          </div>

          <div className="col-3 d-flex  justify-content-center align-items-center">
            <div className="main-bullet-card">
              <Goal className='icon'/>
              <div className="content">
                <h3>Limited Spots</h3>
                <p>only {waitlistMembers} remaining out of 20</p>
              </div>
            </div>
          </div>
              
          </div>

          <div className="d-flex d-md-none bullets-container d-flex justify-content-center align-items-center flex-column" style={{maxWidth: "1250px", width: "100%", justifySelf: "center"}}>
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
                  <p>only {waitlistMembers} remaining out of 20</p>
                </div>
              </div>
          </div>

        </div>
      </section>

      <section id="waitlist-cta" className='waitlist-form-page d-flex justify-content-center align-items-center flex-column text-center'>
        <h1>Shape Amplora From Day One</h1>
        <h5>Get early access, private updates, and an invite to the first build session - before Amplora opens publicly.</h5>

        <div className="d-flex justify-content-center align-items-center mt-3 mt-md-4 form-container flex-column">
          <form onSubmit={handleSubmit} className="form-input d-flex justify-content-center align-items-center" style={{maxWidth: "520px", width: "95%"}}>
            
            {error && <p className="error-text">{error}</p>}

            <input type="text" placeholder='Enter email here...' className='waitlist-email-input d-flex d-md-none'
                value={email} onChange={(e) => {setEmail(e.target.value); setError("");}} required/>

            <input type="text" placeholder='Enter your email here...' className='waitlist-email-input d-none d-md-flex'
            value={email} onChange={(e) => {setEmail(e.target.value); setError("");}} required/>

            <button className='join-btn' type="submit">
              {isSubmitting ? "Submitting..." : "Join Now"}
            </button>
          </form>

          <div className="d-flex placeholder-profile mt-4 align-items-center gap-2 ms-2 ms-md-0 mb-4">
            <div className="" style={{minWidth: "57px"}}>
              <img src={Kevvin} alt="" className='img-1'/>
              <img src={Lois} alt="" className='img-2'/>
            </div>
            <h6>Kevvin, Lois + {joinedNumber} more joined · {waitlistMembers} spots left</h6>
          </div>
          
        </div>

          <div className="cta-highlighted-container text-center mt-md-1 mt-1">
            <div className='sharing-titles-section'>
              <h6>Share with your friends to get Amplora launched faster - and help shape the product you’ll love.</h6>
              <p>It only takes a second - your support makes all the difference.</p>
            </div>
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
                  onClick={handleInstagramShare}
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
            A product by Nxtdev. Built for creators who value clarity over guesswork.
          </p>
        </div>
        <div className="text-muted small mt-3">© 2026. All rights reserved.</div>
      </footer>

      {showSuccess && (
        <div className="success-toast">
          <strong>You’re on the waitlist 🎉</strong>
          <span>We’ll email you early access and updates.</span>
          <p>Emails will come from: <b>info@bininstructions.com</b></p>
        </div>
      )}

    </div>
    </>
  )
}
export default WaitlistPage;
