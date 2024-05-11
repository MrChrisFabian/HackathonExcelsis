import React, { useState, useEffect } from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const CitySelect = () => {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Select a City</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <select value={selectedCity} onChange={handleCityChange}>
          {CitiesData.map((city, index) => (
            <option key={index} value={city.name}>
              {city.name} ({city.country})
            </option>
          ))}
        </select>
      </CardContent>
    </Card>
  );
};

export default CitySelect;
