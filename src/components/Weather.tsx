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
        <div className='w-[500px] h-[250px] bg-[#788A5E] text-[#1A1A1A] shadow-lg rounded-xl m-auto relative px-6'>
          <div className='flex justify-between w-full'>
            <div className='w-1/2 my-4 mx-auto flex justify-between items-center'>
              <div className='flex flex-col items-start justify-between h-full'>
                <div>
                  <p className='text-xl'>
                    {weatherData.name}, {weatherData.sys.country}
                  </p>
                  <p className='text-sm'>
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

            <div className='w-1/2 flex flex-col justify-between items-end'>
              <div className='relative'>
                <WeatherIcon
                  icon={weatherData.weather[0].icon}
                  description={weatherData.weather[0].description}
                />
              </div>
              {weatherData.name !== undefined ? (
                <div className='flex flex-col justify-evenly gap-y- my-4 mr-1 text-s'>
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
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
