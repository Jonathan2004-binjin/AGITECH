import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navigation */}
            <nav className="bg-white fixed w-full z-50 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center">
                                <span className="text-2xl font-bold text-green-600">AgriTech</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="#home" className="text-gray-700 hover:text-green-600 font-medium transition duration-300">Home</Link>
                            <Link href="#features" className="text-gray-700 hover:text-green-600 font-medium transition duration-300">Features</Link>
                            <Link href="#testimonials" className="text-gray-700 hover:text-green-600 font-medium transition duration-300">Testimonials</Link>
                            <Link href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition duration-300">Contact</Link>

                            <div className="flex items-center space-x-4">
                                <Link href="#login" className="text-green-600 font-semibold hover:text-green-700 transition duration-300">
                                    Login
                                </Link>
                                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300">
                                    Get Started
                                </Button>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <MobileMenuButton />
                    </div>

                    {/* Mobile Navigation */}
                    <MobileMenu />
                </div>
            </nav>

            {/* Spacer */}
            <div className="h-20"></div>

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="hero-gradient text-white">
                    <div className="container mx-auto px-4 py-24">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                    Revolutionize Your <span className="text-[#E2C87D]">Agricultural</span> Future
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-200">
                                    Harness the power of precision agriculture with data-driven insights and smart automation
                                </p>
                                <div className="flex gap-4">
                                    <Button className="custom-button px-8 py-4 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition duration-300">
                                        Start Free Trial
                                        <ChevronRight className="ml-2 h-5 w-5" />
                                    </Button>
                                    <Button variant="outline" className="border-2 border-[#E2C87D] text-[#E2C87D] hover:bg-[#E2C87D] hover:text-[#234B56] px-8 py-4 rounded-lg font-bold text-lg transition duration-300">
                                        Watch Demo
                                    </Button>
                                </div>
                                <div className="mt-8 flex items-center space-x-2 text-gray-200">
                                    <Check className="h-6 w-6 text-[#E2C87D]" />
                                    <span>Trusted by 10,000+ Farmers Worldwide</span>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 relative">
                                <Image
                                    src="/aerial-farm-image.jpg"
                                    alt="Aerial view of modern farming"
                                    width={600}
                                    height={500}
                                    className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                                    <p className="text-[#234B56] font-bold">Precision Farming Solutions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <FeatureSection />

                {/* Testimonials Section */}
                <TestimonialsSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

// Separate components
function MobileMenuButton() {
    return (
        <div className="md:hidden">
            <Button variant="ghost" id="mobile-menu-button" className="text-gray-700 hover:text-green-600 focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path className="mobile-menu-icon" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </Button>
        </div>
    )
}

function MobileMenu() {
    return (
        <div id="mobile-menu" className="hidden md:hidden pb-6">
            {/* Mobile menu content */}
        </div>
    )
}

function FeatureSection() {
    const features = [
        {
            icon: "soil-icon",
            title: "Soil Health Monitoring",
            description: "Real-time soil analysis for optimal nutrient management."
        },
        // Add other features...
    ]

    return (
        <section id="features" className="py-24 bg-white">
            {/* Features content */}
        </section>
    )
}

function TestimonialsSection() {
    const testimonials = [
        {
            name: "John Smith",
            role: "Wheat Farmer, Kansas",
            quote: "Since implementing AgriTech Solutions, our crop yield has increased by 40% while reducing water usage.",
            image: "/farmer1.jpg"
        },
        // Add other testimonials...
    ]

    return (
        <section id="testimonials" className="bg-green-50 py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">Success Stories</h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="testimonialSwiper"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard {...testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

function TestimonialCard({ name, role, quote, image }) {
    return (
        <Card className="bg-white p-8 rounded-xl shadow-lg h-full">
            <CardContent className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                    <Image
                        src={image}
                        alt={name}
                        width={64}
                        height={64}
                        className="rounded-full mr-4 object-cover"
                    />
                    <div>
                        <h4 className="font-bold">{name}</h4>
                        <p className="text-gray-600">{role}</p>
                    </div>
                </div>
                <blockquote className="text-lg leading-relaxed text-gray-700">
                    "{quote}"
                </blockquote>
            </CardContent>
        </Card>
    )
}

function Footer() {
    return (
        <footer id="contact" className="bg-green-800 text-white py-12">
            {/* Footer content */}
        </footer>
    )
}