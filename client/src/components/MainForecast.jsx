import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import axios from "axios";

const MainForecast = () => (
  <div className="grid gap-2 items-center">
    <h1 className="text-4xl font-bold sm:text-5xl md:text-4xl">
      El clima de hoy
    </h1>
    <div className="flex items-center gap-4 flex-col sm:flex-row">
      <p className="text-gray-500 dark:text-gray-400">Asunción, Central</p>

      <div className="flex items-center gap-2">
        <Switch id="temp-unit" />
        <Label htmlFor="temp-unit">Celsius</Label>
      </div>
    </div>
    <div className="flex flex-row items-center gap-x-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-sun"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
      </svg>
      <div className="grid gap-1">
        <div className="text-6xl font-bold sm:text-7xl md:text-8xl">22°C</div>
        <div className="text-lg font-medium sm:text-xl md:text-2xl">
          <p className="bg-orange-300 text-sm size-fit px-3 py-2 font-semibold rounded-full text-orange-800">
            Precaución
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default MainForecast;
