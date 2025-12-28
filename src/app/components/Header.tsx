import React from 'react';
import { Bell, HelpCircle, ChevronRight } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>第一公里</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900">控制台</span>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg transition-colors">
          <HelpCircle className="w-5 h-5" />
        </button>
        <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}