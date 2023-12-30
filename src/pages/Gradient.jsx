import { useContext, useState } from "react";
import { Context } from "../context/Context";
import ColorLayer from "../components/gradientLayer/ColorLayer";
import Radio from "../components/shared/Radio";
import Checkbox from "../components/shared/Checkbox";
import {
  CircularInput,
  CircularProgress,
  CircularThumb,
  CircularTrack,
} from "react-circular-input";

const Gradient = () => {
  const { state, addNewGradientColor, setGradientProperty } =
    useContext(Context);
  const [value, setValue] = useState(0);

  const stepValue = (v) => {
    return Math.round(v * 360) / 360;
  };

  const handleTypeChange = (e) => {
    setGradientProperty("type", e.target.value);
  };

  const handleAngleChange = (v) => {
    setValue(stepValue(v));
    setGradientProperty("angle", Math.round(stepValue(v) * 360));
  };

  return (
    <div className="overflow-y-auto">
      <h1 className="text-lg font-bold text-center">Gradients</h1>
      <Checkbox
        checked={state.gradient.active}
        label="Enable"
        onChange={(e) => setGradientProperty("active", e.target.checked)}
      />
      <div>
        <p className="my-2">Colors</p>
        <div>
          {state.gradient.colors.map((color, index) => (
            <ColorLayer key={color.id} index={index} layer={color} />
          ))}
          <div className="mt-4">
            <button
              type="button"
              className="rounded-md py-2 w-full shadow-sm bg-purple-700 text-white hover:bg-purple-800"
              onClick={addNewGradientColor}
            >
              Add New Color
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="my-2">Type</p>
        <div className="flex justify-between select-none">
          <Radio
            defaultChecked
            label="Linear"
            name="gradient"
            value="linear-gradient"
            onChange={handleTypeChange}
          />
          <Radio
            label="Radial"
            name="gradient"
            value="radial-gradient"
            onChange={handleTypeChange}
          />
        </div>
      </div>

      <div className="custom flex justify-between mt-4 py-4 pr-4">
        <p className="my-2">Angle</p>
        <CircularInput value={value} onChange={(v) => handleAngleChange(v)}>
          <CircularTrack strokeWidth={5} stroke="#eee" />
          <CircularProgress stroke="#b080d8" />
          <CircularThumb fill="#3e175d" />

          <text
            x={100}
            y={100}
            textAnchor="middle"
            dy="0.3em"
            fontWeight="bold"
            fill="white"
            className="text-4xl"
          >
            {Math.round(stepValue(value) * 360)}
          </text>
        </CircularInput>
      </div>
    </div>
  );
};

export default Gradient;
