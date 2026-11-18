"use client";

import { useState, useMemo } from "react";
import { Play, ArrowRight, FolderOpen, ExternalLink } from "lucide-react";
import { VIDEOS } from "@/data/portfolioData";

const CATEGORIES = [
  "All",
  "Real Estate",
  "Film Promo",
  "Fashion & Model",
  "Events & Concerts",
] as const;

export default function VideoShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [playingId, setPlayingId] = useState<string | null>(null);

  const filteredVideos = useMemo(() => {
    const sorted = [...VIDEOS].sort((a, b) => a.priority - b.priority);
    return selectedCategory === "All"
      ? sorted
      : sorted.filter((v) => v.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="work" className="py-14 md:py-20 border-t border-zinc-800">
      {/* Header & Category Filter */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-10">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-amber-500 font-medium mb-2">
            Selected Edits & Cinematography
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">
              Featured Video Reels
            </h2>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400">
              <span>Curated collection</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
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
                  ? "bg-zinc-100 text-zinc-950 font-medium shadow-sm"
                  : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-zinc-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Line Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredVideos.map((video) => {
          const isPlaying = playingId === video.id;

          return (
            <div
              key={video.id}
              className={`group transition-all duration-300 ease-out bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex flex-col shadow-sm ${
                isPlaying
                  ? "ring-2 ring-amber-500"
                  : "hover:-translate-y-1.5 hover:shadow-xl hover:border-zinc-700"
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
                    className="w-full h-full object-contain bg-black"
                    onEnded={() => setPlayingId(null)}
                  />
                ) : (
                  <>
                    <img
                      src={video.thumbnailUrl}
                      alt="Reel thumbnail"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      onClick={() => setPlayingId(video.id)}
                      className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent flex flex-col justify-between p-4 cursor-pointer"
                    >
                      <span className="self-start px-3 py-1 rounded-full text-[11px] font-medium bg-zinc-900/90 text-zinc-200 backdrop-blur-sm border border-zinc-700">
                        {video.category}
                      </span>

                      <div className="self-center w-14 h-14 rounded-full bg-zinc-100/95 text-zinc-950 flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>

                      {video.title && video.title.trim() ? (
                        <h3 className="text-sm sm:text-base font-semibold text-zinc-100 line-clamp-2 leading-snug">
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
                <div className="p-3.5 bg-zinc-900 flex items-center justify-between gap-2 border-t border-zinc-800">
                  <h3 className="text-sm font-semibold text-zinc-100 truncate">
                    {video.title}
                  </h3>
                  <button
                    onClick={() => setPlayingId(null)}
                    className="text-xs text-amber-500 font-medium shrink-0 cursor-pointer hover:underline"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          );
        })}

        {/* SINGLE ARCHIVE CARD WITH BOTH GOOGLE DRIVE LINKS STACKED */}
        <div className="aspect-[9/16] bg-zinc-900 rounded-2xl border border-dashed border-amber-500/40 flex flex-col items-center justify-center p-6 text-center shadow-sm hover:border-amber-500 transition-colors">
          <div className="w-14 h-14 rounded-full bg-zinc-800 text-amber-500 flex items-center justify-center mb-4 shadow-sm">
            <FolderOpen className="w-6 h-6" />
          </div>

          <h3 className="text-base font-semibold text-zinc-100 mb-2">
            Full Video Archive
          </h3>

          <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
            Explore all 95+ project files across both Google Drive folders.
          </p>

          {/* Stacked Links: Line 1 & Line 2 */}
          <div className="w-full flex flex-col gap-3">
            <a
              href="https://drive.google.com/drive/folders/1vYKnk_w3wdNnb453AVrkzlbrxlSpFfLO"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-zinc-100 text-zinc-950 text-xs font-medium hover:bg-amber-500 hover:text-white transition-colors"
            >
              <span>Open Drive 01</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://drive.google.com/drive/folders/1dTsfPCG6iHQh9VAxAr-TNc_flp-fOhjJ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs font-medium hover:bg-zinc-800 hover:border-zinc-500 transition-colors"
            >
              <span>Open Drive 02</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}