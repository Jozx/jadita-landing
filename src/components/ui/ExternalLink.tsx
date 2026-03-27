import React from 'react';

interface ExternalLinkProps {
  href: string;
  className?: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ 
  href, 
  className = '', 
  ariaLabel, 
  children 
}) => {
  if (import.meta.env.DEV && !href.startsWith('https://') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
    console.warn(`[ExternalLink] Insecure or non-HTTPS href detected: ${href}`);
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
