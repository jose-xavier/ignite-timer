import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmoutInput,
  Separetor,
  StartCountdownAmount,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />
          <label htmlFor="minutesAmount">durante</label>

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 1" />
            <option value="Projeto 1" />
            <option value="Projeto 1" />
          </datalist>
          <MinutesAmoutInput
            type="number"
            name=""
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separetor> : </Separetor>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownAmount disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownAmount>
      </form>
    </HomeContainer>
  )
}
