
import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Menu,
  X
} from 'lucide-react';
import SlideRenderer from './components/SlideRenderer';
import Sidebar from './components/Sidebar';
import { slides } from './constants';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="flex h-screen w-screen bg-lightgrey overflow-hidden font-sans">
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md lg:hidden hover:bg-gray-100 transition-colors"
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Navigation */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        currentSlide={currentSlide} 
        onSelectSlide={goToSlide}
        slides={slides}
      />

      {/* Main Presentation Content */}
      <main className="flex-1 flex flex-col relative transition-all duration-300 overflow-hidden">
        <div className="flex-1 overflow-hidden">
          <SlideRenderer slide={slides[currentSlide]} index={currentSlide} />
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-6 right-8 flex items-center space-x-4 z-20">
          <div className="bg-white/90 backdrop-blur px-5 py-3 rounded-full shadow-2xl border border-gray-200 flex items-center space-x-4 hover:shadow-ledvance/20 transition-shadow">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-1.5 rounded-full transition-all ${currentSlide === 0 ? 'text-gray-300' : 'hover:bg-slxBlue hover:text-white active:scale-90 text-slxDarkGray'}`}
              title="Previous Slide"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="h-4 w-[1px] bg-gray-300"></div>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`p-1.5 rounded-full transition-all ${currentSlide === slides.length - 1 ? 'text-gray-300' : 'hover:bg-slxBlue hover:text-white active:scale-90 text-slxDarkGray'}`}
              title="Next Slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
