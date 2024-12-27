import { ThemeProvider } from "styled-components";
import { useState } from "react";

import Calculator from "./containers/Calculator";
import EstiloGlobal from "./containers/styleCalculator";
import TemaDark from "./Themes/Dark";
import TemaLight from "./Themes/Light";

const App = () => {
  const [temaEscuroAtivo, setTemaEscuroAtivo] = useState(false);

  function trocaTema(){
    setTemaEscuroAtivo(!temaEscuroAtivo);
  }
  return (
    <>
      <ThemeProvider theme={temaEscuroAtivo ? TemaDark : TemaLight}>
        <EstiloGlobal />
        <Calculator trocaTema={trocaTema} />
      </ThemeProvider>
    </>
  );
};

export default App;
