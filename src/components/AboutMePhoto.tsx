"use client";

import React from 'react';
import Image from 'next/image';

const AboutMePhoto = () => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div style={{ flex: 1, minWidth: 220, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Image
        src="/my_photo.jpg"
        alt="Mohamed Atef"
        width={320}
        height={320}
        style={{
          borderRadius: 24,
          boxShadow: '0 0 32px 8px #4fd1c588, 0 2px 16px #a6c1ee55',
          filter: hovered ? 'brightness(1)' : 'brightness(0.7)',
          transition: 'filter 0.4s cubic-bezier(.4,2,.6,1), transform 0.4s cubic-bezier(.4,2,.6,1)',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          objectFit: 'cover',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </div>
  );
};

export default AboutMePhoto; 