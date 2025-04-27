import { useState, useEffect, useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { Button } from '@/components/ui'; // Assuming you have a Button component

// Interfaces
interface Testimonial {
    name: string;
    role: string;
    company?: string;
    quote: string;
    rating: number;
    avatar?: string;
}

interface Logo {
    src: string;
    alt: string;
}

interface SocialProofSectionProps {
    testimonials: Testimonial[];
    logos: Logo[];
}

const SocialProofSection: React.FC<SocialProofSectionProps> = ({ testimonials, logos }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3); // Dynamic based on screen size
    const topRowRef = useRef<HTMLDivElement>(null);
    const bottomRowRef = useRef<HTMLDivElement>(null);

    // Split logos into two rows
    const half = Math.ceil(logos.length / 2);
    const topRowLogos = logos.slice(0, half);
    const bottomRowLogos = logos.slice(half);

    // Adjust cardsPerView based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setCardsPerView(1); // Mobile
            else if (window.innerWidth < 1024) setCardsPerView(2); // Tablet
            else setCardsPerView(3); // Desktop
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-slide testimonials every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / cardsPerView));
        }, 3000);
        return () => clearInterval(timer);
    }, [testimonials.length, cardsPerView]);

    // Manual navigation
    // const nextSlide = () => {
    //     setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / cardsPerView));
    // };

    // const prevSlide = () => {
    //     setCurrentIndex((prev) =>
    //         prev === 0 ? Math.ceil(testimonials.length / cardsPerView) - 1 : prev - 1
    //     );
    // };

    // Pause animation on hover for logo rows
    const handleMouseEnter = (rowRef: React.RefObject<HTMLDivElement>) => {
        if (rowRef.current) {
            rowRef.current.style.animationPlayState = 'paused';
        }
    };

    const handleMouseLeave = (rowRef: React.RefObject<HTMLDivElement>) => {
        if (rowRef.current) {
            rowRef.current.style.animationPlayState = 'running';
        }
    };

    return (
        <div className='w-screen'>
            <section className="py-8 md:py-12 w-[100%] md:[80%] m-auto">
            {/* Testimonials Section */}
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12 relative">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
                        Hear from healthcare professionals and organizations who trust our AI solutions
                    </p>
                    {/* Navigation Buttons */}
                    {/* <div className="absolute top-0 right-0 flex gap-2 md:gap-4">
                        <button
                            className="p-2 md:p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                            aria-label="Previous testimonials"
                            onClick={prevSlide}
                        >
                            <FaChevronLeft className="text-gray-700 text-base md:text-lg" />
                        </button>
                        <button
                            className="p-2 md:p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                            aria-label="Next testimonials"
                            onClick={nextSlide}
                        >
                            <FaChevronRight className="text-gray-700 text-base md:text-lg" />
                        </button>
                    </div> */}
                </div>

                {/* Testimonials Slider */}
                <div className="overflow-hidden">
                    <div
                        className="flex lg:space-x-4 transition-transform duration-500  ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
                    >
                        {[...Array(Math.ceil(testimonials.length / cardsPerView))].map((_, groupIndex) => (
                            <div key={groupIndex} className="flex space-x-4 min-w-full   md:min-w-[calc(100%/${cardsPerView})]">
                                {testimonials
                                    .slice(groupIndex * cardsPerView, (groupIndex + 1) * cardsPerView)
                                    .map((testimonial, index) => (
                                        <div
                                            key={index}
                                            className="bg-white p-4 md:p-6 rounded-xl shadow-md flex-1 flex flex-col justify-between min-w-[250px] md:min-w-[300px]"
                                        >
                                            <div>
                                                <div className="flex items-center mb-3 md:mb-4">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <FaStar key={i} className="text-yellow-400 text-base md:text-lg" />
                                                    ))}
                                                </div>
                                                <p className="text-gray-600 italic text-sm md:text-base mb-4 md:mb-6 line-clamp-4">
                                                    {testimonial.quote}
                                                </p>
                                            </div>
                                            <div className="mt-auto">
                                                <div className="flex items-center">
                                                    {testimonial.avatar && (
                                                        <img
                                                            src={testimonial.avatar}
                                                            alt={testimonial.name}
                                                            className="w-8 h-8 md:w-12 md:h-12 rounded-full mr-2 md:mr-4 object-cover"
                                                        />
                                                    )}
                                                    <div>
                                                        <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                                                            {testimonial.name}
                                                        </h4>
                                                        <p className="text-xs md:text-sm text-gray-500">
                                                            {testimonial.role}
                                                            {testimonial.company && `, ${testimonial.company}`}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Leading Partners Section */}
            <div className="w-full overflow-hidden mt-6 flex">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 m-6 md:mb-12">
                        Our Leading Partners
                    </h2>

                    {/* Top Row: Right to Left */}
                    <div
                        ref={topRowRef}
                        className="flex whitespace-nowrap animate-slide-right-to-left mb-4 md:mb-6"
                        style={{ minWidth: '100%' }}
                        onMouseEnter={() => handleMouseEnter(topRowRef)}
                        onMouseLeave={() => handleMouseLeave(topRowRef)}
                    >
                        {[...topRowLogos, ...topRowLogos].map((logo, index) => (
                            <div
                                key={index}
                                className="bg-white p-2 md:p-4 rounded-lg shadow-md flex items-center justify-center border border-gray-100 mx-1 md:mx-3 min-w-[120px] md:min-w-[200px]"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-h-12 md:max-h-16 max-w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row: Left to Right */}
                    <div
                        ref={bottomRowRef}
                        className="flex whitespace-nowrap animate-slide-left-to-right"
                        style={{ minWidth: '100%' }}
                        onMouseEnter={() => handleMouseEnter(bottomRowRef)}
                        onMouseLeave={() => handleMouseLeave(bottomRowRef)}
                    >
                        {[...bottomRowLogos, ...bottomRowLogos].map((logo, index) => (
                            <div
                                key={index}
                                className="bg-white p-2 md:p-4 rounded-lg shadow-md flex items-center justify-center border border-gray-100 mx-1 md:mx-3  md:min-w-[200px]"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-h-12 md:max-h-16 max-w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 md:mt-12">
                        <Button
                            variant="solid"
                            className="bg-gray-800 text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-gray-700 transition-colors duration-300 text-sm md:text-base"
                        >
                            View all partners
                        </Button>
                    </div>
                </div>
            </div>

            {/* CSS for Animations */}
            <style>{`
                @keyframes slide-right-to-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                @keyframes slide-left-to-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }

                .animate-slide-right-to-left {
                    animation: slide-right-to-left 15s linear infinite;
                }

                .animate-slide-left-to-right {
                    animation: slide-left-to-right 15s linear infinite;
                }

                @media (max-width: 640px) {
                    .animate-slide-right-to-left,
                    .animate-slide-left-to-right {
                        animation: none;
                    }
                }
            `}</style>
        </section>

        </div>
    );
};

export default SocialProofSection;