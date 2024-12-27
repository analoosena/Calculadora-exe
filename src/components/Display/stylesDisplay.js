import styled from "styled-components";

export const ContainerDisplay = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.corDisplay} ;
  width:100%;
  margin-bottom:15px;
  border-bottom: 2px solid ${(props) => props.theme.corDetalhes};
  max-width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const MainDisplay = styled.h4`
  color: green;
  font-weight: bold;
  font-size: 35px;
  text-align: end;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;
export const SecondayDisplay = styled.p`
  color: ${(props) => props.theme.corSecundaria};
  font-weight: bold;
  font-size: 20px;
`;
