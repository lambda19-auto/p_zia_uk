/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  Users, 
  Sun, 
  Wallet, 
  Plane,
  Compass,
  Globe,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const EXTERNAL_URL = "https://travelai.top/";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2 shrink-0">
            <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            <span className="text-lg sm:text-xl font-bold tracking-tight">TravelAI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How it works</a>
          </div>
          <a 
            href={EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200 shrink-0"
          >
            Go to service
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6">
                <Sun className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Next-Generation AI Assistant</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold tracking-tighter leading-[1.1] lg:leading-[0.9] text-slate-900 mb-8 break-words">
                Travel <br className="hidden sm:block" />
                <span className="text-blue-600">smart.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-light">
                TravelAI uses advanced search and planning algorithms to create your dream itinerary in seconds.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href={EXTERNAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center group"
                >
                  Start planning
                  <Plane className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#how-it-works"
                  className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  Learn more
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative aspect-square md:aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070" 
                  alt="Scenic landscape" 
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />)}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">AI Recommendation</p>
                  <p className="text-2xl font-bold">Yosemite, USA</p>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 md:-right-12 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 border border-slate-100"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Best Time</p>
                  <p className="text-sm font-bold">June — August</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 border border-slate-100"
              >
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                  <Wallet className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Savings</p>
                  <p className="text-sm font-bold">Up to 30% of budget</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Service Capabilities</h2>
            <p className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Why Choose TravelAI?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: "Real-time Search",
                desc: "We scan thousands of sites in seconds to find the best current prices and offers.",
                color: "blue"
              },
              {
                icon: <Wallet className="w-8 h-8" />,
                title: "Smart Budgeting",
                desc: "Our AI optimizes expenses, suggesting where you can save without sacrificing comfort.",
                color: "green"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Personalization",
                desc: "We consider the number of children, seasonal preferences, and the type of vacation just for you.",
                color: "orange"
              }
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center
                  ${f.color === 'blue' ? 'bg-blue-50 text-blue-600' : ''}
                  ${f.color === 'green' ? 'bg-green-50 text-green-600' : ''}
                  ${f.color === 'orange' ? 'bg-orange-50 text-orange-600' : ''}
                `}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified CTA Section Instead of Form */}
      <section id="tool-section" className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[120px] opacity-40" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="bg-slate-900 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-20 shadow-2xl relative overflow-hidden group">
            {/* Animated background element */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-20 group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready for adventure?</h2>
              <p className="text-base sm:text-xl text-slate-400 mb-8 sm:mb-12 max-w-lg mx-auto font-light leading-relaxed">
                Join thousands of travelers who are already planning their trips with AI.
              </p>
              <a 
                href={EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-slate-900 px-6 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/10"
              >
                <span>Start now</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
            
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.3em] mb-4">Process</h2>
            <p className="text-4xl md:text-5xl font-bold tracking-tight">How your adventure is created</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden md:block" />
            
            {[
              { num: "01", title: "Set your direction", desc: "Specify your preferences, budget, and number of travelers on our website." },
              { num: "02", title: "AI Magic", desc: "Our neural network analyzes available options and matches them with your criteria." },
              { num: "03", title: "Itinerary Ready", desc: "Get a structured plan with prices and helpful source links." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-8xl font-black text-white/5 absolute -top-12 -left-4 group-hover:text-blue-500/10 transition-colors">{step.num}</div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold mb-8 shadow-xl shadow-blue-900/40">
                    {i + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-500">
            © 2026 TravelAI. All rights reserved. lambda19.
          </p>
        </div>
      </footer>
    </div>
  );
}
