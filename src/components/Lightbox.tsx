import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LightboxProps {
  images: Array<{
    id: string;
    src: string;
    title: string;
    description?: string;
  }>;
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

/**
 * Lightbox component for full-screen image viewing
 * Features:
 * - Smooth fade-in/out animations
 * - Keyboard navigation (ESC, Arrow keys)
 * - Touch swipe support for mobile
 * - Zoom in/out functionality
 * - Image preloading
 */
export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: LightboxProps) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const currentImage = images[currentIndex];
  const hasNext = currentIndex < images.length - 1;
  const hasPrevious = currentIndex > 0;

  // Reset zoom when image changes
  useEffect(() => {
    setZoomLevel(1);
    setIsLoading(true);
  }, [currentIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          e.preventDefault();
          onNext?.();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          onPrevious?.();
          break;
        case '+':
        case '=':
          e.preventDefault();
          setZoomLevel(z => Math.min(z + 0.25, 3));
          break;
        case '-':
        case '_':
          e.preventDefault();
          setZoomLevel(z => Math.max(z - 0.25, 0.5));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNext, onPrevious, onClose, zoomLevel]);

  // Handle touch swipe for mobile
  const [touchStart, setTouchStart] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        onNext?.();
      } else {
        onPrevious?.();
      }
    }
  };

  const handleZoom = (delta: number) => {
    setZoomLevel(z => Math.max(0.5, Math.min(3, z + delta)));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  if (!isOpen || !currentImage) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      onClick={onClose}
      role="dialog"
      aria-label="Image lightbox"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      {/* Image container */}
      <div
        className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-w-7xl max-h-full">
          {/* Loading state */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-card/50 rounded-2xl">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Image */}
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className={cn(
              "max-w-full max-h-[calc(100vh-8rem)] object-contain rounded-lg shadow-2xl transition-transform duration-200",
              isLoading && "opacity-0"
            )}
            style={{
              transform: `scale(${zoomLevel})`,
            }}
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
            draggable={false}
          />

          {/* Image info */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto">
            <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-3 rounded-xl max-w-lg">
              <h3 className="font-semibold text-sm mb-1">{currentImage.title}</h3>
              {currentImage.description && (
                <p className="text-xs text-white/80">{currentImage.description}</p>
              )}
              <p className="text-xs text-white/60 mt-1">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Zoom controls */}
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
            <div className="flex flex-col gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoom(0.25);
                }}
                className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                aria-label="Zoom in"
                disabled={zoomLevel >= 3}
              >
                <ZoomIn size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleResetZoom();
                }}
                className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors text-xs font-semibold"
                aria-label="Reset zoom"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoom(-0.25);
                }}
                className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                aria-label="Zoom out"
                disabled={zoomLevel <= 0.5}
              >
                <ZoomOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Previous button */}
      {hasPrevious && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious?.();
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext?.();
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* Keyboard shortcuts hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs hidden md:block">
        Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 mx-1">←</kbd>
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 mx-1">→</kbd>
        to navigate • <kbd className="px-1.5 py-0.5 rounded bg-white/10 mx-1">ESC</kbd>
        to close
      </div>
    </div>
  );
}
