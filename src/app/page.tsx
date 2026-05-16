"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PlayCircle, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Video, 
  Sparkles, 
  Mail, 
  Smartphone, 
  Globe, 
  Award, 
  Menu, 
  X,
  Monitor,
  Star,
  GraduationCap,
  MessageSquare,
  BookOpen,
  Rocket,
  Flame,
  Lightbulb,
  MessageCircle
} from 'lucide-react';
import * as gtag from '../lib/gtag';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNumber = "221706506365"; // Numéro Sénégal
  const whatsappMessage = encodeURIComponent("Bonjour SUNU DIGITAL, je souhaite souscrire à l'Abonnement PRO pour automatiser ma création de vidéos avec l'IA !");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const trackWhatsAppClick = (label: string) => {
    gtag.event({
      action: 'click_whatsapp',
      category: 'conversion',
      label: label,
    });
    // Facebook Pixel Event
    if (typeof (window as any).fbq !== 'undefined') {
      (window as any).fbq('trackCustom', 'WhatsAppClick', { location: label });
    }
  };

  // ✅ Vidéos de formation réelles
  const trainingVideos = [
    {
      youtubeId: "ZenzxkycgYo",
      iconType: 'pc',
      title: "En 5 Minutes Sur Votre PC, Créez une Vidéo Qui Génère des Vues — Sans Montage, Sans Expérience",
      desc: "Découvrez la méthode exacte pour générer une vidéo professionnelle depuis votre ordinateur, en utilisant uniquement des outils IA gratuits. Résultats garantis dès le premier essai.",
      duration: "À voir",
      tag: "Gratuit"
    },
    {
      youtubeId: "qmf3V3COhpA",
      iconType: 'mobile',
      title: "Votre Téléphone est un Studio IA — Créez des Vidéos Virales n'Importe Où, n'Importe Quand",
      desc: "Plus besoin d'un PC. Apprenez à transformer votre smartphone en machine à contenu. La méthode que les créateurs africains utilisent pour dominer TikTok et Instagram Reels.",
      duration: "À voir",
      tag: "Gratuit"
    },
    {
      youtubeId: "85hGf5Asq0o", // Mise à jour de la vidéo 3
      iconType: 'rocket',
      title: "La Machine à Vues — Comment Transformer l'IA en un Business Rentable",
      desc: "Le secret le mieux gardé des créateurs à succès. Découvrez le système exact pour monétiser vos vues, attirer des clients en automatique et générer des revenus récurrents.",
      duration: "À voir",
      tag: "Gratuit"
    }
  ];

  // ✅ Vidéos de démo (résultats réels obtenus avec l'IA)
  const demoVideos = [
    {
      youtubeId: "EzbwLIeh6GQ",
      iconType: 'fire',
      title: "Vidéo 100% IA — Résultat Réel d'un Apprenant",
      views: "Résultat concret"
    },
    {
      youtubeId: "zEPTdMpI09E",
      iconType: 'zap',
      title: "Sans Montage, Sans Visage — Créé en Moins de 5 Min",
      views: "Possible dès aujourd'hui"
    },
    {
      youtubeId: "w8cunXK5fLY",
      iconType: 'bulb',
      title: "Ce Type de Vidéo Génère des Milliers de Vues avec l'IA",
      views: "Vous pouvez faire pareil"
    },
  ];

  const renderTitleIcon = (type: string, size = 24) => {
    switch(type) {
      case 'pc': return <Monitor size={size} className="title-icon" style={{ color: 'var(--senegal-green)' }} />;
      case 'mobile': return <Smartphone size={size} className="title-icon" style={{ color: 'var(--senegal-green)' }} />;
      case 'rocket': return <Rocket size={size} className="title-icon" style={{ color: 'var(--senegal-red)' }} />;
      case 'fire': return <Flame size={size} className="title-icon" style={{ color: 'var(--senegal-red)' }} />;
      case 'zap': return <Zap size={size} className="title-icon" style={{ color: 'var(--senegal-yellow)' }} fill="var(--senegal-yellow)" />;
      case 'bulb': return <Lightbulb size={size} className="title-icon" style={{ color: 'var(--senegal-yellow)' }} />;
      default: return null;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    gtag.event({
      action: 'submit_lead_form',
      category: 'conversion',
      label: email,
    });

    // Facebook Pixel Lead Event
    if (typeof (window as any).fbq !== 'undefined') {
      (window as any).fbq('track', 'Lead', { content_name: 'Formation IA Gratuite' });
    }

    // Simulation d'envoi et redirection
    setTimeout(() => {
      window.location.href = whatsappLink;
    }, 1000);
  };

  const testimonials = [
    {
      name: "Amadou Diop",
      role: "Créateur de Contenu",
      text: "Grâce à SUNU DIGITAL, je produis maintenant 3 fois plus de vidéos pour ma chaîne TikTok. La qualité est incroyable !",
      avatar: "AD"
    },
    {
      name: "Fatou Sow",
      role: "Entrepreneure",
      text: "Je n'y connaissais rien en montage, mais les outils IA présentés dans la formation ont tout changé pour mon business.",
      avatar: "FS"
    },
    {
      name: "Moussa Keita",
      role: "Freelance",
      text: "La stratégie de volume viral m'a permis d'atteindre mes 10k premiers abonnés en moins de 30 jours. Merci !",
      avatar: "MK"
    }
  ];

  return (
    <div style={{ position: 'relative' }}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <img src="/logo.png" alt="SUNU DIGITAL" style={{ height: '40px' }} />
          
          {/* Desktop Nav - hidden on mobile via state */}
          <div className="nav-links-desktop" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#demos" style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Monitor size={18} /> Démos
            </a>
            <a href="#training" style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={18} /> Formation
            </a>
            <a href="#testimonials" style={{ fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageSquare size={18} /> Avis
            </a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary" 
              style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }} 
              onClick={() => trackWhatsAppClick('nav_button')}
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{ 
              padding: '1.5rem 2rem', 
              background: 'var(--background)', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              textAlign: 'center',
              borderBottom: '2px solid var(--senegal-green)',
            }}
          >
            <a href="#demos" onClick={() => setIsMenuOpen(false)} style={{ padding: '0.8rem', fontWeight: 600, fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
              <Monitor size={20} /> Démos
            </a>
            <a href="#training" onClick={() => setIsMenuOpen(false)} style={{ padding: '0.8rem', fontWeight: 600, fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
              <GraduationCap size={20} /> Formation
            </a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)} style={{ padding: '0.8rem', fontWeight: 600, fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
              <Star size={20} /> Avis
            </a>
            <a 
              href="#register" 
              onClick={() => setIsMenuOpen(false)} 
              style={{ padding: '0.8rem', fontWeight: 600, fontSize: '1.1rem' }}
            >
              📩 S'inscrire
            </a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary" 
              onClick={() => { setIsMenuOpen(false); trackWhatsAppClick('mobile_menu'); }}
              style={{ padding: '1rem', fontSize: '1rem' }}
            >
              Rejoindre sur WhatsApp
            </a>
          </motion.div>
        )}
      </nav>

      {/* Background Orbs */}
      <div style={{ 
        position: 'fixed', 
        top: '-10%', 
        left: '-10%', 
        width: '40%', 
        height: '40%', 
        background: 'rgba(0, 132, 61, 0.15)', 
        filter: 'blur(100px)', 
        borderRadius: '50%', 
        zIndex: -1 
      }} />
      <div style={{ 
        position: 'fixed', 
        bottom: '-10%', 
        right: '-10%', 
        width: '40%', 
        height: '40%', 
        background: 'rgba(227, 27, 35, 0.1)', 
        filter: 'blur(100px)', 
        borderRadius: '50%', 
        zIndex: -1 
      }} />

      {/* Hero Section */}
      <header className="container hero-padding" style={{ textAlign: 'center' }}>
        <div>
          <span style={{ 
            padding: '0.5rem 1.5rem', 
            borderRadius: '50px', 
            background: 'rgba(0, 132, 61, 0.1)', 
            color: 'var(--senegal-green)', 
            fontWeight: '600',
            fontSize: '0.9rem',
            marginBottom: '1rem',
            display: 'inline-block',
            border: '1px solid var(--senegal-green)'
          }}>
            🔥 LA MÉTHODE QUI CHANGE TOUT
          </span>
          <h1 style={{ marginTop: '1rem' }}>
            Arrêtez de Perdre des Heures au Montage. <br /> Dominez avec <span className="gradient-text">L'Intelligence Artificielle</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto 2.5rem' }}>
            La stratégie exacte (sur PC et téléphone) pour créer des vidéos virales en moins de 5 minutes. <strong>Sans montrer votre visage, sans aucune compétence technique, et sans budget de production.</strong>
          </p>
          
          <div style={{ marginBottom: '4rem', borderRadius: '30px', overflow: 'hidden', boxShadow: 'var(--shadow)', position: 'relative' }}>
            <img src="/hero.png" alt="AI Video Creation" style={{ width: '100%', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)', display: 'flex', alignItems: 'flex-end', padding: '2rem' }}>
              <div style={{ color: 'white', textAlign: 'left' }}>
                <div style={{ display: 'flex', gap: '0.3rem', color: '#FDEF42', marginBottom: '0.6rem' }}>
                  {[1,2,3,4,5].map(i => <Sparkles key={i} size={18} fill="#FDEF42" style={{ filter: 'drop-shadow(0 0 5px rgba(253, 239, 66, 0.5))' }} />)}
                </div>
                <p style={{ color: 'white', fontSize: '1rem', fontWeight: '500' }}>+500 élèves déjà formés au Sénégal et en Afrique.</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary btn-pulse" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', padding: '1.4rem 3rem' }} onClick={() => trackWhatsAppClick('hero_button')}>
              <MessageCircle size={24} /> Abonnement PRO — Seulement 4 500F/mois <ArrowRight size={22} />
            </a>
          </div>
          <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.95rem', color: '#888' }}>
            💡 Moins cher qu'un repas au resto. Plus rentable qu'un an de formation.
          </p>
        </div>
      </header>

      {/* ========== DEMO SECTION ========== */}
      <section id="demos" style={{ background: 'rgba(0,0,0,0.02)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              padding: '0.4rem 1.2rem',
              borderRadius: '50px',
              background: 'rgba(227, 27, 35, 0.1)',
              color: 'var(--senegal-red)',
              fontWeight: '600',
              fontSize: '0.85rem',
              border: '1px solid var(--senegal-red)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              <Monitor size={16} /> CE QUE VOS VIDÉOS POURRAIENT RESSEMBLER
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>
              Des Résultats <span className="gradient-text">Concrets & Prouvés</span>
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Voici des exemples de vidéos créées 100% avec l'IA, par des apprenants SUNU DIGITAL, sans montrer leur visage.
            </p>
          </div>

          <div className="grid-responsive">
            {demoVideos.map((d: any, i: number) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}
              >
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${d.youtubeId}?rel=0&modestbranding=1`}
                    title={d.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    style={{
                      position: 'absolute', top: 0, left: 0,
                      width: '100%', height: '100%', border: 'none'
                    }}
                  />
                </div>
                <div style={{ padding: '1.2rem', background: 'var(--card-bg)', backdropFilter: 'blur(8px)' }}>
                  <p style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.3rem', color: 'var(--foreground)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {renderTitleIcon(d.iconType, 18)} {d.title}
                  </p>
                  <span style={{ color: 'var(--senegal-green)', fontSize: '0.85rem', fontWeight: 600 }}>👁 {d.views}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => trackWhatsAppClick('demo_button')}>
              <MessageCircle size={20} /> Obtenir l'Abonnement PRO <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ========== TRAINING VIDEOS SECTION ========== */}
      <section id="training" className="container" style={{ padding: '6rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            padding: '0.4rem 1.2rem',
            borderRadius: '50px',
            background: 'rgba(0, 132, 61, 0.1)',
            color: 'var(--senegal-green)',
            fontWeight: '600',
            fontSize: '0.85rem',
            border: '1px solid var(--senegal-green)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            <GraduationCap size={16} /> FORMATION GRATUITE — DISPONIBLE ICI
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>
            Vos 3 Vidéos de Formation
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Regardez dès maintenant. Pas besoin de créer un compte. La formation est 100% accessible ici, gratuitement.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {trainingVideos.map((v: any, i: number) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '3fr 2fr' : '2fr 3fr',
                gap: '3rem',
                alignItems: 'center'
              }}
              className="training-row"
            >
              {/* Video Player */}
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.15)' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.youtubeId}?rel=0&modestbranding=1`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    style={{
                      position: 'absolute', top: 0, left: 0,
                      width: '100%', height: '100%', border: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Video Info */}
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <span style={{
                  padding: '0.3rem 1rem',
                  borderRadius: '50px',
                  background: 'rgba(0, 132, 61, 0.1)',
                  color: 'var(--senegal-green)',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  marginBottom: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <Zap size={14} fill="var(--senegal-green)" /> {v.tag} · Vidéo {i + 1}/3
                </span>
                <h3 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  {renderTitleIcon(v.iconType, 28)} {v.title}
                </h3>
                <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>{v.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--senegal-green)', fontWeight: 600 }}>
                    <Video size={18} /> {v.duration} min
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#999', fontSize: '0.9rem' }}>
                    <CheckCircle2 size={16} color="var(--senegal-green)" /> Aucun prérequis
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Psychological Bridge to PRO Offer */}
        <div 
          style={{ marginTop: '5rem', padding: '3.5rem 2rem', background: 'var(--card-bg)', borderRadius: '24px', textAlign: 'center', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', border: '1px solid rgba(0, 132, 61, 0.1)' }}
        >
          <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--foreground)' }}>
            Vous venez de découvrir le <span style={{ color: 'var(--senegal-green)' }}>pouvoir</span> de l'IA.
          </h3>
          <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem', maxWidth: '750px', margin: '0 auto 1.5rem', lineHeight: '1.7', color: '#555' }}>
            Mais imaginez si vous pouviez multiplier ces résultats par 100. Les créateurs qui réussissent ne passent pas leurs journées à bricoler avec des outils gratuits et limités. Ils automatisent tout le processus.
          </p>
          <div style={{ margin: '0 auto 2rem', padding: '1.5rem', background: 'rgba(0, 132, 61, 0.05)', borderRadius: '16px', maxWidth: '500px', border: '2px dashed var(--senegal-green)' }}>
            <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '0.3rem', textDecoration: 'line-through' }}>Valeur réelle : 25 000F/mois</p>
            <p style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--senegal-green)', lineHeight: 1 }}>4 500F<span style={{ fontSize: '1rem', fontWeight: 600 }}>/mois</span></p>
            <p style={{ fontSize: '0.95rem', color: '#555', marginTop: '0.5rem' }}>soit <strong>150F par jour</strong> — le prix d'un café ☕</p>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary btn-pulse" style={{ padding: '1.2rem 2.5rem', fontSize: '1.15rem' }} onClick={() => trackWhatsAppClick('bridge_button')}>
            <MessageCircle size={20} /> Je Veux Mon Abonnement PRO à 4 500F <ArrowRight size={20} />
          </a>
          <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '1rem' }}>⚡ Accès immédiat après paiement. Annulation possible à tout moment.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{ background: 'rgba(253, 239, 66, 0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{
              padding: '0.4rem 1.2rem',
              borderRadius: '50px',
              background: 'rgba(253, 239, 66, 0.2)',
              color: '#d4af37',
              fontWeight: '600',
              fontSize: '0.85rem',
              border: '1px solid #d4af37',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              <Star size={16} fill="#d4af37" /> CE QUE NOS MEMBRES DISENT
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Ils ont sauté le pas</h2>
            <p>Découvrez les retours de ceux qui utilisent déjà l'IA avec SUNU DIGITAL.</p>
          </div>
          <div className="grid-responsive">
            {testimonials.map((t: any, i: number) => (
              <div key={i} className="glass-card" style={{ padding: '2rem', background: 'white', position: 'relative', overflow: 'hidden' }}>
                <MessageSquare size={80} style={{ position: 'absolute', right: '-10px', bottom: '-10px', opacity: 0.03, transform: 'rotate(-10deg)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '50%', 
                    background: 'var(--senegal-green)', 
                    color: 'white', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: '700'
                  }}>
                    {t.avatar}
                  </div>
                  <div>
                    <h4 style={{ fontWeight: '700' }}>{t.name}</h4>
                    <span style={{ fontSize: '0.9rem', color: '#666' }}>{t.role}</span>
                  </div>
                </div>
                <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section id="register" style={{ background: 'var(--card-bg)' }}>
        <div className="container grid-responsive" style={{ alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
              Sécurisez Votre <span className="gradient-text">Avantage Déloyal</span>
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                "Automatisation totale de votre production",
                "Générez jusqu'à 100 vidéos par jour",
                "Stratégies de monétisation exclusives",
                "Accompagnement privé et support prioritaire"
              ].map((item: string, i: number) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                  <CheckCircle2 color="var(--senegal-green)" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card" style={{ padding: '3rem', background: 'var(--background)' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.85rem', color: '#999', textDecoration: 'line-through', marginBottom: '0.2rem' }}>25 000F/mois</p>
              <h3 style={{ marginBottom: '0.3rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--senegal-green)' }}>4 500F</span>
                <span style={{ fontSize: '1rem', color: '#666' }}>/mois</span>
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--senegal-red)', fontWeight: 700 }}>🔥 -82% — Offre de lancement limitée</p>
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ position: 'relative' }}>
                <Mail style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#999' }} size={20} />
                <input 
                  type="email" 
                  placeholder="Votre email (pour les bonus)..." 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '1.2rem 1.2rem 1.2rem 3rem', 
                    borderRadius: '12px', 
                    border: '1px solid #ddd',
                    fontSize: '1rem',
                    background: 'transparent',
                    color: 'inherit'
                  }}
                  required
                />
              </div>
              <button type="submit" className="btn-primary btn-pulse" style={{ width: '100%', fontSize: '1.2rem', padding: '1.4rem' }} disabled={isSubmitting}>
                <MessageCircle size={22} /> {isSubmitting ? "Redirection..." : "Débloquer l'Accès PRO — 4 500F/mois"}
              </button>
              <p style={{ fontSize: '0.8rem', textAlign: 'center', marginTop: '0.5rem', color: '#999' }}>
                🔒 Paiement sécurisé · Annulation à tout moment · Accès immédiat
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* AI Subscription / Offer Section */}
      <section id="pro-offer" className="container" style={{ paddingBottom: '6rem', paddingTop: '2rem' }}>
        <div className="glass-card gradient-bg" style={{ padding: '4rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, padding: '2rem', opacity: 0.2 }}>
            <Sparkles size={200} />
          </div>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
            <span style={{
              padding: '0.4rem 1.2rem',
              borderRadius: '50px',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontWeight: '700',
              fontSize: '0.85rem',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              <Rocket size={16} /> L'ÉTAPE SUIVANTE
            </span>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem', color: 'white', lineHeight: 1.1 }}>
              Passez en mode <span style={{ color: '#FDEF42' }}>Pilote Automatique</span> avec l'Abonnement PRO
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.95)', marginBottom: '1.5rem', fontSize: '1.25rem', lineHeight: 1.6 }}>
              Ne perdez plus de temps avec les limites des outils gratuits. L'abonnement <strong>SUNU DIGITAL PRO</strong> vous donne l'arsenal complet pour générer jusqu'à 100 vidéos virales par jour sans effort. Nous configurons les outils pour vous, vous récoltez les résultats.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Zap size={32} /> <span>100 vidéos/jour</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Globe size={32} /> <span>Multi-plateformes</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Award size={32} /> <span>Qualité Premium</span>
              </div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.25)', borderRadius: '20px', padding: '2rem', marginBottom: '2.5rem', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', textDecoration: 'line-through', marginBottom: '0.3rem' }}>Prix normal : 25 000F/mois</p>
              <p style={{ fontSize: '3.5rem', fontWeight: 900, color: '#FDEF42', lineHeight: 1, marginBottom: '0.3rem' }}>4 500F<span style={{ fontSize: '1.2rem', fontWeight: 600 }}>/mois</span></p>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem' }}>🔥 Offre de lancement — <strong>Économisez 20 500F chaque mois</strong></p>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary btn-pulse" style={{ background: 'white', color: 'var(--senegal-red)', fontSize: '1.4rem', textDecoration: 'none', padding: '1.5rem 3.5rem' }} onClick={() => trackWhatsAppClick('offer_pro')}>
              <Zap size={24} fill="var(--senegal-red)" /> Oui, Je Veux l'Accès PRO à 4 500F !
            </a>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '1rem' }}>⚡ Accès instantané après paiement · Satisfaction garantie</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '4rem 0', borderTop: '1px solid rgba(0,0,0,0.1)', marginTop: '4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="gradient-text" style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 900 }}>SUNU DIGITAL</p>
          <p style={{ fontSize: '1rem' }}>&copy; 2026 SUNU DIGITAL - L'IA au service de votre créativité.</p>
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="/politique" style={{ textDecoration: 'none' }}>Politique de confidentialité</a>
            <a href="/cgv" style={{ textDecoration: 'none' }}>Conditions d'utilisation (CGV)</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Contact Direct</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-float" onClick={() => trackWhatsAppClick('floating_button')}>
        <MessageCircle size={24} /> <span>PRO — 4 500F/mois</span>
      </a>
    </div>
  );
}
