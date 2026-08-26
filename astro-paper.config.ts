import type { AstroPaperConfig } from "./src/types/config";

const config: AstroPaperConfig = {
  site: {
    author: "İrfan İzbırakan",
    desc: "Teknoloji, donanım, ESP32 ve DIY projeleri üzerine teknik notlar ve rehberler.",
    title: "İzbırakan Atölye",
    ogImage: "astropaper-og.jpg",
    lang: "tr", 
    timezone: "Europe/Istanbul", 
    dir: "ltr",
  },
  posts: {
    perPage: 6, 
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    {
      name: "YouTube",
      href: "https://youtube.com/@irfanizbirakan",
      active: true, 
    },
    {
      name: "Github",
      href: "https://github.com/irfanizbirakan",
      active: true,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/irfanizbirakan",
      active: true,
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@irfanizbirakan",
      active: true,
    },
    {
      name: "Mail",
      href: "mailto:iletisim@irfanizbirakan.com", 
      active: true,
    },
    {
      name: "X",
      href: "https://twitter.com",
      active: false, 
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      active: false,
    },
    {
      name: "Twitch",
      href: "https://twitch.tv",
      active: false,
    }
  ],
  shareLinks: [
    { name: "WhatsApp", active: true },
    { name: "Telegram", active: true },
    { name: "X", active: true },
    { name: "Facebook", active: false },
    { name: "LinkedIn", active: false },
    { name: "Mail", active: true },
  ],
};

export default config;