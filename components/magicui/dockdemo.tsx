"use client";

import React from "react";
import { Twitter } from "lucide-react";

import { Dock, DockIcon } from "@/components/magicui/dock";
export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <div className="relative">
      <Dock iconMagnification={60} iconDistance={100}>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <a href="mailto:modakaditya512@email.com" target="_blank" rel="noopener noreferrer">
            <Icons.email className="size-full" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <a href="https://x.com/Aditya2002M" target="_blank" rel="noopener noreferrer">
            <Icons.twitter className="size-full" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <a href="https://github.com/Aditya2002M/" target="_blank" rel="noopener noreferrer">
            <Icons.gitHub className="size-full" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <a href="https://leetcode.com/u/Little_Bits/" target="_blank" rel="noopener noreferrer">
            <Icons.leetcode className="size-full" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <a href="https://www.linkedin.com/in/aditya-modak-42a684250/" target="_blank" rel="noopener noreferrer">
            <Icons.linkedin className="size-full" />
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10">
          <a href="https://wa.me/8262027551" target="_blank" rel="noopener noreferrer">
            <Icons.whatsapp className="size-full" />
          </a>
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props} xmlns="http://www.w3.org/2000/svg">
      <g>
        <path fill="#181717" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </g>
    </svg>
  ),
  whatsapp: (props: IconProps) => (
    <svg viewBox="0 0 32 32" {...props} xmlns="http://www.w3.org/2000/svg">
      <g>
        <circle cx="16" cy="16" r="16" fill="#25D366"/>
        <path fill="#FFF" d="M16 6.5c-5.24 0-9.5 4.26-9.5 9.5 0 1.67.44 3.29 1.28 4.72L6.5 25.5l4.41-1.16A9.47 9.47 0 0 0 16 25.5c5.24 0 9.5-4.26 9.5-9.5s-4.26-9.5-9.5-9.5zm0 17.5c-1.5 0-2.97-.39-4.25-1.13l-.3-.17-2.62.69.7-2.55-.18-.31A7.48 7.48 0 0 1 8.5 16c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5zm4.13-5.62c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.51.12-.15.23-.58.75-.71.9-.13.15-.26.17-.49.06-.23-.12-.97-.36-1.85-1.13-.68-.6-1.14-1.34-1.28-1.57-.13-.23-.01-.35.1-.46.1-.1.23-.26.34-.39.11-.13.15-.23.23-.38.08-.15.04-.28-.02-.39-.06-.12-.51-1.23-.7-1.68-.18-.44-.37-.38-.51-.39-.13-.01-.28-.01-.43-.01-.15 0-.39.06-.6.28-.21.22-.8.78-.8 1.9 0 1.12.82 2.2.93 2.35.11.15 1.62 2.48 3.93 3.38.55.24.98.38 1.31.49.55.18 1.05.15 1.44.09.44-.07 1.36-.56 1.55-1.1.19-.54.19-1.01.13-1.1-.06-.09-.21-.15-.44-.27z"/>
      </g>
    </svg>
  ),
  email: (props: IconProps) => (
    <svg viewBox="0 0 32 32" {...props} xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect x="4" y="8" width="24" height="16" rx="2" fill="#EA4335"/>
        <polygon points="4,8 16,20 28,8" fill="#FFF"/>
      </g>
    </svg>
  ),
  twitter: (props: IconProps) => (
    <Twitter {...props} />
  ),
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 32 32" {...props} xmlns="http://www.w3.org/2000/svg">
      <g>
        <circle cx="16" cy="16" r="16" fill="#0077B5"/>
        <path fill="#FFF" d="M12.06 24h-3.13V13.33h3.13V24zM10.5 12.06c-1 0-1.81-.81-1.81-1.81 0-1 .81-1.81 1.81-1.81s1.81.81 1.81 1.81c0 1-.81 1.81-1.81 1.81zm13.5 11.94h-3.13v-5.33c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V24h-3.13V13.33h3v1.45h.04c.42-.8 1.44-1.64 2.97-1.64 3.18 0 3.77 2.09 3.77 4.81V24z"/>
      </g>
    </svg>
  ),
  leetcode: (props: IconProps) => (
    <svg viewBox="0 0 32 32" {...props} xmlns="http://www.w3.org/2000/svg">
      <g>
        <circle cx="16" cy="16" r="16" fill="#FFA116"/>
        <path d="M12 22L7 16L16 7L25 16L20 22" stroke="#292D3D" strokeWidth="2" fill="none"/>
        <path d="M16 25L20 22" stroke="#292D3D" strokeWidth="2" fill="none"/>
      </g>
    </svg>
  ),
};
