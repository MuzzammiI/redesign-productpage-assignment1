import React, { useState } from 'react';
import { BiCreditCard, BiGlobeAlt, BiMessageSquare, BiSearch, BiTrendingUp } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { LuLanguages } from 'react-icons/lu';

// Interfaces
interface Solution {
    icon: JSX.Element;
    title: string;
    description: string;
    color: string; // Tailwind background color class (e.g., 'bg-blue-500')
}

interface FeaturesGridProps {
    solutions?: Solution[];
}

const defaultSolutions: Solution[] = [
    {
        icon: <BiGlobeAlt className="w-6 h-6" />,
        title: "Custom AI-Powered Website",
        description: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
        color: "bg-blue-500"
    },
    {
        icon: <FaUserSecret className="w-6 h-6" />,
        title: "Enhanced Patient Conversion",
        description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
        color: "bg-purple-500"
    },
    {
        icon: <BiMessageSquare className="w-6 h-6" />,
        title: "Real-Time Query Handling",
        description: "Instant response system for patient inquiries with AI-powered chat support.",
        color: "bg-green-500"
    },
    {
        icon: <FiFileText className="w-6 h-6" />,
        title: "Medical Report Analysis",
        description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
        color: "bg-orange-500"
    },
    {
        icon: <BiTrendingUp className="w-6 h-6" />,
        title: "Improved Lead Generation",
        description: "Data-driven lead generation strategies to attract and engage potential patients.",
        color: "bg-pink-500"
    },
    {
        icon: <BsDatabase className="w-6 h-6" />,
        title: "Comprehensive Healthcare Database",
        description: "Extensive medical information database for accurate patient guidance and support.",
        color: "bg-indigo-500"
    },
    {
        icon: <LuLanguages className="w-6 h-6" />,
        title: "Multilingual Support",
        description: "Breaking language barriers with comprehensive multilingual communication tools.",
        color: "bg-red-500"
    },
    {
        icon: <BiCreditCard className="w-6 h-6" />,
        title: "Seamless Payment Handling",
        description: "Secure and efficient payment processing for medical services globally.",
        color: "bg-teal-500"
    },
    {
        icon: <BiSearch className="w-6 h-6" />,
        title: "Marketing And SEO Support",
        description: "Optimized digital presence with advanced SEO and marketing strategies.",
        color: "bg-cyan-500"
    }
];

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ solutions = defaultSolutions }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-16 px-4 md:px-8 ">
            <div className="max-w-7xl mx-auto">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 animate-gradient-x"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-0">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative">
                            Our Comprehensive Solutions
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full transition-all duration-300 ease-in-out"></span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Discover how our innovative solutions empower healthcare providers with cutting-edge technology.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-transparent group"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Card Content */}
                                <div className="p-6 flex flex-col h-full">
                                    <div
                                        className={`inline-flex p-3 rounded-lg text-white mb-4 transition-all duration-300 ${solution.color} group-hover:scale-110`}
                                    >
                                        {solution.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {solution.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed line-clamp-3 flex-grow">
                                        {solution.description}
                                    </p>
                                </div>

                                {/* Bottom Border Accent */}
                                <div
                                    className={`absolute bottom-0 left-0 w-full h-1 ${solution.color} transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-75'}`}
                                ></div>

                                {/* Subtle Gradient Overlay on Hover */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t from-gray-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scoped CSS for Line Clamp, Gradient Animation, and Additional Styles */}
            <style>{`
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                }

                .animate-gradient-x {
                    animation: gradientShiftX 10s ease-in-out infinite;
                    background-size: 200% 200%;
                }

                @keyframes gradientShiftX {
                    0% {
                        background-position: 0% 0%;
                    }
                    50% {
                        background-position: 100% 100%;
                    }
                    100% {
                        background-position: 0% 0%;
                    }
                }

                .group:hover .bg-blue-500 { background-color: #3b82f6; }
                .group:hover .bg-purple-500 { background-color: #a855f7; }
                .group:hover .bg-green-500 { background-color: #22c55e; }
                .group:hover .bg-orange-500 { background-color: #f97316; }
                .group:hover .bg-pink-500 { background-color: #ec4899; }
                .group:hover .bg-indigo-500 { background-color: #6366f1; }
                .group:hover .bg-red-500 { background-color: #ef4444; }
                .group:hover .bg-teal-500 { background-color: #14b8a6; }
                .group:hover .bg-cyan-500 { background-color: #06b6d4; }
            `}</style>
        </section>
    );
};

export default FeaturesGrid;

// Usage example:
// <FeaturesGrid />