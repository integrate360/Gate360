import React, { useEffect, useState } from "react";
import { 
  Building, 
  Smartphone, 
  Key, 
  Tv, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  MapPin, 
  CheckCircle2, 
  ChevronDown,
  Play,
  TrendingUp,
  Sparkles,
  Lock,
  ArrowUpRight
} from "lucide-react";

function Home() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handlePlayVideo = () => {
    setVideoPlaying(true);
  };

  // Scroll animations observer
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-auto");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <main id="site-content">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-grid">
              <div className="hero-left reveal-auto">
                <span className="hero-badge">
                  <Sparkles size={14} className="badge-icon" />
                  Smart Community Platform
                </span>
                <h1>
                  The Operating System for <span className="gradient-text">Modern Societies</span>
                </h1>
                <p>
                  Gate360 coordinates security, accounting, resident engagement, and smart IoT automation into a single, beautiful unified workspace.
                </p>
                <div className="hero-ctas">
                  <a className="btn-primary" href="/contact">
                    <span>Get Started Free</span>
                    <ArrowRight size={16} />
                  </a>
                  <a className="btn-secondary" href="#ecosystem">
                    Explore Ecosystem
                  </a>
                </div>
              </div>
              <div className="hero-right reveal-auto">
                <div className="dashboard-preview">
                  <div className="preview-glow"></div>
                  <div className="mock-window">
                    <div className="window-header">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                      <span className="window-title">Gate360 Admin Hub</span>
                    </div>
                    <div className="window-body">
                      {/* Left Sidebar Mock */}
                      <div className="mock-sidebar">
                        <div className="sidebar-logo"></div>
                        <div className="sidebar-item active"></div>
                        <div className="sidebar-item"></div>
                        <div className="sidebar-item"></div>
                        <div className="sidebar-item"></div>
                      </div>
                      {/* Main Dashboard Mock Content */}
                      <div className="mock-content">
                        <div className="mock-widgets-row">
                          <div className="mock-widget">
                            <span className="widget-label">Visitor Approval Rate</span>
                            <span className="widget-value">99.8%</span>
                            <span className="widget-sub text-green">✓ Optimal state</span>
                          </div>
                          <div className="mock-widget">
                            <span className="widget-label">Maintenance Collected</span>
                            <span className="widget-value">₹4.8L</span>
                            <span className="widget-sub text-blue">94% target reached</span>
                          </div>
                        </div>
                        <div className="mock-chart-box">
                          <div className="chart-header">
                            <span>Activity Overview</span>
                            <span className="chart-pill">Live feed</span>
                          </div>
                          <div className="chart-bars">
                            <div className="bar-col" style={{ height: "40%" }}></div>
                            <div className="bar-col" style={{ height: "60%" }}></div>
                            <div className="bar-col" style={{ height: "45%" }}></div>
                            <div className="bar-col" style={{ height: "80%" }}></div>
                            <div className="bar-col" style={{ height: "55%" }}></div>
                            <div className="bar-col" style={{ height: "90%" }}></div>
                            <div className="bar-col" style={{ height: "70%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating interactive notification */}
                  <div className="floating-card visitor-alert">
                    <div className="alert-header">
                      <ShieldCheck size={18} className="text-blue" />
                      <span>Pre-Approved Guest Entry</span>
                    </div>
                    <p>Cab Entry Code <strong>#9021</strong> matched. Gate opened.</p>
                  </div>

                  <div className="floating-card lock-alert">
                    <div className="alert-header">
                      <CheckCircle2 size={16} className="text-indigo" />
                      <span>Instant Billing Sync</span>
                    </div>
                    <p>Maintenance receipt generated for Flat <strong>#402</strong>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
 
        {/* TRUSTED BY PARTNERS */}
        <section className="partners-section">
          <div className="section-container">
            <p className="partners-title">TRUSTED BY LEADING REAL ESTATE DEVELOPERS & TOWNSHIPS</p>
            <div className="partners-logos reveal-auto">
              <div className="partner-logo-item">DLF Homes</div>
              <div className="partner-logo-item">Prestige Group</div>
              <div className="partner-logo-item">Hiranandani</div>
              <div className="partner-logo-item">Tata Housing</div>
              <div className="partner-logo-item">Godrej Properties</div>
            </div>
          </div>
        </section>

        {/* CORE ECOSYSTEM GRID */}
        <section className="features-section" id="ecosystem">
          <div className="section-container">
            <div className="section-header reveal-auto">
              <span className="section-badge">Ecosystem</span>
              <h2>All-in-one platform for property managers & residents</h2>
              <p>Ditch disconnected spreadsheets and apps. Gate360 synchronizes everything beautifully.</p>
            </div>
            <div className="features-grid">
              <div className="feature-card reveal-auto">
                <div className="icon-wrapper">
                  <Building size={24} className="feature-icon" />
                </div>
                <h3>Admin Web Panel (ERP)</h3>
                <p>
                  Central management console for property managers to handle ledger accounting, automated billing invoices, vendor compliance, and staff attendance.
                </p>
                <a className="card-link" href="/services">
                  <span>Explore features</span>
                  <ArrowRight size={14} />
                </a>
              </div>

              <div className="feature-card reveal-auto">
                <div className="icon-wrapper">
                  <Smartphone size={24} className="feature-icon" />
                </div>
                <h3>All-in-One Resident App</h3>
                <p>
                  A full-fledged smartphone solution combining daily gate security approvals, parcel logs, personal accounting statements, and utility payments.
                </p>
                <a className="card-link" href="/services">
                  <span>Explore features</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS & PROOF SECTION */}
        <section className="stats-section">
          <div className="section-container">
            <div className="stats-grid">
              <div className="stat-card reveal-auto">
                <div className="stat-icon-bg">
                  <ShieldCheck size={28} />
                </div>
                <h3>27K+</h3>
                <p>Active Gated Societies</p>
              </div>
              <div className="stat-card reveal-auto">
                <div className="stat-icon-bg">
                  <Users size={28} />
                </div>
                <h3>5M+</h3>
                <p>Connected Homes</p>
              </div>
              <div className="stat-card reveal-auto">
                <div className="stat-icon-bg">
                  <MapPin size={28} />
                </div>
                <h3>50+</h3>
                <p>Cities Nationwide</p>
              </div>
              <div className="stat-card reveal-auto">
                <div className="stat-icon-bg">
                  <CheckCircle2 size={28} />
                </div>
                <h3>100K+</h3>
                <p>Committee Users</p>
              </div>
            </div>
          </div>
        </section>


        {/* INTERACTIVE VIDEO SECTION */}
        <section className="video-section">
          <div className="section-container">
            <div className="video-layout reveal-auto">
              <div className="video-text-col">
                <span className="video-badge">Watch Demo</span>
                <h2>See how Gate360 simplifies community management</h2>
                <p>
                  Get a 2-minute visual walkthrough of the Gate360 dashboard, security guard portal, and resident mobile app working in real-time.
                </p>
                <div className="bullet-points">
                  <div className="bullet-item">
                    <div className="bullet-dot"></div>
                    <span>Guard app visitor matching system</span>
                  </div>
                  <div className="bullet-item">
                    <div className="bullet-dot"></div>
                    <span>RWA financial auto-reconciliation</span>
                  </div>
                  <div className="bullet-item">
                    <div className="bullet-dot"></div>
                    <span>Digital helpdesk ticketing & approvals</span>
                  </div>
                </div>
              </div>
              <div className="video-media-col">
                <div className="video-frame" id="videoContainer">
                  {videoPlaying ? (
                    <iframe
                      src="https://www.youtube.com/embed/R-3oGPE3Fs8?autoplay=1&controls=1&modestbranding=1&rel=0"
                      title="Gate360 Showcase"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div 
                      className="video-placeholder"
                      style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80')"
                      }}
                    >
                      <button className="play-btn" onClick={handlePlayVideo} aria-label="Play video">
                        <Play size={28} fill="#ffffff" stroke="none" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="testimonials-section">
          <div className="section-container">
            <div className="section-header reveal-auto">
              <span className="section-badge">Testimonials</span>
              <h2>What RWA committees say about us</h2>
              <p>Hear from the management teams who migrated their societies to Gate360.</p>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card reveal-auto">
                <div className="stars">★★★★★</div>
                <p className="quote">"Managing collections for 800+ flats was a nightmare. Gate360's automated invoicing and online UPI reconciliation reduced our default rate by 92% in just two quarters."</p>
                <div className="reviewer">
                  <div className="reviewer-info">
                    <span className="reviewer-name">Rohan Shah</span>
                    <span className="reviewer-role">RWA Treasurer, Skyline Towers</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card reveal-auto">
                <div className="stars">★★★★★</div>
                <p className="quote">"The single app approach for residents is amazing. From approving guests to raised ticket history and utility receipts, everything works smoothly without calling office staff."</p>
                <div className="reviewer">
                  <div className="reviewer-info">
                    <span className="reviewer-name">Meera Krishnan</span>
                    <span className="reviewer-role">RWA Secretary, GreenMeadows Colony</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOOK A DEMO GRADIENT SECTION */}
        <section className="booking-section" id="bookdemo">
          <div className="section-container">
            <div className="booking-box">
              <div className="booking-grid">
                <div className="booking-info reveal-auto">
                  <span className="booking-badge">Try Gate360</span>
                  <h2>Request a personalized product walkthrough</h2>
                  <p>
                    See how our software ERP and integrated gate hardware fits your specific society architecture.
                  </p>
                  <div className="pills-list">
                    <div className="pill-item">✓ Tailored for small & mega communities</div>
                    <div className="pill-item">✓ Complete deployment support</div>
                    <div className="pill-item">✓ Data backup security protocols</div>
                  </div>
                </div>
                <div className="booking-form-wrapper reveal-auto">
                  <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-grid">
                      <div className="input-group">
                        <label>Your Name</label>
                        <input type="text" placeholder="Full name" required />
                      </div>
                      <div className="input-group">
                        <label>Contact Number</label>
                        <input type="tel" placeholder="10-digit mobile" maxLength="10" required />
                      </div>
                    </div>
                    <div className="form-grid">
                      <div className="input-group">
                        <label>Gated Society Name</label>
                        <input type="text" placeholder="e.g. Skyline Towers" required />
                      </div>
                      <div className="input-group">
                        <label>Area Pincode</label>
                        <input type="text" placeholder="6-digit PIN" maxLength="6" required />
                      </div>
                    </div>
                    <div className="form-grid">
                      <div className="input-group">
                        <label>Apartment Size</label>
                        <select required>
                          <option value="">Choose Units</option>
                          <option value="50-100">50 - 100 units</option>
                          <option value="100-200">100 - 200 units</option>
                          <option value="200-500">200 - 500 units</option>
                          <option value="500+">500+ units</option>
                        </select>
                      </div>
                      <div className="input-group">
                        <label>Your Profile</label>
                        <select required>
                          <option value="">Choose Role</option>
                          <option value="Resident">Society Resident</option>
                          <option value="Committee">RWA Committee Member</option>
                          <option value="Manager">Estate Manager</option>
                          <option value="Builder">Builder / Developer</option>
                        </select>
                      </div>
                    </div>
                    <button type="submit" className="form-submit-btn">
                      <span>Schedule Demo Call</span>
                      <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUBSCRIPTIONS SECTION */}
        <section className="pricing-section">
          <div className="section-container">
            <div className="section-header reveal-auto">
              <span className="section-badge">Pricing Plans</span>
              <h2>Simple, transparent pricing for your society</h2>
              <p>Choose the plan that fits your community size and requirements.</p>
            </div>
            
            <div className="pricing-grid reveal-auto">
              {/* Trial Plan */}
              <div className="pricing-card">
                <div className="pricing-top">
                  <h3 className="pricing-title">Trial</h3>
                  <div className="pricing-price">
                    <span className="currency">₹</span>
                    <span className="amount">0</span>
                    <span className="period">/14 days</span>
                  </div>
                  <p className="pricing-desc">Test the waters and see how Gate360 fits your community.</p>
                </div>
                <div className="pricing-features">
                  <ul>
                    <li><CheckCircle2 size={16} className="text-blue" /> Visitor & Gate Security</li>
                    <li><CheckCircle2 size={16} className="text-blue" /> Notice Board & Circulars</li>
                    <li><CheckCircle2 size={16} className="text-blue" /> Helpdesk Ticketing</li>
                    <li><CheckCircle2 size={16} className="text-blue" /> Basic Maintenance Billing</li>
                    <li className="disabled"><CheckCircle2 size={16} className="text-gray" /> Events & Album Archive</li>
                    <li className="disabled"><CheckCircle2 size={16} className="text-gray" /> Blog & News Posts</li>
                    <li className="disabled"><CheckCircle2 size={16} className="text-gray" /> Buy/Sell & Jobs Board</li>
                  </ul>
                </div>
                <div className="pricing-bottom">
                  <a href="/contact" className="btn-pricing-outline">Start Free Trial</a>
                </div>
              </div>

              {/* Basic Plan (Highlighted) */}
              <div className="pricing-card premium">
                <div className="pricing-popular">Most Popular</div>
                <div className="pricing-top">
                  <h3 className="pricing-title">Basic</h3>
                  <div className="pricing-price">
                    <span className="currency">₹</span>
                    <span className="amount">15</span>
                    <span className="period">/flat/mo</span>
                  </div>
                  <p className="pricing-desc">For small to medium societies needing core management tools.</p>
                </div>
                <div className="pricing-features">
                  <ul>
                    <li><CheckCircle2 size={16} className="text-blue" /> Everything in Trial</li>
                    <li><CheckCircle2 size={16} className="text-blue" /> Maintenance Billing & ERP</li>
                    <li><CheckCircle2 size={16} className="text-blue" /> Events & Album Archive</li>
                    <li><CheckCircle2 size={16} className="text-blue" /> Blog & News Posts</li>
                    <li><CheckCircle2 size={16} className="text-blue" /> Amenity Booking</li>
                    <li className="disabled"><CheckCircle2 size={16} className="text-gray" /> Buy/Sell Classifieds</li>
                    <li className="disabled"><CheckCircle2 size={16} className="text-gray" /> Jobs & Property Board</li>
                  </ul>
                </div>
                <div className="pricing-bottom">
                  <a href="/contact" className="btn-pricing-solid">Get Started</a>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="pricing-card">
                <div className="pricing-top">
                  <h3 className="pricing-title">Premium</h3>
                  <div className="pricing-price">
                    <span className="currency">₹</span>
                    <span className="amount">25</span>
                    <span className="period">/flat/mo</span>
                  </div>
                  <p className="pricing-desc">Everything you need to automate a large township seamlessly.</p>
                </div>
                <div className="pricing-features">
                  <ul>
                    <li><CheckCircle2 size={16} className="text-blue" /> Everything in Basic</li>
                    <li><CheckCircle2 size={16} className="text-blue" /> Buy / Sell Classifieds</li>
                    <li><CheckCircle2 size={16} className="text-blue" /> Jobs Board</li>
                    <li><CheckCircle2 size={16} className="text-blue" /> Property Listings</li>
                    <li><CheckCircle2 size={16} className="text-blue" /> Business Management</li>
                    <li><CheckCircle2 size={16} className="text-blue" /> Polls & Community Voting</li>
                    <li><CheckCircle2 size={16} className="text-blue" /> Dedicated Account Manager</li>
                  </ul>
                </div>
                <div className="pricing-bottom">
                  <a href="/contact" className="btn-pricing-outline">Upgrade to Premium</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="faq-section">
          <div className="section-container">
            <div className="section-header reveal-auto">
              <span className="section-badge">Support</span>
              <h2>Common Questions</h2>
              <p>Everything you need to know about switching your society to Gate360.</p>
            </div>

            <div className="faq-list reveal-auto">
              {[
                {
                  q: "What makes Gate360 the most complete solution for gated communities?",
                  a: "Gate360 combines access control systems, resident services, and compliance billing into a single, unified workspace. This cuts RWA software complexity and avoids having separate, disconnected tools for account books, gate security, and lock controllers."
                },
                {
                  q: "Can Gate360 handle both small societies and massive townships?",
                  a: "Yes. Scalability is built into our core codebase. We support small 40-unit layouts as well as multi-phase townships with thousands of apartments, managing sub-blocks and centralized committee roles easily."
                },
                {
                  q: "How does Gate360 protect resident data and privacy?",
                  a: "We implement role-based database constraints, complete data encryption both in transit and at rest, and adhere to strict server security policies so your society files are protected."
                }
              ].map((faq, i) => (
                <div key={i} className={`faq-card-item ${activeFaq === i ? "open" : ""}`} onClick={() => toggleFaq(i)}>
                  <div className="faq-head">
                    <span>{faq.q}</span>
                    <span className="faq-chevron-icon">
                      <ChevronDown size={18} />
                    </span>
                  </div>
                  <div className="faq-body-content">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        /* HOME PAGE STYLING SYSTEM */
        :global(body) {
          background-color: #ffffff;
          color: #1e293b;
          font-family: 'Poppins', sans-serif;
        }

        .section-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 40px;
          width: 100%;
        }

        /* HERO SECTION */
        .hero-section {
          padding: 140px 0 100px;
          background: radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, rgba(79, 70, 229, 0.04) 50%, rgba(255, 255, 255, 0) 100%),
                      linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          overflow: hidden;
        }
        .hero-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 40px;
          width: 100%;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 60px;
        }
        .hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #2563eb;
          background: rgba(37, 99, 235, 0.07);
          padding: 6px 14px;
          border-radius: 99px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .hero-left h1 {
          font-size: 58px;
          font-weight: 800;
          line-height: 1.15;
          color: #0f172a;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
        }
        .gradient-text {
          background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-left p {
          font-size: 18px;
          line-height: 1.6;
          color: #475569;
          margin: 0 0 36px 0;
          max-width: 580px;
        }
        .hero-ctas {
          display: flex;
          gap: 16px;
          align-items: center;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #4f46e5 100%);
          color: #ffffff;
          padding: 15px 30px;
          border-radius: 99px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
          transition: transform 0.2s, opacity 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.45);
        }
        .btn-secondary {
          display: inline-block;
          border: 1px solid #cbd5e1;
          color: #334155;
          background: #ffffff;
          padding: 15px 30px;
          border-radius: 99px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: border-color 0.2s, background-color 0.2s;
        }
        .btn-secondary:hover {
          border-color: #94a3b8;
          background: #f8fafc;
        }
        .hero-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .dashboard-preview {
          position: relative;
          width: 100%;
          max-width: 540px;
        }
        .preview-glow {
          position: absolute;
          width: 120%;
          height: 120%;
          top: -10%;
          left: -10%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(255, 255, 255, 0) 70%);
          z-index: 1;
          pointer-events: none;
        }
        .mock-window {
          position: relative;
          z-index: 2;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.02);
          overflow: hidden;
          width: 100%;
          aspect-ratio: 1.4;
          display: flex;
          flex-direction: column;
        }
        .window-header {
          background: #f8fafc;
          padding: 12px 18px;
          border-bottom: 1px solid #edf2f7;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .window-header .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }
        .dot-red { background: #ef4444; }
        .dot-yellow { background: #f59e0b; }
        .dot-green { background: #10b981; }
        .window-title {
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
          margin-left: 12px;
          font-family: monospace;
        }
        .window-body {
          flex: 1;
          display: flex;
        }
        .mock-sidebar {
          width: 45px;
          background: #f8fafc;
          border-right: 1px solid #edf2f7;
          padding: 12px 8px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }
        .sidebar-logo {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #2563eb;
          margin-bottom: 10px;
        }
        .sidebar-item {
          width: 22px;
          height: 8px;
          border-radius: 4px;
          background: #e2e8f0;
        }
        .sidebar-item.active {
          background: #3b82f6;
        }
        .mock-content {
          flex: 1;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .mock-widgets-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .mock-widget {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .widget-label {
          font-size: 10px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .widget-value {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 4px 0 2px 0;
        }
        .widget-sub {
          font-size: 9.5px;
          font-weight: 500;
        }
        .text-green { color: #10b981; }
        .text-blue { color: #2563eb; }
        .mock-chart-box {
          flex: 1;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 11px;
          font-weight: 600;
          color: #475569;
        }
        .chart-pill {
          background: rgba(37,99,235,0.08);
          color: #2563eb;
          padding: 3px 8px;
          border-radius: 99px;
          font-size: 9px;
        }
        .chart-bars {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          height: 70px;
          padding-top: 6px;
        }
        .bar-col {
          width: 8%;
          background: linear-gradient(180deg, #3b82f6 0%, #4f46e5 100%);
          border-radius: 4px 4px 0 0;
          transition: height 0.4s ease;
        }
        .floating-card {
          position: absolute;
          z-index: 5;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 14px;
          padding: 14px 18px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          text-align: left;
          animation: floatAnimation 6s infinite ease-in-out;
        }
        .floating-card.visitor-alert {
          top: -24px;
          right: -30px;
          max-width: 220px;
        }
        .floating-card.lock-alert {
          bottom: -20px;
          left: -40px;
          max-width: 240px;
          animation-delay: 3s;
        }
        .alert-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }
        .floating-card p {
          margin: 0;
          font-size: 11.5px;
          color: #64748b;
          line-height: 1.4;
        }
        @keyframes floatAnimation {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 50px;
          }
          .hero-left {
            align-items: center;
            text-align: center;
          }
          .hero-left h1 {
            font-size: 42px;
          }
          .hero-left p {
            margin: 0 auto 30px;
          }
          .dashboard-preview {
            max-width: 100%;
          }
          .floating-card.visitor-alert {
            right: 10px;
          }
          .floating-card.lock-alert {
            left: 10px;
          }
        }

        /* SECTION HEADERS */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #2563eb;
          background: rgba(37, 99, 235, 0.07);
          padding: 6px 14px;
          border-radius: 99px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .section-header h2 {
          font-size: 40px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }
        .section-header p {
          font-size: 18px;
          color: #64748b;
          max-width: 640px;
          margin: 0 auto;
          line-height: 1.5;
        }

        /* FEATURES SECTION */
        .features-section {
          padding: 100px 0;
          background: #ffffff;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          max-width: 860px;
          margin: 0 auto;
        }
        .feature-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 40px;
          text-align: left;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-6px);
          border-color: #cbd5e1;
          box-shadow: 0 20px 40px rgba(0,0,0,0.03);
        }
        .icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(37, 99, 235, 0.07);
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        .feature-card h3 {
          font-size: 22px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 12px 0;
        }
        .feature-card p {
          font-size: 15px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 24px 0;
        }
        .card-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #2563eb;
          font-weight: 600;
          text-decoration: none;
          font-size: 14.5px;
          transition: gap 0.2s;
        }
        .card-link:hover {
          gap: 10px;
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
          .feature-card {
            padding: 30px;
          }
          .section-header h2 {
            font-size: 30px;
          }
        }

        /* STATS SECTION */
        .stats-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #ffffff;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        .stat-card {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .stat-icon-bg {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #60a5fa;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .stat-card h3 {
          font-size: 38px;
          font-weight: 800;
          margin: 0 0 8px 0;
          background: linear-gradient(135deg, #ffffff 0%, #93c5fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .stat-card p {
          font-size: 15px;
          color: #94a3b8;
          margin: 0;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        /* VIDEO SHOWCASE SECTION */
        .video-section {
          padding: 100px 0;
          background: #f8fafc;
        }
        .video-layout {
          display: grid;
          grid-template-columns: 0.9fr 1.15fr;
          align-items: center;
          gap: 60px;
        }
        .video-text-col {
          text-align: left;
        }
        .video-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #4f46e5;
          background: rgba(79, 70, 229, 0.07);
          padding: 6px 14px;
          border-radius: 99px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .video-text-col h2 {
          font-size: 36px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 16px 0;
          line-height: 1.25;
        }
        .video-text-col p {
          font-size: 16px;
          line-height: 1.6;
          color: #475569;
          margin: 0 0 32px 0;
        }
        .bullet-points {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .bullet-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .bullet-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4f46e5;
        }
        .bullet-item span {
          font-size: 14.5px;
          font-weight: 600;
          color: #1e293b;
        }
        .video-media-col {
          display: flex;
          justify-content: center;
        }
        .video-frame {
          width: 100%;
          aspect-ratio: 1.777;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
          border: 1px solid #e2e8f0;
          background: #000000;
        }
        .video-frame iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
        .video-placeholder {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .video-placeholder::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(15, 23, 42, 0.4);
          z-index: 1;
        }
        .play-btn {
          position: relative;
          z-index: 2;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #4f46e5;
          border: none;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(79, 70, 229, 0.4);
          transition: transform 0.2s, background-color 0.2s;
        }
        .play-btn:hover {
          transform: scale(1.08);
          background: #4338ca;
        }

        @media (max-width: 960px) {
          .video-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .video-text-col {
            text-align: center;
          }
          .bullet-points {
            align-items: center;
          }
        }

        /* BOOKING DEMO CARD SECTION */
        .booking-section {
          padding: 80px 0;
          background: #ffffff;
        }
        .booking-box {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-radius: 32px;
          padding: 60px;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }
        .booking-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #60a5fa;
          background: rgba(255, 255, 255, 0.05);
          padding: 6px 14px;
          border-radius: 99px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .booking-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          align-items: center;
          gap: 60px;
          position: relative;
          z-index: 2;
        }
        .booking-info {
          text-align: left;
        }
        .booking-info h2 {
          font-size: 42px;
          font-weight: 800;
          line-height: 1.2;
          margin: 0 0 20px 0;
          background: linear-gradient(135deg, #ffffff 0%, #93c5fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .booking-info p {
          font-size: 17px;
          color: #94a3b8;
          line-height: 1.6;
          margin: 0 0 36px 0;
        }
        .pills-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .pill-item {
          font-size: 15px;
          font-weight: 600;
          color: #60a5fa;
        }
        .booking-form-wrapper {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          text-align: left;
        }
        .input-group label {
          font-size: 12px;
          font-weight: 600;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .input-group input, .input-group select {
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s, background-color 0.2s;
        }
        .input-group input:focus, .input-group select:focus {
          border-color: #3b82f6;
          background: rgba(255, 255, 255, 0.08);
        }
        .input-group input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }
        .input-group select option {
          background: #0f172a;
          color: #ffffff;
        }
        .form-submit-btn {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: #ffffff;
          border: none;
          padding: 14px 28px;
          border-radius: 100px;
          font-weight: 700;
          cursor: pointer;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 10px;
          box-shadow: 0 4px 14px rgba(37,99,235,0.3);
          transition: opacity 0.2s, transform 0.1s;
        }
        .form-submit-btn:hover {
          opacity: 0.95;
        }
        .form-submit-btn:active {
          transform: scale(0.98);
        }

        @media (max-width: 960px) {
          .booking-box { padding: 40px 20px; }
          .booking-grid { grid-template-columns: 1fr; gap: 40px; }
          .booking-info { text-align: center; }
          .booking-info h2 { font-size: 32px; }
        }
        @media (max-width: 600px) {
          .form-grid { grid-template-columns: 1fr; gap: 16px; }
          .booking-form-wrapper { padding: 24px 16px; }
        }

        /* FAQ SECTION */
        .faq-section {
          padding: 100px 0 120px;
          background: #ffffff;
        }
        .faq-list {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .faq-card-item {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.25s, box-shadow 0.25s, background-color 0.25s;
        }
        .faq-card-item:hover {
          background: #f1f5f9;
        }
        .faq-card-item.open {
          border-color: #3b82f6;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.04);
          background: #ffffff;
        }
        .faq-head {
          padding: 24px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          font-size: 16.5px;
          color: #0f172a;
          gap: 20px;
          text-align: left;
        }
        .faq-chevron-icon {
          color: #64748b;
          transition: transform 0.25s ease;
          display: flex;
          align-items: center;
        }
        .faq-card-item.open .faq-chevron-icon {
          transform: rotate(180deg);
          color: #3b82f6;
        }
        .faq-body-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s ease;
          padding: 0 32px;
          color: #475569;
          font-size: 15px;
          line-height: 1.6;
          text-align: left;
        }
        .faq-card-item.open .faq-body-content {
          max-height: 300px;
          padding-bottom: 24px;
        }

        /* PARTNERS TRUST SECTION */
        .partners-section {
          padding: 50px 0;
          background: #f8fafc;
          border-bottom: 1px solid #edf2f7;
          text-align: center;
        }
        .partners-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #94a3b8;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .partners-logos {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 60px;
          flex-wrap: wrap;
        }
        .partner-logo-item {
          font-size: 20px;
          font-weight: 700;
          color: #cbd5e1;
          letter-spacing: -0.5px;
          transition: color 0.25s;
        }
        .partner-logo-item:hover {
          color: #64748b;
        }

        /* CORE BENEFITS */
        .benefits-section {
          padding: 100px 0;
          background: #ffffff;
          border-top: 1px solid #edf2f7;
          border-bottom: 1px solid #edf2f7;
        }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 40px;
        }
        .benefit-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 40px;
          text-align: left;
          position: relative;
          transition: transform 0.3s;
        }
        .benefit-card:hover {
          transform: translateY(-4px);
        }
        .benefit-num {
          font-size: 13px;
          font-weight: 800;
          color: #2563eb;
          background: rgba(37,99,235,0.06);
          padding: 4px 10px;
          border-radius: 6px;
          display: inline-block;
          margin-bottom: 20px;
        }
        .benefit-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 12px 0;
        }
        .benefit-card p {
          font-size: 14.5px;
          line-height: 1.6;
          color: #475569;
          margin: 0;
        }

        /* PRICING SECTION */
        .pricing-section {
          padding: 100px 0;
          background: #ffffff;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1140px;
          margin: 60px auto 0;
          align-items: center; /* This helps with the staggered height effect */
        }
        .pricing-card {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 48px 12px 48px 12px; /* Forward petal shape */
          padding: 44px 36px;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.02), inset 0 2px 4px rgba(255,255,255,0.8);
          z-index: 1;
        }
        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
          border-color: #cbd5e1;
        }
        
        /* The Highlighted Middle Card */
        .pricing-card.premium {
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
          border-radius: 12px 48px 12px 48px; /* Reversed petal shape to interlock */
          box-shadow: 0 24px 50px rgba(37, 99, 235, 0.25), inset 0 2px 10px rgba(255,255,255,0.05);
          padding: 56px 40px; /* Taller physically */
          z-index: 2;
          color: #ffffff;
        }
        .pricing-card.premium:hover {
          transform: translateY(-12px);
          box-shadow: 0 32px 60px rgba(37, 99, 235, 0.35);
        }

        .pricing-popular {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%);
          color: white;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 8px 20px;
          border-radius: 99px;
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
          white-space: nowrap;
        }

        .pricing-top {
          margin-bottom: 32px;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 24px;
        }
        .pricing-card.premium .pricing-top {
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }

        .pricing-title {
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 16px 0;
        }
        .pricing-card.premium .pricing-title { color: #ffffff; }

        .pricing-price {
          display: flex;
          align-items: flex-start;
          gap: 4px;
          margin-bottom: 16px;
        }
        .pricing-price .currency {
          font-size: 22px;
          font-weight: 700;
          color: #475569;
          margin-top: 6px;
        }
        .pricing-price .amount {
          font-size: 54px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1;
          letter-spacing: -1.5px;
        }
        .pricing-price .period {
          font-size: 14px;
          color: #64748b;
          font-weight: 600;
          align-self: flex-end;
          margin-bottom: 8px;
        }

        /* Dark mode overrides for price */
        .pricing-card.premium .pricing-price .currency { color: #94a3b8; }
        .pricing-card.premium .pricing-price .amount { color: #ffffff; }
        .pricing-card.premium .pricing-price .period { color: #cbd5e1; }

        .pricing-desc {
          font-size: 14.5px;
          line-height: 1.6;
          color: #64748b;
          margin: 0;
        }
        .pricing-card.premium .pricing-desc { color: #94a3b8; }

        .pricing-features {
          flex-grow: 1;
        }
        .pricing-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .pricing-features li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #1e293b;
          font-weight: 500;
          transition: transform 0.2s ease;
        }
        .pricing-features li:hover {
          transform: translateX(4px);
        }
        .pricing-card.premium .pricing-features li { color: #f8fafc; }
        
        .pricing-features li.disabled {
          color: #94a3b8;
          text-decoration: line-through;
          opacity: 0.7;
        }
        .pricing-card.premium .pricing-features li.disabled {
          color: #64748b;
        }

        .pricing-features .text-blue { color: #2563eb; }
        .pricing-card.premium .pricing-features .text-blue { color: #60a5fa; } /* Brighter blue for dark background */
        .pricing-features .text-gray { color: #cbd5e1; }
        .pricing-card.premium .pricing-features .text-gray { color: #475569; }

        .pricing-bottom {
          margin-top: 36px;
        }
        
        .btn-pricing-outline {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 15px;
          border: 1.5px solid #cbd5e1;
          border-radius: 24px 8px 24px 8px; /* Forward petal button */
          color: #0f172a;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.25s ease;
          background: transparent;
        }
        .btn-pricing-outline:hover {
          border-color: #0f172a;
          background: #0f172a;
          color: #ffffff;
        }
        
        .btn-pricing-solid {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%);
          color: #ffffff;
          border-radius: 8px 24px 8px 24px; /* Reversed petal button */
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          box-shadow: 0 8px 20px rgba(37,99,235,0.3);
          transition: all 0.25s ease;
          border: none;
        }
        .btn-pricing-solid:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(37,99,235,0.45);
          background: linear-gradient(135deg, #2563eb 0%, #4338ca 100%);
        }

        /* TESTIMONIALS */
        .testimonials-section {
          padding: 100px 0;
          background: #f8fafc;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-top: 40px;
        }
        .testimonial-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 40px;
          text-align: left;
          box-shadow: 0 4px 20px rgba(0,0,0,0.01);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .stars {
          color: #f59e0b;
          font-size: 16px;
          margin-bottom: 16px;
        }
        .quote {
          font-size: 16px;
          line-height: 1.6;
          color: #1e293b;
          font-style: italic;
          margin: 0 0 24px 0;
        }
        .reviewer-name {
          display: block;
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
        }
        .reviewer-role {
          display: block;
          font-size: 13px;
          color: #64748b;
          margin-top: 2px;
        }

        @media (max-width: 960px) {
          .benefits-grid, .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
          }
          .partners-logos {
            gap: 30px;
          }
        }

        /* REVEAL ON SCROLL */
        :global(.reveal-auto) {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.85s cubic-bezier(0.25, 1, 0.5, 1), transform 0.85s cubic-bezier(0.25, 1, 0.5, 1);
        }
        :global(.reveal-auto.is-revealed) {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}

export default Home;