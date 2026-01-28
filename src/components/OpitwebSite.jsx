import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  Globe,
  Users,
  TrendingUp,
  Check,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Instagram
} from 'lucide-react';
import './OpitwebSite.css';

const OpitwebSite = () => {
  useEffect(() => {
    const avatars = document.querySelectorAll('.floating-avatar');
    avatars.forEach((avatar, index) => {
      avatar.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  const trackEvent = (event) => {
    if (window.dataLayer) window.dataLayer.push({ event });
  };

  return (
    <>
      {/* SEO Helmet */}
      <Helmet>
        <title>Opitweb - Agência de Marketing Digital | Barcelona</title>
        <meta
          name="description"
          content="Opitweb é especialista em marketing digital, design web com React e Next.js, SEO técnico, UX/UI e gestão de redes sociais."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.opitweb.com/" />
        {/* Open Graph */}
        <meta property="og:title" content="Opitweb - Agência de Marketing Digital | Barcelona" />
        <meta property="og:description" content="Impulsione sua marca com tecnologia, design e desempenho digital com a Opitweb." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.opitweb.com/" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Navbar */}
      <nav className="navbar" role="navigation" aria-label="Menu principal">
        <div className="navbar-container">
          <div className="logo">Opitweb</div>

          <ul className="nav-links">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#pricing">Precios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>

          <button
            className="btn btn-primary"
            onClick={() => trackEvent('navbar_quote_click')}
            aria-label="Solicitar presupuesto"
          >
            Solicitar Presupuesto
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Agencia de Marketing Digital en Barcelona especializada en Diseño Web y SEO
            </h1>

            <p>
              Impulsamos marcas con tecnología, diseño y rendimiento digital usando React,
              Next.js, SEO técnico y estrategias de alto impacto.
            </p>

            <div className="cta-buttons">
              <button
                className="btn btn-primary"
                onClick={() => trackEvent('hero_quote_click')}
              >
                Solicitar Presupuesto <ArrowRight size={20} />
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => trackEvent('hero_services_click')}
              >
                Ver Servicios
              </button>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit-container">
              <div className="center-badge">
                <h2>20k+</h2>
                <p>Especialistas</p>
              </div>

              <div className="floating-avatar" style={{ top: '10%', left: '20%' }}>
                <Globe size={24} />
              </div>
              <div className="floating-avatar" style={{ top: '30%', right: '15%' }}>
                <Users size={24} />
              </div>
              <div className="floating-avatar" style={{ bottom: '20%', left: '15%' }}>
                <TrendingUp size={24} />
              </div>
              <div className="floating-avatar" style={{ bottom: '30%', right: '20%' }}>
                <Globe size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <div className="container">
          <header className="section-header">
            <h2>Nuestros Servicios</h2>
            <p>Soluciones digitales completas para hacer crecer tu negocio</p>
          </header>

          <div className="services-grid">
            {/* Card 1 */}
            <article className="service-card">
              <div className="service-icon">
                <Globe size={32} />
              </div>
              <h3>Diseño y Desarrollo Web</h3>
              <p>
                Creamos sitios web modernos, rápidos y optimizados con React y Next.js,
                enfocados en conversión y experiencia de usuario.
              </p>
              <ul className="service-features">
                <li><Check size={20} /> Diseño responsive</li>
                <li><Check size={20} /> React / Next.js</li>
                <li><Check size={20} /> Landing pages</li>
                <li><Check size={20} /> Performance</li>
              </ul>
            </article>

            {/* Card 2 */}
            <article className="service-card">
              <div className="service-icon">
                <Users size={32} />
              </div>
              <h3>Gestión de Redes Sociales</h3>
              <p>
                Estrategia, contenido y publicidad para aumentar visibilidad,
                engagement y conversión.
              </p>
              <ul className="service-features">
                <li><Check size={20} /> Estrategia</li>
                <li><Check size={20} /> Comunidad</li>
                <li><Check size={20} /> Publicidad</li>
                <li><Check size={20} /> Reporting</li>
              </ul>
            </article>

            {/* Card 3 */}
            <article className="service-card">
              <div className="service-icon">
                <TrendingUp size={32} />
              </div>
              <h3>SEO & UX/UI</h3>
              <p>
                SEO técnico avanzado y experiencias optimizadas para convertir visitantes
                en clientes.
              </p>
              <ul className="service-features">
                <li><Check size={20} /> SEO técnico</li>
                <li><Check size={20} /> Core Web Vitals</li>
                <li><Check size={20} /> UX/UI</li>
                <li><Check size={20} /> Auditorías</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">Opitweb</div>
            <p>
              Agencia de marketing digital en Barcelona especializada en tecnología,
              diseño y rendimiento digital.
            </p>

            <div className="social-links">
              <a href="#" aria-label="Github"><Github size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <ul className="footer-links">
              <li>
                <MapPin size={18} />
                <span>Barcelona, España</span>
              </li>
              <li>
                <Mail size={18} />
                <a
                  href="mailto:info@opitweb.com"
                  onClick={() => trackEvent('email_click')}
                >
                  info@opitweb.com
                </a>
              </li>
              <li>
                <Phone size={18} />
                <a
                  href="tel:+34900000000"
                  onClick={() => trackEvent('phone_click')}
                >
                  +34 900 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Opitweb. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default OpitwebSite;
