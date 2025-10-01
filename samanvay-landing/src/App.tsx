import React from 'react';
import './App.css';

// Icons as SVG components
const MapIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

const AlertIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 7H4l5-5v5zm6 10V7a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h9a1 1 0 001-1z" />
  </svg>
);

const CommunicationIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const MobileIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const FundIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ReportsIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const TimelineIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-saffron sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">स</span>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-navy">SAMANVAY</h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">System for Agency Mapping And Nodal VAYavastha</p>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA0MCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjRkY5OTMzIi8+CjxyZWN0IHk9IjEwIiB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIGZpbGw9IiNGRkZGRkYiLz4KPHJlY3QgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzEzODgwOCIvPgo8L3N2Zz4K" alt="Indian Flag" className="w-8 h-6 sm:w-10 sm:h-7" />
              <span className="text-xs sm:text-sm font-medium text-navy hidden sm:inline">Government of India</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjNmNGY2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPC9zdmc+')] opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-saffron/10 rounded-full border border-saffron/20 mb-6">
                <span className="text-saffron font-medium">Ministry of Social Justice & Empowerment</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">
                <span className="block">SAMANVAY</span>
                <span className="block text-3xl md:text-4xl font-hindi text-saffron mt-2">समन्वय</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Streamlining PM-AJAY implementation through intelligent agency mapping, 
                real-time coordination, and transparent fund flow management across India
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border-l-4 border-saffron">
                <h3 className="text-lg font-semibold text-navy mb-2">Adarsh Gram</h3>
                <p className="text-gray-600 text-sm sm:text-base">Model village development with integrated planning</p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border-l-4 border-green">
                <h3 className="text-lg font-semibold text-navy mb-2">GIA</h3>
                <p className="text-gray-600 text-sm sm:text-base">Grant-in-Aid management for social welfare schemes</p>
              </div>
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border-l-4 border-gold sm:col-span-2 lg:col-span-1">
                <h3 className="text-lg font-semibold text-navy mb-2">Hostel</h3>
                <p className="text-gray-600 text-sm sm:text-base">Educational infrastructure for marginalized communities</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-saffron hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Platform
              </button>
              <button className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Addressing Critical Challenges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PM-AJAY implementation faces coordination bottlenecks across multiple agencies and states
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 text-2xl">⚠️</span>
              </div>
              <h3 className="font-semibold text-navy mb-2 text-sm sm:text-base">No Centralized Mapping</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Lack of structured mapping of implementing and executing agencies</p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-yellow-600 text-2xl">🔄</span>
              </div>
              <h3 className="font-semibold text-navy mb-2 text-sm sm:text-base">Coordination Bottlenecks</h3>
              <p className="text-gray-600 text-xs sm:text-sm">States with multiple executing agencies face coordination challenges</p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-2xl">👁️</span>
              </div>
              <h3 className="font-semibold text-navy mb-2 text-sm sm:text-base">Lack of Transparency</h3>
              <p className="text-gray-600 text-xs sm:text-sm">No clear visibility on roles, timelines, and responsibilities</p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-2xl">⏱️</span>
              </div>
              <h3 className="font-semibold text-navy mb-2 text-sm sm:text-base">Administrative Delays</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Delays in assigning clear accountability and fund flow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Three-Tier Digital Ecosystem</h2>
            <p className="text-xl text-gray-600">Empowering every stakeholder with role-specific capabilities</p>
          </div>

          {/* Central Ministry Admin */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-navy text-white rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Central Ministry Admin</h3>
                  <p className="text-blue-100">MoSJE – National Level Operations</p>
                </div>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <MapIcon />
                <h4 className="font-semibold text-navy mt-4 mb-2 text-sm sm:text-base">Smart GIS Mapping</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Pan-India view of States/UTs, their agencies & projects</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <AlertIcon />
                <h4 className="font-semibold text-navy mt-4 mb-2 text-sm sm:text-base">AI Alerts</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Dashboard flags delays and fund utilization issues</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <CommunicationIcon />
                <h4 className="font-semibold text-navy mt-4 mb-2 text-sm sm:text-base">Automated Communication</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Sends alerts/notices when funds released or deadlines near</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <FundIcon />
                <h4 className="font-semibold text-navy mt-4 mb-2 text-sm sm:text-base">PFMS Integration</h4>
                <p className="text-gray-600 text-xs sm:text-sm">National-level fund release vs utilization tracking</p>
              </div>
            </div>
          </div>

          {/* State/UT Nodal Officer */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">State/UT Nodal Officer</h3>
                  <p className="text-green-100">Implementing Agency Coordination</p>
                </div>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <MapIcon />
                <h4 className="font-semibold text-navy mt-4 mb-2 text-sm sm:text-base">State GIS Mapping</h4>
                <p className="text-gray-600 text-xs sm:text-sm">District agencies & project hotspots visualization</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <MobileIcon />
                <h4 className="font-semibold text-navy mt-4 mb-2 text-sm sm:text-base">Mobile-First PWA</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Approve/reject updates and reports from mobile</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <TimelineIcon />
                <h4 className="font-semibold text-navy mt-4 mb-2 text-sm sm:text-base">Project Timeline Tracker</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Color-coded agency-level progress tracking</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <AlertIcon />
                <h4 className="font-semibold text-navy mt-4 mb-2 text-sm sm:text-base">Issue Escalation</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Escalate bottlenecks or request clarifications</p>
              </div>
            </div>
          </div>

          {/* Executing Agency Admin */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-saffron to-orange-600 text-white rounded-2xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Executing Agency Admin</h3>
                  <p className="text-orange-100">District/NGO/PWD/Education Dept.</p>
                </div>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <MobileIcon />
                <h4 className="font-semibold text-navy mt-4 mb-2 text-sm sm:text-base">Mobile-First PWA</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Upload progress, geo-tagged photos, receipts directly</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <MapIcon />
                <h4 className="font-semibold text-navy mt-4 mb-2 text-sm sm:text-base">Project Mapping</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Color-coded project status on interactive maps</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <FundIcon />
                <h4 className="font-semibold text-navy mt-4 mb-2 text-sm sm:text-base">Fund Utilization Log</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Submit utilization certificates and expenditure details</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <TimelineIcon />
                <h4 className="font-semibold text-navy mt-4 mb-2 text-sm sm:text-base">Timeline Checklist</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Mark project stages from fund receipt to completion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Impact Goals</h2>
            <p className="text-xl text-gray-600">Transforming governance through digital innovation</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CommunicationIcon />
              </div>
              <h3 className="font-semibold text-navy mb-2 text-sm sm:text-base">Streamlined Communication</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Enhanced coordination between all stakeholders</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ReportsIcon />
              </div>
              <h3 className="font-semibold text-navy mb-2 text-sm sm:text-base">Digital Repository</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Centralized agency mapping for faster decisions</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-saffron/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FundIcon />
              </div>
              <h3 className="font-semibold text-navy mb-2 text-sm sm:text-base">Optimized Fund Flow</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Timely release and transparent utilization</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TimelineIcon />
              </div>
              <h3 className="font-semibold text-navy mb-2 text-sm sm:text-base">Improved Accountability</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Better implementation oversight and monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Governance?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the digital revolution in social welfare implementation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-saffron hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl">स</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">SAMANVAY</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">System for Agency Mapping And Nodal VAYavastha</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Empowering transparent and efficient implementation of PM-AJAY across India through 
                intelligent coordination and real-time monitoring.
              </p>
              <div className="flex items-center space-x-2">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA0MCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjRkY5OTMzIi8+CjxyZWN0IHk9IjEwIiB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIGZpbGw9IiNGRkZGRkYiLz4KPHJlY3QgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzEzODgwOCIvPgo8L3N2Zz4K" alt="Indian Flag" className="w-6 h-4 sm:w-8 sm:h-6" />
                <span className="text-gray-400 text-xs sm:text-sm">Government of India Initiative</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About PM-AJAY</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Ministry of Social Justice & Empowerment</p>
                <p>Shastri Bhawan, New Delhi</p>
                <p>Email: support@samanvay.gov.in</p>
                <p>Helpline: 1800-XXX-XXXX</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Government of India. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;