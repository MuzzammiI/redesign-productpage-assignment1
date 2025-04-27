import { useState } from 'react';
import smallBG from '@/assets/images/main-bg-small.png';
import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';
// import bgVideo from '@/assets/video/testpurpose.mp4';
import { IoVolumeMuteOutline, IoVolumeHighOutline } from 'react-icons/io5';

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    featuresRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {


    

    const [isMuted, setIsMuted] = useState(true);

    function toggleMute(): void {
        setIsMuted((prev) => !prev);
    }

    return (
        <div className="!bg-[#01052f] mt-12 w-[100%] mx-auto relative flex flex-col py-2 md:py-5 overflow-hidden">
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            <div className='min-h-[90vh]  flex items-center'>
                {/* Background video for larger screens */}
                {/* <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hidden md:block absolute top-0 left-0 min-w-full min-h-full object-cover z-[-10]"
                >
                    <source src={bgVideo} type="video/mp4" />
                    
                     Your browser does not support the video tag.
                </video> */}

                {/* Background image for mobile */}
                <img
                    src={smallBG}
                    alt="background_image"
                    className="md:hidden h-full w-full object-cover absolute top-0 left-0 z-[-10]"
                />

                {/* Overlay to ensure text readability */}
                {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-5]"></div> */}

                <div className="relative  text-white z-0 w-[80%] flex flex-col lg:flex-row-reverse md:mt-6 lg:mt-0 lg:items-center lg:justify-between px-4 max-w-[1538px] mx-auto">
                    {/* Video Section */}
                    <div className="lg:w-5/12 mt-8 lg:mt-0 lg:mb-0 mb-6">
                        <div className="relative overflow-hidden pt-[56.25%] rounded-lg shadow-lg">
                            <iframe
                                allowFullScreen
                                src={`https://www.youtube.com/embed/xQl8i2sO_Ls?autoplay=1&mute=${isMuted ? 1 : 0
                                    }&loop=1&playlist=xQl8i2sO_Ls&controls=0&showinfo=0&rel=0`}
                                className="absolute top-0 left-0 w-full h-full"
                                title="Product Demo Video"
                                // frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                            <button
                                className="absolute bottom-4 right-4 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
                                onClick={toggleMute}
                            >
                                {isMuted ? (
                                    <IoVolumeMuteOutline size={24} />
                                ) : (
                                    <IoVolumeHighOutline size={24} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 lg:pr-8">
                        <h1 className="text-2xl md:text-4xl font-semibold mb-4 capitalize text-white">
                            <span className="text-primary">AI front office </span> <br />
                            for healthcare agents
                        </h1>
                        <p style={{ lineHeight: '0.7' }} className="text-lg my-8 font-light">
                            Create <span className="text-primary font-bold">AI Store</span>  in 2 min <br />
                            <br />
                            Scale with{' '}
                            <span className="font-bold text-primary">
                                Digital Marketing
                            </span>{' '}
                        </p>
                        <div>
                            <HcfSignupPopup popupButtonStatus buttonChildren={<Button block variant='solid' className='rounded-[5px] max-w-[200px]'>Get Started</Button>} />
                        </div>
                        <div className="text-white flex gap-12 mt-8 flex-wrap">
                            <div>
                                <h1 className="text-3xl font-bold text-white">
                                    2100<span className="text-primary ml-1">+</span>
                                </h1>
                                <p className="text-lg capitalize">qualified doctors</p>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-white">
                                    1000<span className="text-primary ml-1">+</span>
                                </h1>
                                <p className="text-lg capitalize">hospitals</p>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-white">
                                    800<span className="text-primary ml-1">+</span>
                                </h1>
                                <p className="text-lg capitalize">Treatment Plans</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;








// import { useState } from 'react';
// import smallBG from '@/assets/images/main-bg-small.png';
// import { Button } from '@/components/ui';
// import HomeNavbar from '@/components/shared/HomeNav';
// import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';
// import { IoVolumeMuteOutline, IoVolumeHighOutline } from 'react-icons/io5';
// import { motion } from 'framer-motion'; // Added for animations

// interface HeroSectionProps {
//     scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
//     featuresRef: React.RefObject<HTMLElement>;
//     contactRef: React.RefObject<HTMLElement>;
//     aboutRef: React.RefObject<HTMLElement>;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({
//     scrollToSection,
//     featuresRef,
//     contactRef,
//     aboutRef,
// }) => {
//     const [isMuted, setIsMuted] = useState(true);

//     const toggleMute = () => setIsMuted((prev) => !prev);

//     // Animation variants
//     const contentVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//     };

//     const statsVariants = {
//         hidden: { opacity: 0, scale: 0.8 },
//         visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
//     };

//     return (
//         <section className="relative bg-gradient-to-br from-[#01052f] to-[#021d5f] min-h-screen w-full overflow-hidden">
//             <HomeNavbar
//                 scrollToSection={scrollToSection}
//                 featuresRef={featuresRef}
//                 contactRef={contactRef}
//                 aboutRef={aboutRef}
//             />

//             {/* Mobile Background */}
//             <img
//                 src={smallBG}
//                 alt="background"
//                 className="md:hidden absolute inset-0 w-full h-full object-cover opacity-20 z-0"
//             />

//             <div className="container mx-auto px-4 py-12 md:py-20 min-h-[90vh] flex items-center">
//                 <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
//                     {/* Content Section */}
//                     <motion.div
//                         variants={contentVariants}
//                         initial="hidden"
//                         animate="visible"
//                         className="text-white space-y-8"
//                     >
//                         <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//                             <span className="text-primary block">AI Front Office</span>
//                             for Healthcare Agents
//                         </h1>
                        
//                         <p className="text-lg md:text-xl font-light leading-relaxed">
//                             Create <span className="text-primary font-semibold">AI Store</span> in 2 minutes
//                             <br />
//                             Scale with <span className="text-primary font-semibold">Digital Marketing</span>
//                         </p>

//                         <HcfSignupPopup 
//                             popupButtonStatus 
//                             buttonChildren={
//                                 <Button 
//                                     block 
//                                     variant="solid" 
//                                     className="rounded-md max-w-xs px-8 py-3 bg-primary hover:bg-primary-dark transition-colors duration-300 text-white font-semibold"
//                                 >
//                                     Get Started
//                                 </Button>
//                             } 
//                         />

//                         {/* Stats Section */}
//                         <motion.div 
//                             variants={statsVariants}
//                             initial="hidden"
//                             animate="visible"
//                             className="grid grid-cols-3 gap-6 pt-6"
//                         >
//                             {[
//                                 { number: "2100", label: "Qualified Doctors" },
//                                 { number: "1000", label: "Hospitals" },
//                                 { number: "800", label: "Treatment Plans" }
//                             ].map((stat, index) => (
//                                 <div key={index} className="text-center">
//                                     <h3 className="text-2xl md:text-3xl font-bold">
//                                         {stat.number}
//                                         <span className="text-primary">+</span>
//                                     </h3>
//                                     <p className="text-sm md:text-base opacity-80">{stat.label}</p>
//                                 </div>
//                             ))}
//                         </motion.div>
//                     </motion.div>

//                     {/* Video Section */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6, delay: 0.2 }}
//                         className="relative"
//                     >
//                         <div className="relative overflow-hidden pt-[56.25%] rounded-xl shadow-2xl ring-1 ring-white/10">
//                             <iframe
//                                 src={`https://www.youtube.com/embed/xQl8i2sO_Ls?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=xQl8i2sO_Ls&controls=0&showinfo=0&rel=0`}
//                                 title="Product Demo Video"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                                 className="absolute inset-0 w-full h-full"
//                             />
//                             <button
//                                 onClick={toggleMute}
//                                 className="absolute bottom-4 right-4 bg-black/60 p-2 rounded-full hover:bg-black/80 transition-all duration-300 backdrop-blur-sm"
//                                 aria-label={isMuted ? "Unmute video" : "Mute video"}
//                             >
//                                 {isMuted ? (
//                                     <IoVolumeMuteOutline size={24} className="text-white" />
//                                 ) : (
//                                     <IoVolumeHighOutline size={24} className="text-white" />
//                                 )}
//                             </button>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* Decorative Elements */}
//             <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#01052f] to-transparent" />
//         </section>
//     );
// };

// export default HeroSection;