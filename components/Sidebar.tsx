
import React from 'react';
import { SlideData } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  currentSlide: number;
  onSelectSlide: (index: number) => void;
  slides: SlideData[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, currentSlide, onSelectSlide, slides }) => {
  return (
    <aside className={`bg-slxMidnight text-white transition-all duration-300 flex-shrink-0 flex flex-col ${isOpen ? 'w-72' : 'w-0 lg:w-20 overflow-hidden'}`}>
      <div className="p-6 border-b border-white/5 flex items-center space-x-4">
        <div className="w-10 h-10 bg-slxBlue rounded flex items-center justify-center font-black text-xl shadow-[0_0_15px_rgba(28,175,236,0.3)]">X</div>
        {isOpen && (
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight leading-none">SalesLab<span className="text-slxBlue">X</span></span>
            <span className="text-[10px] font-light uppercase tracking-widest opacity-40">LEDVANCE ABR</span>
          </div>
        )}
      </div>
      
      <nav className="flex-1 py-6 overflow-y-auto overflow-x-hidden custom-scrollbar">
        <ul className="space-y-1">
          {slides.map((slide, index) => (
            <li key={slide.id}>
              <button
                onClick={() => onSelectSlide(index)}
                className={`w-full text-left px-6 py-4 flex items-center space-x-4 transition-all group relative ${currentSlide === index ? 'bg-slxBlue/10' : 'hover:bg-white/5'}`}
              >
                {currentSlide === index && <div className="absolute left-0 top-0 bottom-0 w-1 bg-slxBlue shadow-[0_0_10px_#1cafec]"></div>}
                <span className={`${currentSlide === index ? 'text-slxBlue' : 'text-gray-500 group-hover:text-slxBlue'} transition-colors`}>
                  {slide.icon}
                </span>
                {isOpen && (
                  <div className="flex flex-col">
                    <span className={`text-sm font-medium truncate ${currentSlide === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>{slide.title}</span>
                  </div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 border-t border-white/5 bg-black/20">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-slxBlue animate-pulse shadow-[0_0_8px_#1cafec]"></div>
          {isOpen && <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Live Review 2025</span>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
