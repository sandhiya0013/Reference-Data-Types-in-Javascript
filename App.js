function Test() 
{
    let myObject={name:"Madras"};
    let newObject=myObject;
    myObject.name="chennai";
    let myarray=["a","e","i","o"];
    let vowelArray=myarray;
    myarray.push("u");
    console.log(myarray)
    const ECE=()=>{alert("Check the console output!")}
    return <div><button onClick={ECE}>Reference Data types and call the function</button></div>
}
ReactDOM.render(<Test/>,document.getElementById('mydiv'))