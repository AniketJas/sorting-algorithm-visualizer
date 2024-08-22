import React from "react";
import { Slider } from "@mui/material";

export default function ArraySizeSlider({ arraySize, onChange }) {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className="flex gap-4 w-1/2">
      {/* div for array size slider */}
      <p>Array Size:</p>
      <div className="w-2/3">
        <Slider
          size="small"
          defaultValue={75}
          valueLabelDisplay="auto"
          step={25}
          min={25}
          max={200}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
