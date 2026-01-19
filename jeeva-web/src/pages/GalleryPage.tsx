import React, { useState, useEffect, useCallback } from 'react';
import GalleryImage from '../components/Gallery/GalleryImage';
import Lightbox from '../components/Gallery/Lightbox';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { ACHIEVEMENTS, BEHIND_THE_SCENES } from '../data/galleryData';

const BATCH_SIZE = 12;

type Category = 'achievements' | 'bts';

const GalleryPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('achievements');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [btsImages, setBtsImages] = useState<string[]>([]);
    const [btsPage, setBtsPage] = useState(0);
    const [hasMoreBts, setHasMoreBts] = useState(true);
    const [isLoadingBts, setIsLoadingBts] = useState(false);

    // Infinite scroll for BTS only
    const loadMoreBts = useCallback(() => {
        if (isLoadingBts || !hasMoreBts || activeCategory !== 'bts') return;

        setIsLoadingBts(true);

        setTimeout(() => {
            const start = btsPage * BATCH_SIZE;
            const end = start + BATCH_SIZE;
            const nextBatch = BEHIND_THE_SCENES.slice(start, end);

            if (nextBatch.length > 0) {
                setBtsImages(prev => [...prev, ...nextBatch]);
                setBtsPage(prev => prev + 1);
                if (end >= BEHIND_THE_SCENES.length) {
                    setHasMoreBts(false);
                }
            } else {
                setHasMoreBts(false);
            }
            setIsLoadingBts(false);
        }, 400);
    }, [btsPage, hasMoreBts, isLoadingBts, activeCategory]);

    useEffect(() => {
        if (activeCategory === 'bts' && btsImages.length === 0) {
            loadMoreBts();
        }
    }, [activeCategory, btsImages.length, loadMoreBts]);

    const observerTarget = useInfiniteScroll(loadMoreBts, {
        enabled: activeCategory === 'bts' && hasMoreBts && !isLoadingBts,
        rootMargin: '200px'
    });

    const PageHeader = () => (
        <div className="text-center mb-16">
            <button
                onClick={() => {
                    window.history.pushState(null, '', '/');
                    window.dispatchEvent(new Event('popstate'));
                }}
                className="mb-8 inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                Back to Home
            </button>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                Jeeva Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Visual documentation of our progress, milestones, and the journey behind the scenes.
            </p>
        </div>
    );

    const CategoryTabs = () => (
        <div className="flex justify-center mb-16">
            <div className="inline-flex p-1.5 bg-gray-100/80 backdrop-blur-sm rounded-2xl shadow-inner border border-gray-200/50">
                <button
                    onClick={() => setActiveCategory('achievements')}
                    className={`px-8 py-3.5 rounded-xl font-bold transition-all duration-400 ease-out flex items-center gap-2 ${activeCategory === 'achievements'
                            ? 'bg-white text-blue-600 shadow-lg shadow-blue-600/10 transform scale-105'
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                    Achievements
                </button>
                <button
                    onClick={() => setActiveCategory('bts')}
                    className={`px-8 py-3.5 rounded-xl font-bold transition-all duration-400 ease-out flex items-center gap-2 ${activeCategory === 'bts'
                            ? 'bg-white text-blue-600 shadow-lg shadow-blue-600/10 transform scale-105'
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
                    Behind the Scenes
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-white pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4">
                <PageHeader />
                <CategoryTabs />

                {activeCategory === 'achievements' ? (
                    <div className="space-y-24">
                        {ACHIEVEMENTS.map((group, groupIdx) => (
                            <div key={group.event} className="relative">
                                <div className="flex items-center gap-4 mb-10 overflow-hidden">
                                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                                        {groupIdx + 1}
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900">
                                        {group.event}
                                    </h2>
                                    <div className="h-px bg-gradient-to-r from-gray-200 to-transparent flex-grow" />
                                </div>

                                <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                                    {group.images.map((url, imgIdx) => (
                                        <div key={`${group.event}-${imgIdx}`} className="break-inside-avoid">
                                            <GalleryImage
                                                url={url}
                                                alt={`${group.event} image ${imgIdx + 1}`}
                                                onClick={() => setSelectedImage(url)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                            {btsImages.map((url, index) => (
                                <div key={`bts-${index}`} className="break-inside-avoid">
                                    <GalleryImage
                                        url={url}
                                        alt={`BTS image ${index + 1}`}
                                        onClick={() => setSelectedImage(url)}
                                    />
                                </div>
                            ))}
                        </div>

                        <div ref={observerTarget} className="mt-20 flex flex-col items-center">
                            {isLoadingBts && (
                                <div className="flex space-x-2">
                                    <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                    <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                    <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></div>
                                </div>
                            )}
                            {!hasMoreBts && btsImages.length > 0 && (
                                <div className="text-center">
                                    <div className="w-16 h-1.5 bg-blue-50 mx-auto mb-6 rounded-full" />
                                    <p className="text-gray-400 font-semibold tracking-wide uppercase text-sm">
                                        End of Behind the Scenes
                                    </p>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>

            <Lightbox
                url={selectedImage}
                onClose={() => setSelectedImage(null)}
            />
        </div>
    );
};

export default GalleryPage;
