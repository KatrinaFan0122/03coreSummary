import React from 'react';
import { Rocket, Target, TrendingUp, BarChart3, Sparkles } from 'lucide-react';

export function WorkflowDiagram() {
  const stages = [
    {
      title: 'MVP 发射',
      icon: Rocket,
      description: '用最小代价验证未想法，重点是Landing Page和测试。',
      status: 'locked',
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-400'
    },
    {
      title: 'PMF 验证',
      icon: Target,
      description: '深入用户，优化价值呈现，瞄准用你"真正用户"主心。',
      status: 'locked',
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-400'
    },
    {
      title: 'GTM 策略',
      icon: TrendingUp,
      description: '将营销本质，找到你与客服的中间一里路上。',
      status: 'locked',
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-400'
    },
    {
      title: '商业沙盘',
      icon: BarChart3,
      description: '跟踪关键财数，透视金融结构，逐级优化单位经济。',
      status: 'locked',
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-400'
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8">
      <div className="flex items-center gap-2 mb-8">
        <Sparkles className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl text-gray-900 font-semibold">你的第一公里航程</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          
          return (
            <div key={index} className="relative">
              {/* Stage Card */}
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer h-full border border-gray-200">
                {/* Icon */}
                <div className={`w-14 h-14 ${stage.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${stage.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-gray-900 font-semibold mb-3">{stage.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {stage.description}
                </p>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span className="text-xs text-gray-500">锁定</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}