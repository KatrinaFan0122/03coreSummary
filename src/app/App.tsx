import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { DashboardCards } from './components/DashboardCards';
import { WorkflowDiagram } from './components/WorkflowDiagram';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />
        
        {/* Main Area */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-3xl text-gray-900 mb-2">早安, 创业者</h1>
            <p className="text-gray-600">今天是你开始"第一公里"的第 <span className="text-indigo-600 font-semibold">3</span> 天。</p>
          </div>

          {/* Dashboard Cards */}
          <DashboardCards />
          
          {/* Workflow Diagram */}
          <WorkflowDiagram />
        </main>
      </div>
    </div>
  );
}