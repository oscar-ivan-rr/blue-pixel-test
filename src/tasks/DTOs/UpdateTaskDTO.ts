import { State } from "../tasks.entity"

export class UpdateTaskDTO {
  title: string
  description: string
  state: State
}