import { useContext } from "react";
import Collapsible from "react-collapsible";
import { Context } from "../../context/Context";
import { TiDelete } from "react-icons/ti";
import ColorPicker from "../shared/ColorPicker";
import Slider from "../shared/Slider";
import Checkbox from "../shared/Checkbox";

const ShadowLayer = ({ layer, index }) => {
  const { state, removeShadowLayer, setShadowProperty } = useContext(Context);

  const handleColorChange = (colorRes) => {
    const { r, g, b, a } = colorRes.rgb;
    setShadowProperty(layer.id, "color", `rgba(${r},${g},${b},${a})`);
  };

  const handleSliderChange = (updatedProp, e) => {
    setShadowProperty(layer.id, updatedProp, Number(e.target.value));
  };

  return (
    <div className="py-5 border-b-2">
      <Collapsible trigger={`Shadow #${index}`} open={index === 0}>
        <div className="text-right">
          <button
            type="button"
            className={` ${
              state.boxShadows.length === 1
                ? "bg-white/60 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }  text-white w-8 p-2 rounded-full `}
            onClick={() => removeShadowLayer(layer.id)}
            disabled={state.boxShadows.length === 1}
          >
            <TiDelete />
          </button>
        </div>

        <div>
          <p className="mb-2">Color</p>
          <ColorPicker color={layer.color} onChange={handleColorChange} />
        </div>

        <Slider
          minValue={-200}
          maxValue={200}
          value={layer.horizontalOffset}
          label="Horizontal Length"
          onChange={(e) => handleSliderChange("horizontalOffset", e)}
        />

        <Slider
          minValue={-200}
          maxValue={200}
          value={layer.verticalOffset}
          label="Vertical Length"
          onChange={(e) => handleSliderChange("verticalOffset", e)}
        />

        <Slider
          minValue={0}
          maxValue={200}
          value={layer.blurRadius}
          label="Blur Radius"
          onChange={(e) => handleSliderChange("blurRadius", e)}
        />

        <Slider
          minValue={0}
          maxValue={200}
          value={layer.spreadRadius}
          label="Spread Radius"
          onChange={(e) => handleSliderChange("spreadRadius", e)}
        />

        <div>
          <Checkbox
            checked={layer.inset}
            label="Inset"
            onChange={(e) =>
              setShadowProperty(layer.id, "inset", e.target.checked)
            }
          />
        </div>
      </Collapsible>
    </div>
  );
};

export default ShadowLayer;
