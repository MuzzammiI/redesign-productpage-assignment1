import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
// import MainFooter from './components/MainFooter';
import InfoSection from './components/InfoSection';
import FeaturesGrid from './components/FeaturesGrid';
import Testimonials from './components/SocialProofSection';
import NewFeatures from './components/NewFeatures';



const Home: React.FC = () => {
	const contactRef = useRef(null);
	const aboutRef = useRef(null);
	const FqRef = useRef(null);
	const scrollToSection = (ref) => {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		let lastScrollTop = 0; // Initialize lastScrollTop variable

		const handleScroll = () => {
			const hcf = document.querySelector(".hcf-profile");
			const scrollTop =
				document.documentElement.scrollTop || document.body.scrollTop;

			if (scrollTop > lastScrollTop) {
				if (hcf) {
					hcf.classList.add("hcf-profile-fixed");
				}
			} else if (scrollTop < lastScrollTop) {
				if (hcf) {
					hcf.classList.remove("hcf-profile-fixed");
				}
			}

			lastScrollTop = scrollTop;
		};


		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup the event listener on unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);


// Example usage
const sampleTestimonials = [
    {
        name: "Dr. Sarah Johnson",
        role: "Chief Medical Officer",
        company: "HealthCorp",
        quote: "This AI solution has transformed our patient intake process, saving us countless hours.",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Practice Manager",
        quote: "The digital marketing tools helped us reach more patients than ever before.",
        rating: 4
    },
    {
        name: "Emily Rodriguez",
        role: "Healthcare Consultant",
        quote: "An intuitive platform that truly understands healthcare needs.",
        rating: 5
    },
    {
        name: "Dr. James Carter",
        role: "Surgeon",
        company: "MediTech",
        quote: "Streamlined our workflow significantly.",
        rating: 5
    },
    {
        name: "Lisa Patel",
        role: "Clinic Director",
        quote: "Exceptional support and results.",
        rating: 4
    },
    {
        name: "Robert Kim",
        role: "Health IT Specialist",
        quote: "A game-changer for healthcare tech.",
        rating: 5
    }
];

const sampleLogos = [
    { src: "https://via.placeholder.com/150x50?text=Motilal+Oswal", alt: "Motilal Oswal" },
    { src: "https://via.placeholder.com/150x50?text=ICICI+Prudential", alt: "ICICI Prudential" },
    { src: "https://via.placeholder.com/150x50?text=KG+Invicta", alt: "KG Invicta" },
    { src: "https://via.placeholder.com/150x50?text=Babcock+Power", alt: "Babcock Power" },
    { src: "https://via.placeholder.com/150x50?text=Manipal", alt: "Manipal" },
    { src: "https://via.placeholder.com/150x50?text=Flextronics", alt: "Flextronics" },
    { src: "https://via.placeholder.com/150x50?text=Dalmia+Cement", alt: "Dalmia Cement" },
    { src: "https://via.placeholder.com/150x50?text=MPS+Limited", alt: "MPS Limited" },
    { src: "https://via.placeholder.com/150x50?text=EXL+Services", alt: "EXL Services" },
    { src: "https://via.placeholder.com/150x50?text=Motilal+Oswal", alt: "Motilal Oswal" },
    { src: "https://via.placeholder.com/150x50?text=ICICI+Prudential", alt: "ICICI Prudential" },
    { src: "https://via.placeholder.com/150x50?text=KG+Invicta", alt: "KG Invicta" },
];




	return (
		<>
			<div>
				<div className="">
					<div className='!bg-[#01052f] relative'>
					<HeroSection scrollToSection={scrollToSection} featuresRef={FqRef} contactRef={contactRef} aboutRef={aboutRef}/>
					</div>
					{/* <div className='bg-white'>
						<ClaimLandingSection />
					</div> */}
					<div className='!bg-[#eff6ff] relative'>
						{/* <NewFeatures /> */}
						<NewFeatures/>
					</div>

						
					<div className='!bg-[#eff6ff] relative'>
						<FeaturesGrid />
					</div>
					<div ref={aboutRef} className='!bg-white relative'>
						<InfoSection />
					</div>
					<div className='relative'>
      				<Testimonials 
        				testimonials={sampleTestimonials}
        					logos={sampleLogos}
      					/>
    				</div>
					<div ref={FqRef} className='relative bg-white' >
						<HomeFAQs />
					</div>
					<div ref={contactRef} className='bg-white relative' >
						<ContactForm />
					</div>
					<div className='bg-white'>
						{/* <MainFooter /> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;

