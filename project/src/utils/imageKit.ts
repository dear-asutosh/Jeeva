/**
 * ImageKit Utility for Jeeva Gallery
 * 
 * Provides functions to transform ImageKit URLs for performance and responsiveness.
 */

export interface ImageTransformationOptions {
  width?: number;
  height?: number;
  quality?: number;
  blur?: number;
  format?: 'auto' | 'webp' | 'avif' | 'jpg';
  crop?: 'maintain_ratio' | 'force_exact' | 'at_least' | 'at_max';
}

/**
 * Transforms an ImageKit URL with the provided options.
 */
export const getTransformedUrl = (url: string, options: ImageTransformationOptions = {}): string => {
  if (!url) return '';
  
  const transformations: string[] = [];
  
  if (options.width) transformations.push(`w-${options.width}`);
  if (options.height) transformations.push(`h-${options.height}`);
  if (options.quality) transformations.push(`q-${options.quality}`);
  else transformations.push('q-auto'); // Default to auto quality
  
  if (options.blur) transformations.push(`bl-${options.blur}`);
  
  if (options.format) {
    if (options.format === 'auto') transformations.push('f-auto');
    else transformations.push(`f-${options.format}`);
  } else {
    transformations.push('f-auto'); // Default to auto format
  }

  if (transformations.length === 0) return url;

  const transformationString = transformations.join(',');
  
  // Handle already transformed URLs or appending to clean URLs
  const separator = url.includes('?') ? '&' : '?';
  
  if (url.includes('tr=')) {
    return `${url},${transformationString}`;
  }
  
  return `${url}${separator}tr=${transformationString}`;
};

/**
 * Generates a Low-Quality Image Placeholder (LQIP) URL.
 */
export const getLqipUrl = (url: string): string => {
  return getTransformedUrl(url, {
    width: 20,
    quality: 10,
    blur: 5,
    format: 'webp'
  });
};

/**
 * Standard responsive widths for srcset.
 */
export const RESPONSIVE_WIDTHS = [480, 768, 1024, 1280, 1600];

/**
 * Generates an object of URLs for different breakpoints.
 */
export const getResponsiveUrls = (url: string) => {
  return RESPONSIVE_WIDTHS.map(width => ({
    width,
    url: getTransformedUrl(url, { width })
  }));
};

/**
 * Generates a srcset string for an img tag.
 */
export const getSrcSet = (url: string): string => {
  return getResponsiveUrls(url)
    .map(item => `${item.url} ${item.width}w`)
    .join(', ');
};
