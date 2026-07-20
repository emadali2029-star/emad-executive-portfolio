 import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* Header */}
      <header className="header">
        <div className="container nav">

          <div className="logo">
            Emad Abdelhamid Ali
          </div>

          <nav>
            <a href="#profile">Profile</a>
            <a href="#projects">Projects</a>
            <a href="#development">Development</a>
            <a href="#contact">Contact</a>
          </nav>

        </div>
      </header>


      {/* Hero Section */}
      <section className="hero-section">

        <div className="container">

          <p className="tag">
            PROJECT MANAGEMENT | CONSTRUCTION | CONTRACTS
          </p>

          <h1>
            Emad Abdelhamid Ali
          </h1>

          <h2>
            Project Manager | Construction Delivery & Contracts Specialist
          </h2>

          <p className="intro">
            Civil Engineer with 30+ years of experience delivering complex
            construction projects across Saudi Arabia, Egypt and UAE,
            specializing in project delivery, heritage restoration,
            contracts management, claims and close-out.
          </p>


          <div className="buttons">

            <a href="#projects" className="btn primary">
              View Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact
            </a>

          </div>

        </div>

      </section>



      {/* Executive Profile */}
      <section id="profile" className="section">

        <div className="container">

          <h2>
            Executive Profile
          </h2>

          <p>
            Civil Engineer and Project Manager with 30+ years of experience
            leading complex construction projects across Saudi Arabia, Egypt
            and UAE. Experienced in construction management, contractual
            administration, project controls, stakeholder coordination,
            FIDIC-based contracts, variations, claims, recovery planning
            and project handover.
          </p>

        </div>

      </section>




      {/* Career Highlights */}
      <section className="section dark">

        <div className="container">

          <h2>
            Career Highlights
          </h2>


          <div className="cards">


            <div className="card">

              <h3>
                30+ Years Experience
              </h3>

              <p>
                Managing construction projects across different sectors
                and international environments.
              </p>

            </div>



            <div className="card">

              <h3>
                Project Delivery
              </h3>

              <p>
                Leading projects from execution planning through completion,
                testing, commissioning and handover.
              </p>

            </div>



            <div className="card">

              <h3>
                Contracts & Claims
              </h3>

              <p>
                Experience in variations evaluation, EOT analysis,
                commercial documentation and dispute readiness.
              </p>

            </div>


          </div>

        </div>

      </section>





      {/* Projects */}
      <section id="projects" className="section">

        <div className="container">

          <h2>
            Selected Case Studies
          </h2>


          <div className="cards">


            <div className="card project">

              <h3>
                Heritage Buildings Complex in Diriyah
                <br />
                Heritage Restoration Project
              </h3>


              <p>
                Construction management involvement in heritage restoration
                works, coordination of technical submissions, contractual
                matters, progress recovery and handover activities.
              </p>


            </div>




            <div className="card project">

              <h3>
                Wadi Safar – Mazra’ah Experience Centre
              </h3>


              <p>
                Design and build project management covering coordination,
                execution planning, quality control and delivery requirements.
              </p>


            </div>


          </div>


        </div>

      </section>





      {/* AI Project */}
      <section className="section dark">

        <div className="container">

          <h2>
            SitePro AI Coach
          </h2>


          <p>
            An AI-powered field operating system concept designed to support
            fresh site engineers through structured execution knowledge,
            inspection workflows, productivity guidance and construction
            best practices.
          </p>


        </div>

      </section>





      {/* Professional Development */}
      <section id="development" className="section">

        <div className="container">

          <h2>
            Professional Development
          </h2>


          <ul className="list">

            <li>
              PMP – Project Management Professional
            </li>

            <li>
              FIDIC Contracts & Claims Development
            </li>

            <li>
              Primavera P6 Planning
            </li>

            <li>
              Site Management & Construction Leadership
            </li>

          </ul>


        </div>

      </section>





      {/* Contact */}
      <section id="contact" className="section contact">

        <div className="container">

          <h2>
            Contact
          </h2>


          <p>
            Available for project management, construction leadership,
            contracts and delivery-focused opportunities.
          </p>


        </div>

      </section>



    </div>
  )
}


export default App