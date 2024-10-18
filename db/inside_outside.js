

document.getElementById("btn1").addEventListener("click", datasave);
document.getElementById("btn2").addEventListener("click", dataDisplay);

function datasave(){
let rollno=document.getElementById("rno").Value;
let name=document.getElementById("nm").Value;
let City=document.getElementById("ct").Value;
let fees=document.getElementById("fs").Value;
let  api="http://localhost:4000/student";


fetch(api, {
 method: "POST",
 headers: {
    "Content-Type" : "application/json"  // set content type to JSON
  },
body: JSON.stringify({
  rollno: rollno,
  name: name,
  City:   City,
  fees: fees
}),

}) .then((res)=>{
    alert("Data Save!");
});

}
async function dataDisplay(){
      let MyData;
      let api="http://localhost:4000/student";

      const myObj=await fetch(api);
      const Data=await myObj.json();
      
      

      Data.map((key)=>{
              MyData+=`<h1> Rollno : ${key.rollno}</h1>
                                <h2> Student Name: ${key.name}</h2>
                                <h2> ADDRESS : ${key.City}</h2>
                                <h2> Total Fees: ${key.fees}</h2>
                              `
      })
      document.getElementById("demo").innerHTML=MyData;
      
      


}








