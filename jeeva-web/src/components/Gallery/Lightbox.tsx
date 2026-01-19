import React, { useEffect } from 'react';
import { getTransformedUrl } from '../../utils/imageKit';

interface LightboxProps {
    url: string | null;
    onClose: () => void;
    alt?: string;
}

const Lightbox: React.FC<LightboxProps> = ({ url, onClose, alt = 'Gallery image' }) => {
    useEffect(() => {
        if (!url) return;

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        // Prevent scrolling when lightbox is open
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleEsc);

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [url, onClose]);

    if (!url) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
                aria-label="Close lightbox"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
            </button>

            {/* Image Container - Ensuring natural aspect ratio and no cropping */}
            <div
                className="relative max-w-[95vw] max-h-[95vh] m-auto flex items-center justify-center animate-in zoom-in-95 duration-300 ease-out"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={getTransformedUrl(url, { width: 1600, quality: 90 })}
                    alt={alt}
                    className="block w-auto h-auto max-w-full max-h-[90vh] rounded-sm shadow-2xl ring-1 ring-white/10"
                    style={{ objectFit: 'contain' }}
                />
            </div>
        </div>
    );
};

export default Lightbox;
