
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">
          kayla<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="nav-button"
          href="https://github.com/Kayla2519"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              COMPUTER SCIENCE GRADUATE
            </div>

            <p className="eyebrow">HELLO, I'M KAYLA</p>

            <h1>
              I build digital
              <br />
              worlds &amp; <span>experiences.</span>
            </h1>

            <p className="hero-description">
              I'm a computer science graduate specializing in game
              development, with a passion for creating interactive
              experiences and exploring the possibilities of AI.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span>↗</span>
              </a>

              <a className="button button-secondary" href="#contact">
                Get in touch
              </a>

              <a
                className="button button-secondary"
                href="/documents/Kayla-Resume.pdf"
                download="Kayla-Resume.pdf"
              >
                Download Resume ↓
              </a>
            </div>
  
            <div className="hero-skills">
              <span>UNITY</span>
              <span>C#</span>
              <span>PYTHON</span>
              <span>REACT</span>
              <span>AI / ML</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />

            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="visual-card">
              <div className="card-top">
                <span className="card-dot" />
                <span>CREATIVE MODE</span>
                <span>01 / 03</span>
              </div>

              <div className="visual-symbol">✳</div>

              <p className="visual-label">CURIOSITY → CREATION</p>
              <h2>Ideas into<br />interactive worlds.</h2>

              <div className="card-bottom">
                <span>GAME DEV</span>
                <span>SOFTWARE</span>
                <span>AI</span>
              </div>
            </div>

            <div className="floating-tag tag-top">
              <span>✦</span> Creative problem solver
            </div>

            <div className="floating-tag tag-bottom">
              <span>⌘</span> Built with curiosity
            </div>
          </div>

          <a className="scroll-cue" href="#projects">
            <span className="scroll-line" />
            SCROLL TO EXPLORE
          </a>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A LITTLE OF WHAT I DO</p>
              <h2>Featured <span>work.</span></h2>
            </div>

            <p className="section-note">
              Games, experiments, and ideas brought to life through code.
            </p>
          </div>

          <div className="project-grid">
            <article className="project-card rebirth-card">
              <a
                href="https://kayla2519.itch.io/project-rebirth"
                target="_blank"
                rel="noopener noreferrer"
                className="project-art rebirth-image-link"
                aria-label="Play Project Rebirth on itch.io"
              >
                <img
                  src="/images/project-rebirth/rebirth-cover.png"
                  alt="Gameplay screenshot from Project Rebirth, a first-person sci-fi escape-room game"
                  className="rebirth-cover-image"
                />
                <span className="art-number">01</span>
                <span className="art-caption">A STORY ABOUT HUMANITY</span>
                <span className="rebirth-play">PLAY GAME ↗</span>
              </a>

              <div className="project-info">
                <div className="project-meta">
                  <span>GAME DEVELOPMENT</span>
                  <span>UNITY · C#</span>
                </div>

                <h3>Project Rebirth</h3>

                <p>
                  A solo-developed first-person sci-fi escape-room game built
                  in Unity using C#. Wake up in a mysterious laboratory with
                  no memories and uncover the truth about humanity through
                  environmental puzzles, exploration, and story-driven choices.
                  Three different endings let players decide the fate of humanity.
                </p>

                <a
                  href="https://kayla2519.itch.io/project-rebirth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Play the game <span>↗</span>
                </a>
              </div>
            </article>

            <article className="project-card ai-card">
              <a
                href="https://colab.research.google.com/drive/1QFAjd0-MWh3wzGuuRt80AJ4YbYxOUd99?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="project-art ai-project-link"
                aria-label="Open AI Fall Detection project in Google Colab"
              >
                <span className="art-number">02</span>
                <div className="sound-wave">
                  {Array.from({ length: 25 }, (_, index) => (
                    <span
                      key={index}
                      style={{
                        height: `${18 + ((index * 37 + 13) % 65)}px`,
                      }}
                    />
                  ))}
                </div>
                <span className="art-caption">SOUND · SIGNAL · INSIGHT</span>
                <span className="rebirth-play">VIEW NOTEBOOK ↗</span>
              </a>

              <div className="project-info">
                <div className="project-meta">
                  <span>MACHINE LEARNING</span>
                  <span>PYTHON · MFCC</span>
                </div>

                <h3>AI Fall Detection</h3>

                <p>
                  An audio classification project exploring how machine learning
                  can distinguish falls from everyday sounds, including loud
                  noises like door slams.
                </p>

                <div className="ai-results">
                  <div>
                    <strong>0.968</strong>
                    <span>Logistic model F1 · clean audio</span>
                  </div>
                  <div>
                    <strong>0.942</strong>
                    <span>Ridge model F1 · noisy audio</span>
                  </div>
                </div>

                <div className="ai-notebook-links">
                <a
                  href="https://colab.research.google.com/drive/1QFAjd0-MWh3wzGuuRt80AJ4YbYxOUd99?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Clean audio notebook ↗
                </a>

                <a
                  href="https://colab.research.google.com/drive/1CJbVYXiG0W67mZms1FvebB6YL6ZVJFdd?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Noisy audio notebook ↗
                </a>

                <a
                  className="project-link"
                  href="https://github.com/Kayla2519/ai-fall-detection"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub ↗
                </a>
              </div>
              </div>
            </article>
          </div>
        </section>

        <section className="rebirth-gallery" id="rebirth-gallery">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A CLOSER LOOK</p>
              <h2>Inside Project <span>Rebirth.</span></h2>
            </div>
            <p className="section-note">
              A few snapshots of the environments, puzzles, and atmosphere
              from my solo-developed Unity game.
            </p>
          </div>

          <div className="rebirth-gallery-grid">
            <img
              src="/images/project-rebirth/gameplay-1.png"
              alt="Project Rebirth gameplay screenshot 1"
              loading="lazy"
            />
            <img
              src="/images/project-rebirth/gameplay-2.png"
              alt="Project Rebirth gameplay screenshot 2"
              loading="lazy"
            />
            <img
              src="/images/project-rebirth/gameplay-3.png"
              alt="Project Rebirth gameplay screenshot 3"
              loading="lazy"
            />
            <img
              src="/images/project-rebirth/gameplay-4.png"
              alt="Project Rebirth gameplay screenshot 4"
              loading="lazy"
            />
          </div>
        </section>

        <section className="gameplay-section" id="gameplay">
          <div className="section-heading">
            <div>
              <p className="eyebrow">STEP INSIDE THE GAME</p>
              <h2>Gameplay <span>showcase.</span></h2>
            </div>

            <p className="section-note">
              A closer look at Project Rebirth, from its environments
              to its puzzles and story.
            </p>
          </div>

          <div className="gameplay-grid">
            <article className="gameplay-video">
              <iframe
                src="https://drive.google.com/file/d/1UptIGm-rip96i9kXR53dQz4bTn2OaO_H/preview"
                title="Project Rebirth gameplay video 1"
                allow="autoplay"
                allowFullScreen
              />
              <h3>Gameplay Showcase 01</h3>
            </article>

            <article className="gameplay-video">
              <iframe
                src="https://drive.google.com/file/d/1Kxlyhfo5BKoayC4Z0HRfaEAF05CnZcDr/preview"
                title="Project Rebirth gameplay video 2"
                allow="autoplay"
                allowFullScreen
              />
              <h3>Gameplay Showcase 02</h3>
            </article>

            <article className="gameplay-video">
              <iframe
                src="https://drive.google.com/file/d/1Z9df2FCX2IAlBLTT6wI-iJ_Dh8rApDSx/preview"
                title="Project Rebirth gameplay video 3"
                allow="autoplay"
                allowFullScreen
              />
              <h3>Gameplay Showcase 03</h3>
            </article>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT I WORK WITH</p>
              <h2>My <span>toolkit.</span></h2>
            </div>
            <p className="section-note">
              Technologies and tools I've used to build games,
              software projects, and AI prototypes.
            </p>
          </div>

          <div className="skills-grid">
            <article className="skill-card">
              <div className="skill-icon">⌨</div>
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                <span>C#</span>
                <span>C++</span>
                <span>Python</span>
                <span>Java</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </article>

            <article className="skill-card">
              <div className="skill-icon">🎮</div>
              <h3>Game Development</h3>
              <div className="skill-tags">
                <span>Unity</span>
                <span>Game Mechanics</span>
                <span>Gameplay Programming</span>
                <span>Level Design</span>
                <span>Object-Oriented Programming</span>
              </div>
            </article>

            <article className="skill-card">
              <div className="skill-icon">✦</div>
              <h3>AI & Data</h3>
              <div className="skill-tags">
                <span>Machine Learning</span>
                <span>Audio Classification</span>
                <span>MFCC Features</span>
                <span>Model Evaluation</span>
                <span>Google Colab</span>
              </div>
            </article>

            <article className="skill-card">
              <div className="skill-icon">⚙</div>
              <h3>Tools & Frameworks</h3>
              <div className="skill-tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>React</span>
                <span>TypeScript</span>
                <span>Vue</span>
                <span>Angular</span>
                <span>VS Code</span>
              </div>
            </article>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MY JOURNEY SO FAR</p>
              <h2>Work <span>experience.</span></h2>
            </div>
            <p className="section-note">
              Building professional skills through administrative,
              technical, and customer-facing roles.
            </p>
          </div>

          <div className="experience-list">
            <article className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>Program Assistant</h3>
                  <p className="experience-company">
                    Immigration, Refugees and Citizenship Canada (IRCC)
                  </p>
                </div>
                <span className="experience-date">Jun – Oct 2026</span>
              </div>
              <ul>
                <li>
                  Reviewed citizenship applications to verify required
                  information and supporting documents were complete.
                </li>
                <li>
                  Identified missing or incorrect information and returned
                  applications for correction.
                </li>
                <li>
                  Processed application data and digitized records while
                  maintaining accuracy, confidentiality, and attention
                  to detail.
                </li>
              </ul>
            </article>

            <article className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>Summer Student</h3>
                  <p className="experience-company">
                    Immigration, Refugees and Citizenship Canada (IRCC)
                  </p>
                </div>
                <span className="experience-date">2023 & 2024</span>
              </div>
              <ul>
                <li>
                  Processed high volumes of administrative tasks and
                  supported accurate document handling.
                </li>
                <li>
                  Assisted with data entry and records management while
                  handling confidential information.
                </li>
              </ul>
            </article>

            <article className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>Crew Member</h3>
                  <p className="experience-company">Dairy Queen</p>
                </div>
                <span className="experience-date">2020 – 2022</span>
              </div>
              <ul>
                <li>
                  Delivered efficient customer service and handled
                  transactions and orders in a fast-paced environment.
                </li>
                <li>
                  Developed teamwork, communication, and multitasking
                  skills during busy shifts.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="about-section" id="about">
          <p className="eyebrow">BEHIND THE CODE</p>
          <h2>
            Part developer.<br />
            Part storyteller.<br />
            <span>Always curious.</span>
          </h2>
          <p>
            I'm a recent Acadia University graduate with a Bachelor of
            Applied Computer Science, specializing in Game Development.
            I love combining technical problem-solving with creative
            ideas, whether I'm building games in Unity, exploring AI,
            or bringing new ideas to life through code.
          </p>
          <p>
            I'm looking forward to starting my career in tech, learning
            from other developers, and contributing to projects that
            challenge me creatively and technically.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>Let's make something <span>meaningful.</span></h2>
          <p>I'm looking for opportunities to learn, build, and contribute.</p>
          <a
            className="button button-primary"
            href="mailto:kayla2519@icloud.com"
          >
            Say hello <span>↗</span>
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">kayla<span>.</span></a>
        <p>Designed &amp; built with curiosity.</p>
        <a href="https://github.com/Kayla2519" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </footer>
    </div>
  )
}

export default App
