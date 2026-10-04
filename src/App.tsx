import { FormEvent, useState } from "react"

const services = [
  {
    title: "Business and project consulting",
    paths: [
      "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
      "M22 21v-2a4 4 0 0 0-3-3.87",
      "M16 3.13a4 4 0 0 1 0 7.75",
    ],
  },
  {
    title: "Operational improvement",
    paths: [
      "M3 20h18",
      "M5 16v-4h3v4",
      "M11 16V9h3v7",
      "M17 16V5h3v11",
      "m5-8 4-4 3 3 6-6",
    ],
  },
  {
    title: "Business process optimisation",
    paths: [
      "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7",
      "M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21h-4v-.09A1.7 1.7 0 0 0 9 19.36a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.63 15a1.7 1.7 0 0 0-1.56-1.03H3v-4h.09A1.7 1.7 0 0 0 4.64 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.63a1.7 1.7 0 0 0 1.03-1.56V3h4v.09A1.7 1.7 0 0 0 15 4.64a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.37 9a1.7 1.7 0 0 0 1.56 1.03H21v4h-.09A1.7 1.7 0 0 0 19.4 15Z",
    ],
  },
  {
    title: "Cost and efficiency analysis",
    paths: [
      "M4 3v17h17",
      "M6 16l4-5 4 3 6-8",
    ],
  },
  {
    title: "Project planning and coordination",
    paths: [
      "M6 2v4",
      "M18 2v4",
      "M3 9h18",
      "M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
      "m8 15 2 2 4-5",
    ],
  },
  {
    title: "Management advisory",
    paths: [
      "M20 21a8 8 0 1 0-16 0",
      "M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
      "m16.5 16.5 1.5 1.5 3-3",
    ],
  },
  {
    title: "Strategic and operational problem-solving",
    paths: [
      "M9 18h6",
      "M10 22h4",
      "M8.2 14.5A7 7 0 1 1 15.8 14.5C14.7 15.3 14 16.4 14 18h-4c0-1.6-.7-2.7-1.8-3.5Z",
      "M12 2V0",
      "m4.95 3.05 1.42-1.42",
      "M19 8h2",
      "M5 8H3",
      "M7.05 3.05 5.63 1.63",
    ],
  },
  {
    title: "Other related professional consulting services",
    paths: [
      "M6 2h9l4 4v16H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z",
      "M14 2v5h5",
      "M8 12h8",
      "M8 16h8",
      "M8 8h2",
    ],
  },
]

const navigation = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Experience", "#experience"],
  ["About", "#about"],
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "")
    const email = String(data.get("email") ?? "")
    const message = String(data.get("message") ?? "")
    const subject = encodeURIComponent(`Consulting inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )

    window.location.href = `mailto:vtp.business.10@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <header>
        <div className="container nav">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            <strong>Patrik Tomažič s.p.</strong>
            <span>Business &amp; Project Consulting</span>
          </a>

          <button
            className="menu-btn"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 5l14 14M19 5 5 19" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>

          <nav
            id="primary-navigation"
            className={`nav-links${menuOpen ? " open" : ""}`}
            aria-label="Primary navigation"
          >
            {navigation.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="btn btn-primary"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Get in touch <span aria-hidden="true">→</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">Business &amp; Project Consulting</div>
            <h1>Practical solutions for real business challenges.</h1>
            <p className="lead">
              I provide independent business and project consulting services to
              companies, entrepreneurs, and other business clients. My work is
              focused on practical business improvements, project support,
              operational efficiency, and helping clients make better day-to-day
              business decisions.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Get in touch <span aria-hidden="true">→</span>
              </a>
              <a className="text-link" href="#services">
                Learn more
              </a>
            </div>
          </div>

          <div className="hero-art">
            <img
              src="https://images.unsplash.com/photo-1578388305758-1c9c98455bb0?auto=format&fit=crop&w=1600&q=82"
              alt="Bled Island and its church reflected in the calm lake beneath the mountains"
              fetchPriority="high"
            />
            <a
              className="photo-credit"
              href="https://unsplash.com/@benschr?utm_source=patrik_tomazic_consulting&utm_medium=referral"
              target="_blank"
              rel="noreferrer"
            >
              Photo by Ben Schr
            </a>

            <div className="hero-card">
              <div className="rule" />
              <p>
                Independent consulting support for businesses in Slovenia and
                beyond.
              </p>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">Services</div>
                <h2>Flexible consulting support for your business.</h2>
              </div>
              <p>I provide flexible consulting support in areas such as:</p>
            </div>

            <div className="service-grid">
              {services.map(({ paths, title }) => (
                <article className="service" key={title}>
                  <div className="service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      {paths.map((path) => (
                        <path d={path} key={path} />
                      ))}
                    </svg>
                  </div>
                  <h3>{title}</h3>
                </article>
              ))}
            </div>

            <p className="service-note">
              Services can be provided as one-off consulting sessions or as
              longer project-based cooperation.
            </p>
          </div>
        </section>

        <section className="split" id="experience">
          <div className="visual-panel">
            <img
              src="https://images.unsplash.com/photo-1591088761584-d3f8540fc587?auto=format&fit=crop&w=1400&q=82"
              alt="A sunlit workspace with a laptop, notebook, and green plant"
              loading="lazy"
            />
            <a
              className="photo-credit"
              href="https://unsplash.com/@mikeyharris?utm_source=patrik_tomazic_consulting&utm_medium=referral"
              target="_blank"
              rel="noreferrer"
            >
              Photo by Mikey Harris
            </a>
          </div>

          <div className="content-panel">
            <div className="eyebrow">Experience</div>
            <h2>Over ten years of practical experience.</h2>
            <p>
              My background combines over ten years of practical experience
              across manufacturing, carpentry, financial services, corporate
              onboarding, compliance processes, project coordination, and
              technology.
            </p>
            <p>
              This gives me a practical and analytical approach to solving
              business problems and improving day-to-day operations.
            </p>
          </div>
        </section>

        <section className="info-grid" id="about">
          <div className="info-visual">
            <img
              src="https://images.unsplash.com/photo-1470119793807-626ede8f855f?auto=format&fit=crop&w=1400&q=82"
              alt="A Slovenian alpine valley and river at sunset"
              loading="lazy"
            />
            <a
              className="photo-credit"
              href="https://unsplash.com/@aleskrivec?utm_source=patrik_tomazic_consulting&utm_medium=referral"
              target="_blank"
              rel="noreferrer"
            >
              Photo by Aleš Krivec
            </a>
          </div>

          <article className="info-box">
            <div className="eyebrow">Who I Work With</div>
            <h3>
              Small and medium-sized businesses, entrepreneurs and other
              clients.
            </h3>
            <p>
              I work with small and medium-sized businesses, entrepreneurs, and
              other clients who need independent support with business
              operations, projects, organisation, or decision-making.
            </p>
            <p>
              Services are provided on a flexible basis depending on the scope
              and requirements of each project.
            </p>
          </article>

          <article className="info-box">
            <div className="eyebrow">About</div>
            <h3>Independent consulting based in Slovenia.</h3>
            <p>
              I operate as an independent sole proprietor based in Slovenia. My
              goal is to provide practical, straightforward consulting focused
              on solutions that can actually be implemented in day-to-day
              business.
            </p>
          </article>
        </section>

        <section className="cta">
          <div className="container cta-inner">
            <div>
              <div className="eyebrow eyebrow-light">
                Let&apos;s work together
              </div>
              <h2>Have a business challenge worth discussing?</h2>
            </div>
            <div>
              <p>
                For consulting inquiries, project cooperation, or more
                information about my services, please get in touch.
              </p>
              <a className="btn btn-light" href="#contact">
                Contact me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="eyebrow">Contact</div>
              <h2>Let&apos;s discuss your project.</h2>
              <p>
                For consulting inquiries, project cooperation, or more
                information about my services, please contact me.
              </p>

              <div className="contact-list">
                <div>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:vtp.business.10@gmail.com">
                    vtp.business.10@gmail.com
                  </a>
                </div>
                <div>
                  <strong>Location:</strong> Slovenia
                </div>
                <div>
                  <strong>Business name:</strong> Patrik Tomažič s.p.
                </div>
              </div>
            </div>

            <form onSubmit={prepareEmail}>
              <label>
                Name
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </label>
              <label>
                Message
                <textarea name="message" required />
              </label>
              <button className="btn btn-primary" type="submit">
                Prepare email <span aria-hidden="true">→</span>
              </button>
              <p className="form-note">
                This form opens your email app with the message pre-filled. It
                does not send data to a server.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div>© {new Date().getFullYear()} Patrik Tomažič s.p.</div>
          <div>Business &amp; Project Consulting · Slovenia</div>
        </div>
      </footer>
    </>
  )
}
