import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Container from "./components/Container";
import ContainerProperties from "./components/ContainerProperties";
import CSSCode from "./components/CSSCode";
import { useContext } from "react";
import { Context } from "./context/Context";

const gridItemStyles = "p-5 lg:h-full overflow-y-auto";

function App() {
  const {state} = useContext(Context);
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:h-[calc(100vh-112px)]">
        <div className={`col-span-1 h-[520px] bg-black/60 ${gridItemStyles}`}>
          <Outlet />
        </div>
        <div className={`col-span-2 bg-gray-400 ${gridItemStyles} lg:rounded-xl`} style={{
          backgroundImage: `url(${state.glassmorphism.active && state.glassmorphism.backgroundUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
          <Container />
        </div>
        <div className={`col-span-1 bg-black/60 ${gridItemStyles}`}>
          <ContainerProperties />
          <CSSCode />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
