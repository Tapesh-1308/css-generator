import { useContext } from "react";
import { Context } from "../context/Context";
import ShadowLayer from "../components/shadowLayer/ShadowLayer";
import Checkbox from "../components/shared/Checkbox";

const BoxShadow = () => {
  const { state, addNewShadowLayer } = useContext(Context);

  return (
    <>
      <h1 className="text-lg font-bold text-center">Box Shadows</h1>

      <div className="overflow-y-auto">
        {state.boxShadows.map((shadowLayer, index) => (
          <ShadowLayer key={shadowLayer.id} index={index} layer={shadowLayer} />
        ))}
      </div>
      <div className="mt-4">
        <button
          type="button"
          className="rounded-md py-2 w-full shadow-sm bg-purple-700 text-white hover:bg-purple-800"
          onClick={addNewShadowLayer}
        >
          Add New Layer
        </button>
      </div>
    </>
  );
}

export default BoxShadow