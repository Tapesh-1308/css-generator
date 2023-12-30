import { useContext, useState } from "react";
import { useEffect } from "react";
import { Context } from "../context/Context";
import {
  getGlassmorphismStyleObject,
  getStringifiedGradient,
  getStringifiedShadowLayers,
} from "../utils/utilities";
const Container = () => {
  const { state } = useContext(Context);
  const [boxShadowStyle, setBoxShadowStyle] = useState({});
  const [gradientStyle, setGradientStyle] = useState({});
  const [glassmorphismStyle, setGlassmorphismStyle] = useState({});

  useEffect(() => {
    const boxShadow = getStringifiedShadowLayers(state.boxShadows);
    const shadowStyleData = {
      boxShadow: boxShadow,
      WebkitBoxShadow: boxShadow,
      MozBoxShadow: boxShadow,
    };
    setBoxShadowStyle(shadowStyleData);

    if (state.gradient.active) {
      const gradient = getStringifiedGradient(state.gradient);
      const gradientStyleData = {
        background: gradient,
      };
      setGradientStyle(gradientStyleData);
    } else {
      setGradientStyle({});
    }

    if (state.glassmorphism.active) {
      const glassmorphism = getGlassmorphismStyleObject(state.glassmorphism);
      const alpha = state.glassmorphism.opacity / 100;
      const newColorString = state.containerProps.background.replace(
        /rgba\(([^,]+),([^,]+),([^,]+),[^)]+\)/,
        `rgba($1,$2,$3,${alpha})`
      );
      const glassmorphismStyleData = {
        backdropFilter: glassmorphism,
        WebkitBackdropFilter: glassmorphism,
        background: newColorString,
      };
      setGlassmorphismStyle(glassmorphismStyleData);
    } else {
      setGlassmorphismStyle({});
    }
  }, [state]);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center overflow-auto">
      <div
        style={{
          ...state.containerProps,
          ...boxShadowStyle,
          ...gradientStyle,
          ...glassmorphismStyle,
        }}
      />
    </div>
  );
};

export default Container;
