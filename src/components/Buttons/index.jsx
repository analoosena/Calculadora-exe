import { ButtonsNumber, ContainerBottonsNumbers, ButtonsNumber0, ContainerBottonsLast, ContainerMain } from "./styleButtons"

const Buttons = () => {
  return(
    <ContainerMain>
      <div>
        <ContainerBottonsNumbers>
          <ButtonsNumber>1</ButtonsNumber>
          <ButtonsNumber>2</ButtonsNumber>
          <ButtonsNumber>3</ButtonsNumber>
          <ButtonsNumber>4</ButtonsNumber>
          <ButtonsNumber>5</ButtonsNumber>
          <ButtonsNumber>6</ButtonsNumber>
          <ButtonsNumber>7</ButtonsNumber>
          <ButtonsNumber>8</ButtonsNumber>
          <ButtonsNumber>9</ButtonsNumber>
        </ContainerBottonsNumbers>
        <ContainerBottonsLast>
        <ButtonsNumber0>0</ButtonsNumber0>
        <ButtonsNumber>.</ButtonsNumber>
        </ContainerBottonsLast>
      </div>

      <div>
        <section>
          <ButtonsNumber>CE</ButtonsNumber>
          <ButtonsNumber>C</ButtonsNumber>
          <ButtonsNumber>/</ButtonsNumber>
          <ButtonsNumber>*</ButtonsNumber>
        </section>

        <section>
          <div>
          <ButtonsNumber>-</ButtonsNumber>
          <ButtonsNumber>=</ButtonsNumber>
          </div>
          <ButtonsNumber>+</ButtonsNumber>
        </section>
      </div>
    </ContainerMain>
  )
}

export default Buttons