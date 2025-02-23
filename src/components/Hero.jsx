import React from 'react';

const Hero = () => {
    return (
        <div>
            <section className="bg-primary text-white text-center py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-white mb-4">Welcome to Our Website</h1>
                    <p className="text-xl text-white mb-6">We provide the best solutions for your business.</p>
                    <a href="#services" className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-300 transition duration-300">Get Started</a>
                </div>
            </section>
        </div>
    );
};

export default Hero;
