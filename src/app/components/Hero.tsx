const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export function Hero() {
  return (
  <section id="home" className="bg-[var(--gray-light)] py-24 md:py-32">
    <div className="mx-auto px-4" style={{ width: '90%', maxWidth: '1200px' }}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <p className="text-base text-[var(--black-dark)] mb-4">
            Hey, I am Rahma
          </p>
  
          <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', fontWeight: 'bold', color: 'var(--green-dark)' }}>
            Turning Health Data <br />
            into <span style={{ color: 'var(--green-light)' }}>Usable</span> and <span style={{ color: 'var(--green-light)' }}>Ethical</span> Solutions.
          </h1>
  
          <p className="text-base text-[var(--black-dark)] mt-6 mb-8">
            Biomedical informatics and digital health professional focused on transforming complex health data, consent, and system design challenges into practical solutions. I combine research, product thinking, and policy analysis to support more responsible and user-centered health technologies.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-[var(--green-light)] text-white rounded-md hover:bg-[var(--green-dark)] transition-colors inline-block text-center"
                style={{ fontWeight: 'bold', fontSize: '0.75rem' }}
              >
                Get in Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1SFRe_bzkd5Es13OuETc4A44bJ1_rycgW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-[var(--green-light)] text-[var(--green-light)] bg-transparent rounded-md hover:bg-[var(--green-dark)] hover:text-white hover:border-[var(--green-dark)] transition-colors inline-block text-center"
                style={{ fontWeight: 'bold', fontSize: '0.75rem' }}
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="rounded-full overflow-hidden" style={{ width: '280px', height: '280px', border: '4px solid var(--green-light)' }}>
              <img
                src={assetPath('images/rahma-photo.png')}
                alt="Rahma Alifia"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.style.backgroundColor = 'var(--gray-light)';
                  target.parentElement!.style.display = 'flex';
                  target.parentElement!.style.alignItems = 'center';
                  target.parentElement!.style.justifyContent = 'center';
                  target.parentElement!.innerHTML = '<div style="font-size: 4rem; font-weight: bold; color: var(--green-light)">RA</div>';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
