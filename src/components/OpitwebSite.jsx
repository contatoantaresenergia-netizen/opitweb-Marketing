import React, { useEffect } from 'react';
import { Menu, X, ArrowRight, Globe, Users, TrendingUp, Check, Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import './OpitwebSite.css';

const OpitwebSite = () => {
  useEffect(() => {
    const avatars = document.querySelectorAll('.floating-avatar');
    avatars.forEach((avatar, index) => {
      avatar.style.animationDelay = `${index * 0.5}s`;
    });
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Opitweb</div>
          <ul className="nav-links">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#pricing">Precios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
          <button className="btn btn-primary">Solicitar Presupuesto</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Impulsamos Marcas con Tecnología, Diseño y Rendimiento Digital</h1>
            <p>
              Agencia de marketing digital en Barcelona especializada en diseño web con React, 
              Next.js, SEO técnico y gestión de redes sociales para impulsar tu negocio.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">
                Solicitar Presupuesto <ArrowRight size={20} />
              </button>
              <button className="btn btn-secondary">Ver Servicios</button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit-container">
              <div className="center-badge">
                <h3>20k+</h3>
                <p>Especialistas</p>
              </div>
              
              <div className="floating-avatar" style={{top: '10%', left: '20%'}}>
                <Globe size={24} />
              </div>
              <div className="floating-avatar" style={{top: '30%', right: '15%'}}>
                <Users size={24} />
              </div>
              <div className="floating-avatar" style={{bottom: '20%', left: '15%'}}>
                <TrendingUp size={24} />
              </div>
              <div className="floating-avatar" style={{bottom: '30%', right: '20%'}}>
                <Globe size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Nuestros Servicios</h2>
            <p>Soluciones digitales completas para hacer crecer tu negocio</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Globe size={32} />
              </div>
              <h3>Websites & Web Design</h3>
              <p>
                Creamos sitios web modernos, rápidos y optimizados con las últimas tecnologías 
                como React y Next.js, enfocados en conversión y experiencia de usuario.
              </p>
              <ul className="service-features">
                <li><Check size={20} color="#8b5cf6" /> Diseño web responsive</li>
                <li><Check size={20} color="#8b5cf6" /> Desarrollo con React/Next.js</li>
                <li><Check size={20} color="#8b5cf6" /> Landing pages de alta conversión</li>
                <li><Check size={20} color="#8b5cf6" /> Performance y accesibilidad</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Users size={32} />
              </div>
              <h3>Gestión de Redes Sociales</h3>
              <p>
                Estrategia integral de redes sociales para aumentar tu presencia online, 
                engagement y conversión a través de contenido de calidad y publicidad efectiva.
              </p>
              <ul className="service-features">
                <li><Check size={20} color="#8b5cf6" /> Estrategia de contenido</li>
                <li><Check size={20} color="#8b5cf6" /> Gestión de comunidad</li>
                <li><Check size={20} color="#8b5cf6" /> Publicidad en redes</li>
                <li><Check size={20} color="#8b5cf6" /> Análisis y reporting</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <TrendingUp size={32} />
              </div>
              <h3>SEO & UX/UI</h3>
              <p>
                Optimización técnica SEO y diseño de experiencias de usuario que convierten, 
                mejorando tu posicionamiento y la satisfacción de tus clientes.
              </p>
              <ul className="service-features">
                <li><Check size={20} color="#8b5cf6" /> SEO técnico avanzado</li>
                <li><Check size={20} color="#8b5cf6" /> Core Web Vitals</li>
                <li><Check size={20} color="#8b5cf6" /> UX/UI optimizado</li>
                <li><Check size={20} color="#8b5cf6" /> Auditorías y mejoras</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <h2>Planes y Precios</h2>
            <p>Elige el plan perfecto para tu negocio</p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Basic</h3>
              <div className="price">€499<span>/mes</span></div>
              <p>Perfecto para empezar tu presencia digital</p>
              <ul className="pricing-features">
                <li><Check size={20} color="#8b5cf6" /> Landing page profesional</li>
                <li><Check size={20} color="#8b5cf6" /> Diseño responsive</li>
                <li><Check size={20} color="#8b5cf6" /> SEO básico</li>
                <li><Check size={20} color="#8b5cf6" /> 1 revisión incluida</li>
                <li><Check size={20} color="#8b5cf6" /> Soporte por email</li>
              </ul>
              <button className="btn btn-secondary" style={{width: '100%'}}>
                Elegir Plan
              </button>
            </div>

            <div className="pricing-card featured">
              <div className="pricing-badge">Más Popular</div>
              <h3>Medium</h3>
              <div className="price">€999<span>/mes</span></div>
              <p>Para negocios que buscan crecer online</p>
              <ul className="pricing-features">
                <li><Check size={20} color="#8b5cf6" /> Sitio web completo (5 páginas)</li>
                <li><Check size={20} color="#8b5cf6" /> Desarrollo React/Next.js</li>
                <li><Check size={20} color="#8b5cf6" /> SEO avanzado</li>
                <li><Check size={20} color="#8b5cf6" /> Gestión 2 redes sociales</li>
                <li><Check size={20} color="#8b5cf6" /> 3 revisiones incluidas</li>
                <li><Check size={20} color="#8b5cf6" /> Soporte prioritario</li>
              </ul>
              <button className="btn btn-primary" style={{width: '100%'}}>
                Elegir Plan <ArrowRight size={20} />
              </button>
            </div>

            <div className="pricing-card">
              <h3>Full</h3>
              <div className="price">€1,999<span>/mes</span></div>
              <p>Solución completa para empresas ambiciosas</p>
              <ul className="pricing-features">
                <li><Check size={20} color="#8b5cf6" /> Sitio web ilimitado</li>
                <li><Check size={20} color="#8b5cf6" /> Desarrollo personalizado</li>
                <li><Check size={20} color="#8b5cf6" /> SEO enterprise</li>
                <li><Check size={20} color="#8b5cf6" /> Gestión todas las redes</li>
                <li><Check size={20} color="#8b5cf6" /> Publicidad digital</li>
                <li><Check size={20} color="#8b5cf6" /> Revisiones ilimitadas</li>
                <li><Check size={20} color="#8b5cf6" /> Soporte 24/7</li>
              </ul>
              <button className="btn btn-secondary" style={{width: '100%'}}>
                Elegir Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo" style={{marginBottom: '20px'}}>Opitweb</div>
            <p style={{color: 'rgba(255,255,255,0.7)', marginBottom: '20px'}}>
              Agencia de marketing digital en Barcelona especializada en impulsar marcas 
              con tecnología y diseño.
            </p>
            <div className="social-links">
              <a href="#"><Github size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul className="footer-links">
              <li><a href="#">Diseño Web</a></li>
              <li><a href="#">Desarrollo React</a></li>
              <li><a href="#">SEO & UX</a></li>
              <li><a href="#">Redes Sociales</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Empresa</h4>
            <ul className="footer-links">
              <li><a href="#">Sobre Nosotros</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <ul className="footer-links">
              <li style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <MapPin size={18} color="#8b5cf6" />
                <span>Barcelona, España</span>
              </li>
              <li style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <Mail size={18} color="#8b5cf6" />
                <a href="mailto:info@opitweb.com">info@opitweb.com</a>
              </li>
              <li style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <Phone size={18} color="#8b5cf6" />
                <a href="tel:+34900000000">+34 900 000 000</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Opitweb. Todos los derechos reservados. Barcelona, España</p>
        </div>
      </footer>
    </>
  );
};

export default OpitwebSite;
