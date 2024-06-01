interface Projects {
  title: string;
  heading: string;
  link: string;
  description: string;
  imageSrc: string;
}

export const projects: Projects[] = [
  {
    title: "Footprint",
    heading: "First Working Creation",
    link: "https://github.com/Mausmato/Footprint",
    description:
      "In short, Footprint marks the start of my creation journey... (Lets ignore the unreadable lines of calamity and 200+ commits in the span of 24 hours)",
    imageSrc: "/footprint.jpg",
  },
  {
    title: "Weathermap",
    heading: "Learning Journey",
    link: "https://github.com/JLi2007/TS_WeatherProject_Mongo",
    description:
      "A simple weather application by appearence. But outside the conventional minds, one would know it marks a journey of peaks and valleys. Persistance and discovery. Ambition and aspiration. Switzerland and Nigeria - (👑 of yap) ",
    imageSrc: "/weathermap.jpg",
  },
  {
    title: "Plat.ai",
    heading: "Startup Foundations",
    link: "https://pitchplat.app/",
    description: "Waiting list for a startup project. Minor contributor. ",
    imageSrc: "/plat.jpg",
  },
  {
    title: "Portfolio Website",
    heading: "What You're Seeing Now!",
    link: "https://jli2007.pages.dev/projects",
    description: "A website about the one and only James Li",
    imageSrc: "/personal-website.png",
  },
  {
    title: "Moodify",
    heading: "😀 😡 😭 😇 🤨 😩",
    link: "https://github.com/Mausmato/Moodify?tab=readme-ov-file",
    description: "Connecting facial expression with music, Moodify generates a playlist based off of detected mood. ",
    imageSrc: "/moodify1.jpg",
  },
  {
    title: "More To Come!",
    heading: "Nothing to see here",
    link: "https://en.wikipedia.org/wiki/Monkey",
    description: "This is only the beginning.",
    imageSrc: "/nextup.jpg",
  },
];
