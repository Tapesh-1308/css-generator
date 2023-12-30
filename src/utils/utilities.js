const getBoxShadowString = (shadow) => {
    return `${shadow.inset ? "inset" : ""} ${shadow.horizontalOffset}px ${shadow.verticalOffset}px ${shadow.blurRadius}px ${shadow.spreadRadius}px ${shadow.color}`;
}

export const getStringifiedShadowLayers = (boxShadows = []) => {
    const allShadows = boxShadows.map(shadow => getBoxShadowString(shadow).trim());
    return allShadows.join(', ');
}

const getStringifiedGradientColors = (colors) => {
    const allColors =  colors.map(color => `${color.color} ${color.stop}%`);
    return allColors.join(', ');
}

export const getStringifiedGradient = (gradient) => {
    return `${gradient.type}(${gradient.type === "radial-gradient" ? "" :gradient.angle + "deg,"} ${getStringifiedGradientColors(gradient.colors)})`;
}

export const getGlassmorphismStyleObject = (glassmorphism) => {
    return `blur(${glassmorphism.blurRadius}px) saturate(${glassmorphism.saturation}%)`
}


