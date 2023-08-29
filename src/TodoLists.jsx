 const todo=[{task:"break fast",id:0},
{task:"lounch", id:1},
 {task:"dinner",id:2}]

function TodoList(){
    
    return (
<ul>
    {todo.map((todo)=>(
    
    <li key={todo.id} > {todo.task}</li>
    ))}
    
</ul>

    );
}
export default TodoList;