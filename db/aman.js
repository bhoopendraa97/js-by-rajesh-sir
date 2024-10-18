document.getElementById("btn1").addEventListener("click", dataDisplay);

async function dataDisplay() 
{
    let Table =`<Table border="1" width="90%" bgcolor="pink">
    <tr bgcolor="orange">
    <th> Slug </th>
    <th> URL </th>
    <th> Title </th>
    <th> content </th>
    <th> image </th>
    `
  let api="https://jsonplaceholder.org/posts" ;
  const Obj= await fetch(api);
  // console.log(Obj);
  const Data = await Obj.json();
  Data.map((item )=>
    {
        Table+= `<tr>
        <td> ${item.slug} </td>
        <td> ${item.url}</td>
        <td> ${item.title}</td>
        <td> ${item.status}</td>
        <td>
        <img src='${item.image}'"width="100" heigth="100">

        </td>
        <tr>
        `
    })
    Table+="</table>";
    document.getElementById("demo").innerHTML=Table;
}
