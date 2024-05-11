import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import axios from "axios";

const MainForecast = () => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/weather/central/data")
      .then((res) => {
        setWeather(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="grid gap-2 items-center">
      <h1 className="text-4xl font-bold sm:text-5xl md:text-4xl">
        El clima de hoy
      </h1>
      <div className="flex items-center gap-4 flex-col sm:flex-row">
        <p className="text-gray-500 dark:text-gray-400">Asunción, Central</p>
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <div className="grid gap-1">
          <div className="text-6xl font-bold sm:text-7xl md:text-8xl">
            {weather[0].main.temp}
          </div>
          <div className="text-lg font-medium sm:text-xl md:text-2xl">
            <p className="bg-orange-300 text-sm size-fit px-3 py-2 font-semibold rounded-full text-orange-800"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainForecast;
