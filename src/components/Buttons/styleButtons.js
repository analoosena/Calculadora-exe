import styled from "styled-components";

export const ButtonsNumber = styled.button`
  border: 1.6px solid ${(props) => props.theme.corTexto};
  color: ${(props) => props.theme.corTexto};
  font-weight: bolder;
  font-size: 15px;
  background-color: ${(props) => props.theme.corBotao};
  border-radius: 4px;
  width: 100%;
  height: 100%;

  :hover{
    background-color: ${(props) => props.theme.corBotaoHover};
    border: 2px solid ${(props) => props.theme.corFundo};
    color: ${(props) => props.theme.corFundo};
  }
`;

export const ContainerBottonsNumbers = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 3px;
  flex: 1;
  padding-bottom: 3px;
`;
export const ContainerBottonsLast = styled.section`
  display: grid;
  grid-template-areas: "zero zero dot";
  flex: 0.25;
  .zero {
    grid-area: zero;
  }
  .dot {
    grid-area: dot;
  }
  gap: 2px;
  padding-bottom: 2px;
`;
export const ContainerBottonsRight = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
  padding-bottom: 3px;
  flex: 1;
  .ce {
    background-color: #004aad;
  }
  .c {
    background-color: red;
  }
`;
export const ContainerBottonsPlus = styled.section`
  display: grid;
  grid-template-areas: "minus plus" "equals plus";
  gap: 3px;
  flex: 1;
  .minus {
    grid-area: minus;
  }
  .equals {
    grid-area: equals;
    background-color: yellow;
  }
  .plus {
    grid-area: plus;
    background-color: greenyellow;
  }
`;
export const ContainerMain = styled.section`
  display: flex;
  gap: 12px;
  justify-content: center;
  width: 100%;
`;

export const TeclasSecundarias = styled.div`
  width: 80px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TeclasPrimarias = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
