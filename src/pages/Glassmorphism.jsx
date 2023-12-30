import { useContext } from "react";
import Slider from "../components/shared/Slider";
import { Context } from "../context/Context";
import Checkbox from "../components/shared/Checkbox";

const Glassmorphism = () => {
  const {
    state: { glassmorphism },
    setGlassmorphismProperty,
  } = useContext(Context);
  const handleStateChange = (key, e) => {
    setGlassmorphismProperty(key, Number(e.target.value));
  };
  return (
    <div className="overflow-y-auto">
      <h1 className="text-lg font-bold text-center">Glassmorphism</h1>
      <Checkbox
        checked={glassmorphism.active}
        label="Enable"
        onChange={(e) => setGlassmorphismProperty("active", e.target.checked)}
      />
      <div>
        <p className="my-2">Background</p>
        <input
          type="url"
          value={glassmorphism.backgroundUrl}
          className="border-2 border-purple-600 rounded-md px-[10px] py-[5px] bg-transparent w-full outline-none"
          placeholder="Enter Image URL"
          onChange={(e) =>
            setGlassmorphismProperty("backgroundUrl", e.target.value)
          }
        />
      </div>

      <Slider
        label="Blur Radius"
        minValue={0}
        maxValue={25}
        value={glassmorphism.blurRadius}
        onChange={(e) => handleStateChange("blurRadius", e)}
      />

      <Slider
        label="Opacity"
        minValue={0}
        maxValue={100}
        value={glassmorphism.opacity}
        unit="%"
        onChange={(e) => handleStateChange("opacity", e)}
      />

      <Slider
        label="Saturation"
        minValue={0}
        maxValue={200}
        value={glassmorphism.saturation}
        unit="%"
        onChange={(e) => handleStateChange("saturation", e)}
      />
    </div>
  );
};

export default Glassmorphism;
