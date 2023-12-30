import { useContext, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BsClipboard2Fill } from "react-icons/bs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Context } from "../context/Context";
import {
  getGlassmorphismStyleObject,
  getStringifiedGradient,
  getStringifiedShadowLayers,
} from "../utils/utilities";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSCode = () => {
  const { state } = useContext(Context);

  const [css, setCss] = useState("");
  const [status, setStatus] = useState("copy");

  const handleCopy = () => {
    setStatus("copied");
    setTimeout(() => setStatus("copy"), 2000);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const boxShadows = getStringifiedShadowLayers(state.boxShadows);
      const gradient = getStringifiedGradient(state.gradient);
      const glassmorphism = getGlassmorphismStyleObject(state.glassmorphism);

      const alpha = state.glassmorphism.opacity / 100;
      const newColorString = state.containerProps.background.replace(
        /rgba\(([^,]+),([^,]+),([^,]+),[^)]+\)/,
        `rgba($1,$2,$3,${alpha})`
      );

      function addStyleConditionally(stylesArray, condition, style) {
        if (condition) {
          stylesArray.push(style);
        }
      }

      let styles = [
        `.container {`,
        `  width: ${state.containerProps.width}px;`,
        `  height: ${state.containerProps.height}px;`,
        `  border-radius: ${state.containerProps.borderRadius}px;`,
        `  background: ${
          state.glassmorphism.active
            ? newColorString
            : state.containerProps.background
        };`,
        `  box-shadow: ${boxShadows};`,
        `  --webkit-box-shadow: ${boxShadows};`,
        `  --moz-box-shadow: ${boxShadows};`,
      ];

      addStyleConditionally(
        styles,
        state.gradient.active,
        `  background: ${gradient};`
      );
      addStyleConditionally(
        styles,
        state.glassmorphism.active,
        `  drop-shadow: ${glassmorphism};`
      );
      addStyleConditionally(
        styles,
        state.glassmorphism.active,
        `  --webkit-drop-shadow: ${glassmorphism};`
      );

      styles.push(`}`);

      const cssStyle = styles.join("\n");

      setCss(cssStyle);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [state]);

  return (
    <div>
      <div className="flex justify-between items-center px-4 py-3 bg-purple-700">
        <p className="text-gray-100">CSS</p>
        <CopyToClipboard text={css} onCopy={handleCopy}>
          <button
            className="bg-white text-black flex items-center py-1 px-2 rounded-s active:bg-slate-200 text-sm"
            disabled={status === "copied"}
          >
            <span className="inline">
              <BsClipboard2Fill className="text-purple-950" />
            </span>
            <span className="mx-1">{status}</span>
          </button>
        </CopyToClipboard>
      </div>

      <SyntaxHighlighter language="css" style={atomDark}>
        {css}
      </SyntaxHighlighter>
    </div>
  );
};

export default CSSCode;
