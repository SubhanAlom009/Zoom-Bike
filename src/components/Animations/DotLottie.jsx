import React from 'react';
import Lottie from 'lottie-react';

import animationData from '../../assets/videos/Loading.json';

const LoadingAnimation = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Lottie animationData={animationData} loop autoplay style={{ width: 200, height: 200,marginTop: '-80px' }} />
    </div>
  );
};

export default LoadingAnimation;
