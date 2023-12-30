import { TiDelete } from "react-icons/ti";
import ColorPicker from "../shared/ColorPicker";
import { Context } from "../../context/Context";
import { useContext } from "react";

const ColorLayer = ({ layer, index }) => {
  const { state, removeGradientColor, setGradientColor } = useContext(Context);
  const handleColorChange = (colorRes) => {
    const { r, g, b, a } = colorRes.rgb;
    setGradientColor(layer.id, "color", `rgba(${r}, ${g}, ${b}, ${a})`);
  };

  return (
    <div className="flex items-center justify-between my-4">
      <p>#{index + 1}</p>
      <ColorPicker
        color={layer.color}
        onChange={handleColorChange}
        showText={false}
      />

      <div>
        <div className="border flex relative rounded shadow-sm border-purple-500">
          <div>
            <div className="absolute top-3.5 left-0 px-3 flex items-start justify-between gap-x-2 w-full pointer-events-none duration-200 opacity-80 text-[10px] -translate-y-2">
              <label className="block">Position</label>
              <span> %</span>
            </div>
          </div>
          <input
            className="block border-none bg-transparent placeholder-gray-400 w-full px-3 py-1 ease-in-out focus:ring-0 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-xs pt-5"
            type="number"
            min="0"
            max="100"
            aria-label="Position"
            defaultValue={layer.stop}
            onChange={(e) =>
              setGradientColor(layer.id, "stop", Number(e.target.value))
            }
          />
        </div>
      </div>
      <button
        type="button"
        className={` ${
          state.gradient.colors.length <= 2
            ? "bg-white/60 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600"
        }  text-white w-8 p-2 rounded-full max-h-[40px] `}
        onClick={() => removeGradientColor(layer.id)}
        disabled={state.gradient.colors.length <= 2}
      >
        <TiDelete />
      </button>
    </div>
  );
};

export default ColorLayer;
