import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const CitiesData = [
  {
    name: "New York",
    country: "United States",
  },
  {
    name: "Los Angeles",
    country: "United States",
  },
  {
    name: "Chicago",
    country: "United States",
  },
];

const CitySelect = () => (
  <Card>
    <CardHeader>
      <CardTitle>Select a City</CardTitle>
    </CardHeader>
    <CardContent className="grid gap-4">
      {CitiesData.map((city, index) => (
        <div className="grid gap-2" key={index}>
          <div className="grid gap-0.5">
            <div className="font-medium">{city.name}</div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              {city.country}
            </div>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);

export default CitySelect;
