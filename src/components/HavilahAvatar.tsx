import React from 'react';

export const HavilahAvatar: React.FC<{ size?: number; className?: string }> = ({
  size = 40,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="20" cy="20" r="20" fill="#1a1a1a" />
    <ellipse cx="20" cy="14" rx="11" ry="12" fill="#1a0a00" />
    <ellipse cx="20" cy="10" rx="9" ry="8" fill="#1a0a00" />
    <ellipse cx="10" cy="22" rx="4" ry="10" fill="#1a0a00" />
    <ellipse cx="30" cy="22" rx="4" ry="10" fill="#1a0a00" />
    <ellipse cx="20" cy="19" rx="8" ry="9" fill="#C8956C" />
    <rect x="17" y="26" width="6" height="5" fill="#C8956C" />
    <ellipse cx="20" cy="36" rx="12" ry="8" fill="#111111" />
    <polygon points="20,28 15,36 25,36" fill="#0a0a0a" />
    <ellipse cx="16.5" cy="18" rx="1.5" ry="1.2" fill="#2d1a0a" />
    <ellipse cx="23.5" cy="18" rx="1.5" ry="1.2" fill="#2d1a0a" />
    <path
      d="M14.5 15.5 Q16.5 14.5 18.5 15.5"
      stroke="#1a0a00"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M21.5 15.5 Q23.5 14.5 25.5 15.5"
      stroke="#1a0a00"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M17.5 22.5 Q20 24 22.5 22.5"
      stroke="#8B4513"
      strokeWidth="1"
      fill="none"
    />
    <circle cx="12" cy="20" r="1" fill="#C9A84C" />
    <circle cx="28" cy="20" r="1" fill="#C9A84C" />
    <path
      d="M16 28 Q20 31 24 28"
      stroke="#C9A84C"
      strokeWidth="0.8"
      fill="none"
    />
    <circle cx="20" cy="20" r="19.5" stroke="#C9A84C" strokeWidth="1" />
  </svg>
);
