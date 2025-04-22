// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col items-center gap-y-6 text-center">
      <h2 className="text-4xl font-bold text-slate-200">Get In Touch</h2>
      <p className="text-xl text-slate-400 max-w-md">
        Feel free to reach out to me for any collaborations or inquiries. I'd love to connect!
      </p>
      <a
        href="mailto:danielshaqfeh@gmail.com"
        className="bg-teal-600 text-white py-2 px-5 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-lg"
      >
        Send Me an Email
      </a>
    </div>
  );
}

export default Contact;
