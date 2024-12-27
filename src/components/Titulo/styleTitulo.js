import styled from "styled-components";

export const Title = styled.h2 `
  text-align: center;
  padding-bottom: 10px;
  border-top: 1px solid ${(props)=> props.theme.corDetalhes};
  font-size: 20px;
  color: ${(props)=> props.theme.corTexto} ;
`