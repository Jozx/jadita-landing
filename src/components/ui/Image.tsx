import React, { useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
}

const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc, 
  loading = 'lazy' 
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const imageSrc = hasError && fallbackSrc ? fallbackSrc : src;

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`bg-secondary object-cover transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      loading={loading}
      onError={() => {
        if (fallbackSrc && !hasError) setHasError(true);
      }}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export default Image;
