import { useMemo, useState } from 'react'

const templateIdeas = [
  {
    id: 1,
    title: 'Campagne de vente rapide',
    summary: 'Hook fort, preuve sociale, cta clair',
    color: 'violet'
  },
  {
    id: 2,
    title: 'Storytelling brand',
    summary: 'Narration émotionnelle et identité visuelle',
    color: 'blue'
  },
  {
    id: 3,
    title: 'Promo produit',
    summary: 'Avant / pendant / après + démonstration',
    color: 'amber'
  },
  {
    id: 4,
    title: 'Vision de marque',
    summary: 'Contenu premium pour attirer les clients',
    color: 'green'
  }
]

const defaultStoryboard = [
  {
    time: '00:00 - 00:04',
    scene: 'Ouverture hook',
    visuals: 'Plan large, lumière premium, texte sur fond noir'
  },
  {
    time: '00:04 - 00:12',
    scene: 'Présentation du problème',
    visuals: 'Montage rapide, visuel de transformation'
  },
  {
    time: '00:12 - 00:18',
    scene: 'Preuve / résultat',
    visuals: 'Avant / après, chiffres et testimony'
  },
  {
    time: '00:18 - 00:25',
    scene: 'Appel à l’action',
    visuals: 'CTA visible, bouton, logo, mention de marque'
  }
]

function App() {
  const [prompt, setPrompt] = useState(
    'Je veux une vidéo marketing premium pour promouvoir un service digital qui aide les entrepreneurs à vendre plus grâce à des contenus sociaux et des stratégies de conversion.'
  )
  const [platform, setPlatform] = useState('Reels / Shorts')
  const [style, setStyle] = useState('Premium dark')
  const [tone, setTone] = useState('Convaincant & confident')
  const [duration, setDuration] = useState('30 seconds')
  const [storyboard, setStoryboard] = useState(defaultStoryboard)
  const [status, setStatus] = useState('Prêt à générer')

  const activeTemplate = useMemo(() => {
    return templateIdeas[0]
  }, [])

  const handleGenerate = () => {
    const generatedScript = [
      'Hook : "Les bons contenus ne sont pas une suite de vidéos, c’est une machine à attirer des clients."',
      'Présentation : "On te montre comment transformer ton message en contenu clair, crédible et rentable."',
      'Preuve : "Résultat : plus de visibilité, plus de confiance, plus de demandes."',
      'CTA : "Clique ici pour transformer ton marketing digital et créer ton propre système de vente."'
    ]

    const generatedStoryboard = [
      {
        time: '00:00 - 00:05',
        scene: 'Hook impact',
        visuals: 'Texte sur fond noir + image de business premium'
      },
      {
        time: '00:05 - 00:11',
        scene: 'Problème / douleur',
        visuals: 'Plan serré sur l’écran, visuel moderne, transitions rapides'
      },
      {
        time: '00:11 - 00:18',
        scene: 'Solution',
        visuals: 'Démonstration des étapes du système + éléments visuels de croissance'
      },
      {
        time: '00:18 - 00:30',
        scene: 'CTA & conversion',
        visuals: 'Logo Bilel, bouton demander le devis, anglais/français selon audience'
      }
    ]

    setStoryboard(generatedStoryboard)
    setStatus('Vidéo générée avec succès')
  }

  const handleExport = () => {
    setStatus('Export ajouté à la file de rendu')
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">B</div>
          <div>
            <p className="brand-label">Studio</p>
            <h1>Bilel AI</h1>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-item active">Dashboard</button>
          <button className="nav-item">Nouveau projet</button>
          <button className="nav-item">Scripts</button>
          <button className="nav-item">Storyboard</button>
          <button className="nav-item">Voix off</button>
          <button className="nav-item">Export</button>
        </nav>

        <div className="mini-card">
          <span className="mini-card-label">Projet actif</span>
          <strong>{activeTemplate.title}</strong>
          <p>{activeTemplate.summary}</p>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Nouveau contenu</p>
            <h2>Créer une vidéo marketing AI</h2>
          </div>
          <button className="primary-button" onClick={handleGenerate}>Générer</button>
        </header>

        <section className="hero-grid">
          <div className="editor-card">
            <div className="field-group">
              <label>Idée de la vidéo</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={6}
              />
            </div>

            <div className="settings-grid">
              <div className="field-group compact">
                <label>Plateforme</label>
                <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
                  <option>Reels / Shorts</option>
                  <option>Instagram Stories</option>
                  <option>YouTube</option>
                  <option>Publicité Facebook</option>
                </select>
              </div>

              <div className="field-group compact">
                <label>Style visuel</label>
                <select value={style} onChange={(e) => setStyle(e.target.value)}>
                  <option>Premium dark</option>
                  <option>Minimal luxe</option>
                  <option>Bright marketing</option>
                  <option>Luxury business</option>
                </select>
              </div>

              <div className="field-group compact">
                <label>Ton</label>
                <select value={tone} onChange={(e) => setTone(e.target.value)}>
                  <option>Convaincant & confident</option>
                  <option>Émotionnel & inspirant</option>
                  <option>Technique & autoritaire</option>
                  <option>Chaleureux & premium</option>
                </select>
              </div>

              <div className="field-group compact">
                <label>Durée</label>
                <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                  <option>30 seconds</option>
                  <option>15 seconds</option>
                  <option>45 seconds</option>
                  <option>60 seconds</option>
                </select>
              </div>
            </div>
          </div>

          <div className="preview-card">
            <div className="preview-header">
              <span className="live-dot" />
              <span>Prévisualisation</span>
            </div>

            <div className="video-window">
              <div className="video-overlay">
                <span className="tag">{platform}</span>
                <h3>Machine à attirer les clients</h3>
                <p>{style} • {tone}</p>
              </div>
            </div>

            <div className="output-bar">
              <div>
                <span className="mini-label">Statut</span>
                <strong>{status}</strong>
              </div>
              <button className="secondary-button" onClick={handleExport}>Exporter</button>
            </div>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel-card">
            <div className="panel-header">
              <h3>Script IA</h3>
              <span className="chip">Marketing</span>
            </div>
            <ul className="script-list">
              <li>Hook : « Les bons contenus ne sont pas une suite d’images, ce sont des ventes qui se construisent. »</li>
              <li>Présentation : « On aide les entrepreneurs à présenter leur offre avec une vraie logique de conversion. »</li>
              <li>Preuve : « Clarté, crédibilité, confiance et action. »</li>
              <li>CTA : « Dites-moi votre objectif et on construit le plan. »</li>
            </ul>
          </div>

          <div className="panel-card">
            <div className="panel-header">
              <h3>Storyboard</h3>
              <span className="chip">4 scènes</span>
            </div>
            <div className="storyboard-list">
              {storyboard.map((item) => (
                <div key={item.scene} className="story-item">
                  <span className="time">{item.time}</span>
                  <div>
                    <strong>{item.scene}</strong>
                    <p>{item.visuals}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="templates-grid">
          {templateIdeas.map((idea) => (
            <div key={idea.id} className={`template-card ${idea.color}`}>
              <span className="template-tag">Template</span>
              <h4>{idea.title}</h4>
              <p>{idea.summary}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
