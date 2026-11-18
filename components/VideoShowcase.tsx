"use client";

import { useState, useMemo, useRef } from "react";
import { Play, ChevronLeft, ChevronRight, ArrowRight, FolderOpen, ExternalLink } from "lucide-react";
import { VIDEOS } from "@/data/portfolioData";

const CATEGORIES = [
  "All",
  "Film Promo",
  "Fashion & Model",
  "Events & Concerts",
  "Real Estate",
] as const;

export default function VideoShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [playingId, setPlayingId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredVideos = useMemo(() => {
    const sorted = [...VIDEOS].sort((a, b) => a.priority - b.priority);
    return selectedCategory === "All"
      ? sorted
      : sorted.filter((v) => v.category === selectedCategory);
  }, [selectedCategory]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="py-14 md:py-20 border-t border-[#E4DFD7]">
      {/* Header & Category Filter */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#B45309] font-medium mb-2">
            Selected Edits & Cinematography
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#18181B]">
              Featured Video Reels
            </h2>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2EFE9] border border-[#E4DFD7] text-xs font-medium text-[#57534E]">
              <span>Swipe to explore</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B45309]" />
            </div>
          </div>
        </div>

        {/* Horizontal Scrollable Filter Pills on Mobile */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setPlayingId(null);
              }}
              className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-[#18181B] text-[#FAF9F6] shadow-sm"
                  : "bg-[#F2EFE9] text-[#57534E] hover:bg-[#E4DFD7] hover:text-[#18181B]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Portrait Carousel */}
      <div className="relative group">
        {/* Desktop Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#FAF9F6] border border-[#E4DFD7] shadow-md items-center justify-center text-[#18181B] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-[#F2EFE9]"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#FAF9F6] border border-[#E4DFD7] shadow-md items-center justify-center text-[#18181B] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-[#F2EFE9]"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Portrait Reel Track */}
        <div
          ref={scrollRef}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-6 pt-3 px-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredVideos.map((video) => {
            const isPlaying = playingId === video.id;

            return (
              <div
                key={video.id}
                className={`snap-start shrink-0 transition-all duration-300 ease-out bg-[#F2EFE9] rounded-2xl overflow-hidden border border-[#E4DFD7] flex flex-col shadow-sm ${
                  isPlaying
                    ? "w-[82vw] sm:w-[320px] md:w-[340px] ring-2 ring-[#B45309]"
                    : "w-[72vw] sm:w-[260px] md:w-[270px] md:hover:w-[310px] md:hover:-translate-y-2 md:hover:shadow-xl"
                }`}
              >
                {/* 9:16 Portrait Container */}
                <div className="relative aspect-[9/16] w-full bg-black overflow-hidden">
                  {isPlaying ? (
                    <video
                      src={video.videoUrl}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                      onEnded={() => setPlayingId(null)}
                    />
                  ) : (
                    <>
                      <img
                        src={video.thumbnailUrl}
                        alt="Reel thumbnail"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div
                        onClick={() => setPlayingId(video.id)}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-between p-4 cursor-pointer"
                      >
                        <span className="self-start px-3 py-1 rounded-full text-[11px] font-medium bg-[#FAF9F6]/90 text-[#18181B] backdrop-blur-sm">
                          {video.category}
                        </span>

                        <div className="self-center w-14 h-14 rounded-full bg-[#FAF9F6]/95 text-[#18181B] flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>

                        {video.title && video.title.trim() ? (
                          <h3 className="text-sm sm:text-base font-semibold text-white line-clamp-2 leading-snug">
                            {video.title}
                          </h3>
                        ) : (
                          <div />
                        )}
                      </div>
                    </>
                  )}
                </div>

                {isPlaying && video.title && video.title.trim() && (
                  <div className="p-3.5 bg-[#F2EFE9] flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-[#18181B] truncate">
                      {video.title}
                    </h3>
                    <button
                      onClick={() => setPlayingId(null)}
                      className="text-xs text-[#B45309] font-medium shrink-0 cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            );
          })}

          {/* SINGLE ARCHIVE CARD WITH BOTH GOOGLE DRIVE LINKS STACKED */}
          <div className="snap-start shrink-0 w-[72vw] sm:w-[260px] md:w-[270px] aspect-[9/16] bg-[#F2EFE9] rounded-2xl border border-dashed border-[#B45309]/50 flex flex-col items-center justify-center p-6 text-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#FAF9F6] text-[#B45309] flex items-center justify-center mb-4 shadow-sm">
              <FolderOpen className="w-6 h-6" />
            </div>

            <h3 className="text-base font-semibold text-[#18181B] mb-2">
              Full Video Archive
            </h3>

            <p className="text-xs text-[#57534E] mb-6 leading-relaxed">
              Explore all 95+ project files across both Google Drive folders.
            </p>

            {/* Stacked Links: Line 1 & Line 2 */}
            <div className="w-full flex flex-col gap-3">
              <a
                href="https://drive.google.com/drive/folders/1vYKnk_w3wdNnb453AVrkzlbrxlSpFfLO"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#18181B] text-[#FAF9F6] text-xs font-medium hover:bg-[#B45309] transition-colors"
              >
                <span>Open Drive 01</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://drive.google.com/drive/folders/1dTsfPCG6iHQh9VAxAr-TNc_flp-fOhjJ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FAF9F6] border border-[#18181B] text-[#18181B] text-xs font-medium hover:bg-[#18181B] hover:text-[#FAF9F6] transition-colors"
              >
                <span>Open Drive 02</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}