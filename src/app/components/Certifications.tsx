const certifications = [
  {
    name: 'SAS Educator',
    url: 'https://www.credly.com/badges/c6bb32d5-e936-4b04-a79b-05429741e5e2'
  },
  {
    name: 'HL7 FHIR Fundamental Course',
    url: 'https://drive.google.com/file/d/1EHPNJ0D5RpMUwfhZxQBzD-wk_QsiZNWb/view'
  },
  {
    name: 'SNOMED CT Foundation Course',
    url: 'https://drive.google.com/file/d/1aUHlalu7sMt4rrOMRUPkYvEP9n7tjnUM/view'
  },
  {
    name: 'Professional Scrum Master I · Scrum.org',
    url: 'https://www.credly.com/badges/9b4e62b2-0e3b-4603-aaad-8da0840d9fc1'
  },
  {
    name: 'Project Management · Coursera & Google',
    url: 'https://coursera.org/share/6cc258e3a28dc6461e11811b586d424e'
  },
  {
    name: 'IRB Social & Behavioral Research · CITI',
    url: 'https://www.citiprogram.org/verify/?w1868a26a-8eb7-46d8-9489-1e9182b47612-64594892'
  },
  {
    name: 'IRB Biomedical Research · CITI',
    url: 'https://www.citiprogram.org/verify/?w7eaf6c7e-ce61-4732-9e2c-00f61aad451d-64594891'
  },
  {
    name: 'Basic Cybersecurity for Health Sector · Indonesia Ministry of Communication',
    url: 'https://drive.google.com/file/d/1KevtWBvpLqafhpl73TfeKQq4etFmTy8F/view'
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="bg-[var(--white)] py-12">
      <div className="mx-auto px-4" style={{ width: '90%', maxWidth: '1200px' }}>
        <div className="mb-8">
          <p className="text-sm font-semibold text-[var(--black-dark)] mb-2 uppercase tracking-wide">Certifications</p>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--green-dark)', marginBottom: '0.75rem' }}>
            Credentials & Training
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--gray-light)] text-[var(--black-dark)] px-4 py-2 rounded-md text-sm hover:bg-[var(--green-light)] hover:text-white transition-colors duration-200"
            >
              {cert.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
