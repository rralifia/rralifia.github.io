import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home',         anchor: 'home' },
  { label: 'Projects',     anchor: 'portfolio' },
  { label: 'Experience',         anchor: 'experience' },
  { label: 'Accomplishments', anchor: 'accomplishments' },
];
const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/projects/');

  const handleNavClick = (anchor: string) => {
    setMobileMenuOpen(false);
    if (!isProjectPage) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  };

  // Active state: on project pages highlight "Projects"; on landing use hash
  const currentHash = location.hash?.replace('#', '');
  const isActive = (anchor: string) => {
    if (isProjectPage) return anchor === 'portfolio';
    return currentHash === anchor;
  };

  const linkClass = (anchor: string) =>
    `transition-colors ${
      isActive(anchor)
        ? 'text-[var(--green-light)] font-semibold'
        : 'text-[var(--black-dark)] hover:text-[var(--green-light)]'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[var(--white)] shadow-sm z-50 h-16">
      <div className="mx-auto px-4 h-full flex items-center justify-between" style={{ width: '90%', maxWidth: '1200px' }}>
        <Link to="/" className="flex items-center">
          <img
            src={assetPath('images/logo.png')}
            alt="Rahma Alifia"
            className="h-10 w-auto"
          />
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[var(--black-dark)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, anchor }) => (
            <Link
              key={anchor}
              to={isProjectPage ? `/#${anchor}` : `/#${anchor}`}
              onClick={() => handleNavClick(anchor)}
              className={linkClass(anchor)}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://ralifia.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--black-dark)] hover:text-[var(--green-light)] transition-colors"
          >
            Blog
          </a>
          <Link
            to="/#contact"
            onClick={() => handleNavClick('contact')}
            className={linkClass('contact')}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[var(--white)] shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map(({ label, anchor }) => (
              <Link
                key={anchor}
                to={`/#${anchor}`}
                onClick={() => handleNavClick(anchor)}
                className={linkClass(anchor)}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://ralifia.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--black-dark)] hover:text-[var(--green-light)] transition-colors"
            >
              Blog
            </a>
            <Link
              to="/#contact"
              onClick={() => handleNavClick('contact')}
              className={linkClass('contact')}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}