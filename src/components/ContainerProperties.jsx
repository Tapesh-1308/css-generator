import { useContext } from "react";
import { Context } from "../context/Context";
import Slider from "./shared/Slider";
import ColorPicker from "./shared/ColorPicker";

const ContainerProperties = () => {
  const { state, setContainerProperty } = useContext(Context);

  const handleSliderChange = (updatedProp, e) => {
    setContainerProperty(updatedProp, Number(e.target.value));
  };

  const handleColorChange = (colorRes) => {
    const { r,g,b,a } = colorRes.rgb;
    setContainerProperty("background", `rgba(${r},${g},${b},${a})`);
  };

  return (
    <>
      <h1 className="text-lg font-bold mb-5 text-center">
        Container Properties
      </h1>

      <div>
        <div className="mt-5">
          <p className="py-2">Color</p>
          <ColorPicker
            color={state.containerProps.background}
            onChange={handleColorChange}
          />
        </div>

        <Slider
          minValue={10}
          maxValue={500}
          value={state.containerProps.width}
          label="Width"
          onChange={(e) => handleSliderChange("width", e)}
        />
        <Slider
          minValue={10}
          maxValue={500}
          value={state.containerProps.height}
          label="Height"
          onChange={(e) => handleSliderChange("height", e)}
        />

        <Slider
          minValue={0}
          maxValue={300}
          value={state.containerProps.borderRadius}
          label="Border Radius"
          onChange={(e) => handleSliderChange("borderRadius", e)}
        />
      </div>
    </>
  );
};

export default ContainerProperties;
