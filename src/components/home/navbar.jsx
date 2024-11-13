import React, { useState } from "react";

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { icon: "fa-circle-user", link: "/Login", id: "user", label: "My Space" },
    { icon: "fa-magnifying-glass", link: "/search", id: "search", label: "Search" },
    { icon: "fa-house", link: "/home", id: "home", label: "Home" },
    { icon: "fa-tv", link: "/tv", id: "tv", label: "TV" },
    { icon: "fa-film", link: "/movies", id: "movies", label: "Movies" },
    { icon: "fa-volleyball", link: "/sports", id: "sports", label: "Sports" },
    { icon: "fa-list", link: "/cathegories", id: "cathegories", label: "Categories" },
  ];

  return (
    <div className="fixed z-10 bg-transparent flex flex-col items-center">
      <img className="mx-6 mt-6 w-16 h-12" src="logo-d-plus.svg" alt="Logo" />
      <a
        href=""
        className="mx-5 mt-2 text-yellow-200 text-xs bg-amber-400 bg-opacity-15 px-2 py-1 rounded-full"
      >
        Subscribe 
      </a>
      <div className="mt-5 space-y-4 text-zinc-500">
        {menuItems.map((item) => (
          <a
            href={item.link}
            key={item.id}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-100 ${
              hoveredItem === item.id ? "bg-gray-800 text-white" : ""
            }`}
          >
            <i
              className={`fa-solid ${item.icon} text-lg transition-all duration-100 ${
                hoveredItem === item.id ? "text-white text-shadow-glow" : ""
              }`}
            ></i>
            <span
              className={`mt-1 text-xs font-medium transition-opacity duration-100 ${
                hoveredItem === item.id ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
