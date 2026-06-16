import React from "react";

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const IconHome = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V9.5Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M9 21V15H15V21" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
);

export const IconProduct = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="20" height="14" rx="2" stroke={color} strokeWidth="1.8"/>
    <path d="M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M12 12V16M10 14H14" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const IconAbout = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.8"/>
    <path d="M4 20C4 17.2386 7.58172 15 12 15C16.4183 15 20 17.2386 20 20" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="19" cy="8" r="3" stroke={color} strokeWidth="1.6"/>
    <path d="M22 17C22 15.3431 20.6569 14 19 14" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

export const IconContact = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
);

export const IconWarehouse = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M2 8L12 3L22 8V21H2V8Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
    <rect x="9" y="14" width="6" height="7" rx="0.5" stroke={color} strokeWidth="1.8"/>
    <rect x="4" y="11" width="4" height="4" rx="0.5" stroke={color} strokeWidth="1.8"/>
    <rect x="16" y="11" width="4" height="4" rx="0.5" stroke={color} strokeWidth="1.8"/>
  </svg>
);

export const IconStar = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
);

export const IconTruck = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M1 3H16V16H1V3Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M16 8H20L23 11V16H16V8Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
    <circle cx="5.5" cy="18.5" r="2.5" stroke={color} strokeWidth="1.8"/>
    <circle cx="18.5" cy="18.5" r="2.5" stroke={color} strokeWidth="1.8"/>
  </svg>
);

export const IconShield = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 6V12C3 16.97 7.02 21.61 12 23C16.98 21.61 21 16.97 21 12V6L12 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconHandshake = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12L6 8H10L13 11H16L22 7" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 7L20 12L16 14L13 11" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 8L4 12L8 16L13 11" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 16L12 20L16 14" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconLocation = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.69 2 6 4.69 6 8C6 12.5 12 19 12 19C12 19 18 12.5 18 8C18 4.69 15.31 2 12 2Z" stroke={color} strokeWidth="1.8"/>
    <circle cx="12" cy="8" r="2.5" stroke={color} strokeWidth="1.8"/>
  </svg>
);

export const IconPhone = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="2" width="14" height="20" rx="2" stroke={color} strokeWidth="1.8"/>
    <circle cx="12" cy="18" r="1" fill={color}/>
    <path d="M9 5H15" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const IconEmail = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth="1.8"/>
    <path d="M2 8L12 14L22 8" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
  </svg>
);

export const IconWhatsapp = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.49 15.59 3.35 17.1L2 22L7.07 20.67C8.54 21.47 10.22 21.93 12 21.93C17.52 21.93 22 17.45 22 11.93C22 6.41 17.52 2 12 2Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M8.5 8.5C8.5 8.5 8 9.5 9 11C10 12.5 11.5 13.5 13 14C14.5 14.5 15.5 14 15.5 14L16 12.5L13.5 12L13 13C13 13 11 12.5 10 11L11 10.5L10.5 8L8.5 8.5Z" stroke={color} strokeWidth="1.4" strokeLinejoin="round"/>
  </svg>
);

export const IconChevronDown = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L12 15L18 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconMenu = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6H21M3 12H21M3 18H21" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IconClose = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IconArrowRight = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconBox = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V8L12 3L3 8V16L12 21L21 16Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M3 8L12 13L21 8" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M12 13V21" stroke={color} strokeWidth="1.8"/>
    <path d="M7.5 5.5L16.5 10.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const IconUsers = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="7" r="4" stroke={color} strokeWidth="1.8"/>
    <path d="M2 21C2 17.686 5.13 15 9 15C12.87 15 16 17.686 16 21" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M16 3.13C17.7 3.6 19 5.17 19 7C19 8.83 17.7 10.4 16 10.87" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M22 21C22 18.5 20.3 16.4 18 15.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const IconBuildingOffice = ({ className = "", size = 24, color = "currentColor" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="1" stroke={color} strokeWidth="1.8"/>
    <path d="M8 7H10M14 7H16M8 11H10M14 11H16M8 15H10M14 15H16" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M10 21V17H14V21" stroke={color} strokeWidth="1.8"/>
  </svg>
);
