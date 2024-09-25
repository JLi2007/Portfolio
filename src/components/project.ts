interface Projects {
  title: string;
  date: string;
  heading: string;
  link: string;
  description: string;
  imageSrc: string;
}

export const projects: Projects[] = [
  {
    title: "Footprint",
    date: "September 2023",
    heading: "First Working Creation",
    link: "https://github.com/Mausmato/Footprint",
    description:
      "In short, Footprint marks the start of my creation journey... (Lets ignore the unreadable lines of calamity and 200+ commits in the span of 24 hours)",
    imageSrc: "/projects/footprint.jpg",
  },
  {
    title: "Weathermap",
    date: "January - May 2024",
    heading: "Learning Journey",
    link: "https://github.com/JLi2007/TS_WeatherProject_Mongo",
    description:
      "A simple weather application by appearence. But outside the conventional minds, one would know it marks a journey of peaks and valleys. Persistance and discovery. Ambition and aspiration. Switzerland and Nigeria - (👑 of yap) ",
    imageSrc: "/projects/weathermap.png",
  },
  {
    title: "Plat.ai",
    date: "April 2024",
    heading: "Startup Foundations",
    link: "https://pitchplat.app/",
    description: "Waiting list for a startup project. Minor contributor. ",
    imageSrc: "/projects/plat.jpg",
  },
  {
    title: "Portfolio Website",
    date: "May 2024",
    heading: "Jame.Li",
    link: "https://jame.li/projects",
    description: "A website about the one and only James Li",
    imageSrc: "/projects/personal-website.png",
  },
  {
    title: "Moodify",
    date: "May 2024",
    heading: "😀 😡 😭 😇 🤨 😩",
    link: "https://github.com/Mausmato/Moodify?tab=readme-ov-file",
    description: "Connecting facial expression with music, Moodify generates a playlist based off of detected mood. ",
    imageSrc: "/projects/moodify.png",
  },
  {
    title: "IdentiBear",
    date: "August 2024",
    heading: "Dementia buddy",
    link: "https://github.com/Solaror0/Identibear",
    description: "Uniquely designed webcam model with a ML backend and Streamlit frontend to comfort the grim realities of Dementia. ",
    imageSrc: "/projects/IdentiBear.png",
  },
  {
    title: "NeoLeague",
    date: "September 2024",
    heading: "Website and Dashboard",
    link: "https://github.com/Neodev-League/NeoDevLeague",
    description: "Frontend and backend for Neo League's landing and dashboard with auth ",
    imageSrc: "/projects/neodev.png",
  }
];
