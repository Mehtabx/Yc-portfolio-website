import React from 'react';

const SubtleArt: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      className={className}
      width="404" 
      height="404" 
      viewBox="0 0 404 404" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M404 0L0 404" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M202 0L0 202" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M404 202L202 404" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M404 101L101 404" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M303 0L0 303" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M404 303L303 404" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M101 0L0 101" stroke="currentColor" strokeWidth="0.5"/>
    </svg>
  );
};

export default SubtleArt;
