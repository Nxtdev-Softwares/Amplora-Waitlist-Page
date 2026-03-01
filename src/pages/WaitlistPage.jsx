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
import { ChartColumn } from 'lucide-react';
import { HandCoins } from 'lucide-react';
import { Rocket } from 'lucide-react';
import { Check } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { Compass } from 'lucide-react';
import { ChartLine } from 'lucide-react';
import { FishingHook } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';

import amploraLogo from '../assets/amploraLogo.svg'
import ProfileLois from '../assets/Lois.jpg'
import ProfileKevvin from '../assets/Kevvin.jpg'
import Kevvin from '../assets/Kevvin.jpg'
import Lois from '../assets/Lois.jpg'
import FeatureIcon1 from '../assets/Kevvin.jpg'
import FeatureIcon2 from '../assets/Kevvin.jpg'
import FeatureIcon3 from '../assets/Kevvin.jpg'
import ScrollReveal from '../components/ScrollReveal'

import { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
`;

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

  const waitlistMembers = 14;
  const joinedNumber = 6;

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

  const featuresRef = useRef(null);

  const handleScrollFeatures = (e) => {
    e.preventDefault();
    featuresRef.current.scrollIntoView({behavior: "smooth"});
  }

  const waitlistRef = useRef(null);

  const handleScrollWaitlist = (e) => {
    e.preventDefault();
    waitlistRef.current.scrollIntoView({behavior: "smooth"});
  }

  const waitlistCtaRef = useRef(null);

  const handleScrollWaitlistCta = (e) => {
    e.preventDefault();
    waitlistCtaRef.current.scrollIntoView({behavior: "smooth"});
  }

  const waitlistSectionRef = useRef(null);

  const scrollToSection = () => {
    waitlistSectionRef.current.scrollIntoView({behavior: "smooth"})
  }

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

    <main className="waitlist-page">

      <style>{styles}</style>
      <div className="hero-root">
        {/* Background */}
        <div className="grid-bg" />
        <div className="orb orb-blue" />
        <div className="orb orb-purple" />
        <div className="orb orb-blue2" />

        {/* Nav */}
        <nav className="nav">
          <div className="nav-logo">
            <img className='amplora-nav-logo' src={amploraLogo} alt="" />
            Amplora
          </div>
          <div className="nav-pill">✦ Early Access Open</div>
        </nav>

        {/* Hero Content */}
        <div className="hero-wrap">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Built for coaches who create content
          </div>

          <h1 className="heading">
            Your Content Works.
            <span className="heading-line2"> Your Pipeline Doesn't.</span>
          </h1>

          <p className="subheading">
            Amplora connects your content to your clients — showing you <strong>exactly which posts drive inquiries,</strong> not just vanity metrics. Stop guessing. Start growing.
          </p>

          <div className="d-flex justify-content-center align-items-center" style={{maxWidth: "520px", width: "95%", justifySelf: "center"}}>
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

          {/* Social Proof */}
          <div className="social-proof">
            <div className="avatars">
              <div className="d-flex placeholder-profile mt-3 align-items-center gap-2 justify-content-center">
                <div className="" style={{minWidth: "57px"}}>
                  <img src={Kevvin} alt="" className='img-1'/>
                  <img src={Lois} alt="" className='img-2'/>
                </div>
              </div>
            </div>
            <div className="proof-text">
              <div className="stars">★★★★★</div>
              <div><strong>{joinedNumber}+ coaches</strong> already on the waitlist</div>
            </div>
          </div>
        </div>

        <span className="divider-text">Scroll to see how Amplora works</span>       

      </div>

      {/* Pain + Problem Section */}
      <div className="pain-root">
        <div className="pain-bg" />

        <div className="pain-section">

          {/* ── HEADER ── */}
          <div className="pain-header">
            <div className="pain-eyebrow">⚡ The Real Problem</div>
            <ScrollReveal className='move-down-anime'>
              <div className="pain-heading">
                Sound <span className="accent">Familiar?</span>
              </div>
            </ScrollReveal>
            <p className="pain-subheading">
              You're not failing at content. You're <strong>flying blind</strong> without the data that actually matters.
            </p>
          </div>

          {/* ── CARDS ── */}
          <div className="cards-grid" style={{maxWidth: "1300px", marginLeft: "auto", marginRight: "auto"}}>

            {/* Card 1 */}
            <div className="pain-card card-blue">
              <div className="card-deco" style={{ background: "#2563EB" }} />
              <div className="card-top">
                <div className="card-icon icon-blue">🎲</div>
                <span className="card-num">/ 01</span>
              </div>
              <div className="card-tag tag-blue">Hit-or-Miss</div>
              <div className="card-title">The Roulette Problem</div>
              <p className="card-body">
                One post blows up. The next gets <strong>47 views</strong>. You have no idea why — so you can't repeat it, and you can't stop the flops.
              </p>
              <div className="card-stat">
                <div className="stat-dot dot-red" />
                <span className="stat-text">80% of posts generate zero client inquiries</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="pain-card card-purple">
              <div className="card-deco" style={{ background: "#7c3aed" }} />
              <div className="card-top">
                <div className="card-icon icon-purple">🦗</div>
                <span className="card-num">/ 02</span>
              </div>
              <div className="card-tag tag-purple">Low Engagement</div>
              <div className="card-title">Crickets With Extra Steps</div>
              <p className="card-body">
                You filmed, edited, posted. Instagram showed it to <strong>90 people</strong>. Two liked it. Zero DMed. And tomorrow you have to do it all again.
              </p>
              <div className="card-stat">
                <div className="stat-dot dot-orange" />
                <span className="stat-text">Avg. organic reach dropped to ~2–3% by 2025</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="pain-card card-blue">
              <div className="card-deco" style={{ background: "#2563EB" }} />
              <div className="card-top">
                <div className="card-icon icon-blue">🔥</div>
                <span className="card-num">/ 03</span>
              </div>
              <div className="card-tag tag-blue">Wasted Effort</div>
              <div className="card-title">You've Tried Everything</div>
              <p className="card-body">
                New hooks. Trending audio. Boosted posts. You're not lazy — you're <strong>optimizing blind</strong>. Without data, "testing" is just expensive hoping.
              </p>
              <div className="card-stat">
                <div className="stat-dot dot-amber" />
                <span className="stat-text">Most coaches can't trace a single client to a specific post</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="pain-card card-purple">
              <div className="card-deco" style={{ background: "#7c3aed" }} />
              <div className="card-top">
                <div className="card-icon icon-purple">🌫️</div>
                <span className="card-num">/ 04</span>
              </div>
              <div className="card-tag tag-purple">No Clarity</div>
              <div className="card-title">Consistent. But Confused.</div>
              <p className="card-body">
                You show up every week. You teach real value. But <strong>which post brought your last client?</strong> You genuinely don't know. That's the problem.
              </p>
              <div className="card-stat">
                <div className="stat-dot dot-gray" />
                <span className="stat-text">Coaches who track conversions 3× their client acquisition</span>
              </div>
            </div>

          </div>

          {/* ── FOOTER BLOCK ── */}
          <div className="pain-footer" style={{maxWidth: "1300px", marginRight: "auto", marginLeft: "auto"}}>
            <div className="footer-glow-1" />
            <div className="footer-glow-2" />
            <div className="footer-grid" />

            <div className="footer-left">
              <div className="footer-kicker">The bottom line</div>
              <div className="footer-headline">
                Posting more won't fix this.<br />
                Posting <span className="footer-accent">smarter</span> will.
              </div>
              <p className="footer-sub">
                The coaches winning right now aren't creating more content — they know <strong>exactly which content converts</strong>, and they double down on it. Amplora gives you that clarity.
              </p>
            </div>

            <div className="footer-right">
              <button className="footer-cta" onClick={scrollToSection}>
                Get Early Access →
              </button>
              <div className="footer-note">No credit card · Free during beta</div>
            </div>
          </div>

        </div>
      </div>

      {/* Features Section */}
      <section className="amplora-section fade-in">
        <div className="pain-eyebrow">🤖 WHAT IT CAN DO</div>
        <div className="section-header">
          <ScrollReveal className='move-down-anime'>
            <h2>What <span className="accent-blue">Amplora</span> Does</h2>
          </ScrollReveal>
          <p className="section-subheading mb-5">
            Clarity over noise. Strategy over guesswork.
          </p>
        </div>

        <div className="cards-container">

          <div className="card">
            <div className="icon-wrapper">
              <ChartLine/>
            </div>
            <h3>Reveal Buying Intent</h3>
            <p>
              Identify which posts attract real clients, not just likes or empty engagement.
            </p>
          </div>

          <div className="card">
            <div className="icon-wrapper">
              <FishingHook/>
            </div>
            <h3>Detect Conversion Patterns</h3>
            <p>
              Understand the topics, hooks, and formats that consistently trigger DMs and sales.
            </p>
          </div>

          <div className="card">
            <div className="icon-wrapper">
              <ThumbsUp/>
            </div>
            <h3>Filter Vanity Metrics</h3>
            <p>
              See where engagement looks impressive, but doesn’t translate to revenue.
            </p>
          </div>

        </div>

        <div className="positioning-card">
          <div className="glow-ball-1"></div>
          <div className="glow-ball-2"></div>
          <h3>This Is Not Another AI Generator</h3>
          <p>
            Amplora doesn’t create random posts.
            It shows you what’s already working, so your strategy compounds instead of resetting every week.
          </p>
        </div>

      </section>

      {/* Imagine Section */}
      <div className="imagine-root">
        <div className="imagine-glow-1" />
        <div className="imagine-glow-2" />

        <div className="imagine-inner">

          {/* ── HEADER ── */}
          <div className="imagine-header">
            <div className="imagine-eyebrow">✦ What Changes With Amplora</div>
            <ScrollReveal className='move-down-anime'>
              <h2 className="imagine-heading">
                Imagine Knowing<br />
                <span className="accent-blue">Exactly What to Post Next.</span>
              </h2>
            </ScrollReveal>
            <p className="imagine-subheading">
              No more guessing. No more "post and pray." Just <strong>clear signals</strong> that tell you what's working — and what's quietly killing your pipeline.
            </p>
          </div>

          {/* ── CARDS ── */}
          <div className="imagine-cards">

            {/* Card 1 — Track Real Conversions */}
            <div className="imagine-card c-blue">
              <div className="card-deco" style={{ background: "#2563EB" }} />
              <div className="card-icon-wrap">
                <div className="card-icon icon-bg-blue">✅</div>
              </div>
              <div className="card-tag tag-blue">Conversions</div>
              <div className="card-title">Track What Actually Converts</div>
              <p className="card-body">
                Forget likes and saves. See exactly <strong>which posts drive profile visits with buying intent</strong> — and which ones just inflate your vanity numbers.
              </p>
              <div className="card-result">
                <div className="result-dot rdot-blue" />
                <span className="result-text">"Reel #12 brought 3 discovery call bookings this week."</span>
              </div>
            </div>

            {/* Card 2 — Understand What Works (offset) */}
            <div className="imagine-card c-purple card-mid">
              <div className="card-deco" style={{ background: "#7c3aed" }} />
              <div className="card-icon-wrap">
                <div className="card-icon icon-bg-purple">💡</div>
              </div>
              <div className="card-tag tag-purple">Clarity</div>
              <div className="card-title">Understand What Your Audience Actually Wants</div>
              <p className="card-body">
                Discover which <strong>topics, formats, and hooks</strong> trigger real DMs and conversations — not just passive scrollers who never buy.
              </p>
              <div className="card-result">
                <div className="result-dot rdot-purple" />
                <span className="result-text">"Personal story posts drive 4× more DMs than tutorials."</span>
              </div>
            </div>

            {/* Card 3 — Stop Guessing */}
            <div className="imagine-card c-blue">
              <div className="card-deco" style={{ background: "#2563EB" }} />
              <div className="card-icon-wrap">
                <div className="card-icon icon-bg-blue">🧭</div>
              </div>
              <div className="card-tag tag-blue">Strategy</div>
              <div className="card-title">Build a Strategy. Not a Posting Habit.</div>
              <p className="card-body">
                Stop spinning your wheels with random experiments. <strong>Double down on what converts</strong>, cut what doesn't, and finally build content with a plan behind it.
              </p>
              <div className="card-result">
                <div className="result-dot rdot-blue" />
                <span className="result-text">"Coaches using Amplora cut posting time by 40% and grew leads."</span>
              </div>
            </div>

          </div>

          {/* ── BOTTOM STATEMENT ── */}
          <div className="imagine-statement">
            <div className="statement-deco-1" />
            <div className="statement-deco-2" />

            <div className="statement-left">
              <div className="statement-quote">
                You don't need to post more.<br />
                You need to post <span className="sq-accent">with proof.</span>
              </div>
              <p className="statement-sub">
                Amplora turns your content history into a <strong>conversion map</strong> — so every post you make from here is backed by real data, not a gut feeling.
              </p>
            </div>

            <div className="statement-right">
              <button className="statement-cta" onClick={scrollToSection}>
                Join the Waitlist →
              </button>
              <div className="cta-note">Free early access · No credit card</div>
            </div>
          </div>

        </div>
      </div>

      {/* Early Access Section */}
      <section className="early-access-section fade-in" style={{maxWidth: "1200px"}}> 
        <div className='m-0 p-0 text-center'>
          <div className="access-eyebrow">🤖 GET THE ACCESS NOW</div>
        </div>
        <ScrollReveal className='move-down-anime'>
          <h2><span className="accent-blue">Early Access</span></h2>
        </ScrollReveal>
        <p style={{marginBottom: "60px"}}>Join the founding waitlist and shape Amplora from day one.</p>

        <div className="mt-5 d-none d-md-flex row bullets-container d-flex justify-content-center align-items-center" style={{maxWidth: "950px", width: "100%", justifySelf: "center"}}> 

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
      </section>

      {/* CTA Section */}
      <section ref={waitlistSectionRef} className="cta-section fade-in" style={{maxWidth: "1900px"}}>
        <div className='glow-1'></div>
        <div className='glow-2'></div>
        <div className='glow-3'></div>
        <h2>Shape Amplora from Day One</h2>
        <p>Get early access, private updates, and an invite to the first build session - before Amplora opens publicly.</p>
        <div className="d-flex justify-content-center align-items-center" style={{maxWidth: "520px", width: "95%", justifySelf: "center", zIndex: "2"}}>
          <form onSubmit={handleSubmit} className="form-input d-flex justify-content-center align-items-center " style={{maxWidth: "520px", width: "95%"}}>
            
            {error && <p className="error-text">{error}</p>}

            <input type="text" placeholder='Enter email here...' className='waitlist-email-input d-flex d-md-none'
            value={email} onChange={(e) => {setEmail(e.target.value); setError(""); }} required style={{zIndex: "30"}}/>

            <input type="text" placeholder='Enter your email here...' className='waitlist-email-input d-none d-md-flex'
            value={email} onChange={(e) => {setEmail(e.target.value); setError(""); }} required style={{zIndex: "30"}}/>

            <button className='join-btn' type="submit" style={{zIndex: "2", position: "relative"}}>
              {isSubmitting ? "Submitting..." : "Join Now"}
            </button>
          </form>
        </div>
        {/* Social Proof */}
          <div className="social-proof d-flex justify-content-center">
            <div className="avatars">
              <div className="d-flex placeholder-profile mt-3 align-items-center gap-2 justify-content-center">
                <div className="" style={{minWidth: "57px"}}>
                  <img src={Kevvin} alt="" className='img-1'/>
                  <img src={Lois} alt="" className='img-2'/>
                </div>
              </div>
            </div>
            <div className="proof-text">
              <div className="stars">★★★★★</div>
              <div style={{color: "white"}}><strong style={{color: "white"}}>{joinedNumber}+ coaches</strong> already on the waitlist</div>
            </div>
          </div>
          <h1 className='bottom-brand-text'>amplora</h1>
      </section>
    </main>
    </>
  )
}
export default WaitlistPage;
