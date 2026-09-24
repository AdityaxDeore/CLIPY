import React from 'react';
import { User, Mail, CreditCard, Settings, Shield } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-forest-ink font-editorial mb-2">Profile Settings</h1>
        <p className="text-smoke">Manage your account details and billing information.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-2">
          <button className="w-full flex items-center gap-3 p-4 rounded-[12px] bg-slate-50 text-forest-ink font-bold border border-gray-200">
            <User className="w-5 h-5" /> Personal Info
          </button>
          <button className="w-full flex items-center gap-3 p-4 rounded-[12px] bg-white text-smoke font-medium hover:bg-slate-50 border border-transparent transition-colors">
            <CreditCard className="w-5 h-5" /> Billing & Payments
          </button>
          <button className="w-full flex items-center gap-3 p-4 rounded-[12px] bg-white text-smoke font-medium hover:bg-slate-50 border border-transparent transition-colors">
            <Shield className="w-5 h-5" /> Security
          </button>
          <button className="w-full flex items-center gap-3 p-4 rounded-[12px] bg-white text-smoke font-medium hover:bg-slate-50 border border-transparent transition-colors">
            <Settings className="w-5 h-5" /> Preferences
          </button>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-8">
            <h3 className="text-xl font-bold text-forest-ink mb-6">Personal Information</h3>
            
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-carbon mb-1.5">First Name</label>
                  <input type="text" defaultValue="Alex" className="w-full h-12 px-4 rounded-[12px] border border-gray-200 text-carbon focus:border-forest-ink focus:outline-none focus:ring-1 focus:ring-forest-ink" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-carbon mb-1.5">Last Name</label>
                  <input type="text" defaultValue="Smith" className="w-full h-12 px-4 rounded-[12px] border border-gray-200 text-carbon focus:border-forest-ink focus:outline-none focus:ring-1 focus:ring-forest-ink" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-carbon mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-smoke absolute left-4 top-1/2 -translate-y-1/2" />
                  <input type="email" defaultValue="alex.smith@company.com" className="w-full h-12 pl-12 pr-4 rounded-[12px] border border-gray-200 text-carbon focus:border-forest-ink focus:outline-none focus:ring-1 focus:ring-forest-ink" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-carbon mb-1.5">Company Name (Optional)</label>
                <input type="text" placeholder="Your Company LLC" className="w-full h-12 px-4 rounded-[12px] border border-gray-200 text-carbon focus:border-forest-ink focus:outline-none focus:ring-1 focus:ring-forest-ink" />
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-end">
                <button className="h-12 px-8 bg-forest-ink text-white rounded-buttons font-bold hover:bg-carbon transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
