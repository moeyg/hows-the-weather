// import './App.css';
// import React, { useState } from 'react';
// import axios from 'axios';
// import Weather from './components/Weather';

// const App: React.FC = () => {
//   const [data, setData] = useState({});
//   const [location, setLocation] = useState<string>('');

//   const API_KEY = '5578ee79532a2ce977df08952a56d676';
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

//   const searchLocation = (event) => {
//     if (event.key === 'Enter') {
//       axios.get(url).then((response) => {
//         setData(response.data);
//         console.log(response.data);
//       });
//       setLocation('');
//     }
//   };

//   return (
//     <div className='flex flex-col w-full h-full relative gap-10'>
//       <div className='text-center p-4 w-full'>
//         <input
//           value={location}
//           onChange={(event) => setLocation(event.target.value)}
//           onKeyDownCapture={searchLocation}
//           type='text'
//           className='py-3 px-6 w-[00px] text-lg rounded-3xl border border-none text-[#788A5E] focus:outline-none bg-white-600/90 shadow-md placeholder:text-[#788A5E]'
//           placeholder='Enter location'
//         ></input>
//       </div>

//       <Weather weatherData={data} />
//     </div>
//   );
// };

// export default App;

import './App.css';
import React, { useState, KeyboardEvent } from 'react';
import axios from 'axios';
import Weather from './components/Weather';

interface WeatherData {
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
}

const App: React.FC = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<string>('');

  const API_KEY = '5578ee79532a2ce977df08952a56d676';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      try {
        const response = await axios.get<WeatherData>(url);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
      setLocation('');
    }
  };

  return (
    <div className='flex flex-col w-full h-full relative gap-10'>
      <div className='text-center p-4 w-full'>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          type='text'
          className='py-3 px-6 w-[400px] text-lg rounded-3xl border border-none text-[#788A5E] focus:outline-none bg-white-600/90 shadow-md placeholder:text-[#788A5E]'
          placeholder='Enter location'
        />
      </div>

      {data && <Weather weatherData={data} />}
    </div>
  );
};

export default App;
