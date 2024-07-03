import React from 'react';
import WeatherIcon from './WeatherIcon';

interface WeatherProps {
  weatherData: {
    name: string;
    sys: {
      country: string;
    };
    weather: {
      description: string;
      icon: string;
    }[];
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
    };
    wind: {
      speed: number;
    };
  };
}

const Weather: React.FC<WeatherProps> = ({ weatherData }) => {
  return (
    <div>
      {weatherData.weather ? (
        <div className='flex flex-col md:flex-row justify-center items-center w-full h-full bg-[#788A5E] text-[#1A1A1A] shadow-lg rounded-xl m-auto relative px-8 py-8 	backdrop-blur-xl'>
          <div className='md:w-1/2 my-4 mx-auto flex justify-center md:justify-between items-center'>
            <div className='flex flex-col items-center md:items-start justify-between h-full text-center md:text-left md:gap-24'>
              <div>
                <p className='text-2xl md:text-3xl'>
                  {weatherData.name}, {weatherData.sys.country}
                </p>
                <p className='text-sm mb-3 md:mb-0'>
                  {weatherData.weather[0].description}
                </p>
              </div>
              <div>
                <h1 className='text-6xl font-semibold'>
                  {weatherData.main.temp.toFixed()}℃
                </h1>
              </div>
            </div>
          </div>

          <div className='md:w-1/2 flex flex-col justify-center md:justify-between items-center md:items-end mt-0'>
            <div className='relative'>
              <WeatherIcon
                icon={weatherData.weather[0].icon}
                description={weatherData.weather[0].description}
              />
            </div>
            {weatherData.name !== undefined ? (
              <div className='flex flex-col justify-evenly mt-5 gap-y-1 md:mt-5 md:gap-y-0 md:my-4 md:mr-1 text-sm'>
                <div className='flex justify-between gap-x-8'>
                  <p>Feels like</p>
                  <p className='font-bold w-20'>
                    {weatherData.main.feels_like.toFixed()} ℃
                  </p>
                </div>
                <div className='flex justify-between gap-x-8'>
                  <p>Humidity</p>
                  <p className='font-bold w-20'>
                    {weatherData.main.humidity.toFixed()} %
                  </p>
                </div>
                <div className='flex justify-between gap-x-8'>
                  <p>Wind</p>
                  <p className='font-bold w-20'>
                    {weatherData.wind.speed.toFixed()} KPH
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
