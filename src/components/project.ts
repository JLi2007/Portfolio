interface Projects{
    title: string,
    heading: string,
    link: string,
    description: string,
    imageSrc: string
}

export const projects: Projects[]=[
    {
        title: "Footprint",
        heading: "First Working Creation",
        link: "https://github.com/Mausmato/Footprint",
        description: "In short, Footprint marks the start of my creation journey. (Lets ignore the unreadable lines of calamity and 100+ commits in the span of 24 hours)",
        imageSrc: "../../public/footprint.png"
    },
    {
        title: "WeatherMap",
        heading: "Learning Journey",
        link: "https://github.com/JLi2007/TS_WeatherProject_Mongo",
        description: "A simple weather application by appearence. But outside the conventional minds, one would know it marks a journey of peaks and valleys. Persistance and discovery. Ambition and aspiration (👑 of yap) ",
        imageSrc: "../../public/weathermap.jpeg"
    },
    {
        title: "Plat.ai",
        heading: "Startup Foundations",
        link: "https://pitchplat.app/",
        description: "Waiting list I contributed to. For a startup project.",
        imageSrc: "../../public/plat.png"
    },
    {
        title: "More To Come!",
        heading: "-",
        link: "-",
        description: "Tides of opportunities will wash up with many Hackathons approaching the island...",
        imageSrc: "-"
    },
]