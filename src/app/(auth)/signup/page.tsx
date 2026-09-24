"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Bypass authentication for now and route to dashboard
    router.push('/dashboard');
  };

  return (
    <div className="w-full">
      <div className="mb-10 text-center lg:text-left">
        <h1 className="text-3xl font-bold text-forest-ink font-editorial tracking-tight mb-3">Create your account</h1>
        <p className="text-smoke text-base">Start requesting professional video edits in minutes.</p>
      </div>

      <form className="space-y-5" onSubmit={handleAuth}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-carbon mb-1.5" htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              className="w-full h-12 px-4 rounded-[12px] border border-gray-200 focus:outline-none focus:border-forest-ink focus:ring-1 focus:ring-forest-ink transition-colors text-carbon placeholder:text-gray-400" 
              placeholder="Alex"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-carbon mb-1.5" htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              className="w-full h-12 px-4 rounded-[12px] border border-gray-200 focus:outline-none focus:border-forest-ink focus:ring-1 focus:ring-forest-ink transition-colors text-carbon placeholder:text-gray-400" 
              placeholder="Smith"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-carbon mb-1.5" htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            className="w-full h-12 px-4 rounded-[12px] border border-gray-200 focus:outline-none focus:border-forest-ink focus:ring-1 focus:ring-forest-ink transition-colors text-carbon placeholder:text-gray-400" 
            placeholder="you@company.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-carbon mb-1.5" htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            className="w-full h-12 px-4 rounded-[12px] border border-gray-200 focus:outline-none focus:border-forest-ink focus:ring-1 focus:ring-forest-ink transition-colors text-carbon placeholder:text-gray-400" 
            placeholder="Create a strong password"
          />
        </div>

        <button 
          type="submit" 
          className="w-full h-12 mt-4 bg-lime-spark text-forest-ink rounded-[12px] font-bold hover:bg-[#bce635] hover:-translate-y-0.5 transition-all shadow-sm"
        >
          Sign Up Free
        </button>
      </form>

      <div className="mt-8 relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative px-4 bg-white text-sm text-smoke font-medium">Or continue with</div>
      </div>

      <div className="mt-8">
        <button type="button" className="w-full h-12 bg-white border border-gray-200 text-carbon rounded-[12px] font-bold flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-sm">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Google
        </button>
      </div>

      <p className="mt-10 text-center text-sm text-smoke font-medium">
        Already have an account? <Link href="/login" className="text-forest-ink hover:text-green-500 transition-colors font-bold">Log in</Link>
      </p>
    </div>
  );
}
