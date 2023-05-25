import React from 'react';

const BackgroundImage = ({ imageUrl, children }) => {
  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  };

  return <div style={backgroundStyle}>{children}</div>;
};

export default BackgroundImage;