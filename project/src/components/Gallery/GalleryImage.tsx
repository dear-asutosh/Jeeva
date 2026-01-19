import React, { useState } from 'react';
import { getTransformedUrl, getLqipUrl, getSrcSet } from '../../utils/imageKit';

interface GalleryImageProps {
    url: string;
    alt?: string;
    onClick?: () => void;
}

/**
 * Gallery Image component with LQIP, skeleton, and smooth transition.
 */
const GalleryImage: React.FC<GalleryImageProps> = ({ url, alt = 'Gallery image', onClick }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const lqip = getLqipUrl(url);
    const srcSet = getSrcSet(url);

    return (
        <div
            className="relative overflow-hidden rounded-xl bg-gray-100 group cursor-pointer"
            onClick={onClick}
        >
            {/* LQIP Placeholder */}
            {!isLoaded && (
                <img
                    src={lqip}
                    alt={alt}
                    className="w-full h-full object-cover blur-sm scale-105 transition-opacity duration-500"
                    aria-hidden="true"
                />
            )}

            {/* Main Image */}
            <img
                src={getTransformedUrl(url, { width: 800 })} // Fallback src
                srcSet={srcSet}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                className={`w-full h-auto object-cover transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105 absolute top-0 left-0'
                    } group-hover:scale-105`}
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3" /><path d="M21 8V5a2 2 0 0 0-2-2h-3" /><path d="M3 16v3a2 2 0 0 0 2 2h3" /><path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default GalleryImage;
