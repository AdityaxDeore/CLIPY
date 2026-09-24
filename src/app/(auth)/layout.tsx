import React from 'react';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex font-sans">
      {/* Left side - Full height video */}
      <div className="hidden lg:flex w-1/2 relative bg-forest-ink overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="https://cdn.coverr.co/videos/coverr-editing-a-video-on-a-macbook-2808/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-ink via-forest-ink/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-12 text-white z-10 w-full">
          <Link href="/" className="font-editorial text-3xl font-bold mb-8 block">
            Edit<span className="text-green-500 drop-shadow-sm">Flow</span>
          </Link>
          <h2 className="text-4xl lg:text-5xl font-bold font-editorial mb-5 leading-[1.1]">
            Stop bidding. <br /> Start creating.
          </h2>
          <p className="text-mist/90 text-lg max-w-md font-medium leading-relaxed">
            Join the only marketplace that offers structured, predictable, and professional video editing services without the hassle.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 relative">
        <div className="absolute top-8 left-8 lg:hidden">
          <Link href="/" className="font-editorial text-2xl font-bold text-forest-ink">
            Edit<span className="text-green-500 drop-shadow-sm">Flow</span>
          </Link>
        </div>
        <div className="w-full max-w-[440px]">
          {children}
        </div>
      </div>
    </div>
  );
}
