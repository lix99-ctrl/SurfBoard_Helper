import React from 'react';
import SurfForm from './_components/SurfForm';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple Header / Nav Bar */}
      <header className="border-b border-gray-100 py-4 px-6 max-w-5xl mx-auto flex justify-between items-center">
        <span className="font-extrabold tracking-tight text-lg">THE BOARDROOMAPP</span>
        <nav className="space-x-6 text-sm font-medium">
          <Link href="/" className="text-blue-600">Calculator</Link>
          <Link href="/catalog" className="text-gray-600 hover:text-black">All Boards</Link>
        </nav>
      </header>

      {/* Hero Section matching a friendly blog tone */}
      <main className="max-w-2xl mx-auto py-12 px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight mb-3">Find Your Ideal Surfboard Volume</h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Hey! Tired of guessing your liters? Use this quick calculator—built with wave height adjustments and 50+ board models—to dial in the exact flotation you need for your next session.
          </p>
        </div>

        {/* The Calculator Box */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <SurfForm />
        </div>

        {/* Quick Footer/Guide Note */}
        <div className="mt-12 text-center border-t border-gray-100 pt-6 text-xs text-gray-400">
          <p>Designed to help you spend less time guessing and more time surfing.</p>
        </div>
      </main>
    </div>
  );
}

















