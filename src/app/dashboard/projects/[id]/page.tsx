"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, CheckCircle2, MessageSquare, Download, Play, Send, FileVideo, AlertCircle } from 'lucide-react';

export function generateStaticParams() {
  // Since we don't have a database yet, pre-render some mock project IDs
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function ProjectWorkspace({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('tracking');
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Sarah M. (Editor)', text: 'Hi! I received your raw files. I will start the assembly cut today.', time: '10:00 AM', isEditor: true },
    { id: 2, sender: 'You', text: 'Great! Please make sure to emphasize the product shots.', time: '10:15 AM', isEditor: false },
    { id: 3, sender: 'Sarah M. (Editor)', text: 'Absolutely. I will add some punchy transitions there.', time: '10:20 AM', isEditor: true },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: 'You', text: chatInput, time: 'Just now', isEditor: false }]);
    setChatInput('');
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
        <Link href="/dashboard/projects" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-smoke hover:text-carbon hover:bg-gray-50 transition-colors shrink-0">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-forest-ink font-editorial">October TikTok Batch</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
              Editing
            </span>
          </div>
          <p className="text-smoke text-sm mt-1">{params.id} • Short-Form Content • Ordered Oct 12, 2026</p>
        </div>
      </div>

      {/* Workspace Navigation */}
      <div className="flex items-center gap-6 border-b border-gray-200 mb-8 overflow-x-auto">
        {['tracking', 'chat', 'files', 'deliverables'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm font-bold capitalize transition-colors relative whitespace-nowrap ${activeTab === tab ? 'text-forest-ink' : 'text-smoke hover:text-carbon'}`}
          >
            {tab}
            {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-lime-spark rounded-t-full"></div>}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-4 sm:p-8 min-h-[500px]">
        
        {/* TRACKING TAB */}
        {activeTab === 'tracking' && (
          <div className="max-w-2xl mx-auto py-4 sm:py-8">
            <h3 className="text-xl font-bold text-forest-ink mb-8">Project Timeline</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              
              {/* Step 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-green-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-[16px] bg-slate-50 border border-gray-100">
                  <div className="font-bold text-forest-ink mb-1">Requirements Submitted</div>
                  <div className="text-sm text-smoke">Oct 12, 2026 • 09:30 AM</div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-green-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-[16px] bg-slate-50 border border-gray-100">
                  <div className="font-bold text-forest-ink mb-1">Editor Assigned</div>
                  <div className="text-sm text-smoke">Sarah M. started working on your project.</div>
                </div>
              </div>

              {/* Step 3 (Current) */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                  <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-[16px] bg-blue-50 border border-blue-100 shadow-sm">
                  <div className="font-bold text-blue-900 mb-1">Editing in Progress</div>
                  <div className="text-sm text-blue-700">Expected draft delivery: Oct 14</div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-200 text-gray-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-[16px] bg-white border border-gray-100 opacity-50">
                  <div className="font-bold text-carbon mb-1">First Draft Review</div>
                  <div className="text-sm text-smoke">Pending</div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* CHAT TAB */}
        {activeTab === 'chat' && (
          <div className="flex flex-col h-[500px]">
            <div className="flex-1 overflow-y-auto pr-4 space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.isEditor ? 'items-start' : 'items-end'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-carbon">{msg.sender}</span>
                    <span className="text-xs text-smoke">{msg.time}</span>
                  </div>
                  <div className={`p-4 max-w-[80%] rounded-[16px] ${msg.isEditor ? 'bg-slate-50 border border-gray-100 text-carbon rounded-tl-none' : 'bg-forest-ink text-white rounded-tr-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <form onSubmit={handleSendMessage} className="flex flex-col sm:flex-row items-center gap-3">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type a message to your editor..." 
                  className="w-full sm:flex-1 h-12 px-4 rounded-[12px] bg-slate-50 border border-gray-200 focus:outline-none focus:border-forest-ink focus:ring-1 focus:ring-forest-ink text-carbon"
                />
                <button type="submit" className="w-full sm:w-auto h-12 px-6 bg-lime-spark text-forest-ink font-bold rounded-[12px] hover:bg-[#bce635] transition-colors flex items-center justify-center gap-2 shrink-0">
                  Send <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* FILES TAB */}
        {activeTab === 'files' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-forest-ink">Raw Files & Assets</h3>
              <button className="text-sm font-bold text-forest-ink bg-slate-100 px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors">Add Files</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((file) => (
                <div key={file} className="p-4 border border-gray-100 rounded-[16px] flex items-start gap-4 hover:border-gray-300 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-lg bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                    <FileVideo className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="font-semibold text-carbon truncate group-hover:text-forest-ink">A_Cam_Take_{file}.mp4</div>
                    <div className="text-xs text-smoke mt-1">1.2 GB • Uploaded Oct 12</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DELIVERABLES TAB */}
        {activeTab === 'deliverables' && (
          <div className="flex flex-col items-center justify-center h-[400px] text-center">
            <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-forest-ink mb-2">Editor is working their magic</h3>
            <p className="text-smoke max-w-md mx-auto mb-8">Your first draft is currently being edited. We'll notify you via email as soon as it's ready for your review.</p>
            <div className="flex items-center gap-2 text-sm font-bold text-carbon bg-slate-50 px-6 py-3 rounded-full border border-gray-200">
              <AlertCircle className="w-4 h-4 text-blue-500" />
              Expected Delivery: Oct 14, 2026
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
