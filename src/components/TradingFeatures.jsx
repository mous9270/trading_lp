import React from 'react';

const TradingFeatures = () => {
  const features = [
    {
      title: "Instant access to TradingView Indicators",
      icon: "./bulb.svg"
    },
    {
      title: "Professional Trader Support Group",
      icon: "./bulb.svg"
    },
    {
      title: "Generate consistent Profits",
      icon: "./bulb.svg"
    }
  ];

  return (
    <div className="my-8">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="flex items-center gap-4 mb-6 last:mb-0"
        >
          <div className="flex-shrink-0">
            <img
              src={feature.icon}
              alt={`Feature icon ${index + 1}`}
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-xl text-neutral-600">
            {feature.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TradingFeatures;