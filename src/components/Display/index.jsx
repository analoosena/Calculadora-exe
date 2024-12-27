import { ContainerDisplay, MainDisplay, SecondayDisplay } from "./stylesDisplay";

const Display = ({mainValue, SecondaryValue}) => {
  return (
    <ContainerDisplay>
      <MainDisplay>{mainValue}</MainDisplay>
      <SecondayDisplay>{SecondaryValue}</SecondayDisplay>
    </ContainerDisplay>
  );
};

export default Display;
