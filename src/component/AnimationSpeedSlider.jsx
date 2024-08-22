import React from "react";
import { Slider } from "@mui/material";

export default function AnimationSpeedSlider({ animationSpeed, onChange }) {
  const marks = [
    {
      value: 5,
      label: "5",
    },
    {
      value: 10,
      label: "10",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 30,
      label: "30",
    },
    {
      value: 40,
      label: "40",
    },
    {
      value: 50,
      label: "50",
    },
    {
      value: 60,
      label: "60",
    },
    {
      value: 75,
      label: "75",
    },
    {
      value: 90,
      label: "90",
    },
    {
      value: 100,
      label: "100",
    },
  ];

  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className="flex gap-4 w-1/2 items-center">
      {/* div for animation speed slider */}
      <p>Animation Speed: </p>
      <div className="w-2/3">
        <Slider
          aria-label="Custom marks"
          size="small"
          defaultValue={20}
          step={5}
          min={5}
          max={100}
          valueLabelDisplay="off"
          marks={marks}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
