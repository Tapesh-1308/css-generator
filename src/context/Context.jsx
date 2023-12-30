import { createContext, useState } from "react";
import { v4 as uid } from "uuid";

export const Context = createContext();

const defaultBoxShadowProps = {
  id: uid(),
  horizontalOffset: 0,
  verticalOffset: 5,
  blurRadius: 10,
  spreadRadius: -5,
  color: "rgba(0,0,0,0.5)",
  inset: false,
  active: true
};

const defaultGradientProps = {
  type: "linear-gradient",
  angle: 90,
  colors: [
    { id: uid(), color: "rgba(46,0,77,100)", stop: 0 },
    { id: uid(), color: "rgba(101,13,167,100)", stop: 50 },
    { id: uid(), color: "rgba(157,0,204,100)", stop: 100 },
  ],
  active: false
};

const defaultGlassmorphismProps = {
  backgroundUrl: "",
  opacity: 75,
  blurRadius: 16,
  saturation: 180,
  active: false
}

const defaultContainerProps = {
  width: 200,
  height: 200,
  borderRadius: 10,
  background: "rgba(255, 255, 255, 100)",
};


const initialState = {
  boxShadows: [{ ...defaultBoxShadowProps }],
  containerProps: { ...defaultContainerProps },
  gradient: { ...defaultGradientProps },
  glassmorphism: { ...defaultGlassmorphismProps },
};

const ContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  // Functions for shadows
  const addNewShadowLayer = () => {
    setState((prevState) => ({
      ...prevState,
      boxShadows: [
        ...prevState.boxShadows,
        { ...defaultBoxShadowProps, id: uid() },
      ],
    }));
  };
  const removeShadowLayer = (id) => {
    setState((prevState) => ({
      ...prevState,
      boxShadows: prevState.boxShadows.filter((shadow) => shadow.id !== id),
    }));
  };
  const setShadowProperty = (id, updatedProp, updatedValue) => {
    setState((prevState) => ({
      ...prevState,
      boxShadows: prevState.boxShadows.map((shadow) =>
        shadow.id === id ? { ...shadow, [updatedProp]: updatedValue } : shadow
      ),
    }));
  };

  // Functions for gradient
  const addNewGradientColor = () => {
    setState((prevState) => {
      const lastColor = prevState.gradient.colors[prevState.gradient.colors.length - 1];
      const secondLastColor = prevState.gradient.colors[prevState.gradient.colors.length - 2];
      const avgStop = Math.floor((lastColor.stop + secondLastColor.stop) / 2);
  
      const newColor = { id: uid(), color: "rgba(100, 100, 100)", stop: avgStop };
  
      const updatedColors = [...prevState.gradient.colors.slice(0, -1), newColor, prevState.gradient.colors.slice(-1)[0]];
  
      return {
        ...prevState,
        gradient: {
          ...prevState.gradient,
          colors: updatedColors,
        },
      };
    });
  };
  const removeGradientColor = (id) => {
    setState((prevState) => {
      const updatedColors = prevState.gradient.colors.filter(
        (color) => color.id !== id
      );
      return {
        ...prevState,
        gradient: { ...prevState.gradient, colors: updatedColors },
      };
    });
  };
  const setGradientColor = (id, updatedProp, updatedValue) => {
    setState((prevState) => {
      const updatedColors = prevState.gradient.colors.map((color) =>
        color.id === id ? { ...color, [updatedProp]: updatedValue } : color
      );
      return {
        ...prevState,
        gradient: { ...prevState.gradient, colors: updatedColors },
      };
    });
  };
  const setGradientProperty = (updatedProp, updatedValue) => {
    setState((prevState) => ({
      ...prevState,
      gradient: { ...prevState.gradient, [updatedProp]: updatedValue },
    }));
  };

  // Function for glassmorphism
  const setGlassmorphismProperty = (updatedProp, updatedValue) => {
    setState((prevState) => ({
      ...prevState,
      glassmorphism: {...prevState.glassmorphism, [updatedProp]: updatedValue}
    }));
  }

  // Function for containers
  const setContainerProperty = (updatedProp, updatedValue) => {
    setState((prevState) => ({
      ...prevState,
      containerProps: {
        ...prevState.containerProps,
        [updatedProp]: updatedValue,
      },
    }));
  };

  return (
    <Context.Provider
      value={{
        state,
        addNewShadowLayer,
        removeShadowLayer,
        setShadowProperty,
        setContainerProperty,
        addNewGradientColor,
        removeGradientColor,
        setGradientColor,
        setGradientProperty,
        setGlassmorphismProperty
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
