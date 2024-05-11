import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";

const forecastData = [
  {
    day: "Monday",
    fecha_hora_txt: "2024-05-11 06:00:00",
    maxTemp: 25,
    minTemp: 15,
    condition: "Sunny",
  },
  {
    day: "Tuesday",
    fecha_hora_txt: "2024-05-12 06:00:00",
    maxTemp: 28,
    minTemp: 18,
    condition: "Partly Cloudy",
  },
  {
    day: "Wednesday",
    fecha_hora_txt: "2024-05-13 06:00:00",
    maxTemp: 30,
    minTemp: 20,
    condition: "Sunny",
  },
];

const NextDaysForecast = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
    {forecastData.map((forecast, index) => (
      <Card key={index} className="w-full md:w-[150px] lg:w-[200px] ">
        <CardHeader>
          <CardTitle>{forecast.day}</CardTitle>
          <CardDescription>
            {formatDateTime(forecast.fecha_hora_txt)}
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-4 items-center py-3">
          <section className="grid grid-cols-2 gap-2 text-center">
            <div>
              <h3 className="text-xl font-medium sm:text-3xl md:text-4xl">
                {forecast.maxTemp}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Máx</p>
            </div>
            <div>
              <h3 className="text-xl font-medium sm:text-3xl md:text-4xl">
                {forecast.minTemp}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Min</p>
            </div>
            {/* badge */}
            <p className="bg-orange-300 text-sm size-fit px-3 py-2 font-semibold rounded-full text-orange-800">
              Precaución
            </p>
          </section>
        </CardContent>
      </Card>
    ))}
  </div>
);

const formatDateTime = (dateTime) => {
  const date = new Date(dateTime);
  const formattedDate = date.toLocaleDateString("es-ES");
  const formattedTime = date.toLocaleTimeString("es-ES");
  return `${formattedDate} ${formattedTime}`;
};

export default NextDaysForecast;
