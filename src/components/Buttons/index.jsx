import {
  ButtonsNumber,
  ContainerBottonsNumbers,
  ContainerBottonsLast,
  ContainerMain,
  ContainerBottonsPlus,
  ContainerBottonsRight,
  TeclasSecundarias,
  TeclasPrimarias,
} from "./styleButtons";

const Buttons = ({atualizaDisplay, limparDisplay, apagaUltimoNum, calculaOperacao}) => {
  
  const acaoClick = (valor) => {
    atualizaDisplay(valor)
  }
  const teclaC = () => {
    limparDisplay();
  }
  const teclaCE = () => {
    apagaUltimoNum();
  }
  const teclaEquals = () => {
    calculaOperacao();
  }

  return (
    <ContainerMain>
      <TeclasPrimarias>
        <ContainerBottonsNumbers>
          <ButtonsNumber onClick={() => acaoClick("1")}>1</ButtonsNumber>
          <ButtonsNumber onClick={() => acaoClick("2")}>2</ButtonsNumber>
          <ButtonsNumber onClick={() => acaoClick("3")}>3</ButtonsNumber>
          <ButtonsNumber onClick={() => acaoClick("4")}>4</ButtonsNumber>
          <ButtonsNumber onClick={() => acaoClick("5")}>5</ButtonsNumber>
          <ButtonsNumber onClick={() => acaoClick("6")}>6</ButtonsNumber>
          <ButtonsNumber onClick={() => acaoClick("7")}>7</ButtonsNumber>
          <ButtonsNumber onClick={() => acaoClick("8")}>8</ButtonsNumber>
          <ButtonsNumber onClick={() => acaoClick("9")}>9</ButtonsNumber>
        </ContainerBottonsNumbers>
        <ContainerBottonsLast>
          <ButtonsNumber onClick={() => acaoClick("0")} className="zero">0</ButtonsNumber>
          <ButtonsNumber onClick={() => acaoClick(".")} className="dot">.</ButtonsNumber>
        </ContainerBottonsLast>
      </TeclasPrimarias>

      <TeclasSecundarias>
        <ContainerBottonsRight>
          <ButtonsNumber onClick={teclaCE}className="ce">CE</ButtonsNumber>
          <ButtonsNumber onClick={teclaC} className="c">C</ButtonsNumber>
          <ButtonsNumber onClick={() => acaoClick("/")} >/</ButtonsNumber>
          <ButtonsNumber onClick={() => acaoClick("*")}>*</ButtonsNumber>
        </ContainerBottonsRight>

        <ContainerBottonsPlus>
          <ButtonsNumber onClick={() => acaoClick("-")} className="minus">-</ButtonsNumber>
          <ButtonsNumber onClick={teclaEquals} className="equals">=</ButtonsNumber>
          <ButtonsNumber onClick={() => acaoClick("+")} className="plus">+</ButtonsNumber>
        </ContainerBottonsPlus>        
      </TeclasSecundarias>
    </ContainerMain>
  );
};

export default Buttons;
