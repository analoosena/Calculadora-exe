import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  *{
      margin:0;
      padding:0;
      font-family: "Montserrat", sans-serif;
      list-style: none;
  }
    body{
    padding-top: 80px;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: block;
    background-color: ${(props) => props.theme.corBody};
    }
`;
export default EstiloGlobal;

export const ContainerGlobal = styled.div`
  max-width: 90%;
  width: 320px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.corFundo};
  padding: 20px;
`;
export const BotaoTema = styled.button `
  position: fixed;
  right: 50px;
  top:20px;
  color: ${(props) => props.theme.corTexto};
  font-weight: bold;
  background-color: ${(props) => props.theme.corBotao};
  border: 2px solid ${(props) => props.theme.corTexto};
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;

  :hover{
    background-color: ${(props) => props.theme.corBotaoHover};
    border: 2px solid ${(props) => props.theme.corFundo};
    color: ${(props) => props.theme.corFundo};
  }
`
