import React from 'react';
import Link from 'next/link';
import { Clock, CheckCircle2, AlertCircle, ArrowRight, Video } from 'lucide-react';

const STATS = [
  { label: 'Active Projects', value: '2', icon: <Clock className="w-6 h-6 text-blue-500" />, bg: 'bg-blue-50' },
  { label: 'Pending Review', value: '1', icon: <AlertCircle className="w-6 h-6 text-amber-500" />, bg: 'bg-amber-50' },
  { label: 'Completed', value: '14', icon: <CheckCircle2 className="w-6 h-6 text-green-500" />, bg: 'bg-green-50' },
];

const RECENT_PROJECTS = [
  {
    id: 'PRJ-8392',
    name: 'Q3 Marketing Campaign Video',
    service: 'Corporate & Promo',
    status: 'In Progress',
    statusColor: 'bg-blue-100 text-blue-700',
    delivery: 'Oct 12, 2026',
  },
  {
    id: 'PRJ-8391',
    name: 'TikTok Ads Batch (October)',
    service: 'Short-Form Content',
    status: 'Review Pending',
    statusColor: 'bg-amber-100 text-amber-700',
    delivery: 'Oct 10, 2026',
  },
  {
    id: 'PRJ-8350',
    name: 'Product Launch Explainer',
    service: 'YouTube Standard',
    status: 'Completed',
    statusColor: 'bg-green-100 text-green-700',
    delivery: 'Sep 28, 2026',
  }
];

export default function DashboardPage() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-forest-ink font-editorial tracking-tight">Welcome back, Alex!</h1>
          <p className="text-smoke mt-2 text-lg">Here is what's happening with your projects today.</p>
        </div>
        <Link 
          href="/project/new"
          className="h-12 px-6 bg-lime-spark text-forest-ink rounded-buttons font-bold flex items-center justify-center gap-2 hover:bg-[#bce635] transition-all shadow-sm shrink-0 hover:scale-105"
        >
          <Video className="w-5 h-5 fill-forest-ink" />
          Start New Project
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {STATS.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex items-center gap-5 hover:shadow-md transition-shadow">
            <div className={`w-14 h-14 rounded-[16px] flex items-center justify-center shrink-0 ${stat.bg}`}>
              {stat.icon}
            </div>
            <div>
              <div className="text-3xl font-bold text-forest-ink mb-0.5">{stat.value}</div>
              <div className="text-sm font-semibold text-smoke">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Projects Table */}
      <div className="bg-white rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-white">
          <h2 className="text-xl font-bold text-forest-ink">Recent Projects</h2>
          <Link href="#all-projects" className="text-sm font-bold text-carbon flex items-center gap-1 hover:text-lime-spark transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-4 text-xs font-bold text-smoke uppercase tracking-wider">Project</th>
                <th className="px-8 py-4 text-xs font-bold text-smoke uppercase tracking-wider">Service</th>
                <th className="px-8 py-4 text-xs font-bold text-smoke uppercase tracking-wider">Status</th>
                <th className="px-8 py-4 text-xs font-bold text-smoke uppercase tracking-wider">Est. Delivery</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {RECENT_PROJECTS.map((project) => (
                <tr key={project.id} className="hover:bg-slate-50/80 transition-colors group cursor-pointer bg-white">
                  <td className="px-8 py-5">
                    <div className="font-bold text-carbon group-hover:text-forest-ink transition-colors text-base">{project.name}</div>
                    <div className="text-xs font-medium text-smoke mt-1">{project.id}</div>
                  </td>
                  <td className="px-8 py-5 text-sm text-smoke font-medium">
                    {project.service}
                  </td>
                  <td className="px-8 py-5">
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm text-carbon font-bold">
                    {project.delivery}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
