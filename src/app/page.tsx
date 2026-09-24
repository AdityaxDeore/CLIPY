import React from 'react';
import Link from 'next/link';
import { Play, Sparkles } from 'lucide-react';

import Skiper39 from './skiper39';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="absolute top-0 w-full px-4 sm:px-6 py-6 z-50 left-1/2 -translate-x-1/2 max-w-[1200px]">
        <div className="flex items-center justify-between bg-white/70 backdrop-blur-md px-6 py-3 rounded-[24px] border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          <Link href="/" className="font-editorial text-2xl font-bold text-forest-ink">
            Edit<span className="text-green-500 drop-shadow-sm">Flow</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-sm font-medium text-carbon hover:text-lime-spark transition-colors">
              Services
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-carbon hover:text-lime-spark transition-colors">
              How it Works
            </Link>
            <Link href="#reviews" className="text-sm font-medium text-carbon hover:text-lime-spark transition-colors">
              Reviews
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden md:block text-sm font-medium text-carbon hover:opacity-70 transition-opacity">
              Log In
            </Link>
            <Link href="/project/new" className="h-10 px-5 bg-forest-ink text-white rounded-buttons text-sm font-medium flex items-center justify-center hover:bg-carbon hover:scale-105 transition-all">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative h-screen w-full">
        <Skiper39 />
      </div>
      
      <main className="pt-32 pb-24 relative">
        <section className="max-w-[1200px] mx-auto text-center px-6">
          <div className="inline-flex items-center gap-1.5 mb-8">
            <div className="flex gap-0.5 text-lime-spark">
              {[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
            </div>
            <span className="text-[12px] text-smoke font-medium">Rated 4.8/5 from 10,000+ reviews</span>
          </div>

          <p className="text-[16px] text-smoke font-normal max-w-[560px] mx-auto leading-body mb-10">
            Your audience prefers video. Wow them with VEED, the fastest and easiest way to make professional-quality videos.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link href="/project/new" className="h-[48px] px-[24px] bg-lime-spark text-forest-ink border border-forest-ink rounded-buttons text-[14px] font-semibold flex items-center justify-center gap-2 hover:bg-[#85e617] transition-all">
              Start for free
              <Play className="w-4 h-4 fill-forest-ink" />
            </Link>
            <button className="h-[48px] px-[24px] bg-transparent text-charcoal border-none rounded-buttons text-[14px] font-semibold flex items-center justify-center gap-2 hover:bg-mist transition-colors">
              AI Edit
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
