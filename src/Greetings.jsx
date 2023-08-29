 
 function List(props){
 if(!props.animals){
     return <div> Loading ... </div>;
 }

 if(props.animals.length===0){
   return <div> There is no elements to render in the list ! </div>;
 }
 
 return(
 <ul>
  {
    props.animals.map((animal)=>{
      return ( animal.startsWith("L") ?<li key={animal}>{animal}</li>:null)
    })
  }
  </ul>);
 }
 
 function Greetings(){
  // const ani=['Lion','Cow','Snake', 'Lizard'];
  const ani=[];
    return(
        <>
         <h1>Animals: </h1>
      <List animals={ani} />
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