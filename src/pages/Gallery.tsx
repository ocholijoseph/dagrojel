import { useState, useCallback, useEffect, useMemo } from 'react';
import { categories, galleryData } from '@/data/gallery-data';
import { Lightbox } from '@/components/Lightbox';
import { Image as ImageIcon, Filter, Loader2, Search, Edit3, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { GalleryItem } from '@/data/gallery-data';

type FilterType = 'all' | 'events' | 'sports' | 'activities';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [imageLoadStatus, setImageLoadStatus] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Set mounted state for animations
  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter images based on selected category and search query
  const filteredImages = useMemo(() => {
    let result = galleryData;

    // Apply category filter
    if (activeFilter !== 'all') {
      result = result.filter(item => item.category === activeFilter);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(item =>
        item.title.toLowerCase().includes(query) ||
        (item.description?.toLowerCase().includes(query) ?? false) ||
        item.category.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeFilter, searchQuery, galleryData]);

  // Get categories with dynamic counts
  const categoryList = useMemo(() => {
    return [
      { id: 'all' as FilterType, label: 'All Photos', count: galleryData.length },
      { id: 'events' as FilterType, label: 'Events', count: galleryData.filter(g => g.category === 'events').length },
      { id: 'sports' as FilterType, label: 'Sports', count: galleryData.filter(g => g.category === 'sports').length },
      { id: 'activities' as FilterType, label: 'Activities', count: galleryData.filter(g => g.category === 'activities').length },
    ];
  }, [galleryData]);

  // Apply localStorage metadata
  const imagesWithMetadata = useMemo(() => {
    const stored = localStorage.getItem('gallery-metadata');
    const metadata = stored ? JSON.parse(stored) : {};
    return galleryData.map(img => ({
      ...img,
      ...(metadata[img.id] || {}),
    }));
  }, [galleryData]);

  // Navigate lightbox
  const openLightbox = useCallback((index: number) => {
    const globalIndex = imagesWithMetadata.findIndex(item => item.id === filteredImages[index].id);
    if (globalIndex !== -1) {
      setLightboxIndex(globalIndex);
      setLightboxOpen(true);
    }
  }, [filteredImages, imagesWithMetadata]);

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % imagesWithMetadata.length);
  }, [imagesWithMetadata.length]);

  const previousImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + imagesWithMetadata.length) % imagesWithMetadata.length);
  }, [imagesWithMetadata.length]);

  // Handle image load status
  const handleImageLoad = useCallback((id: string) => {
    setImageLoadStatus(prev => ({ ...prev, [id]: true }));
  }, []);

  // Handle inline edit
  const [editingId, setEditingId] = useState<string | null>(null);
  const [inlineTitle, setInlineTitle] = useState('');
  const [inlineDescription, setInlineDescription] = useState('');

  const handleInlineEdit = useCallback((item: GalleryItem) => {
    setEditingId(item.id);
    setInlineTitle(item.title);
    setInlineDescription(item.description || '');
  }, []);

  const handleInlineSave = useCallback(() => {
    if (editingId) {
      // Update the local storage
      const stored = localStorage.getItem('gallery-metadata');
      const metadata = stored ? JSON.parse(stored) : {};
      metadata[editingId] = {
        title: inlineTitle,
        description: inlineDescription,
      };
      localStorage.setItem('gallery-metadata', JSON.stringify(metadata));
      setEditingId(null);
    }
  }, [editingId, inlineTitle, inlineDescription]);

  // Masonry columns using CSS columns
  const masonryGrid = () => {
    return 'columns-1 md:columns-2 lg:columns-3 xl:columns-4';
  };

  // Reset metadata
  const resetMetadata = useCallback(() => {
    localStorage.removeItem('gallery-metadata');
    window.location.reload();
  }, []);

  return (
    <main>
      {/* Featured Image Section */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <img
          src="/gallery/Inter-House_01.jpeg"
          alt="Inter-House Sports Competition - Featured"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="absolute inset-0 flex items-end pb-16 md:pb-20">
          <div className="container">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-sm font-semibold mb-4 animate-fade-up">
                Featured Moment
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Inter-House Sports Competition
              </h1>
              <p className="text-white/90 text-base md:text-lg mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Students showcasing athletic excellence during inter-house competitions, demonstrating teamwork, sportsmanship, and school spirit.
              </p>
              <button
                onClick={() => {
                  const featuredImage = galleryData.find(img => img.id === 'inter-house-01');
                  if (featuredImage) {
                    const index = imagesWithMetadata.findIndex(img => img.id === featuredImage.id);
                    if (index !== -1) {
                      setLightboxIndex(index);
                      setLightboxOpen(true);
                    }
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 animate-fade-up"
                style={{ animationDelay: '0.3s' }}
              >
                <ImageIcon size={18} />
                View Full Size
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="py-16 text-center bg-card">
        <div className="container">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-up">
            Photo Gallery
          </h1>
          <div className="h-1 w-16 rounded-full mx-auto mb-4 bg-primary animate-fade-up" style={{ animationDelay: '0.1s' }} />
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            A glimpse into the vibrant life at Dagrojel Excel Academy.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-sm text-muted-foreground/60">
              {filteredImages.length} photo{filteredImages.length !== 1 ? 's' : ''} • {galleryData.length} total
            </div>
          </div>
        </div>
      </section>

        {/* Filter and Search */}
        <section className="py-6 bg-card border-b border-border sticky top-[72px] z-40 backdrop-blur-sm">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
              {/* Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto flex-1">
                <Filter size={18} className="text-muted-foreground mr-2 flex-shrink-0" />
                <div className="flex gap-2 flex-shrink-0">
                  {categoryList.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveFilter(cat.id as FilterType)}
                      className="group relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0"
                      style={
                        activeFilter === cat.id
                          ? { background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))", boxShadow: "var(--shadow-primary)" }
                          : { background: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }
                      }
                    >
                      <span className="relative z-10 flex items-center gap-1">
                        {cat.label}
                        <span className="text-xs text-muted-foreground/70">
                          ({cat.count})
                        </span>
                      </span>
                      {activeFilter === cat.id && (
                        <span className="absolute inset-0 rounded-full animate-ping bg-primary/20" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative md:w-80 flex-shrink-0">
                <div className="flex items-center gap-2 bg-muted/50 px-4 py-2.5 rounded-xl border border-border">
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search photos..."
                    className="w-full bg-transparent text-sm focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <RefreshCw size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Masonry Gallery Grid */}
        <section className="section-padding bg-gradient-section">
          <div className="container">
            <div className={cn("gap-4 md:gap-6", masonryGrid())}>
              {filteredImages.length === 0 ? (
                <div className="col-span-full text-center py-20">
                  <div className="inline-flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
                      <ImageIcon size={40} className="text-muted-foreground/50" />
                    </div>
                    <p className="text-muted-foreground text-lg mb-2">
                      No photos in this category yet.
                    </p>
                    <button
                      onClick={() => setActiveFilter('all')}
                      className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5"
                      style={{ background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }}
                    >
                      View All Photos
                    </button>
                  </div>
                </div>
              ) : (
                filteredImages.map((item, index) => {
                  const isLoaded = imageLoadStatus[item.id];
                  const isEditing = editingId === item.id;
                  const staggerDelay = (index % 12) * 50;

                  return (
                    <div
                      key={item.id}
                      onClick={() => openLightbox(index)}
                      className={cn(
                        "relative group break-inside-avoid cursor-pointer card-hover rounded-2xl overflow-hidden mb-4 md:mb-6 inline-block",
                        mounted && "animate-fade-up",
                        !isLoaded && "bg-muted"
                      )}
                      style={{
                        animationDelay: mounted ? `${staggerDelay}ms` : '0ms',
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          openLightbox(index);
                        }
                      }}
                    >
                      {/* Loading placeholder */}
                      {!isLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-muted min-h-[200px]">
                          <Loader2 size={32} className="animate-spin text-muted-foreground/50" />
                        </div>
                      )}

                      {/* Image - Using object-cover for clean masonry layout */}
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        className={cn(
                          "w-full object-cover transition-transform duration-500 group-hover:scale-105",
                          isLoaded ? "opacity-100" : "opacity-0",
                          item.aspect === 'portrait' ? 'aspect-[3/4]' : item.aspect === 'square' ? 'aspect-square' : 'aspect-[4/3]'
                        )}
                        onLoad={() => handleImageLoad(item.id)}
                      />

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-primary/90 text-primary-foreground mb-2 capitalize">
                            {item.category}
                          </span>
                          <h3 className="text-white font-semibold text-sm leading-tight mb-1">
                            {item.title}
                          </h3>
                          {item.description && (
                            <p className="text-white/80 text-xs line-clamp-2">
                              {item.description}
                            </p>
                          )}
                          {item.date && (
                            <p className="text-white/60 text-xs mt-2 flex items-center gap-1">
                              <span>{item.date}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-accent text-accent-foreground capitalize shadow-lg">
                          {item.category}
                        </span>
                      </div>

                      {/* Quick edit button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleInlineEdit(item);
                        }}
                        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70"
                        title="Quick edit"
                      >
                        <Edit3 size={14} className="text-white" />
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </section>

        {/* Inline Edit Modal */}
        {editingId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-card rounded-2xl max-w-md w-full p-6 shadow-2xl border border-border">
              <h3 className="font-display text-xl font-bold text-primary mb-4">Edit Image</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={inlineTitle}
                    onChange={(e) => setInlineTitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={inlineDescription}
                    onChange={(e) => setInlineDescription(e.target.value)}
                    placeholder="Describe this image..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-primary resize-none"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleInlineSave}
                    className="flex-1 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
                    style={{ background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }}
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="flex-1 py-3 rounded-xl font-semibold text-sm transition-all border border-border hover:border-primary"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-card text-center border-t border-border">
          <div className="container max-w-3xl">
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-primary mb-3">
                Want to see more?
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Follow us on social media for daily updates, behind-the-scenes content,
                and more moments from our vibrant campus life.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'Facebook', href: '#', color: 'bg-blue-600 hover:bg-blue-700' },
                { name: 'Instagram', href: '#', color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' },
                { name: 'Twitter', href: '#', color: 'bg-sky-500 hover:bg-sky-600' },
                { name: 'YouTube', href: '#', color: 'bg-red-600 hover:bg-red-700' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={cn(
                    "px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5 text-white shadow-lg shadow-primary/20",
                    social.color
                  )}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <Lightbox
          images={imagesWithMetadata.map(item => ({
            id: item.id,
            src: item.src,
            title: item.title,
            description: item.description,
          }))}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
        />

        {/* Reset Button */}
        {localStorage.getItem('gallery-metadata') && (
          <button
            onClick={resetMetadata}
            className="fixed bottom-4 right-4 z-30 px-4 py-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white transition-all shadow-lg flex items-center gap-2"
            title="Reset all metadata changes"
          >
            <RefreshCw size={16} />
            <span className="text-sm font-medium">Reset</span>
          </button>
        )}
      </main>
  );
}
