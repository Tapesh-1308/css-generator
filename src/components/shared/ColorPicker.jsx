import { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ color, onChange, showText=true }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="w-full min-w-[50px] h-8 rounded-sm border-2 border-gray-400 text-slate-500 text-sm"
        style={{backgroundColor: color}}
        onClick={() => setIsActive(!isActive)}
      >
        {showText ? color : ""}
      </button>

      {isActive && (
        <div className="absolute z-[2]">
            <div className="fixed top-0 right-0 left-0 bottom-0"
                onClick={() => setIsActive(false)} />
            <SketchPicker color={color} onChange={onChange}/>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
