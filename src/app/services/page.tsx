import React from 'react';
import Link from 'next/link';
import { Video, MonitorPlay, Clapperboard, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    id: 'short-form',
    title: 'Short-Form Content',
    description: 'Perfect for TikToks, Instagram Reels, and YouTube Shorts. Fast-paced editing with engaging subtitles and effects.',
    price: '$49',
    delivery: '24-48 Hours',
    icon: <Video className="w-8 h-8 text-lime-spark" />,
    features: ['Up to 60 seconds', 'Engaging Captions', 'Trending Transitions', '1 Revision Included']
  },
  {
    id: 'youtube-standard',
    title: 'YouTube Standard',
    description: 'High-retention editing for standard YouTube videos, vlogs, and talking-head content.',
    price: '$149',
    delivery: '3-4 Days',
    icon: <MonitorPlay className="w-8 h-8 text-lime-spark" />,
    features: ['Up to 15 minutes', 'A/B Roll editing', 'Sound Design & Mixing', 'Color Grading', '2 Revisions Included']
  },
  {
    id: 'corporate-promo',
    title: 'Corporate & Promo',
    description: 'Professional, polished video editing for businesses, product launches, and advertisements.',
    price: '$299',
    delivery: '5-7 Days',
    icon: <Briefcase className="w-8 h-8 text-lime-spark" />,
    features: ['Up to 5 minutes', 'Premium Stock Footage', 'Motion Graphics', 'Advanced Color Grading', '3 Revisions Included']
  },
  {
    id: 'documentary',
    title: 'Documentary Style',
    description: 'Deep storytelling, cinematic pacing, and intricate sound design for long-form content.',
    price: '$499',
    delivery: '7-10 Days',
    icon: <Clapperboard className="w-8 h-8 text-lime-spark" />,
    features: ['Up to 30 minutes', 'Narrative Structuring', 'Cinematic Soundscapes', 'Extensive Color Grading', 'Unlimited Revisions']
  }
];

export default function ServicesCatalog() {
  return (
    <div className="min-h-screen bg-slate-50 text-carbon font-sans">
      {/* Navigation Bar */}
      <nav className="w-full bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Link href="/" className="font-editorial text-2xl font-bold text-forest-ink">
            Edit<span className="text-green-500 drop-shadow-sm">Flow</span>
          </Link>
          <div className="flex gap-4">
            <Link href="/login" className="px-4 py-2 text-sm font-medium text-smoke hover:text-carbon transition-colors">
              Log In
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-20 pb-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-lime-spark/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-editorial text-4xl md:text-5xl text-forest-ink mb-6">
              Straightforward Video Editing. <br />
              <span className="text-carbon/80">No Bidding Required.</span>
            </h1>
            <p className="text-lg text-smoke">
              Select a service, upload your raw footage, and let our verified professionals handle the rest. Clear pricing, structured revisions, guaranteed quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                className="group relative bg-white rounded-[24px] p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-lime-spark/50 transition-all duration-300 flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-forest-ink flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <span className="block text-3xl font-bold text-forest-ink">{service.price}</span>
                    <span className="text-sm text-smoke font-medium">Flat Rate</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-forest-ink mb-3">{service.title}</h3>
                <p className="text-smoke mb-6 min-h-[48px]">{service.description}</p>
                
                <div className="mb-8 flex-grow">
                  <h4 className="text-sm font-semibold text-carbon uppercase tracking-wider mb-4">What's Included</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-lime-spark shrink-0" />
                        <span className="text-smoke">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <span className="text-sm font-medium text-smoke">
                    ⏱ Est. Delivery: {service.delivery}
                  </span>
                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-buttons bg-forest-ink text-white font-medium hover:bg-carbon transition-colors group-hover:bg-lime-spark group-hover:text-forest-ink"
                  >
                    Select Service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
