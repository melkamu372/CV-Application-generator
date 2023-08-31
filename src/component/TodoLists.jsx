 
 function Button(props){
const buttonStyle={
    'color':props.color,
    'fontSize': props.fontSize + 'px'
}
return <button onClick={props.clickMe} style={buttonStyle}> {props.text} </button>
 }
 
 const todo=[{task:"break fast",id:0},
{task:"lounch", id:1},
 {task:"dinner",id:2}]

function TodoList(){
    Button.defaultProps = {
        text: "Click Me!",
        color: "blue",
        fontSize: 12
      };
      const handleButtonClick = () => {
        window.location.href = "http://www.google.com";
      };
    return (
        <>
       { <Button  clickMe={handleButtonClick}/>}
       { <Button  text="Click Me!" color="green" fontSize={12} /> }
       {<Button  text="do not touch Me!" color="red" fontSize={14} /> }
        <h1> check works well </h1>
<ul>
    {todo.map((todo)=>(
    
    <li key={todo.id} > {todo.task}</li>
    ))}
    
</ul>
</>
    );
}
export default TodoList;