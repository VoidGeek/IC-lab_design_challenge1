import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="glass-footer">
        <div className="text-center text-gray-500 py-2">
          &#169; Copyrights - myProfile {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
