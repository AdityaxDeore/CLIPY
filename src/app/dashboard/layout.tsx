import React from 'react';
import Link from 'next/link';
import { Home, Folder, MessageSquare, Settings, LogOut, PlusCircle } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="p-6 pt-8">
          <Link href="/" className="font-editorial text-2xl font-bold text-forest-ink">
            Edit<span className="text-green-500 drop-shadow-sm">Flow</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2 mt-4">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-lime-spark/20 text-forest-ink rounded-[16px] font-medium transition-colors">
            <Home className="w-5 h-5" />
            Dashboard
          </Link>
          <Link href="/dashboard/projects" className="flex items-center gap-3 px-4 py-3 text-smoke hover:bg-mist hover:text-carbon rounded-[16px] font-medium transition-colors">
            <Folder className="w-5 h-5" />
            My Projects
          </Link>
          <Link href="#messages" className="flex items-center gap-3 px-4 py-3 text-smoke hover:bg-mist hover:text-carbon rounded-[16px] font-medium transition-colors">
            <MessageSquare className="w-5 h-5" />
            Messages
          </Link>
          <Link href="/project/new" className="flex items-center gap-3 px-4 py-3 text-smoke hover:bg-mist hover:text-carbon rounded-[16px] font-medium transition-colors mt-4 border border-dashed border-gray-200">
            <PlusCircle className="w-5 h-5" />
            New Order
          </Link>
        </nav>
        
        <div className="p-4 border-t border-gray-100">
          <Link href="/dashboard/profile" className="flex items-center gap-3 px-4 py-3 text-smoke hover:bg-mist hover:text-carbon rounded-[16px] font-medium transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </Link>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-[16px] font-medium transition-colors mt-1">
            <LogOut className="w-5 h-5" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8 md:p-12">
        {children}
      </main>
    </div>
  );
}
