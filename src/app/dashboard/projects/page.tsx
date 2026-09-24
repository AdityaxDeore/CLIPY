import React from 'react';
import Link from 'next/link';
import { Video, Clock, CheckCircle2, ChevronRight, FileVideo } from 'lucide-react';

const MOCK_PROJECTS = [
  { id: 'PRJ-1029', name: 'October TikTok Batch', type: 'Short-Form Content', status: 'Editing', date: 'Oct 12, 2026', editor: 'Sarah M.' },
  { id: 'PRJ-1028', name: 'Product Launch Promo', type: 'Corporate & Promo', status: 'In Review', date: 'Oct 05, 2026', editor: 'David K.' },
  { id: 'PRJ-1015', name: 'Vlog Ep. 42', type: 'YouTube Standard', status: 'Completed', date: 'Sep 28, 2026', editor: 'Sarah M.' },
];

export default function ProjectsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-forest-ink font-editorial mb-2">My Projects</h1>
          <p className="text-smoke">Track your active orders and project history.</p>
        </div>
        <Link 
          href="/project/new"
          className="h-10 px-6 bg-lime-spark text-forest-ink rounded-[12px] font-bold flex items-center justify-center hover:bg-[#bce635] transition-colors"
        >
          New Project
        </Link>
      </div>

      <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-gray-100 text-sm text-smoke">
              <th className="font-semibold p-4">Project Name</th>
              <th className="font-semibold p-4">Type</th>
              <th className="font-semibold p-4">Status</th>
              <th className="font-semibold p-4">Date</th>
              <th className="font-semibold p-4"></th>
            </tr>
          </thead>
          <tbody>
            {MOCK_PROJECTS.map((project) => (
              <tr key={project.id} className="border-b border-gray-50 hover:bg-slate-50 transition-colors group">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-mist flex items-center justify-center text-forest-ink">
                      <FileVideo className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-forest-ink">{project.name}</div>
                      <div className="text-xs text-smoke">{project.id}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-sm text-carbon font-medium">{project.type}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold
                    ${project.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                      project.status === 'In Review' ? 'bg-orange-100 text-orange-700' : 
                      'bg-blue-100 text-blue-700'}`}
                  >
                    {project.status === 'Completed' && <CheckCircle2 className="w-3 h-3" />}
                    {project.status === 'In Review' && <Clock className="w-3 h-3" />}
                    {project.status === 'Editing' && <Video className="w-3 h-3" />}
                    {project.status}
                  </span>
                </td>
                <td className="p-4 text-sm text-smoke">{project.date}</td>
                <td className="p-4 text-right">
                  <Link href={`/dashboard/projects/${project.id}`} className="inline-flex items-center justify-center w-8 h-8 rounded-full text-smoke hover:bg-gray-200 hover:text-carbon transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
