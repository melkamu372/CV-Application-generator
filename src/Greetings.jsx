 
 function List(props){
 return(
 <ul>
  {
    props.animals.map((animal)=>{
      return (<li>{animal}</li>)
    })
  }
  </ul>);
 }
 
 function Greetings(){
  const animals=['Lion','Cow','Snake', 'Lizard'];

    return(
        <>
         <h1>Animals: </h1>
      <List animals={animals} />
        <h1>Test title</h1>
        <ol className="test-list">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ol>
        <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
     </svg>
        <form><input type="text"/></form>
        </>
    )
}
export default Greetings;