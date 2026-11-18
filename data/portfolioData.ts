export interface VideoProject {
  id: string;
  title: string;
  category: "Film Promo" | "Fashion & Model" | "Events & Concerts" | "Real Estate";
  thumbnailUrl: string;
  videoUrl: string;
  priority: number;      // 1 = shown first (Spotlight or top grid)
  isSpotlight?: boolean; // Set true for the #1 main flagship reel
}

export const PROFILE = {
  name: "Jithin P P",
  role: "Videographer, Photographer & Video Editor",
  location: "Dubai, UAE",
  phone: "+971 50 967 4547",
  email: "jithinframefx96@gmail.com",
  summary:
    "Creative Photographer and Videographer with 10+ years of experience capturing compelling visuals and telling stories through luxury real estate walkthroughs, fashion shoots, live events, and film promotions.",
  socials: [
    {
      label: "B6 Productions",
      url: "https://www.instagram.com/b6productions.ae?mdxt=a2lxemxncHE20Wtu",
    },
    {
      label: "Ajad Real Estate UAE",
      url: "https://www.instagram.com/ajadrealestateuae?srtk=ZzRmbHcyb29ieGJ2",
    },
  ],
};

export const VIDEOS: VideoProject[] = [
  // --- TOP PRIORITY / FEATURED ---
  {
    id: "vid-1",
    title: "",
    category: "Events & Concerts",
    thumbnailUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1794992124/Lamborgini_01_kpbmbw.jpg",
    videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1794992124/Lamborgini_01_kpbmbw.mp4",
    priority: 1,
    isSpotlight: true,
  },
  {
    id: "vid-2",
    title: "",
    category: "Real Estate",
    thumbnailUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795002296/Bnw_X_Ajad_Briefing_ttly9c.jpg",
    videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795002296/Bnw_X_Ajad_Briefing_ttly9c.mp4",
    priority: 2,
  },
  {
    id: "vid-3",
    title: "",
    category: "Real Estate",
    thumbnailUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795004439/Altaf_Sales_Reel_fj56df.jpg",
    videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795004439/Altaf_Sales_Reel_fj56df.mp4",
    priority: 3,
  },
  {
    id: "vid-4",
    title: "",
    category: "Fashion & Model",
    thumbnailUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795008703/Maharaja_Jewllery_Reel_2_l802az.jpg",
    videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795008703/Maharaja_Jewllery_Reel_2_l802az.mp4",
    priority: 4,
  },
  {
    id: "vid-5",
    title: "",
    category: "Real Estate",
    thumbnailUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795009260/Damac_Briefing_woekbp.jpg",
    videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795009260/Damac_Briefing_woekbp.mp4",
    priority: 5,
  },
  {
    id: "vid-6",
    title: "",
    category: "Real Estate",
    thumbnailUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795009615/Abra_Briefing_dwnxua.jpg",
    videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795009615/Abra_Briefing_dwnxua.mp4",
    priority: 6,
  },
  {
    id: "vid-7",
    title: "",
    category: "Real Estate",
    thumbnailUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795010665/Ajmal_Makan_Ajad_Breefing_c9lbe8.jpg",
    videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795010665/Ajmal_Makan_Ajad_Breefing_c9lbe8.mp4",
    priority: 7,
  },
  {
    id: "vid-8",
    title: "",
    category: "Film Promo",
    thumbnailUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795011307/Its_Medical_Miracle_Movie_Promotion_my6c3i.jpg",
    videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795011307/Its_Medical_Miracle_Movie_Promotion_my6c3i.mp4",
    priority: 8,
  },
  {
    id: "vid-9",
    title: "",
    category: "Film Promo",
    thumbnailUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795011583/Khalifa_Movie_Promotion_01_d5x2wq.jpg",
    videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795011583/Khalifa_Movie_Promotion_01_d5x2wq.mp4",
    priority: 2,
  },
  {
    id: "vid-10",
    title: "",
    category: "Film Promo",
    thumbnailUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795011913/Pookie_Film_Promotion_bv1jzw.jpg",
    videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795011913/Pookie_Film_Promotion_bv1jzw.mp4",
    priority: 3,
  },
  {
    id: "vid-12",
    title: "",
    category: "Fashion & Model",
    thumbnailUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795012332/Maharaja_Jewllery_x0dt9i.jpg",
    videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795012332/Maharaja_Jewllery_x0dt9i.mp4",
    priority: 5,
  },
  {
    id: "vid-13",
    title: "",
    category: "Fashion & Model",
    thumbnailUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795012714/Vaikha_Reel_zjhonw.jpg",
    videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795012714/Vaikha_Reel_zjhonw.mp4",
    priority: 7,
  },
  {
    id: "vid-14",
    title: "",
    category: "Events & Concerts",
    thumbnailUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795013141/Jetour_Car_Lounch_04_ghb8nd.jpg",
    videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795013141/Jetour_Car_Lounch_04_ghb8nd.mp4",
    priority: 13,
  },
  {
    id: "vid-15",
    title: "",
    category: "Events & Concerts",
    thumbnailUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795013667/Jh_Onam_fjrlsg.jpg",
    videoUrl: "https://res.cloudinary.com/dx2yhouml/video/upload/v1795013667/Jh_Onam_fjrlsg.mp4",
    priority: 9,
  },
];

export const EXPERIENCE = [
  {
    role: "Videographer & Photographer",
    company: "B6 PRODUCTIONS LLC",
    location: "Dubai, UAE",
    period: "OCT 2025 – Present",
    highlights: [
      "Specialized in real estate videography, producing property walkthroughs and promotional videos for residential and commercial spaces.",
      "Conducted model and fashion shoots alongside live coverage of concerts, weddings, and private events.",
      "Operated drones for aerial cinematography and executed full post-production and color grading in Final Cut Pro (FCP).",
    ],
  },
  {
    role: "Videographer & Photographer",
    company: "FRAME FX",
    location: "UAE / India",
    period: "2020 – 2025",
    highlights: [
      "Directed and filmed model/fashion campaigns, live concerts, weddings, and film promotion trailers.",
      "Managed end-to-end camera operations, custom lighting setups, and creative composition.",
    ],
  },
  {
    role: "Videographer & Photographer",
    company: "HOLIDAY INN",
    location: "Hospitality",
    period: "2016 – 2020",
    highlights: [
      "Produced visual content showcasing hotel facilities, guest experiences, corporate events, and hospitality functions.",
    ],
  },
];

export const SKILLS = [
  "Real Estate & Architectural Videography",
  "Final Cut Pro (FCP) Editing",
  "Color Grading & Post-Production",
  "Drone Operations",
  "Model & Fashion Shoots",
  "Concert & Live Event Coverage",
  "Product Photography",
  "Photoshop & Lightroom",
  "Camera & Studio Lighting",
];

export const EDUCATION = {
  degree: "Mechanical Auto Electrical & Electronics",
  languages: ["English", "Malayalam"],
};