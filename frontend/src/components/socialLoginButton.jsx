import React from 'react';

const SocialLoginButton = ({ icon, onClick, label, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex-grow justify-center ${className} text-white py-2 px-4 rounded-md flex items-center mr-4`}
    >
      {icon}
      {/* <span>{label}</span> */}
    </button>
  );
};

export default SocialLoginButton;