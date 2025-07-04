
"use client"


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
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { RetroGrid } from "@/components/magicui/retro-grid";


export default function Home() {


  const imageUrls = [
    "https://cdn-icons-png.flaticon.com/512/733/733609.png",
    "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    "https://cdn-icons-png.flaticon.com/512/2111/2111393.png",
    "https://cdn-icons-png.flaticon.com/512/732/732200.png",
    "https://cdn-icons-png.flaticon.com/512/733/733609.png",
    "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    "https://cdn-icons-png.flaticon.com/512/2111/2111393.png",
    "https://cdn-icons-png.flaticon.com/512/732/732200.png",
    "https://cdn-icons-png.flaticon.com/512/733/733609.png",
    "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    "https://cdn-icons-png.flaticon.com/512/2111/2111393.png",
    "https://cdn-icons-png.flaticon.com/512/732/732200.png",
  ];



  return (
    <div className="relative min-h-screen bg-background text-foreground">
      
      <GridPattern className="text-white/10 dark:text-white/5 opacity-35 mask-t-from-85% mask-b-from-50% "></GridPattern>
     
      <nav className="relative z-10 flex items-center justify-center px-6 py-6">
        <ul className="flex space-x-12">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Eduction</li>
          <li className="cursor-pointer">Skills</li>
        </ul>
      </nav>


      <div className="flex justify-center flex-col items-center h-[400px]">
        <SparklesText className="mask-b-from-50%" children={"Hey I am Aditya"}></SparklesText>
         <AuroraText className="mask-b-from-50% text-7xl font-bold" children={"Frontend Developer"}></AuroraText>

         
      <TypingAnimation className="max-w-xl mt-5 mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center"> 
      I specialize in HTML, CSS, and JavaScript to create responsive and visually appealing user interfaces. I utilize React and Next.js for building dynamic web applications.
      </TypingAnimation>
      </div>


      <div className="flex justify-center items-center text-5xl mb-5 font-bold">
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

      <MorphingText texts={["React","NextJS","JavaScript","HTML","CSS","C++","SQL"]}></MorphingText>
      
      <DockDemo></DockDemo>




<div className="w-full flex justify-center my-32">
  <div className="w-[1200px]">
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  </div>

  
</div>

      {/* <IconCloud images={imageUrls}></IconCloud> */}

      
{/* 
        <ShimmerButton className="text-white">download Resume</ShimmerButton>
        <AuroraText children={"aditya modak"}></AuroraText>
        <IconCloud images={imageUrls}></IconCloud>
        <NumberTicker value={100}></NumberTicker>
        <SparklesText children={"aditya modak"}></SparklesText>
        <TypingAnimation children={"aditya modak"}></TypingAnimation>

        <MorphingText texts={["React","developer"]}></MorphingText>

        <VelocityScroll>software developer</VelocityScroll>
      
        <DockDemo></DockDemo>

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
      Wavy Motion!
    </TextAnimate>

   


 <div className="relative h-[600px] border mask-t-from-0 ">
  

      <RetroGrid />
     </div> */}
    
      
    </div>

  
  );
}




import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";


const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

