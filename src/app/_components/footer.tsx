import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-10 mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs block">
        &copy; 2023 Samuele. All rights reserved.
      </small>
      <p className="text-xs">
        <span>About this website:</span> built with React & Next.js, TypeScript,
        Tailwind CSS, Resend, Vercel hosting.
      </p>
    </footer>
  );
}
