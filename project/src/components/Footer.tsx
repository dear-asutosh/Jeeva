import { Heart, Linkedin, Instagram, Mail, ArrowUp, ChevronRight } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'Features', href: '/#demo' },
      { name: 'For Hospitals', href: '/#hospitals' },
      { name: 'Pricing', href: '/#contact' },
      { name: 'Download App', href: '/#contact' },
    ],
    company: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/#about' },
      { name: 'Team', href: '/team' },
      { name: 'Events', href: '/#events' },
      { name: 'Contact', href: '/#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Data Security', href: '#' },
    ],
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) {
      e.preventDefault();
      window.history.pushState({}, '', href);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-24 pb-12 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-10">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div>
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
                className="inline-block transition-transform hover:scale-105 active:scale-95 duration-300"
              >
                <img
                  src="https://ik.imagekit.io/DearAsutosh/jeeva.png"
                  alt="JEEVA Logo"
                  className="h-24 md:h-40 w-auto max-w-full object-contain"
                />
              </a>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-sm">
              Revolutionizing emergency healthcare with real-time bed availability and seamless medical response across India.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/the-jeeva/", label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/thejeeva.in?igsh=bG0yZDVwbnI4YWhv", label: "Instagram", color: "hover:bg-[#E4405F]" },
                { icon: <Mail size={20} />, href: "mailto:teamjeevaservices@gmail.com", label: "Email", color: "hover:bg-blue-600" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 transition-all duration-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 active:scale-90 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { title: 'Product', links: footerLinks.product },
              { title: 'Company', links: footerLinks.company },
              { title: 'Legal', links: footerLinks.legal }
            ].map((section) => (
              <div key={section.title}>
                <h3 className="text-white font-bold text-lg mb-8 tracking-tight capitalize border-l-4 border-blue-600 pl-4">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300"
                      >
                        <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start gap-2">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} <span className="text-slate-400 font-semibold">JEEVA Health Technologies</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>Made with</span>
              <Heart size={14} className="text-rose-500 fill-rose-500 animate-pulse" />
              <span>by <a href="https://www.linkedin.com/in/asutoshsahoo/" className="text-slate-400 hover:text-blue-500 transition-colors font-medium">Asutosh</a></span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="order-1 md:order-2 group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-white/5 active:scale-95"
          >
            <span className="text-sm font-bold text-white uppercase tracking-wider">Back to Top</span>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300">
              <ArrowUp size={18} className="text-white" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
