import React, { useState } from 'react';
import GalleryImage from './GalleryImage';
import Lightbox from './Lightbox';
import { GALLERY_PREVIEW } from '../../data/galleryData';

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const navigateToGallery = () => {
        window.history.pushState(null, '', '/gallery');
        window.dispatchEvent(new Event('popstate'));
    };

    return (
        <section className="py-24 px-4 bg-gray-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            Moments & Achievements
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Explore our journey in transforming healthcare through innovation and dedication.
                            From community impact to behind-the-scenes milestones.
                        </p>
                    </div>
                    <button
                        onClick={navigateToGallery}
                        className="group flex items-center gap-2 bg-white text-blue-600 border border-blue-100 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                    >
                        View Full Gallery
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Masonry Grid Preview */}
                <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
                    {GALLERY_PREVIEW.map((url, index) => (
                        <div key={`${url}-${index}`} className="break-inside-avoid">
                            <GalleryImage
                                url={url}
                                alt={`Jeeva moment ${index + 1}`}
                                onClick={() => setSelectedImage(url)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Lightbox
                url={selectedImage}
                onClose={() => setSelectedImage(null)}
            />
        </section>
    );
};

export default Gallery;
