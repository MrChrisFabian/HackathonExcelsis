import React from "react";
import PeligroIcon from "./PeligroIcon";
import OptimoIcon from "./OptimoIcon";

const iconMapping = {
  peligro: PeligroIcon,
  optimo: OptimoIcon,
  precaucion: PrecaucionIcon,
};

const WeatherComponent = ({ weatherData }) => {
  const WeatherIcon = iconMapping[weatherData.status];

  return (
    <div className="flex items-center gap-2">
      {WeatherIcon && <WeatherIcon />}
    </div>
  );
};

export default WeatherComponent;
