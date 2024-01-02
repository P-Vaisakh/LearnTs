export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

interface EditPayload{
    id:number,
    task:string
}

export type Action =
  | { type: "add"; payload: string }
  | { type: "done"; payload: number }
  | { type: "delete"; payload: number }
  | { type: "edit"; payload:EditPayload  };
