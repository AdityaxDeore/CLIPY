"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Video, MonitorPlay, Clapperboard, Briefcase, Upload, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const VIDEO_TYPES = [
  { id: 'short-form', title: 'Short-Form Content', icon: <Video className="w-8 h-8 text-lime-spark" />, desc: 'TikToks, Reels, YouTube Shorts' },
  { id: 'youtube-standard', title: 'YouTube Standard', icon: <MonitorPlay className="w-8 h-8 text-lime-spark" />, desc: 'Standard videos, vlogs, talking-head' },
  { id: 'corporate-promo', title: 'Corporate & Promo', icon: <Briefcase className="w-8 h-8 text-lime-spark" />, desc: 'Business videos, product launches' },
  { id: 'documentary', title: 'Documentary Style', icon: <Clapperboard className="w-8 h-8 text-lime-spark" />, desc: 'Deep storytelling, long-form content' },
];

const INSTRUCTION_TEMPLATES = [
  { label: 'Fast-paced (TikTok)', text: 'Pacing: Fast & energetic with jump cuts.\nCaptions: Bold, dynamic, animated words.\nMusic: Trendy, upbeat.\nExtras: Add sound effects for pop-ups.' },
  { label: 'Corporate Polish', text: 'Pacing: Smooth & professional.\nGraphics: Clean lower-thirds for speakers.\nMusic: Subtle corporate/ambient background.\nBranding: Use my attached logo and brand colors.' },
  { label: 'Vlog/Story', text: 'Pacing: Natural flow, keep the funny outtakes.\nMusic: Upbeat chill/lo-fi.\nStyle: Simple cuts, smooth zooms, text for context.' }
];

export default function NewProjectWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [videoType, setVideoType] = useState('');
  const [projectName, setProjectName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const handleNext = () => {
    if (step === 1 && !videoType) return;
    if (step === 2 && (!projectName || !instructions)) return;
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate payment and submission
    setTimeout(() => {
      router.push('/dashboard');
    }, 2000);
  };

  // Calculate mock price based on type
  const getPrice = () => {
    if (videoType === 'short-form') return '$49';
    if (videoType === 'youtube-standard') return '$149';
    if (videoType === 'corporate-promo') return '$299';
    if (videoType === 'documentary') return '$499';
    return '$0';
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="w-full bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-[1000px] mx-auto flex items-center justify-between">
          <Link href="/" className="font-editorial text-2xl font-bold text-forest-ink">
            Edit<span className="text-green-500 drop-shadow-sm">Flow</span>
          </Link>
          <Link href="/dashboard" className="text-sm font-medium text-smoke hover:text-carbon">
            Cancel
          </Link>
        </div>
      </nav>

      <main className="pt-12 pb-24 px-6 max-w-[800px] mx-auto">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full -z-10"></div>
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-lime-spark rounded-full -z-10 transition-all duration-500"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          ></div>
          
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors border-2 
                ${step >= i ? 'bg-forest-ink text-white border-forest-ink' : 'bg-white text-smoke border-gray-200'}`}
            >
              {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
            </div>
          ))}
        </div>

        {/* Step 1: Video Type */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl font-bold text-forest-ink font-editorial mb-2">What kind of video do you need?</h1>
            <p className="text-smoke mb-8">Select the style that best matches your project.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {VIDEO_TYPES.map((type) => (
                <div 
                  key={type.id}
                  onClick={() => setVideoType(type.id)}
                  className={`p-6 rounded-[20px] border-2 cursor-pointer transition-all flex flex-col items-start gap-4 
                    ${videoType === type.id ? 'border-lime-spark bg-lime-spark/5' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                >
                  <div className={`w-14 h-14 rounded-[16px] flex items-center justify-center shrink-0 ${videoType === type.id ? 'bg-lime-spark text-forest-ink' : 'bg-forest-ink text-white'}`}>
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-forest-ink text-lg">{type.title}</h3>
                    <p className="text-sm text-smoke mt-1">{type.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button 
                onClick={handleNext}
                disabled={!videoType}
                className="h-12 px-8 bg-forest-ink text-white rounded-buttons font-bold flex items-center gap-2 hover:bg-carbon transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                Next Step <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Project Details */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl font-bold text-forest-ink font-editorial mb-2">Tell us about your project</h1>
            <p className="text-smoke mb-8">Provide your raw files and editing instructions.</p>
            
            <div className="space-y-6 mb-10">
              <div>
                <label className="block text-sm font-semibold text-carbon mb-2">Project Name</label>
                <input 
                  type="text" 
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full h-12 px-4 rounded-[12px] border border-gray-200 focus:outline-none focus:border-forest-ink focus:ring-1 focus:ring-forest-ink transition-colors text-carbon" 
                  placeholder="e.g., October TikTok Batch"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-carbon mb-2">Editing Instructions & Notes</label>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs text-smoke font-medium">Templates:</span>
                  {INSTRUCTION_TEMPLATES.map((t, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setInstructions(t.text)}
                      className="text-xs px-3 py-1.5 bg-slate-100 text-carbon hover:bg-slate-200 rounded-[8px] font-medium transition-colors border border-gray-200"
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
                <textarea 
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  className="w-full p-4 rounded-[12px] border border-gray-200 focus:outline-none focus:border-forest-ink focus:ring-1 focus:ring-forest-ink transition-colors text-carbon h-32 resize-none" 
                  placeholder="Describe your vision, pacing, music preferences, etc. Or click a template above to start."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-carbon mb-2">Raw Files (Google Drive, Dropbox, or Frame.io link)</label>
                <input 
                  type="url" 
                  className="w-full h-12 px-4 rounded-[12px] border border-gray-200 focus:outline-none focus:border-forest-ink focus:ring-1 focus:ring-forest-ink transition-colors text-carbon" 
                  placeholder="https://"
                />
              </div>

              <label 
                htmlFor="file-upload"
                className="block p-8 rounded-[16px] border-2 border-dashed border-gray-200 bg-white text-center hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <input id="file-upload" type="file" className="hidden" multiple onChange={handleFileChange} />
                <Upload className="w-8 h-8 text-smoke mx-auto mb-3" />
                <p className="text-sm font-semibold text-carbon">Click to browse or drag and drop files here</p>
                <p className="text-xs text-smoke mt-1">Up to 10GB per file</p>
              </label>

              {selectedFiles.length > 0 && (
                <div className="mt-4 p-4 rounded-[12px] bg-slate-50 border border-gray-100">
                  <h4 className="text-xs font-bold text-carbon mb-2 uppercase tracking-wider">Selected Files ({selectedFiles.length})</h4>
                  <ul className="space-y-2 max-h-[150px] overflow-y-auto">
                    {selectedFiles.map((file, i) => (
                      <li key={i} className="text-sm text-smoke flex items-center justify-between">
                        <span className="truncate pr-4">{file.name}</span>
                        <span className="shrink-0">{(file.size / (1024 * 1024)).toFixed(2)} MB</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center">
              <button 
                onClick={handleBack}
                className="h-12 px-6 text-carbon font-semibold flex items-center gap-2 hover:bg-gray-100 rounded-[12px] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button 
                onClick={handleNext}
                disabled={!projectName || !instructions}
                className="h-12 px-8 bg-forest-ink text-white rounded-buttons font-bold flex items-center gap-2 hover:bg-carbon transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                Review & Pay <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Payment & Submission */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl font-bold text-forest-ink font-editorial mb-2">Almost done!</h1>
            <p className="text-smoke mb-8">Review your project and complete the payment.</p>
            
            <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm mb-8">
              <h3 className="font-bold text-forest-ink text-xl mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-start pb-4 border-b border-gray-100">
                  <div>
                    <div className="font-semibold text-carbon">{VIDEO_TYPES.find(v => v.id === videoType)?.title}</div>
                    <div className="text-sm text-smoke mt-1">Professional editing service</div>
                  </div>
                  <div className="font-bold text-forest-ink text-xl">{getPrice()}</div>
                </div>
                
                <div className="flex justify-between items-center text-sm text-smoke font-medium">
                  <span>Project Name</span>
                  <span className="text-carbon">{projectName}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-smoke font-medium">
                  <span>Revisions Included</span>
                  <span className="text-carbon">Yes</span>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-[16px] border border-gray-200">
                <h4 className="font-semibold text-carbon mb-4 text-sm uppercase tracking-wider">Payment Details</h4>
                <div className="space-y-3">
                  <input type="text" placeholder="Card Number" className="w-full h-11 px-4 rounded-[8px] border border-gray-200 text-sm" />
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="MM/YY" className="w-full h-11 px-4 rounded-[8px] border border-gray-200 text-sm" />
                    <input type="text" placeholder="CVC" className="w-full h-11 px-4 rounded-[8px] border border-gray-200 text-sm" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button 
                onClick={handleBack}
                disabled={isSubmitting}
                className="h-12 px-6 text-carbon font-semibold flex items-center gap-2 hover:bg-gray-100 rounded-[12px] transition-colors disabled:opacity-50"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="h-12 px-10 bg-lime-spark text-forest-ink rounded-buttons font-bold flex items-center justify-center gap-2 hover:bg-[#bce635] hover:-translate-y-0.5 transition-all disabled:opacity-50 shadow-sm"
              >
                {isSubmitting ? 'Processing...' : `Pay ${getPrice()} & Submit`}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
