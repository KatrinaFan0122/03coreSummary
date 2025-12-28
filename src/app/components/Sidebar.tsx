import React, { useState } from 'react';
import { Home, Target, Package, TrendingUp, Rocket, Users, User, ChevronRight, ChevronDown, ChevronLeft, Menu } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export function Sidebar({ activeSection, setActiveSection, isCollapsed, setIsCollapsed }: SidebarProps) {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('Project A: AI Ic...');
  
  const projects = [
    'Project A: AI Ic...',
    'Project B: SaaS Tool',
    'Project C: Pet Store App'
  ];

  const handleProjectSelect = (project: string) => {
    setSelectedProject(project);
    setIsProjectOpen(false);
  };

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-72'} bg-white border-r border-gray-200 h-screen flex flex-col transition-all duration-300 relative`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm z-20"
      >
        {isCollapsed ? (
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
        ) : (
          <ChevronLeft className="w-3.5 h-3.5 text-gray-600" />
        )}
      </button>

      {/* Logo */}
      <div className={`p-6 pb-4 ${isCollapsed ? 'px-4' : ''}`}>
        <button 
          onClick={() => setActiveSection('home')}
          className={`flex items-center gap-3 mb-1 hover:opacity-80 transition-opacity ${isCollapsed ? 'justify-center' : ''}`}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
            <span className="text-white text-xl font-bold">C</span>
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-xl text-gray-900 font-bold">Co-Fo</h1>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Startup OS</p>
            </div>
          )}
        </button>
      </div>

      {/* Mission Control Status */}
      {!isCollapsed && (
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Mission Control</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-xs text-gray-700 font-medium">Step 2/5</span>
            </div>
          </div>
        </div>
      )}

      {isCollapsed && (
        <div className="px-4 py-4 border-b border-gray-200 flex justify-center">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav className={`flex-1 p-4 space-y-1 ${isCollapsed ? 'px-2' : ''}`}>
        <button
          onClick={() => setActiveSection('fpf')}
          className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors ${isCollapsed ? 'justify-center px-2' : ''}`}
          title={isCollapsed ? 'FPF 物种测试' : ''}
        >
          <Target className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="text-sm">FPF 物种测试</span>}
        </button>

        {/* Project Section */}
        <div className={`pt-6 pb-3 ${isCollapsed ? 'pt-3' : ''}`}>
          {!isCollapsed && (
            <div className="px-4 mb-2">
              <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Project</span>
            </div>
          )}
          <div className="relative">
            <button
              onClick={() => !isCollapsed && setIsProjectOpen(!isProjectOpen)}
              className={`w-full bg-gray-50 rounded-lg p-3 flex items-center justify-between hover:bg-gray-100 transition-colors ${isCollapsed ? 'justify-center' : ''}`}
              title={isCollapsed ? selectedProject : ''}
            >
              <div className={`flex items-center gap-3 ${isCollapsed ? '' : ''}`}>
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-600 font-bold text-sm">P</span>
                </div>
                {!isCollapsed && (
                  <div>
                    <p className="text-sm text-gray-900 font-medium">{selectedProject}</p>
                  </div>
                )}
              </div>
              {!isCollapsed && (
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isProjectOpen ? 'rotate-180' : ''}`} />
              )}
            </button>
            
            {/* Dropdown Menu */}
            {!isCollapsed && isProjectOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 overflow-hidden">
                {projects.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => handleProjectSelect(project)}
                    className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors ${
                      selectedProject === project ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-gray-700'
                    }`}
                  >
                    {project}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Stage Buttons */}
        <button
          onClick={() => setActiveSection('mvp')}
          className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors ${isCollapsed ? 'justify-center px-2' : ''}`}
          title={isCollapsed ? 'MVP 发射' : ''}
        >
          <Rocket className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="text-sm">MVP 发射</span>}
        </button>
        
        <button
          onClick={() => setActiveSection('pmf')}
          className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-700 transition-colors ${isCollapsed ? 'justify-center px-2' : ''}`}
          title={isCollapsed ? 'PMF 验证' : ''}
        >
          <Target className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="text-sm">PMF 验证</span>}
        </button>
        
        <button
          onClick={() => setActiveSection('gtm')}
          className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-700 transition-colors ${isCollapsed ? 'justify-center px-2' : ''}`}
          title={isCollapsed ? 'GTM 增长领略' : ''}
        >
          <TrendingUp className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="text-sm">GTM 增长领略</span>}
        </button>
        
        <button
          onClick={() => setActiveSection('collab')}
          className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-700 transition-colors ${isCollapsed ? 'justify-center px-2' : ''}`}
          title={isCollapsed ? '产品协作' : ''}
        >
          <Users className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="text-sm">产品协作</span>}
        </button>
      </nav>

      {/* Bottom User Section */}
      <div className={`p-4 border-t border-gray-200 ${isCollapsed ? 'px-2' : ''}`}>
        <div className={`flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ${isCollapsed ? 'justify-center px-2' : ''}`}>
          <div className={`flex items-center gap-3 ${isCollapsed ? '' : ''}`}>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            {!isCollapsed && (
              <div>
                <p className="text-sm text-gray-900 font-medium">Founder</p>
                <p className="text-xs text-gray-500">Free Plan · 选择套餐</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}