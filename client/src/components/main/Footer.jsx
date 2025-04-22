// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 mt-20 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm">
          © Designed & Inspired by <a href="https://brittanychiang.com/" className="text-teal-500 hover:text-teal-400 transition-colors" target="_blank" rel="noopener noreferrer">Brittany Chiang</a>. Developed by Daniel Shaqfeh.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
