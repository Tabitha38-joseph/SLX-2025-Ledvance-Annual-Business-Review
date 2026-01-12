
import React, { useState, useEffect } from 'react';
import { SlideData } from '../constants';
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Target, 
  Book, 
  Layout, 
  Database, 
  Cog, 
  Calendar, 
  TrendingUp, 
  Sparkles, 
  Rocket, 
  Quote, 
  Route, 
  Users, 
  BarChart3, 
  Globe, 
  Filter, 
  MousePointer2, 
  TableProperties, 
  ShieldAlert,
  Fingerprint,
  Layers,
  Cpu,
  Info,
  ChevronRight as ChevronIcon,
  Activity,
  Box,
  Map as MapIcon,
  Award,
  BarChart,
  Edit,
  ShoppingCart
} from 'lucide-react';

interface Props {
  slide: SlideData;
  index: number;
}

const SlideRenderer: React.FC<Props> = ({ slide }) => {
  const { layout, content, header } = slide;
  const [activeModule, setActiveModule] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'route': return <Route size={32} />;
      case 'users': return <Users size={32} />;
      case 'rocket': return <Rocket size={32} />;
      case 'globe': return <Globe size={32} />;
      case 'database': return <Database size={32} />;
      case 'filter': return <Filter size={32} />;
      case 'zap': return <Zap size={32} />;
      case 'edit': return <Edit size={32} />;
      case 'shopping-cart': return <ShoppingCart size={32} />;
      default: return <Target size={32} />;
    }
  };

  const renderContent = () => {
    switch (layout) {
      case 'dark':
        return (
          <div className="h-full w-full bg-[#001c39] text-white flex flex-col p-12 md:p-16 relative overflow-hidden font-sans">
            {/* Header Section */}
            <div className="mb-12">
              <h2 className="text-[32pt] font-bold text-white mb-6 leading-tight tracking-tight">
                {header || "Education as a Marketing Tool"}
              </h2>
              <div className="flex items-start gap-6 max-w-5xl">
                <div className="w-1 bg-slxBlue self-stretch mt-1"></div>
                <p className="text-[18pt] font-light text-white/80 leading-snug">
                  {content.intro}
                </p>
              </div>
            </div>

            <div className="flex-1 flex flex-col lg:flex-row gap-12 min-h-0">
              {/* Left Pane: LightPoint On-Demand */}
              <div className="lg:w-1/2 flex flex-col border border-white/10 rounded-sm p-8 bg-[#001c39]/50 shadow-2xl overflow-hidden">
                <h3 className="text-slxBlue font-bold text-xl mb-6 tracking-tight">
                  {content.lightpoint.title}
                </h3>
                
                <div className="mb-8 border-b border-white/10 pb-6">
                  <p className="text-sm text-white/80 leading-relaxed font-light">
                    {content.lightpoint.desc}
                  </p>
                </div>

                <div className="flex-1 overflow-y-auto space-y-0.5 custom-scrollbar pr-2">
                  {content.lightpoint.topics.map((topic: string, i: number) => (
                    <div 
                      key={i} 
                      className="group flex items-center py-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors px-2 cursor-pointer"
                      onClick={() => setActiveModule(i)}
                    >
                      <span className="text-[10px] font-bold text-white/30 w-8 tabular-nums">0{i+1}</span>
                      <span className={`text-sm tracking-tight transition-colors ${activeModule === i ? 'text-slxBlue font-bold' : 'text-white/70 group-hover:text-white'}`}>
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Pane: Strategic Training */}
              <div className="lg:w-1/2 flex flex-col border border-white/10 rounded-sm p-8 bg-[#001c39]/50 shadow-2xl">
                <h3 className="text-slxBlue font-bold text-xl mb-8 tracking-tight">
                  Strategic Training
                </h3>
                
                <div className="space-y-6">
                  {content.live.map((item: string, i: number) => (
                    <div key={i} className="bg-[#001c39] border border-white/20 p-6 rounded-sm shadow-inner group hover:border-slxBlue/50 transition-all">
                      <p className="text-sm text-white/80 leading-relaxed font-light">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        );

      case 'performance':
        return (
          <div className="h-full w-full bg-slxAliceBlue flex flex-col p-10 md:p-14 overflow-hidden relative font-sans">
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8 flex justify-between items-end">
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="w-12 h-1.5 bg-slxBlue"></div>
                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-slxBlue">2025 Data Intelligence</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slxMidnight tracking-tighter uppercase">{header}</h2>
                </div>
                <div className="hidden lg:flex items-center gap-4 bg-white px-6 py-3 rounded-xl border border-slxBlue/20 shadow-sm mb-1">
                   <BarChart className="text-slxBlue" size={24} />
                   <div className="text-right">
                      <div className="text-[8px] font-bold text-slxDarkGray uppercase tracking-widest opacity-40">Annual Sending Volume</div>
                      <div className="text-xl font-black text-slxMidnight leading-none">703,931 <span className="text-xs font-normal text-slxBlue uppercase tracking-tighter">Sends</span></div>
                   </div>
                </div>
              </div>

              <div className="flex-1 flex gap-10 min-h-0">
                <div className="flex-1 overflow-hidden flex flex-col">
                  <div className="bg-white border border-slxWhiteSmoke rounded-2xl shadow-2xl flex-1 flex flex-col overflow-hidden">
                    <div className="p-6 border-b border-slxWhiteSmoke bg-slxWhiteSmoke/30 flex items-center justify-between">
                      <div className="flex items-center gap-3 text-slxBlue">
                        <TableProperties size={20} />
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slxMidnight">Yearly Performance Matrix</h3>
                      </div>
                    </div>
                    <div className="flex-1 overflow-y-auto px-10 py-6 custom-scrollbar">
                      <table className="w-full text-left border-separate border-spacing-0">
                        <thead>
                          <tr className="sticky top-0 bg-white z-20">
                            <th className="pb-4 pt-2 text-[10px] font-black uppercase tracking-[0.2em] text-slxDarkGray opacity-40 border-b border-slxWhiteSmoke">Month</th>
                            <th className="pb-4 pt-2 text-[10px] font-black uppercase tracking-[0.2em] text-slxDarkGray opacity-40 border-b border-slxWhiteSmoke">Sends</th>
                            <th className="pb-4 pt-2 text-[10px] font-black uppercase tracking-[0.2em] text-slxDarkGray opacity-40 border-b border-slxWhiteSmoke text-center">Open Rate</th>
                            <th className="pb-4 pt-2 text-[10px] font-black uppercase tracking-[0.2em] text-slxDarkGray opacity-40 border-b border-slxWhiteSmoke text-center">CTOR</th>
                            <th className="pb-4 pt-2 text-[10px] font-black uppercase tracking-[0.2em] text-slxBlue border-b border-slxWhiteSmoke text-right">Status Milestone</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slxWhiteSmoke/50">
                          {content.table.map((row: any, i: number) => (
                            <tr key={i} className={`group transition-all ${row.highlight ? 'bg-slxBlue/5' : 'hover:bg-slxAliceBlue/40'}`}>
                              <td className="py-4">
                                <span className={`font-black text-lg tracking-tighter uppercase ${row.highlight ? 'text-slxBlue' : 'text-slxMidnight'}`}>{row.month}</span>
                              </td>
                              <td className="py-4 font-mono text-sm text-slxDarkGray">{row.sends}</td>
                              <td className="py-4 text-center">
                                <span className="font-bold text-slxMidnight">{row.open}</span>
                              </td>
                              <td className="py-4 text-center">
                                <span className={`font-black ${parseFloat(row.ctor) > 20 ? 'text-slxBlue' : 'text-slxDarkGray'}`}>{row.ctor}</span>
                              </td>
                              <td className="py-4 text-right">
                                {row.highlight ? (
                                  <div className="inline-flex items-center gap-2 bg-slxBlue text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-slxBlue/20">
                                    <Award size={12} />
                                    {row.highlight}
                                  </div>
                                ) : (
                                  <span className="text-[10px] font-bold text-slxDarkGray opacity-20 uppercase tracking-widest">Normal Range</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'title':
        return (
          <div className="h-full w-full bg-slxAliceBlue flex flex-col justify-center items-center p-20 relative overflow-hidden">
            <div className="flex flex-col items-center z-10 animate-in fade-in zoom-in duration-1000">
              <div className="flex items-center gap-12 mb-20">
                {/* LEDVANCE Logo Section - Resized to match SLX */}
                <div className="flex items-center bg-ledvance px-10 py-6 rounded-sm shadow-xl group hover:scale-105 transition-transform duration-500">
                   <div className="relative w-12 h-12 mr-6 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-white/20"></div>
                      <div className="absolute inset-[15%] rounded-full bg-white/40"></div>
                      <div className="absolute inset-[30%] rounded-full bg-white/60"></div>
                      <div className="absolute inset-[45%] rounded-full bg-white shadow-lg"></div>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-white font-black text-5xl tracking-[-0.03em] leading-none uppercase">LEDVANCE</span>
                   </div>
                </div>
                
                <div className="text-slxDarkGray font-light text-5xl opacity-20 select-none">×</div>
                
                {/* SalesLabX Logo Section */}
                <div className="flex items-center group">
                   <span className="text-slxMidnight font-bold text-6xl tracking-tighter">SalesLab</span>
                   <span className="text-slxBlue font-black text-7xl -ml-0.5 drop-shadow-[0_0_15px_rgba(28,175,236,0.5)] group-hover:scale-110 transition-transform">X</span>
                </div>
              </div>
              <div className="max-w-5xl text-center">
                <h1 className="h1-slx text-slxMidnight mb-4 tracking-tighter uppercase">2025 Annual Business Review</h1>
                <div className="sub-light text-slxBlue mb-12 font-bold uppercase tracking-[0.2em]">Building the Foundation</div>
                <p className="body-slx text-slxDarkGray max-w-2xl mx-auto opacity-80">{content.sub}</p>
              </div>
            </div>
          </div>
        );

      case 'executive':
        return (
          <div className="h-full w-full bg-white flex flex-col relative overflow-hidden p-10 md:p-14">
            <div className="pb-4 z-20">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-1 bg-slxBlue"></div>
                  <span className="text-xs font-light text-slxBlue uppercase tracking-[0.5em]">Executive Strategy</span>
                </div>
                <h2 className="text-5xl font-bold text-slxMidnight tracking-tight uppercase leading-none">{header}</h2>
            </div>
            <div className="flex-1 flex flex-col z-10">
              <div className="py-10">
                <div className="max-w-5xl">
                  <p className="text-2xl md:text-3xl font-normal text-slxDarkGray leading-snug tracking-tight border-l-[6px] border-slxBlue pl-10">{content.body}</p>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
                {content.achievements.map((item: any, i: number) => (
                  <div key={i} className="group bg-slxAliceBlue border border-slxBlue/10 p-8 rounded-lg transition-all duration-500 hover:shadow-xl hover:bg-white hover:border-slxBlue flex flex-col">
                    <div className="mb-6 flex justify-between items-start">
                      <div className="w-12 h-12 bg-slxMidnight rounded flex items-center justify-center font-bold text-xl text-white group-hover:bg-slxBlue transition-colors shadow-lg">{i + 1}</div>
                      <CheckCircle className="text-slxBlue opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                    </div>
                    <h6 className="text-xs font-bold text-slxBlue uppercase tracking-widest mb-3">{item.label}</h6>
                    <p className="text-lg font-bold text-slxMidnight leading-tight">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'strategy':
        return (
          <div className="h-full w-full bg-slxAliceBlue flex flex-col p-10 md:p-14 overflow-hidden relative">
            <div className="relative z-10 mb-8 flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <div className="w-12 h-1 bg-slxBlue"></div>
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-slxBlue">2026 Strategic Vision</span>
                </div>
                <h2 className="text-5xl font-bold text-slxMidnight tracking-tight uppercase leading-none">{header}</h2>
              </div>
              <Sparkles className="text-slxBlue/30 animate-pulse" size={40} />
            </div>
            
            <div className="flex-1 flex flex-col gap-6 relative z-10 min-h-0">
              {/* Row 1: 3 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {content.pillars.slice(0, 3).map((pillar: any, i: number) => (
                  <div key={i} className="group relative flex flex-col bg-white border border-slxWhiteSmoke rounded-xl p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:border-slxBlue hover:shadow-2xl">
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 rounded-lg bg-slxAliceBlue text-slxBlue group-hover:bg-slxBlue group-hover:text-white transition-all duration-500">{getIcon(pillar.icon)}</div>
                        <span className="text-3xl font-black text-slxWhiteSmoke tracking-tighter">0{i+1}</span>
                      </div>
                      <h3 className="text-lg font-bold leading-tight text-slxMidnight group-hover:text-slxBlue transition-colors mb-4 uppercase tracking-tight">{pillar.title}</h3>
                      <p className="text-sm font-normal text-slxDarkGray opacity-80 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2: 2 Centered Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
                {content.pillars.slice(3, 5).map((pillar: any, i: number) => (
                  <div key={i+3} className="group relative flex flex-col bg-white border border-slxWhiteSmoke rounded-xl p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:border-slxBlue hover:shadow-2xl">
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 rounded-lg bg-slxAliceBlue text-slxBlue group-hover:bg-slxBlue group-hover:text-white transition-all duration-500">{getIcon(pillar.icon)}</div>
                        <span className="text-3xl font-black text-slxWhiteSmoke tracking-tighter">0{i+4}</span>
                      </div>
                      <h3 className="text-lg font-bold leading-tight text-slxMidnight group-hover:text-slxBlue transition-colors mb-4 uppercase tracking-tight">{pillar.title}</h3>
                      <p className="text-sm font-normal text-slxDarkGray opacity-80 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'split':
        return (
          <div className="h-full w-full bg-white flex flex-col overflow-hidden">
            <div className="p-10 md:p-14 pb-4">
               <div className="flex items-center space-x-4 mb-2">
                  <div className="w-12 h-1 bg-slxBlue"></div>
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-slxBlue">Conversion Architecture</span>
                </div>
                <h2 className="text-5xl font-bold text-slxMidnight tracking-tight leading-none mb-4 uppercase">{header}</h2>
            </div>
            <div className="flex-1 flex flex-col lg:flex-row min-h-0">
              <div className="lg:w-1/3 bg-slxAliceBlue p-10 md:p-14 flex flex-col justify-center border-r border-slxWhiteSmoke">
                <div className="bg-white p-10 rounded-xl shadow-xl border-l-[6px] border-slxOrange relative overflow-hidden">
                  <h3 className="text-slxOrange font-bold text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-2"><ShieldAlert size={16} /> The Strategic Gap</h3>
                  <p className="text-2xl font-bold text-slxMidnight leading-tight mb-4 italic">"{content.problem}"</p>
                </div>
              </div>
              <div className="lg:w-2/3 p-10 md:p-14 flex flex-col justify-center space-y-8 bg-white overflow-y-auto">
                 {content.solutions.map((sol: any, i: number) => (
                   <div key={i} className="group flex items-stretch gap-8 bg-slxAliceBlue border border-slxWhiteSmoke rounded-xl p-8 hover:shadow-2xl transition-all">
                     <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-lg bg-white text-slxBlue flex items-center justify-center border border-slxWhiteSmoke shadow-sm group-hover:bg-slxBlue group-hover:text-white transition-all">
                          {i === 0 ? <Fingerprint size={28} /> : <Layers size={28} />}
                        </div>
                     </div>
                     <div className="flex-1 flex flex-col justify-center">
                       <h4 className="text-2xl font-bold text-slxMidnight group-hover:text-slxBlue transition-colors tracking-tight mb-2 uppercase">{sol.title}</h4>
                       <p className="text-lg text-slxDarkGray font-normal opacity-80">{sol.text}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        );

      case 'velocity':
        return (
          <div className="h-full w-full bg-slxAliceBlue flex flex-col p-10 md:p-14 overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold text-slxMidnight mb-10 tracking-tight uppercase">{header}</h2>
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-0">
              <div className="bg-white border border-slxWhiteSmoke rounded-xl p-10 flex flex-col shadow-sm relative group overflow-hidden">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-slxBlue text-white p-3 rounded-lg shadow-lg"><Layout size={24} /></div>
                  <h4 className="text-2xl font-bold text-slxMidnight">Increased Velocity</h4>
                </div>
                <ul className="space-y-6 mb-8 flex-1">
                  {content.volume.points.map((p: string, i: number) => (
                    <li key={i} className="flex items-start space-x-4 text-lg text-slxDarkGray font-normal">
                      <div className="mt-1.5 p-1 bg-slxBlue/10 rounded-full"><ArrowRight className="text-slxBlue" size={16} /></div>
                      <span className="leading-tight">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-slxWhiteSmoke rounded-xl p-10 flex flex-col shadow-sm overflow-hidden">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-slxMidnight text-white p-3 rounded-lg"><Zap size={24} /></div>
                  <h4 className="text-2xl font-bold text-slxMidnight">Product Variety Spotlights</h4>
                </div>
                <div className="flex-1 grid grid-cols-1 gap-4 overflow-y-auto pr-2">
                  {content.variety.items.map((item: any, i: number) => (
                    <div key={i} className="p-6 rounded-lg bg-slxAliceBlue border border-slxWhiteSmoke hover:border-slxBlue hover:bg-white transition-all">
                      <h5 className="text-lg font-bold text-slxMidnight mb-1">{item.name}</h5>
                      <p className="text-sm text-slxDarkGray opacity-70 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'summary':
        return (
          <div className="h-full w-full flex flex-col md:flex-row overflow-hidden bg-white">
            <div className="md:w-1/2 p-12 lg:p-20 flex items-center bg-white">
              <div className="max-w-xl">
                <h2 className="text-slxMidnight text-6xl font-bold mb-12 uppercase">Summary</h2>
                <p className="text-2xl text-slxDarkGray font-normal opacity-80">{content.white}</p>
              </div>
            </div>
            <div className="md:w-1/2 p-12 lg:p-20 flex items-center bg-slxMidnight text-white relative">
              <div className="max-w-xl space-y-12 relative z-10">
                <h3 className="text-5xl font-bold border-b-2 border-slxBlue inline-block pb-4 mb-8 uppercase text-slxBlue">Ready for 2026</h3>
                <div className="space-y-6">
                  {content.orange.map((point: string, i: number) => (
                    <div key={i} className="flex items-center space-x-6 group">
                      <div className="w-10 h-10 rounded-full bg-slxBlue flex items-center justify-center text-white shadow-xl"><CheckCircle size={24} /></div>
                      <span className="text-2xl font-bold tracking-tight">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'columns':
        return (
          <div className="h-full w-full bg-slxAliceBlue flex flex-col p-10 md:p-14 overflow-hidden relative">
            <div className="pb-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-1 bg-slxBlue"></div>
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-slxBlue">Execution Strategy</span>
              </div>
              <h2 className="text-5xl font-bold text-slxMidnight leading-none mb-10 uppercase">{header}</h2>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
              {content.map((item: any, i: number) => (
                <div key={i} className="flex flex-col bg-white border border-slxWhiteSmoke p-10 rounded-xl shadow-sm hover:border-slxBlue transition-all group">
                  <div className="w-16 h-16 bg-slxAliceBlue text-slxBlue rounded-lg flex items-center justify-center mb-10 group-hover:bg-slxBlue group-hover:text-white transition-all">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="text-2xl font-bold text-slxMidnight mb-4 uppercase">{item.goal}</h3>
                  <p className="text-slxDarkGray opacity-70 leading-relaxed">{item.execution}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'technical':
        return (
          <div className="h-full w-full bg-slxAliceBlue flex flex-col p-10 md:p-14">
            <h2 className="text-4xl md:text-5xl font-bold text-slxMidnight mb-10 tracking-tight uppercase">{header}</h2>
            <div className="p-10 bg-slxBlue text-white rounded-xl mb-12 shadow-xl">
               <p className="text-2xl font-light italic text-center">Stabilizing systems in 2025 to empower frequency in 2026.</p>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.map((item: string, i: number) => (
                <div key={i} className="p-8 rounded-xl bg-white border border-slxWhiteSmoke hover:border-slxBlue transition-all">
                  <p className="text-lg text-slxDarkGray opacity-80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <div className="p-20 text-slxDarkGray">Layout configuration "{layout}" not found.</div>;
    }
  };

  return (
    <div className="h-full w-full overflow-hidden transition-opacity duration-500 font-sans">
      {renderContent()}
    </div>
  );
};

export default SlideRenderer;
