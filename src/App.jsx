import React from 'react';
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  Github,
  Handshake,
  KeyRound,
  Mail,
  Network,
  Server,
  ShieldCheck,
  Users,
} from 'lucide-react';
import './App.css';

const navItems = [
  { href: '#problem', label: 'Le problème' },
  { href: '#response', label: 'Notre réponse' },
  { href: '#open-source', label: 'Open source' },
  { href: '#team', label: 'Équipe' },
  { href: '#contact', label: 'Contact' },
];

const problemSignals = [
  {
    title: "L'exposition croît silencieusement",
    copy: "Boîtes mail partagées, plateformes de dons, tableurs bénévoles et messageries terrain deviennent une infrastructure critique bien avant que quiconque ne les nomme ainsi.",
  },
  {
    title: "Les attaquants exploitent l'urgence",
    copy: "Le travail humanitaire va vite. Phishing, usurpation d'identité et prises de contrôle de comptes sont conçus pour frapper précisément quand les équipes sont à bout de ressources.",
  },
  {
    title: "La récupération vole du temps de mission",
    copy: "Un compte compromis peut bloquer des subventions, couper des lignes d'aide, exposer des personnes vulnérables et éloigner le personnel du travail que seul il peut accomplir.",
  },
];

const responsePillars = [
  {
    icon: ShieldCheck,
    title: 'Stabilisation rapide',
    copy: "Nous aidons les ONG à verrouiller les identités, récupérer les accès, préserver les preuves et prendre la prochaine décision avec un rythme d'incident serein.",
  },
  {
    icon: KeyRound,
    title: 'Renforcement pratique',
    copy: "Nous transformons les bases de la sécurité en habitudes reproductibles : clés d'accès, périmètres d'administration, hygiène des appareils, sauvegardes et contrôle des prestataires.",
  },
  {
    icon: Handshake,
    title: 'Accompagnement de confiance',
    copy: "Nous associons la réponse technique à des conseils en langage clair pour les conseils d'administration, les responsables de programme, les équipes finance et les coordinateurs terrain.",
  },
];

const infrastructure = [
  'Référentiels de sécurité adaptés aux petites structures ONG',
  "Formulaires d'incident protégeant les contextes sensibles",
  'Recettes de déploiement pour une collecte et un reporting sécurisés',
  'Modèles de politique réutilisables rédigés pour les non-spécialistes',
];

const maintainers = [
  {
    role: 'Responsable sécurité terrain',
    focus: "Triage des incidents, coordination des intervenants et planification de la protection pour les équipes sous pression.",
  },
  {
    role: 'Mainteneur infrastructure',
    focus: "Schémas de déploiement open source, paramètres sécurisés par défaut, disponibilité, sauvegardes et documentation qui résiste aux transitions.",
  },
  {
    role: 'Stratège numérique',
    focus: "Formation, gouvernance et décisions au niveau du conseil qui traduisent le risque technique en action opérationnelle.",
  },
  {
    role: 'Analyste communautaire',
    focus: "Suivi des schémas d'abus, escalade auprès des plateformes et alertes précoces pour les campagnes ciblant la société civile.",
  },
];

function handleContactSubmit(event) {
  event.preventDefault();

  const form = new FormData(event.currentTarget);
  const organization = form.get('organization') || 'Nouvelle demande ONG';
  const need = form.get('need') || "Nous avons besoin du soutien d'ONGarde.";
  const contact = form.get('contact') || 'Aucun contact de retour fourni.';

  const subject = encodeURIComponent(`ONGarde — demande : ${organization}`);
  const body = encodeURIComponent(
    `Organisation : ${organization}\nContact : ${contact}\n\nSituation :\n${need}`
  );

  window.location.href = `mailto:intake@ongarde.org?subject=${subject}&body=${body}`;
}

function App() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header" aria-label="Navigation ONGarde">
        <a className="brand" href="#top" aria-label="Accueil ONGarde">
          <span className="brand-mark" aria-hidden="true">O</span>
          <span>ONGarde</span>
        </a>

        <nav className="site-nav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-action" href="#contact" aria-label="Accéder au formulaire de contact">
          <Mail size={16} aria-hidden="true" />
          Contact
        </a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/ongarde/ngo-cyber-response.png"
            alt="Scène éditoriale en noir et blanc de répondants associatifs coordonnant un incident de cybersécurité"
          />
          <div className="hero-overlay" aria-hidden="true" />

          <div className="hero-content">
            <p className="eyebrow">Veiller sur ceux qui changent le monde.</p>
            <h1 id="hero-title">ONGarde</h1>
            <p className="hero-copy">
              Parce que les organisations éthiques, solidaires et engagées sont souvent les plus
              vulnérables face aux menaces numériques, ONGarde se tient à leurs côtés. Véritable
              vigile du cyberespace, notre collectif agit comme un bouclier pour protéger les
              structures à impact positif, afin qu'elles puissent se concentrer sur leur mission
              en toute sécurité.
            </p>
            <p className="hero-copy">
              Ancrés entre Lyon et notre filiale de Marseille, nous sommes animés par un esprit
              profond de communauté et d'entraide. Nous refusons de laisser la cybercriminalité
              freiner ceux qui œuvrent pour le bien commun. Nous sommes là pour faire bouger les
              choses, avec un impact réel et mesurable sur le terrain.
            </p>

            <div className="hero-actions" aria-label="Actions principales">
              <a className="button button-primary" href="#contact">
                <Mail size={18} aria-hidden="true" />
                Demander de l'aide
              </a>
              <a className="button button-secondary" href="#open-source">
                <Github size={18} aria-hidden="true" />
                Explorer les outils
              </a>
            </div>
          </div>

          <div className="hero-meta" aria-label="Domaines d'intervention ONGarde">
            <span>Support incidents</span>
            <span>Opérations sécurisées</span>
            <span>Outils open source</span>
          </div>
        </section>

        <section className="section" id="problem" aria-labelledby="problem-title">
          <div className="section-shell">
            <div className="section-intro">
              <div className="section-marker">
                <span>01</span>
                <p>Le problème</p>
              </div>
              <div>
                <h2 id="problem-title">
                  De petites équipes portent des risques d'entreprise avec des budgets associatifs.
                </h2>
                <p className="lead">
                  Les ONG deviennent souvent des cibles parce qu'elles détiennent des accès de
                  confiance, des témoignages sensibles, des données financières et des réseaux de
                  personnes exposées. Le danger est réel, mais les conseils de sécurité disponibles
                  sont trop souvent coûteux, abstraits ou rédigés pour des entreprises disposant
                  d'équipes sécurité à temps plein.
                </p>
              </div>
            </div>

            <div className="insight-grid">
              {problemSignals.map((signal) => (
                <article className="insight-card" key={signal.title}>
                  <Network size={24} aria-hidden="true" />
                  <h3>{signal.title}</h3>
                  <p>{signal.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark-band" id="response" aria-labelledby="response-title">
          <div className="section-shell">
            <div className="section-intro">
              <div className="section-marker">
                <span>02</span>
                <p>Notre réponse</p>
              </div>
              <div>
                <h2 id="response-title">
                  Nous rendons la protection opérationnelle au moment précis où elle est nécessaire.
                </h2>
                <p className="lead">
                  ONGarde combine réponse aux incidents, coaching sécurité et accompagnement à la
                  mise en œuvre. Nous travaillons aux côtés des équipes et des bénévoles, puis
                  laissons derrière nous les checklists, les configurations et la confiance pour
                  continuer.
                </p>
              </div>
            </div>

            <div className="response-grid">
              {responsePillars.map(({ icon: Icon, title, copy }) => (
                <article className="response-card" key={title}>
                  <Icon size={28} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="open-source" aria-labelledby="open-source-title">
          <div className="section-shell infra-layout">
            <div>
              <div className="section-marker">
                <span>03</span>
                <p>Infrastructure open source</p>
              </div>
              <h2 id="open-source-title">
                Un patrimoine de sécurité partagé pour les organisations qui ne peuvent pas attendre.
              </h2>
              <p className="lead">
                Nous publions les éléments reproductibles : guides de renforcement, workflows de
                réponse, schémas de collecte sécurisée et recettes de supervision légères. Chaque
                composant est conçu pour être inspecté, forké et déployé par des équipes à
                ressources limitées.
              </p>

              <ul className="check-list">
                {infrastructure.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={19} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="code-panel" aria-label="Exemple de stack open source">
              <div className="code-panel-bar">
                <span />
                <span />
                <span />
              </div>
              <pre>
{`ongarde-kit/
  identity/
    passkey-rollout.md
    admin-review.yml
  incident/
    first-hour.md
    evidence-log.csv
  infrastructure/
    backup-checks.ts
    intake-worker.ts
  governance/
    board-brief.md`}
              </pre>
            </div>
          </div>
        </section>

        <section className="section team-band" id="team" aria-labelledby="team-title">
          <div className="section-shell">
            <div className="section-intro">
              <div className="section-marker">
                <span>04</span>
                <p>Équipe</p>
              </div>
              <div>
                <h2 id="team-title">
                  Une équipe de réponse resserrée, fondée sur la confiance et la continuité.
                </h2>
                <p className="lead">
                  ONGarde réunit des ingénieurs sécurité, des opérateurs de la société civile, des
                  formateurs et des mainteneurs. Nous sommes intentionnellement petits, pour que
                  chaque intervention ait du contexte, de la responsabilité et un chemin nommé du
                  premier appel au suivi.
                </p>
              </div>
            </div>

            <div className="team-grid">
              {maintainers.map((member) => (
                <article className="team-card" key={member.role}>
                  <Users size={24} aria-hidden="true" />
                  <h3>{member.role}</h3>
                  <p>{member.focus}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-layout">
            <div>
              <div className="section-marker">
                <span>05</span>
                <p>Contact</p>
              </div>
              <h2 id="contact-title">Décrivez la situation. Nous vous aiderons à trouver la prochaine étape.</h2>
              <p className="lead">
                Pour les incidents urgents, ne partagez que ce qui est sûr d'envoyer par e-mail.
                Nous pourrons basculer vers un canal plus sécurisé après le premier échange.
              </p>

              <div className="contact-methods" aria-label="Moyens de contact">
                <a href="mailto:intake@ongarde.org">
                  <Mail size={20} aria-hidden="true" />
                  intake@ongarde.org
                </a>
                <a href="#open-source">
                  <Braces size={20} aria-hidden="true" />
                  Kit open source
                </a>
                <a href="#response">
                  <Server size={20} aria-hidden="true" />
                  Préparation aux incidents
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label>
                Organisation
                <input name="organization" type="text" placeholder="Réseau d'entraide local" />
              </label>
              <label>
                Votre contact
                <input name="contact" type="text" placeholder="Nom, e-mail ou canal sécurisé" />
              </label>
              <label>
                Que se passe-t-il ?
                <textarea
                  name="need"
                  rows="5"
                  placeholder="Un résumé court et non sensible suffit."
                />
              </label>
              <button className="button button-primary" type="submit">
                <ArrowRight size={18} aria-hidden="true" />
                Envoyer par e-mail
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>ONGarde</p>
        <p>Cybersécurité open source au service des ONG.</p>
      </footer>
    </div>
  );
}

export default App;
