import './App.css';
import './Übermich.jsx'

function App() {
  return (
    <div className="main-content">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>Emanuel Crisan Portfolio</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#about">Über mich</a></li>
            <li><a href="#projects">Projekte</a></li>
            <li><a href="#contact">Kontakt</a></li>
            <li><a href="#more-info" className="btn-header">Mehr erfahren</a></li> {/* Neuer Button */}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          {/* Name über dem Bild */}
          <div className="name"></div>
          <img src="./assets/Bild_2.jpg" alt="" className="round-image" />
          <h2>Willkommen in meinem Portfolio</h2>
          <p>Hochmotivierter Webentwickler mit Fokus auf React und moderne Technologien.</p>
          <a href="#projects" className="btn">Meine Projekte ansehen</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>Über mich</h2>
        <p>
          Ich bin ein leidenschaftlicher Entwickler mit Erfahrung in der Erstellung von modernen und reaktionsfähigen Webanwendungen.
          Mein Fokus liegt auf sauberem und performantem Code.
        </p>
      </section>

      {/* Zertifikate Section */}
      <section id="certificates" className="certificates">
        <h2>Meine Zertifikate & Projekte</h2>
        <div className="certificate-grid">
          <div className="certificate-card">
            <h3>Zertifikate</h3>
            <p>Beschreibung über meine Zertifikate.</p>
            <a href="#" className="btn">Mehr erfahren</a>
          </div>
          <div className="certificate-card">
            <h3>Meine Projekte</h3>
            <p>Unter diesem Button finden Sie weitere Informationen über meine spannenden Projekte.</p>
            <a href="#" className="btn">Mehr erfahren</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Kontakt</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Dein Name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Deine Email" />
          <label htmlFor="message">Nachricht:</label>
          <textarea id="message" placeholder="Deine Nachricht"></textarea>
          <button type="submit">Senden</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Mein Portfolio. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

export default App;
