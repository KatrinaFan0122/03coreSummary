import React from 'react';
import { Lightbulb, Plus, CheckCircle2 } from 'lucide-react';

export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      {/* 你的创业物种 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8">
        <h3 className="text-lg text-gray-900 font-semibold mb-6">你的创业物种</h3>
        
        <div className="flex flex-col items-center py-8">
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          
          {/* Title */}
          <h4 className="text-xl text-gray-900 font-bold mb-2">造梦船长</h4>
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-6">The Venture Builder</p>
          
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Scalable</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Team Builder</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">System</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Pioneer</span>
          </div>
          
          {/* Button */}
          <button className="px-6 py-2.5 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium">
            查看完整报告
          </button>
        </div>
      </div>

      {/* 创业想法池 */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg text-gray-900 font-semibold">创业想法池 (Idea Pool)</h3>
            <p className="text-sm text-gray-500 mt-1">随时记录，这就是你的创业资源库</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-600/30">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">添加</span>
          </button>
        </div>
        
        {/* Idea Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="我有一个新想法...（例如：为宠物店打造的SaaS软件）"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
          />
        </div>
        
        {/* Idea List */}
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <Lightbulb className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-gray-900">针对自由职业者的税务自动化工具</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <Lightbulb className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-gray-900">基于AI的儿童教育平台生成器</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <Lightbulb className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-gray-900">宠物店专用的会员管理SaaS小程序</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}