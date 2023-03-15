import React, { useState, useEffect } from "react";
import Input from "../Input/input";
import Location from "../Location/location";
import Type from "../Type/type";
import Temperature from "../Temperature/temperature";
import Wind from "../Wind/wind";
import Clouds from "../Clouds/clouds";
import "./App.css";
import { displayPartsToString } from "typescript";

export type TypeProps = {
  data: {
    coord: {
      lon: number;
      lat: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
      } [];
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    visibility: number;
    wind: {
      speed: number;
      deg: number;
    };
    clouds: {
      all: number;
    };
    dt: number;
    sys: {
      type: number;
      id: number;
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
  };
};

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState({
    coord: {
      lon: 1,
      lat: 1,
    },
    weather: [
      {
        id: 1,
        main: "",
        description: "",
        icon: "",
      },
    ],
    base: "",
    main: {
      temp: 1,
      feels_like: 1,
      temp_min: 1,
      temp_max: 1,
      pressure: 1,
      humidity: 1,
    },
    visibility: 1,
    wind: {
      speed: 1,
      deg: 1,
    },
    clouds: {
      all: 1,
    },
    dt: 1,
    sys: {
      type: 1,
      id: 1,
      country: '',
      sunrise: 1,
      sunset: 1,
    },
    timezone: 1,
    id: 1,
    name: "",
    cod: 1,
  });

  useEffect(() => {
    async function getInitialData() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f4033ff817e090fcb37e438bc78dc587`
      );
      const dataResponse = await response.json();
      setData(dataResponse);
      console.log(dataResponse);
    }
    getInitialData();
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const cityInput = e.target.value;
    console.log(cityInput);
    setInput(cityInput);
  }

  
  async function handleClick() {
    async function getData(input: string) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=f4033ff817e090fcb37e438bc78dc587`
        ); // need callums key for api
        const dataResponse = await response.json();
        setData(dataResponse);
      }
      await getData(input);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input handleChange={handleChange} handleClick={handleClick} />
      <Location displayedLocation={input}/>
      <Type data={data}/>
      <Temperature data={data}/>
      <Wind data={data}/>
      <Clouds data={data}/>
    </div>
  );
}

export default App;
