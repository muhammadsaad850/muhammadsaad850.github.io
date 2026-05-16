import './Experience.css';

function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-cards">
        <div className="exp-card">
          <p className="exp-company">DISTek Integration</p>
          <p className="exp-role">Software Engineer (E2) &amp; Team Lead</p>
          <p className="exp-period">2021 – Present</p>

          <div className="exp-project">
            <p className="exp-project-title">End-of-Line HIL Testing System (Vermeer)</p>
            <ul className="exp-bullets">
              <li>
                <strong>Requirement Gathering:</strong> Formulated a comprehensive high-level design
                and implementation plan with a projected timeline.
              </li>
              <li>
                <strong>Development:</strong> Designed, developed, tested, and released a
                Windows-based interactive Python UI application with ongoing support.
              </li>
              <li>
                <strong>Firmware Development:</strong> Created and deployed firmware solutions for
                Vermeer&apos;s custom hardware; developed Embedded C applications integrated with
                the Windows backend.
              </li>
              <li>
                <strong>Documentation &amp; Collaboration:</strong> Ensured high-quality
                documentation for internal teams and external end-users; actively participated in
                technical design plans, code reviews, and deployment planning.
              </li>
              <li>
                <strong>Support:</strong> Facilitated seamless processor transitions by analyzing
                requirements and implementing hardware modifications to ensure optimal performance.
              </li>
            </ul>
            <p className="exp-stack"><strong>Stack:</strong> C, Python 3.10, Tkinter, PyInstaller, Git</p>
          </div>

          <div className="exp-project">
            <p className="exp-project-title">Distributed Build Artifact Management System (Vermeer)</p>
            <ul className="exp-bullets">
              <li>
                <strong>API Development:</strong> Designed and developed a Flask REST API supporting
                blob operations (list, download single, download zipped containers), JWT
                authentication, and PostgreSQL table operations.
              </li>
              <li>
                <strong>Architecture Design:</strong> Architected a cloud-based distributed solution
                with Azure Blob Storage, PostgreSQL database, and an API Gateway to Azure resources.
              </li>
              <li>
                <strong>Electron App Development:</strong> Built the landing page and sidebar menu
                in Electron using HTML, CSS, and JavaScript; implemented a PKCE flow for JWT.
              </li>
              <li>
                <strong>Resource Procurement:</strong> Collaborated with platform teams to procure
                cloud resources including storage accounts, databases, and API hosting in Kubernetes.
              </li>
              <li>
                <strong>Team Collaboration &amp; Mentorship:</strong> Guided a fellow developer
                during planning and development; conducted code reviews and enforced best practices.
              </li>
              <li>
                <strong>Database Management:</strong> Designed table schemas, created tables with
                Flyway migrations, and populated tables with data.
              </li>
            </ul>
            <p className="exp-stack">
              <strong>Stack:</strong> Python, Flask, Docker, Electron, HTML, CSS, JavaScript,
              Azure Services (Blob, PostgreSQL, Key Vault, AppServices)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
