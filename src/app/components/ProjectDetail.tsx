import React from 'react';
import { Link } from 'react-router';
import { ProjectCard } from './ProjectCard';

interface ProjectDetailProps {
  tags: string[];
  title: string;
  status: string;
  tagline: string;
  role: string;
  timeline: string;
  team: string;
  imagePlaceholder?: string;
  problemTitle?: string;
  problem?: string;
  approachTitle?: string;
  approach?: string;
  methodsTitle?: string;
  methods?: string | React.ReactNode;
  outcomesTitle?: string;
  outcomes?: string[];
  artifacts?: { label: string; url: string; primary?: boolean }[];
  relatedProjects?: {
    slug: string;
    tags: string[];
    title: string;
    description: string;
    imagePlaceholder: string;
    url?: string;
    doi?: string;
  }[];
}

const statusColors: Record<string, { bg: string; text: string }> = {
  Published: { bg: 'var(--green-light)', text: 'white' },
  'Under Review': { bg: 'var(--green-dark)', text: 'white' },
  'In Review': { bg: 'var(--green-dark)', text: 'white' },
  'In Progress': { bg: 'var(--border-gray)', text: 'white' },
  Prototype: { bg: 'var(--gray-medium)', text: 'white' },
  Hackathon: { bg: 'var(--gray-medium)', text: 'white' },
  'Course / Hackathon': { bg: 'var(--gray-medium)', text: 'white' },
  'In Production': { bg: 'var(--green-light)', text: 'white' }
};

export function ProjectDetail({
  tags,
  title,
  status,
  tagline,
  role,
  timeline,
  team,
  imagePlaceholder,
  problemTitle = 'The Problem',
  problem,
  approachTitle = 'The Approach',
  approach,
  methodsTitle = 'What I Built',
  methods,
  outcomesTitle = 'Outcomes',
  outcomes,
  artifacts,
  relatedProjects
}: ProjectDetailProps) {
  const [imageError, setImageError] = React.useState(false);
  const statusColor = statusColors[status] ?? { bg: 'var(--gray-medium)', text: 'white' };
  const imageUrl = imagePlaceholder ? `/images/${imagePlaceholder}` : undefined;

  return (
    <div className="pt-16">
      <div className="bg-[var(--gray-light)] py-4">
        <div className="mx-auto px-4" style={{ width: '90%', maxWidth: '1200px' }}>
          <p className="text-sm text-[var(--border-gray)]">
            <Link to="/#portfolio" className="hover:text-[var(--green-light)]">← Projects</Link>
          </p>
        </div>
      </div>

      <div className="bg-[var(--white)] py-12">
        <div className="mx-auto px-4" style={{ width: '90%', maxWidth: '1200px' }}>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 bg-[var(--gray-light)] text-[var(--border-gray)] text-xs rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 style={{ fontSize: '2.25rem', color: 'var(--green-dark)', marginBottom: '1rem', fontWeight: 'bold' }}>
                {title}
              </h1>

              <div
                className="inline-block px-3 py-1 rounded-md text-xs mb-4 font-medium"
                style={{ backgroundColor: statusColor.bg, color: statusColor.text }}
              >
                {status}
              </div>

              <p style={{ fontSize: '1.125rem', color: 'var(--black-dark)', lineHeight: '1.6' }}>
                {tagline}
              </p>
            </div>

            <div className="w-full aspect-video bg-gradient-to-br from-[var(--green-light)] to-[var(--green-dark)] rounded-lg flex items-center justify-center text-white p-6 text-center text-xl font-semibold overflow-hidden">
              {imageUrl && !imageError ? (
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover rounded-lg"
                  onError={() => setImageError(true)}
                />
              ) : (
                <span>{title}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--gray-light)] py-6">
        <div className="mx-auto px-4" style={{ width: '90%', maxWidth: '1200px' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-xs uppercase text-[var(--border-gray)] mb-1">Role</p>
              <p className="text-sm text-[var(--black-dark)]">{role}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-[var(--border-gray)] mb-1">Timeline</p>
              <p className="text-sm text-[var(--black-dark)]">{timeline}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-[var(--border-gray)] mb-1">Status</p>
              <p className="text-sm text-[var(--black-dark)]">{status}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-[var(--border-gray)] mb-1">Team</p>
              <p className="text-sm text-[var(--black-dark)]">{team}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--white)] py-12">
        <div className="mx-auto px-4 space-y-8" style={{ width: '90%', maxWidth: '1200px' }}>
          {problem && (
            <section>
              <h2 style={{ fontSize: '2rem', color: 'var(--green-dark)', marginBottom: '1rem', fontWeight: 'bold' }}>{problemTitle}</h2>
              <p className="text-base text-[var(--black-dark)] leading-relaxed">{problem}</p>
            </section>
          )}

          {approach && (
            <section>
              <h2 style={{ fontSize: '2rem', color: 'var(--green-dark)', marginBottom: '1rem', fontWeight: 'bold' }}>{approachTitle}</h2>
              <p className="text-base text-[var(--black-dark)] leading-relaxed">{approach}</p>
            </section>
          )}

          {methods && (
            <section>
              <h2 style={{ fontSize: '2rem', color: 'var(--green-dark)', marginBottom: '1rem', fontWeight: 'bold' }}>{methodsTitle}</h2>
              {typeof methods === 'string' ? (
                <p className="text-base text-[var(--black-dark)] leading-relaxed">{methods}</p>
              ) : (
                methods
              )}
            </section>
          )}

          {outcomes && outcomes.length > 0 && (
            <section>
              <h2 style={{ fontSize: '2rem', color: 'var(--green-dark)', marginBottom: '1rem', fontWeight: 'bold' }}>{outcomesTitle}</h2>
              <ul className="list-disc list-outside pl-5 space-y-2 marker:text-[var(--border-gray)]">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="pl-1 text-base text-[var(--black-dark)] leading-relaxed">
                    {outcome}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {artifacts && artifacts.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {artifacts.map((artifact, index) => {
                const disabled = artifact.url === '#';
                const className = artifact.primary
                  ? 'px-6 py-3 bg-[var(--green-light)] text-white rounded-md hover:bg-[var(--green-dark)] transition-colors'
                  : 'px-6 py-3 border-2 border-[var(--green-light)] text-[var(--green-light)] bg-transparent rounded-md hover:bg-[var(--green-dark)] hover:text-white hover:border-[var(--green-dark)] transition-colors';

                return disabled ? (
                  <span key={index} className={`${className} opacity-70 cursor-not-allowed`} style={{ fontWeight: 'bold', fontSize: '0.75rem' }}>
                    {artifact.label}
                  </span>
                ) : (
                  <a
                    key={index}
                    href={artifact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                    style={{ fontWeight: 'bold', fontSize: '0.75rem' }}
                  >
                    {artifact.label}
                  </a>
                );
              })}
            </div>
          )}

          {relatedProjects && relatedProjects.length > 0 && (
            <section>
              <h2 style={{ fontSize: '2rem', color: 'var(--green-dark)', marginBottom: '1.5rem', fontWeight: 'bold' }}>Related Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProjects.map((project) => (
                  <ProjectCard key={project.slug} {...project} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}