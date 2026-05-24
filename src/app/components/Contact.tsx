const contactLinks = [
  {
    label: 'Email',
    value: 'rahmaralifia@gmail.com',
    href: 'mailto:rahmaralifia@gmail.com'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rralifia',
    href: 'https://www.linkedin.com/in/rralifia'
  },
  {
    label: 'ORCID',
    value: '0009-0009-3462-1183',
    href: 'https://orcid.org/0009-0009-3462-1183'
  },
  {
    label: 'Substack',
    value: 'ralifia.substack.com',
    href: 'https://ralifia.substack.com/'
  }
];

export function Contact() {
  return (
    <section id="contact" className="bg-[var(--white)] py-12">
      <div className="mx-auto px-4" style={{ width: '90%', maxWidth: '1200px' }}>
        <div className="mb-8">
          <p className="text-sm font-semibold text-[var(--black-dark)] mb-2 uppercase tracking-wide">
            Contact
          </p>

          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: 'var(--green-dark)',
              marginBottom: '0.75rem'
            }}
          >
            Let’s Build Thoughtful Health Data Solutions
          </h2>

          <p className="text-base text-[var(--black-dark)] max-w-3xl">
            I enjoy working with teams that turn complex health data, policy, and product challenges
            into practical tools for better health systems. Reach out for collaborations, projects,
            or conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block bg-[var(--gray-light)] p-4 rounded-lg hover:shadow-sm transition-shadow"
              aria-label={`Contact Rahma through ${link.label}`}
            >
              <p className="text-sm font-semibold text-[var(--black-dark)] mb-1">
                {link.label}
              </p>
              <p className="text-sm text-[var(--green-light)] hover:text-[var(--green-dark)] hover:underline">
                {link.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}