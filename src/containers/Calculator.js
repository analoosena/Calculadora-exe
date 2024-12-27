import Buttons from "../components/Buttons";
import Display from "../components/Display";
import { ContainerGlobal, BotaoTema } from "./styleCalculator";
import Titulo from "../components/Titulo";
import { useState, useEffect} from "react";
import { create, all } from "mathjs";

const math = create(all);

const Calculator = ({trocaTema}) => {
  const [screnValue, setSreenValue] = useState("");
  const [historyValue, setHistoryValue] = useState("");

  const atualizaDisplay = (valor) => {
    if (valor === "." && screnValue === "") {
      setSreenValue("0.");
      return;
    }
    if (valor === ".") {
      const numeros = screnValue.split(/[+\-*/]/);
      const ultimoNumereo = numeros[numeros.length - 1];
      if (ultimoNumereo.includes(".")) {
        return;
      }
    }
    setSreenValue(screnValue + valor);
  };
  const limparDisplay = () => {
    setSreenValue("");
  };
  const apagaUltimoNum = () => {
    setSreenValue((prevValue) => prevValue.slice(0, -1));
  };
  const calculaOperacao = () => {
    try {
      const result = math.evaluate(screnValue);
      setSreenValue(result.toString());
      setHistoryValue(screnValue);
    } catch (error) {
      setSreenValue("Erro");
    }
  };

  // Listener para eventos de teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;

      if (!isNaN(key) || key === ".") {
        // Teclas numéricas e ponto
        atualizaDisplay(key);
      } else if (["+", "-", "*", "/"].includes(key)) {
        // Operadores
        atualizaDisplay(key);
      } else if (key === "Enter") {
        // Tecla Enter para calcular
        calculaOperacao();
      } else if (key === "Backspace") {
        // Tecla Backspace para apagar
        apagaUltimoNum();
      } else if (key === "Escape") {
        // Tecla Escape para limpar
        limparDisplay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      // Remover o listener ao desmontar o componente
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [screnValue]);


  return (
    <>
      <BotaoTema onClick={trocaTema}>Trocar tema</BotaoTema>
      <ContainerGlobal>
        <Titulo />
        <Display
          mainValue={screnValue || 0}
          SecondaryValue={historyValue}
        ></Display>
        <Buttons
          atualizaDisplay={atualizaDisplay}
          limparDisplay={limparDisplay}
          apagaUltimoNum={apagaUltimoNum}
          calculaOperacao={calculaOperacao}
        />
      </ContainerGlobal>
    </>
  );
};

export default Calculator;
