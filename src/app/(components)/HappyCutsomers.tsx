"use client";
import { useState, useEffect } from "react";

export default function HappyCustomers() {
    const reviews = [
        {
            name: "Sarah",
            review: "Amazing quality and attention to detail. I love how stylish and comfortable my new outfit is!",
            rating: 5,
        },
        {
            name: "John",
            review: "The service was outstanding! My order arrived on time, and everything was packaged perfectly.",
            rating: 4,
        },
        {
            name: "Emily",
            review: "Fantastic experience! I appreciate the variety of styles and how easy it was to find what I needed.",
            rating: 5,
        },
        {
            name: "Michael",
            review: "Excellent customer support. They went above and beyond to help me!",
            rating: 4,
        },
        {
            name: "Sophia",
            review: "Great selection of styles and very comfortable materials. Highly recommend!",
            rating: 5,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleReviews, setVisibleReviews] = useState(1);

    // Detect screen size and update visible reviews
    useEffect(() => {
        const updateVisibleReviews = () => {
            setVisibleReviews(window.innerWidth >= 768 ? 3 : 1);
        };

        updateVisibleReviews();
        window.addEventListener("resize", updateVisibleReviews);

        return () => {
            window.removeEventListener("resize", updateVisibleReviews);
        };
    }, []);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const displayedReviews =
        visibleReviews === 1
            ? [reviews[currentIndex]]
            : reviews.slice(currentIndex, currentIndex + visibleReviews);

    return (
        <section className="py-16 bg-white">
            <div className="relative">
                {/* Header and Arrows */}
                <div className="flex justify-between items-center mb-6 px-4 md:px-10">
                    <h2 className="text-3xl font-bold">Our Happy Customers</h2>
                    <div className="hidden md:flex gap-4">
                        <button
                            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
                            onClick={handlePrevious}
                        >
                            ←
                        </button>
                        <button
                            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
                            onClick={handleNext}
                        >
                            →
                        </button>
                    </div>
                </div>

                {/* Mobile Arrows */}
                <div className="flex md:hidden justify-end pr-2 gap-4 mb-6">
                    <button
                        className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
                        onClick={handlePrevious}
                    >
                        ←
                    </button>
                    <button
                        className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
                        onClick={handleNext}
                    >
                        →
                    </button>
                </div>

                {/* Reviews */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                    {displayedReviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Stars and Verified Badge */}
                            <div className="flex justify-center mb-4">
                                <p className="text-yellow-500 text-lg">
                                    {"⭐".repeat(review.rating)}
                                </p>
                            </div>
                            {/* Name with Verified Tick */}
                            <div className="flex justify-center items-center mb-4">
                                <h3 className="font-bold text-xl">{review.name}</h3>
                                <span
                                    className="ml-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full"
                                    aria-label="Verified"
                                >
                                    ✔
                                </span>
                            </div>
                            {/* Review */}
                            <p className="text-gray-600 text-center">
                                {review.review.length > 90
                                    ? `${review.review.slice(0, 87)}...`
                                    : review.review}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
