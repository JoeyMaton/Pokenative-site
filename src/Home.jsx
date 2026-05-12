export default function App() {
  return (
    <div>
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="pokeball-bg">
          <div className="ball ball1"></div>
          <div className="ball ball2"></div>
          <div className="ball ball3"></div>
          <div className="ball ball4"></div>
        </div>
        <div className="gradient-overlay"></div>

        <div className="content">
          <div className="logo-wrapper">
            <img src="/public/image.png" alt="Pokédex" className="logo" />
          </div>

          <img src="/pokenative.png"/>

          <p className="desc">
            Découvrez tous les Pokémon de la première génération dans une seule
            application. Explorez, recherchez et devenez un expert Pokémon !
          </p>

          <div className="buttons">
            <a
              href="https://github.com/JoeyMaton/Pokenative-app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white"
            >
              <img src="/public/icons/github.svg" alt="" className="btn-icon" />
              Voir le code
            </a>

            <a
              href="https://github.com/JoeyMaton/Pokenative-app/releases/download/v1.0.0/Pokenative-v1.0.0.apk"
              download
              className="btn btn-green"
            >
              <img
                src="/public/icons/download.svg"
                alt=""
                className="btn-icon"
              />
              Télécharger APK
            </a>
          </div>

          <p className="version">Version 1.0.0 • Compatible Android 6.0+</p>
        </div>

        <div className="scroll-down">
          <div className="scroll-circle">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="content">
          <h2 className="section-title">Fonctionnalités</h2>

          <div className="features-grid">
            <div className="card card-blue">
              <div className="icon icon-blue">
                <img src="/public/icons/search.svg" alt="Search" />
              </div>
              <h3>Recherche rapide</h3>
              <p>
                Trouvez n'importe quel Pokémon par nom ou numéro en quelques
                secondes.
              </p>
            </div>

            <div className="card card-purple">
              <div className="icon icon-purple">
                <img src="/public/icons/lightning.svg" alt="Lightning" />
              </div>
              <h3>Statistiques détaillées</h3>
              <p>
                Consultez toutes les stats, capacités et évolutions de chaque
                Pokémon.
              </p>
            </div>

            <div className="card card-pink">
              <div className="icon icon-pink">
                <img src="/public/icons/shield.svg" alt="Shield" />
              </div>
              <h3>Données complètes</h3>
              <p>
                Accédez à toutes les informations officielles des Pokémon en temps réel via une base de données toujours à jour.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="screenshots">
        <div className="content">
          <h2 className="section-title">Captures d'écran</h2>

          <div className="screens-grid">
            <div className="screen-img">
              <img
                src="/public/index.png"
                alt="App screenshot 1"
                loading="lazy"
              />
            </div>

            <div className="screen">
              <video autoPlay loop muted playsInline preload="metadata">
                <source src="/public/demo-app.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="screen-img">
              <img src="/public/id.png" alt="App screenshot 2" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-bg"></div>

        <div className="content">
          <h2>Prêt à devenir un Maître Pokémon ?</h2>
          <p>
            Téléchargez l'application dès maintenant et commencez votre aventure
            !
          </p>

          <a
            href="https://github.com/JoeyMaton/Pokenative-app/releases/download/v1.0.0/Pokenative-v1.0.0.apk"
            download
            className="btn btn-white btn-large"
          >
            <img
              src="/public/icons/download.svg"
              alt=""
              style={{ width: "28px", height: "28px" }}
            />
            Télécharger maintenant
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <p className="footer-text">
            © 2026 Pokédex App • Fait en France
          </p>
          <div className="social">
            <a
              href="https://github.com/JoeyMaton/Pokenative-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/public/icons/github.svg" alt="GitHub" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
