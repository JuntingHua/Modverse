'use client';
import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-4xl font-bold text-navy mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-navy mb-4">Our Story</h2>
          <p className="text-gray-700">Learn about our journey and what drives us forward.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-navy mb-4">Mission</h2>
          <p className="text-gray-700">Discover our mission and the impact we aim to make.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-navy mb-4">Vision</h2>
          <p className="text-gray-700">Explore our vision for the future of technology.</p>
        </div>
      </div>
    </div>
  );
} 