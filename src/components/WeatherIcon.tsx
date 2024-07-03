import React from 'react';

interface WeatherIconProps {
  icon: string;
  description: string;
}

const weathers: { [key: string]: string } = {
  '01d': 'sunny',
  '01n': 'sunny',
  '02d': 'cloud',
  '02n': 'cloud',
  '03d': 'cloud',
  '03n': 'cloud',
  '04d': 'cloud',
  '04n': 'cloud',
  '09d': 'drizzle',
  '09n': 'drizzle',
  '10d': 'rain',
  '10n': 'rain',
  '11d': 'thunder',
  '11n': 'thunder',
  '13d': 'snow',
  '13n': 'snow',
  '50d': 'cloud',
  '50n': 'cloud',
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ icon, description }) => {
  const weather = weathers[icon] || 'cloud';
  const url = `/icons/${weather}.svg`;

  return (
    <div>
      <img src={url} alt={description} className='w-[130px]' />
    </div>
  );
};

export default WeatherIcon;
