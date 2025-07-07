"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { DockDemo } from "@/components/magicui/dockdemo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { MorphingText } from "@/components/magicui/morphing-text";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { TextAnimate } from "@/components/magicui/text-animate";
import React, { useRef, useEffect, useState } from "react";
import { Confetti } from "@/components/magicui/confetti";
import { MagicCard } from "@/components/magicui/magic-card";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { ConfettiButton } from "@/components/magicui/confetti";
import Image from "next/image";
import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";
import img5 from "../public/img5.png";
import img4 from "../public/img4.png";

// Theme toggle icons
const SunIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
    <path
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"
    />
  </svg>
);
const MoonIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
    />
  </svg>
);

export default function Home() {
  const imageUrls = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  ];

  // Add a ref to access the Confetti API
  const confettiRef = useRef(null);
  const achievementRef = useRef(null);
  const hasFiredRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // Theme state
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (
        (localStorage.getItem("theme") as "light" | "dark") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
      );
    }
    return "light";
  });
  const [aboutInView, setAboutInView] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setAboutInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (aboutInView) {
      intervalId = setInterval(() => {
        // @ts-expect-error
        confettiRef.current?.fire && confettiRef.current.fire();
      }, 800);
    } else if (intervalId) {
      clearInterval(intervalId);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [aboutInView]);

  // Loading screen effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black dark:bg-neutral-950 flex items-center justify-center z-50">
        <div className="text-center">
          <NumberTicker
            value={100}
            className="text-6xl font-bold text-white mb-4"
          />
          <p className="text-white text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <GridPattern className="text-white/10 dark:text-white/5 opacity-35 mask-t-from-85% mask-b-from-50% "></GridPattern>

      {/* Confetti Component */}

      {/* Hamburger and Nav */}
      <nav className="relative z-10 flex flex-col sm:flex-row items-center justify-center px-4 sm:px-6 py-4 sm:py-6">
        {/* Theme toggle button */}
        <button
          className="absolute right-4 top-4 sm:static sm:ml-auto p-2 lg:mr-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-neutral-100 dark:bg-neutral-800"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
        {/* Hamburger button for mobile */}
        <button
          className="sm:hidden absolute left-4 top-4 z-20 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Open navigation menu"
          onClick={() => setMobileNavOpen((open) => !open)}
        >
          <svg
            className="w-7 h-7 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileNavOpen ? (
              // X icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Nav links */}
        <ul
          className={`
            flex-col space-y-4 w-full items-center bg-background sm:bg-transparent sm:static sm:flex-row sm:space-y-0 sm:space-x-12 sm:w-auto sm:flex
            fixed left-0 top-0 right-0 z-10 transition-all duration-300 ease-in-out
            ${mobileNavOpen ? "flex py-24 px-8 min-h-screen" : "hidden"}
            sm:relative sm:py-0 sm:px-0 sm:min-h-0
          `}
        >
          <li
            className="cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() => {
              scrollToSection(aboutRef);
              setMobileNavOpen(false);
            }}
          >
            About
          </li>
          <li
            className="cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() => {
              scrollToSection(projectsRef);
              setMobileNavOpen(false);
            }}
          >
            Projects
          </li>
          <li
            className="cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() => {
              scrollToSection(educationRef);
              setMobileNavOpen(false);
            }}
          >
            Education
          </li>
          <li
            className="cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() => {
              scrollToSection(skillsRef);
              setMobileNavOpen(false);
            }}
          >
            Skills
          </li>
          <li
            className="cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() => {
              scrollToSection(contactRef);
              setMobileNavOpen(false);
            }}
          >
            Contact
          </li>
        </ul>
      </nav>

      <div
        ref={aboutRef}
        className="flex flex-col justify-center items-center h-[300px] sm:h-[400px] px-4 text-center"
      >
        <SparklesText
          className="mask-b-from-50% text-4xl md:text-6xl lg:text-8xl"
          children={"Hey I am Aditya"}
        ></SparklesText>
        <AuroraText
          className="mask-b-from-50% text-5xl md:text-7xl lg:text-9xl font-bold"
          children={"Frontend Developer"}
        ></AuroraText>

        <TypingAnimation className="max-w-xl mt-5 mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          I specialize in Frontend technologies to create responsive and
          visually appealing user interfaces. I utilize React and Next.js for
          building dynamic web applications.
        </TypingAnimation>
      </div>

      <DockDemo></DockDemo>

      <div
        ref={skillsRef}
        className="flex flex-col lg:flex-row justify-around items-center px-4 w-full gap-8 lg:gap-0"
      >
        <div className="flex flex-col justify-center items-center w-full lg:w-[50%] mb-8 lg:mb-0">
          <div className="flex justify-center items-center text-3xl sm:text-5xl mb-5 mt-4 font-bold">
            <TextAnimate
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  rotate: 45,
                  scale: 0.5,
                },
                show: (i) => ({
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.4,
                    y: {
                      type: "spring",
                      damping: 12,
                      stiffness: 200,
                      mass: 0.8,
                    },
                    rotate: {
                      type: "spring",
                      damping: 8,
                      stiffness: 150,
                    },
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 300,
                    },
                  },
                }),
                exit: (i) => ({
                  opacity: 0,
                  y: 30,
                  rotate: 45,
                  scale: 0.5,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.4,
                  },
                }),
              }}
              by="character"
            >
              SKILLS
            </TextAnimate>
          </div>

          <MorphingText
            texts={[
              "React",
              "NextJS",
              "JavaScript",
              "HTML",
              "CSS",
              "C++",
              "SQL",
            ]}
          ></MorphingText>
        </div>
        <div className="w-full lg:w-[70%] flex items-center justify-center">
          <IconCloud images={imageUrls} size={300} />
        </div>
      </div>

      {/* My Skills Section */}
      <div className="w-full flex justify-center my-8 px-4">
        <div className="bg-white/80 dark:bg-neutral-900/80 rounded-xl shadow-lg p-6 max-w-2xl w-full border border-neutral-200 dark:border-neutral-700">
          <h2 className="text-2xl font-bold mb-4 text-center text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "React",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "HTML",
              "CSS",
              "Tailwind CSS",
              "Node.js",
              "Git",
              "MongoDB",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-semibold text-sm shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>


      {/* Experiences Section */}
      <div className="w-full flex justify-center my-8 px-4">
        <div className="max-w-4xl w-full">
          <div className="flex justify-center items-center text-3xl sm:text-5xl mb-5 font-bold">
            <TextAnimate
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  rotate: 45,
                  scale: 0.5,
                },
                show: (i) => ({
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.4,
                    y: {
                      type: "spring",
                      damping: 12,
                      stiffness: 200,
                      mass: 0.8,
                    },
                    rotate: {
                      type: "spring",
                      damping: 8,
                      stiffness: 150,
                    },
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 300,
                    },
                  },
                }),
                exit: (i) => ({
                  opacity: 0,
                  y: 30,
                  rotate: 45,
                  scale: 0.5,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.4,
                  },
                }),
              }}
              by="character"
            >
              EXPERIENCE
            </TextAnimate>
          </div>
          <div className="space-y-6">
            {/* Experience 1 */}
            <div className="bg-white/80 dark:bg-neutral-900/80 rounded-lg p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                Software Developer Intern
              </h3>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                <span>Fare Intelligence</span>
                <span>July 2024 – Jan-2025</span>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300">
                Designed and developed an intuitive React.js -based UI to
                streamline API testing workflows, reducing manual testing time
                and complexity. Integrated real -world APIs to simulate
                practical scenarios and showcase real -time request/response
                handling.
              </p>
            </div>
            {/* Experience 2 */}
            <div className="bg-white/80 dark:bg-neutral-900/80 rounded-lg p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                Call Of Code
              </h3>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                <span>Secretary</span>
                <span>Dec 2023 – Present</span>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300">
                Created and managed teams for various hackathons along with
                deciding their tech stack and scheduling their preparation
                timeline.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="flex justify-center items-center text-5xl mb-8 font-bold">
            <TextAnimate
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  rotate: 45,
                  scale: 0.5,
                },
                show: (i) => ({
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.4,
                    y: {
                      type: "spring",
                      damping: 12,
                      stiffness: 200,
                      mass: 0.8,
                    },
                    rotate: {
                      type: "spring",
                      damping: 8,
                      stiffness: 150,
                    },
                    scale: {
                      type: "spring",
                      damping: 10,
                      stiffness: 300,
                    },
                  },
                }),
                exit: (i) => ({
                  opacity: 0,
                  y: 30,
                  rotate: 45,
                  scale: 0.5,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.4,
                  },
                }),
              }}
              by="character"
            >
              EDUCATION
            </TextAnimate>
          </div>
      <div ref={educationRef} className="w-full flex justify-center my-8 px-2">
        <div className="max-w-4xl w-full">
          

          <div className="relative">
            {/* Timeline line - always visible */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            {/* Timeline items - always side by side */}
            <div className="space-y-8">
              {/* Item 1 */}
              <div className="flex items-center justify-center">
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="bg-white/80 dark:bg-neutral-900/80 rounded-lg p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 transform hover:scale-105 transition-transform duration-300 text-center max-w-md mx-auto">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      Bachelor of Engineering
                    </h3>
                    <p className="text-lg text-neutral-700 dark:text-neutral-300">
                      Computer Science & Engineering
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      2021- 2025
                    </p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-neutral-900 shadow-lg"></div>
                <div className="w-1/2 pl-8 flex justify-start">
                  <div className="bg-white/80 dark:bg-neutral-900/80 rounded-lg p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 transform hover:scale-105 transition-transform duration-300 text-center max-w-md mx-auto">
                    <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      Savitribai Phule Pune University
                    </h3>
                    <p className="text-lg text-neutral-700 dark:text-neutral-300">
                      CGPA: 8.86/10
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Graduated with Distinction
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-center">
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="bg-white/80 dark:bg-neutral-900/80 rounded-lg p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 transform hover:scale-105 transition-transform duration-300 text-center max-w-md mx-auto">
                    <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
                      Higher Secondary
                    </h3>
                    <p className="text-lg text-neutral-700 dark:text-neutral-300">
                      Science Stream
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      2019 - 2021
                    </p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-neutral-900 shadow-lg"></div>
                <div className="w-1/2 pl-8 flex justify-start">
                  <div className="bg-white/80 dark:bg-neutral-900/80 rounded-lg p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 transform hover:scale-105 transition-transform duration-300 text-center max-w-md mx-auto">
                    <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
                      New English school and Jr. college Kherdi Sati
                    </h3>
                    <p className="text-lg text-neutral-700 dark:text-neutral-300">
                      Percentage: 84.17%
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Physics, Chemistry, Mathematics,Biology
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center justify-center">
                <div className="w-1/2 pr-8 flex justify-end">
                  <div className="bg-white/80 dark:bg-neutral-900/80 rounded-lg p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 transform hover:scale-105 transition-transform duration-300 text-center max-w-md mx-auto">
                    <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400">
                      Secondary Education
                    </h3>
                    <p className="text-lg text-neutral-700 dark:text-neutral-300">
                      Maharastra Board
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      2018 - 2019
                    </p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white dark:border-neutral-900 shadow-lg"></div>
                <div className="w-1/2 pl-8 flex justify-start">
                  <div className="bg-white/80 dark:bg-neutral-900/80 rounded-lg p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 transform hover:scale-105 transition-transform duration-300 text-center max-w-md mx-auto">
                    <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400">
                      New English school and Jr. college Kherdi Sati
                    </h3>
                    <p className="text-lg text-neutral-700 dark:text-neutral-300">
                      Percentage: 90.80%
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {/*Project Section */}
      <div
        ref={projectsRef}
        className="flex justify-center items-center text-3xl sm:text-5xl mt-5 mb-5 font-bold px-2 text-center"
      >
        <TextAnimate
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              rotate: 45,
              scale: 0.5,
            },
            show: (i) => ({
              opacity: 1,
              y: 0,
              rotate: 0,
              scale: 1,
              transition: {
                delay: i * 0.1,
                duration: 0.4,
                y: {
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                  mass: 0.8,
                },
                rotate: {
                  type: "spring",
                  damping: 8,
                  stiffness: 150,
                },
                scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 300,
                },
              },
            }),
            exit: (i) => ({
              opacity: 0,
              y: 30,
              rotate: 45,
              scale: 0.5,
              transition: {
                delay: i * 0.1,
                duration: 0.4,
              },
            }),
          }}
          by="character"
        >
          PROJECTS
        </TextAnimate>
      </div>

      <div className="w-full flex justify-center my-12 sm:my-24 px-2">
        <div className="w-full sm:w-[1200px]">
          <BentoGrid className="lg:grid-rows-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>

      <VelocityScroll className="my-8 sm:my-12">
        Software Developer
      </VelocityScroll>

      <div className="flex justify-center items-center text-3xl sm:text-5xl mt-5 mb-5 font-bold px-2 text-center">
        <TextAnimate
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              rotate: 45,
              scale: 0.5,
            },
            show: (i) => ({
              opacity: 1,
              y: 0,
              rotate: 0,
              scale: 1,
              transition: {
                delay: i * 0.1,
                duration: 0.4,
                y: {
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                  mass: 0.8,
                },
                rotate: {
                  type: "spring",
                  damping: 8,
                  stiffness: 150,
                },
                scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 300,
                },
              },
            }),
            exit: (i) => ({
              opacity: 0,
              y: 30,
              rotate: 45,
              scale: 0.5,
              transition: {
                delay: i * 0.1,
                duration: 0.4,
              },
            }),
          }}
          by="character"
        >
          About me
        </TextAnimate>
      </div>

      {/* About Section */}

      <div
        ref={achievementRef}
        className="w-full flex justify-center my-8 sm:my-12 px-2"
      >
        <div className="bg-white/80 dark:bg-neutral-900/80 rounded-xl shadow-lg p-4 sm:p-8 max-w-2xl w-full border border-neutral-200 dark:border-neutral-700">
          {/* <h2 className="text-3xl font-bold mb-4 text-center text-gradient bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
           <span>Achievements</span>
          </h2> */}
          <ul className="space-y-3 text-lg text-neutral-800 dark:text-neutral-200 list-disc list-inside">
            <li>
              Secured 2nd place in the BITS Pilani Postman Hackathon 3.0, 2024
            </li>
            <li>Top 10 Finalist, COEP Webscape Hackathon, 2023</li>
            <li>Participated in Smart India Hackathon, 2024</li>
            <li>Participated in KAVACH Cybersecurity Hackathon, 2023</li>
          </ul>
        </div>
      </div>

      <Confetti
        ref={confettiRef}
        manualstart
        style={{
          position: "fixed",
          pointerEvents: "none",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
        }}
      />

      <div
        ref={contactRef}
        className="flex justify-center items-center w-full px-2"
      >
        <MagicCard className="w-full sm:w-[700px] mx-auto">
          <div className="p-4 sm:p-8 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-gradient bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Contact me
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-neutral-700 dark:text-neutral-200 mb-1 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-neutral-700 dark:text-neutral-200 mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 sm:px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-neutral-700 dark:text-neutral-200 mb-1 font-medium">
                  Message
                </label>
                <textarea
                  className="w-full px-3 sm:px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows={4}
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:from-blue-600 hover:to-purple-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </MagicCard>
      </div>

      <DockDemo></DockDemo>
    </div>
  );
}

const features = [
  {
    Icon: FileTextIcon,
    name: "Nourish Me",
    description: "Meal Finder",
    href: "https://foodiesweb-main-1.onrender.com",
    cta: "visit",
    background: (
      <Image src={img3} alt="background" className="absolute opacity-90" />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: FileTextIcon,
    name: "nft-lelo",
    description: "buy extraordinary nfts",
    href: "/",
    cta: "Learn more",
    background: (
      <Image src={img1} alt="background" className="absolute  opacity-90" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: FileTextIcon,
    name: "Landing Page",
    description: "",
    href: "/",
    cta: "",
    background: (
      <Image src={img2} alt="background" className="absolute  opacity-90" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: FileTextIcon,
    name: "",
    description: "Tourist website",
    href: "/",
    cta: "",
    background: (
      <Image src={img5} alt="background" className="absolute  opacity-80" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: FileTextIcon,
    name: "Gibwork Landing Page",
    description:
      " ",
    href: "/",
    cta: "",
    background: (
      <Image src={img4} alt="background" className="absolute opacity-90" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];





