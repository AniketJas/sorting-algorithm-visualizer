import React, { useEffect, useState } from "react";
import { resetArray } from "../functions/resetArray";
import * as MyConstants from "../Constants";
import { sortButtonToggle } from "../functions/sortButtonToggle";
import Buttons from "./Buttons";
import ArraySizeSlider from "./ArraySizeSlider";
import AnimationSpeedSlider from "./AnimationSpeedSlider";

function Visualizer() {
  const [arraySize, setArraySize] = useState(75);
  const [animationSpeed, setAnimationSpeed] = useState(20);
  // const [checkBtn, setCheckBtn] = useState(false);
  const [array, setArray] = useState([]);

  function reset(size) {
    const array = resetArray(size);
    setArray(array);
    sortButtonToggle();
  }

  useEffect(() => {
    reset(arraySize);
  }, [arraySize]);

  return (
    <>
      {/* navbar*/}
      <div className="px-5 h-16 mt-2 flex gap-2 items-center">
        {/* div for generate new array button */}
        <div className="w-1/6">
          <button
            onClick={() => reset(arraySize)}
            className="bg-white text-black py-2 h-max px-4 rounded-2xl"
          >
            Generate New Array
          </button>
        </div>

        {/* {slider divs} */}
        <div className="flex w-5/6 my-2 justify-center items-center">
          <ArraySizeSlider arraySize={arraySize} onChange={setArraySize} />
          <AnimationSpeedSlider
            animationSpeed={animationSpeed}
            onChange={setAnimationSpeed}
          />
        </div>
      </div>

      {/* {button div} */}
      <Buttons array={array} animationSpeed={animationSpeed} />

      {/* displaying bars for array*/}
      <div className="flex gap-1 max-w-screen justify-center mx-16">
        {array.map((value, idx) => {
          return (
            <div
              className="array-bar display-inline w-full"
              key={idx}
              style={{
                height: `${value}px`,
                backgroundColor: MyConstants.PRIMARY_COLOR,
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default Visualizer;
