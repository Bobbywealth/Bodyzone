import React, { useEffect, useState } from 'react';

export default function BodyZone() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white" id="main-content">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#C9A063] focus:text-white focus:rounded-md">
        Skip to main content
      </a>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        
        .product-hover {
          transition: all 0.3s ease;
        }
        
        .product-hover:hover {
          transform: translateY(-10px);
        }
        
        /* Focus styles for accessibility */
        a:focus-visible, button:focus-visible {
          outline: 2px solid #C9A063;
          outline-offset: 2px;
        }
        
        /* Mobile menu animation */
        .mobile-menu-enter {
          transform: translateX(-100%);
        }
        .mobile-menu-enter-active {
          transform: translateX(0);
          transition: transform 300ms ease-in-out;
        }
        .mobile-menu-exit {
          transform: translateX(0);
        }
        .mobile-menu-exit-active {
          transform: translateX(-100%);
          transition: transform 300ms ease-in-out;
        }
      `}</style>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-lg' : 'bg-white/95'} backdrop-blur-md`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center px-4 md:px-8 lg:px-16 py-4 md:py-6">
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A063] rounded"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 lg:gap-12 items-center list-none">
            <li><a href="#home" className="text-gray-800 text-sm font-normal tracking-wide hover:text-[#C9A063] transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A063] after:transition-all hover:after:w-full focus:outline-none">Home</a></li>
            <li><a href="#shop" className="text-gray-800 text-sm font-normal tracking-wide hover:text-[#C9A063] transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A063] after:transition-all hover:after:w-full focus:outline-none">Shop</a></li>
            <li><a href="#studios" className="text-gray-800 text-sm font-normal tracking-wide hover:text-[#C9A063] transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A063] after:transition-all hover:after:w-full focus:outline-none">Studios</a></li>
            <li><a href="#system" className="text-gray-800 text-sm font-normal tracking-wide hover:text-[#C9A063] transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A063] after:transition-all hover:after:w-full focus:outline-none">System</a></li>
            <li><a href="#about" className="text-gray-800 text-sm font-normal tracking-wide hover:text-[#C9A063] transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A063] after:transition-all hover:after:w-full focus:outline-none">About</a></li>
            <li><a href="#contact" className="text-gray-800 text-sm font-normal tracking-wide hover:text-[#C9A063] transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A063] after:transition-all hover:after:w-full focus:outline-none">Contact</a></li>
          </ul>
          
          <a href="#" className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-normal text-[#C9A063] tracking-[2px] no-underline focus:outline-none" aria-label="Body Zone Home">BODY ⟨ ZONE</a>
          
          <div className="cursor-pointer hover:scale-110 transition-transform p-2" aria-label="Shopping cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 2L7 8H21L19 2H9Z"/>
              <path d="M7 8H21C21.5523 8 22 8.44772 22 9V19C22 19.5523 21.5523 20 21 20H7C6.44772 20 6 19.5523 6 19V9C6 8.44772 6.44772 8 7 8Z"/>
              <circle cx="10" cy="17" r="1"/>
              <circle cx="18" cy="17" r="1"/>
            </svg>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-100`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col items-center py-4 gap-4 list-none">
            <li><a href="#home" onClick={closeMobileMenu} className="text-gray-800 text-base font-normal tracking-wide hover:text-[#C9A063] transition-colors py-2">Home</a></li>
            <li><a href="#shop" onClick={closeMobileMenu} className="text-gray-800 text-base font-normal tracking-wide hover:text-[#C9A063] transition-colors py-2">Shop</a></li>
            <li><a href="#studios" onClick={closeMobileMenu} className="text-gray-800 text-base font-normal tracking-wide hover:text-[#C9A063] transition-colors py-2">Studios</a></li>
            <li><a href="#system" onClick={closeMobileMenu} className="text-gray-800 text-base font-normal tracking-wide hover:text-[#C9A063] transition-colors py-2">System</a></li>
            <li><a href="#about" onClick={closeMobileMenu} className="text-gray-800 text-base font-normal tracking-wide hover:text-[#C9A063] transition-colors py-2">About</a></li>
            <li><a href="#contact" onClick={closeMobileMenu} className="text-gray-800 text-base font-normal tracking-wide hover:text-[#C9A063] transition-colors py-2">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section 
        id="home"
        className="relative mt-20 min-h-[80vh] flex flex-col justify-center items-center px-4 md:px-8 py-12 md:py-16 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #e8e8e8 0%, #f5f5f5 50%, #e0e0e0 100%)'
        }}
        role="banner"
        aria-label="Hero section"
      >
        {/* Simulated gym environment */}
        <div className="absolute inset-0 opacity-30">
          {/* Windows/gym frames on left */}
          <div className="absolute left-[8%] top-[15%] w-[100px] h-[220px] bg-gradient-to-br from-[#C9A063] to-[#B88F50] rounded opacity-20" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
          <div className="absolute left-[12%] top-[20%] w-[80px] h-[200px] bg-gradient-to-br from-[#C9A063] to-[#B88F50] rounded opacity-15" style={{ animation: 'float 7s ease-in-out infinite 1s' }}></div>
          
          {/* Windows/gym frames on right */}
          <div className="absolute right-[8%] top-[15%] w-[100px] h-[220px] bg-gradient-to-br from-[#C9A063] to-[#B88F50] rounded opacity-20" style={{ animation: 'float 6s ease-in-out infinite 2s' }}></div>
          <div className="absolute right-[12%] top-[20%] w-[80px] h-[200px] bg-gradient-to-br from-[#C9A063] to-[#B88F50] rounded opacity-15" style={{ animation: 'float 7s ease-in-out infinite 3s' }}></div>
          
          {/* Ambient lighting effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(201,160,99,0.15)_0%,transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(201,160,99,0.1)_0%,transparent_50%)]"></div>
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 50px)'
        }}></div>
        
        <div className="relative z-10 text-center max-w-4xl animate-fadeInUp px-4">
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl lg:text-7xl font-normal text-[#C9A063] leading-tight mb-8 md:mb-12 tracking-wide">
            Elevate Your Performance.<br />Inside & Out.
          </h1>
        </div>

      </section>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16 px-4">
        <a href="#shop" className="px-10 py-4 border-2 border-[#C9A063] bg-transparent text-[#C9A063] font-['Montserrat'] text-sm font-medium tracking-wider cursor-pointer transition-all duration-300 rounded-full hover:bg-[#C9A063] hover:text-white hover:shadow-[0_10px_30px_rgba(201,160,99,0.3)] hover:-translate-y-1">
          Shop Supplements
        </a>
        <a href="#studios" className="px-10 py-4 border-2 border-[#C9A063] bg-transparent text-[#C9A063] font-['Montserrat'] text-sm font-medium tracking-wider cursor-pointer transition-all duration-300 rounded-full hover:bg-[#C9A063] hover:text-white hover:shadow-[0_10px_30px_rgba(201,160,99,0.3)] hover:-translate-y-1">
          Explore Studios
        </a>
      </div>

      {/* Products Section */}
      <section id="shop" className="relative z-10 flex justify-center px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-white" role="region" aria-label="Products">
        <div className="flex w-full max-w-6xl justify-center gap-6 md:gap-8 flex-wrap">
          {[
            { name: 'ultimate greens\n+antioxidants', subtitle: 'MIXED BERRY', detail: 'OVER 50 INGREDIENTS\nFOR HEALTHY LIVING', hasScoop: true, hasGreen: true },
            { name: 'ultimate\ncleanse', subtitle: 'PREMIUM QUALITY\n15 DAY CLEANSE', detail: 'DIETARY SUPPLEMENT', hasScoop: false },
            { name: 'zonefuel', subtitle: 'PRIME HYDRATION\nELECTROLYTE', detail: 'DIETARY SUPPLEMENT', hasScoop: true },
            { name: 'collagen peptides\ntype I & III', subtitle: '9G PROTEIN PER SERVING\n\nUNFLAVORED', detail: 'DIETARY SUPPLEMENT', hasScoop: true }
          ].map((product, idx) => (
            <div key={idx} className="flex-[0_1_280px] flex flex-col items-center min-w-[260px]" style={{ animation: `fadeInUp 0.8s ease-out ${(idx + 1) * 0.1}s backwards` }}>
              <div className="relative w-full aspect-[3/4] mb-6 cursor-pointer product-hover">
                <div className="w-full h-full bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col items-center justify-start p-6 md:p-8 relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(201,160,99,0.2)]">
                  {/* Product Lid */}
                  <div className="w-[70%] h-10 bg-gradient-to-br from-[#C9A063] to-[#B88F50] rounded-full shadow-[0_4px_12px_rgba(201,160,99,0.4)] mb-4 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] rounded-full bg-gradient-to-b from-white/30 to-transparent"></div>
                  </div>
                  
                  {/* Product Body */}
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <div className="font-['Cormorant_Garamond'] text-sm text-[#C9A063] tracking-[2px] mb-2">BODY | ZONE</div>
                    <div className="font-['Cormorant_Garamond'] text-2xl text-[#B88F50] leading-tight mb-1 font-medium whitespace-pre-line">{product.name}</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider mb-4 whitespace-pre-line">{product.subtitle}</div>
                    <div className="text-[0.7rem] text-gray-600 leading-relaxed whitespace-pre-line">{product.detail}</div>
                  </div>
                  
                  {/* Green powder effect for first product */}
                  {product.hasGreen && (
                    <div className="absolute bottom-0 left-[-20px] w-20 h-20 bg-[radial-gradient(circle,_rgba(139,195,74,0.2)_0%,_transparent_70%)] rounded-full"></div>
                  )}
                </div>
                
                {/* Scoop */}
                {product.hasScoop && (
                  <div className={`absolute bottom-[-10px] ${idx === 0 ? 'left-5' : 'right-5'} w-[60px] h-[60px] bg-[#C9A063] rounded-[50%_50%_0_50%] shadow-[0_4px_12px_rgba(201,160,99,0.3)] -rotate-45`}>
                    <div className="absolute top-2.5 left-2.5 right-2.5 bottom-2.5 rounded-[50%_50%_0_50%] bg-gradient-to-br from-white/30 to-transparent"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white" id="about">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-['Cormorant_Garamond'] text-5xl text-[#C9A063] mb-8 font-normal">About Body Zone</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-base">
            <p>Body Zone is a high-end wellness brand built around balance, intention, and elevated living. We believe the body performs and presents best when it's supported holistically—through mindful intake, daily movement, and disciplined routines.</p>
            <p>Our products are designed to integrate seamlessly into a modern lifestyle, supporting tone, structure, and overall vitality without extremes or quick fixes. Every detail—from formulation to design—is intentional, refined, and uncompromising in quality.</p>
            <p>Body Zone is unisex, minimal, and purpose-driven. It's not about trends or shortcuts—it's about consistency, control, and showing up in your best form, every day.</p>
            <p className="text-[#C9A063] font-['Cormorant_Garamond'] text-2xl italic mt-8">This is wellness, elevated.</p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mt-20">
          {[
            { icon: '✦', title: 'Premium Quality', desc: 'Scientifically formulated supplements crafted with the highest quality ingredients to support your wellness journey from the inside out.', delay: 0.2 },
            { icon: '◈', title: 'Expert Guidance', desc: 'Access world-class fitness studios and expert trainers who understand your unique goals and help you achieve peak performance.', delay: 0.4 },
            { icon: '◆', title: 'Holistic Approach', desc: 'Experience a comprehensive system that integrates nutrition, training, and recovery for sustainable, transformative results.', delay: 0.6 }
          ].map((feature, idx) => (
            <div key={idx} className="text-center" style={{ animation: `fadeInUp 0.8s ease-out ${feature.delay}s backwards` }}>
              <div className="w-20 h-20 mx-auto mb-8 border-2 border-[#C9A063] rounded-full flex items-center justify-center text-4xl text-[#C9A063] transition-all duration-300 hover:bg-[#C9A063] hover:text-white hover:rotate-[360deg] hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-3xl text-gray-800 mb-4 font-medium">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-[#F8F6F3] px-4 md:px-8 lg:px-16 py-12" role="contentinfo">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {[
            { title: 'Shop', links: ['Supplements', 'Bundles', 'Accessories', 'Gift Cards'] },
            { title: 'Studios', links: ['Find a Location', 'Class Schedule', 'Membership', 'Personal Training'] },
            { title: 'About', links: ['Our Story', 'Science', 'Blog', 'Careers'] },
            { title: 'Support', links: ['Contact Us', 'FAQ', 'Shipping', 'Returns'] }
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="font-['Cormorant_Garamond'] text-[#C9A063] text-2xl mb-4 font-medium">{section.title}</h4>
              <ul className="list-none">
                {section.links.map((link, i) => (
                  <li key={i} className="mb-2">
                    <a href="#" className="text-[#F8F6F3] no-underline text-sm transition-colors hover:text-[#C9A063]">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center pt-8 border-t border-[#C9A063]/20 text-sm text-gray-400">
          <p>&copy; 2026 Body Zone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
