import { Link } from 'react-router';
import { useState } from 'react';

interface ProjectCardProps {
  slug: string;
  tags: string[];
  title: string;
  description: string;
  imagePlaceholder: string;
  url?: string;
}

export function ProjectCard({ slug, tags, title, description, imagePlaceholder, url }: ProjectCardProps) {
  const imageUrl = `/images/${imagePlaceholder}`;
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-[var(--white)] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-200">
      <div className="w-full aspect-video bg-gradient-to-br from-[var(--green-light)] to-[var(--green-dark)] flex items-center justify-center text-white overflow-hidden">
        {imageError ? (
          <div className="p-6 text-center">
            <div style={{ fontSize: '1.125rem', fontWeight: '600' }}>{title}</div>
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="px-2.5 py-1 bg-[var(--gray-light)] text-[var(--border-gray)] text-xs rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--black-dark)', marginBottom: '0.75rem' }}>
          {title}
        </h3>
        <p className="text-sm text-[var(--black-dark)] mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-col gap-2">
          <Link to={`/projects/${slug}`} className="text-[var(--green-light)] hover:text-[var(--green-dark)] font-semibold text-sm">
            Read more &gt;&gt;
          </Link>
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-[var(--green-light)] hover:text-[var(--green-dark)] text-sm underline">
              View Work
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
