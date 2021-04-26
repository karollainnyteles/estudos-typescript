type Todo = {
  title: string;
  description: string;
  completed: boolean;
}

const todo:  Readonly <Todo> ={
  title:"Assistir Supernatural de novo",
  description: "Relembrar os detalhes",
  completed: false,
};

console.log(todo);
//Partial
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>){
  return{...todo,...fieldsToUpdate};
}
const todo2: Todo = updateTodo(todo,{completed: true});
console.log(todo2);

//Pick

type TodoPreview = Pick<Todo,"title" | "completed">

const todo3: TodoPreview = {
  title: "fechar Ghost of Tsushima",
  completed:false
}

//omit

type TodoPreview2 = Omit<Todo, "description">

const todo4 = {
  title: "fechar Ghost of Tsushima",
  completed:false
}