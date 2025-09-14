import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const GlassyNavbar = ({ isDark }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-4 z-50">
      <div
        className="relative mx-auto flex max-w-screen-xl items-center justify-between rounded-full border border-white/10 
                   px-6 py-2 shadow-lg backdrop-blur-xl ring-1"
      >
        <a href="/">
          <h1
            className={`text-lg font-bold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            DevMon
          </h1>
        </a>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <SlideTabs isDark={isDark} />
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          {/* <button
            className={`rounded-full bg-black px-4 py-2 text-sm font-semibold font-para text-white transition-colors hover:bg-black/80 cursor-pointer`}
          >
            Contact Me!
          </button> */}
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <XMarkIcon
                className={`h-6 w-6 ${isDark ? "text-white" : "text-black"}`}
              />
            ) : (
              <Bars3Icon
                className={`h-6 w-6 ${isDark ? "text-white" : "text-black"}`}
              />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && <MobileMenu />}
    </nav>
  );
};

// Sliding Tabs Component
const SlideTabs = ({ isDark }) => {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  return (
    <ul
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      className="relative hidden w-fit rounded-full p-1 lg:flex"
    >
      <Tab setPosition={setPosition} isDark={isDark}>
        Home
      </Tab>
      <Tab setPosition={setPosition} isDark={isDark}>
        About
      </Tab>
      <Tab setPosition={setPosition} isDark={isDark}>
        Skills
      </Tab>
      <Tab setPosition={setPosition} isDark={isDark}>
        Projects
      </Tab>
      <Cursor position={position} isDark={isDark} />
    </ul>
  );
};

// Tab Component
const Tab = ({ children, setPosition, isDark }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
      }}
      className={`relative z-10 block cursor-pointer px-4 py-2 text-sm font-poppins ${
        isDark ? "text-white hover:text-white" : "text-black hover:text-white"
      }`}
    >
      {children}
    </li>
  );
};

// Cursor highlight (CHANGED: green instead of orange)
const Cursor = ({ position, isDark }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className={`absolute z-0 h-10 rounded-full ${
        isDark ? "bg-black text-white" : "bg-black text-white"
      }`}
    />
  );
};

// Mobile Menu (CHANGED: Get Started button green instead of orange)
const MobileMenu = () => {
  return (
    <div className="mx-auto mt-2 max-w-screen-xl rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-xl ring-1 ring-black/5 dark:border-white/10 dark:bg-black/20 lg:hidden">
      <ul className="flex flex-col gap-2 text-center">
        <li>
          <a
            href="#"
            className="block rounded-lg py-2 text-neutral-900 dark:text-neutral-100 hover:bg-black/10 dark:hover:bg-white/10"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block rounded-lg py-2 text-neutral-900 dark:text-neutral-100 hover:bg-black/10 dark:hover:bg-white/10"
          >
            Docs
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block rounded-lg py-2 text-neutral-900 dark:text-neutral-100 hover:bg-black/10 dark:hover:bg-white/10"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block rounded-lg py-2 text-neutral-900 dark:text-neutral-100 hover:bg-black/10 dark:hover:bg-white/10"
          >
            Community
          </a>
        </li>
      </ul>
      <div className="mt-4 flex items-center gap-2">
        <button className="flex-1 rounded-full border border-neutral-700/50 px-4 py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
          Login
        </button>
        <button className="flex-1 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GlassyNavbar;
