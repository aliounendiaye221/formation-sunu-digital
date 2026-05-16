import React from 'react';

export default function PolitiquePage() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'inherit', color: 'var(--foreground)' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 900 }}>Politique de Confidentialité</h1>
      <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
        <strong>1. Collecte des données :</strong> Nous collectons des informations lorsque vous remplissez notre formulaire (adresse e-mail) ou lorsque vous nous contactez via WhatsApp (numéro de téléphone).
      </p>
      <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
        <strong>2. Utilisation des données :</strong> Les informations recueillies sont utilisées pour vous envoyer les ressources gratuites promises, vous informer sur nos offres (Abonnement PRO), et améliorer notre service client.
      </p>
      <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
        <strong>3. Protection des données :</strong> Nous mettons en œuvre des mesures de sécurité pour préserver la sécurité de vos informations personnelles. Seuls les employés qui ont besoin d'effectuer un travail spécifique (par exemple, la facturation ou le service client) ont accès aux informations personnelles identifiables.
      </p>
      <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
        <strong>4. Consentement :</strong> En utilisant notre site, vous consentez à notre politique de confidentialité.
      </p>
      <a href="/" style={{ color: 'var(--senegal-green)', fontWeight: 'bold', display: 'inline-block', marginTop: '2rem' }}>&larr; Retour à l'accueil</a>
    </div>
  );
}
