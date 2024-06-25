export enum State {
  PENDING = 'PENDING',
  CANCEL = 'CANCEL',
  DONE = 'DONE' 
}

export class Task {
  id: string
  title: string
  description: string
  state: State
}