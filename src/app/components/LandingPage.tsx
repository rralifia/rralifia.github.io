import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Hero } from './Hero';
import { Skills } from './Skills';
import { Portfolio } from './Portfolio';
import { Experience } from './Experience';
import { Accomplishments } from './Accomplishments';
import { Certifications } from './Certifications';
import { Contact } from './Contact';
import { PageMeta } from './PageMeta';

const HEADER_OFFSET = 72;

function scrollToHash(hash: string) {
  const id = decodeURIComponent(hash.replace('#', ''));
  if (!id) return;

  const element = document.getElementById(id);
  if (!element) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const top =
    element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  window.scrollTo({
    top,
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  });
}

export function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const timer = window.setTimeout(() => {
      scrollToHash(location.hash);
    }, 75);

    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <main className="pt-16">
      <PageMeta
        title="Rahma Alifia — Biomedical Informatics & Digital Health Portfolio"
        description="Biomedical informatics and digital health portfolio of Rahma Alifia, featuring work in health data strategy, consent governance, clinical terminology, AI evaluation, and product development."
      />

      <Hero />
      <Skills />
      <Portfolio />
      <Experience />
      <Accomplishments />
      <Certifications />
      <Contact />
    </main>
  );
}