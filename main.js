/*
const enviar=async()=>{
    let config=
    {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({titulo:"HOLA",
    fecha:"2020",
    autor:"pachon"
    })
    }
}
*/

const consultar=async()=>{
    let res = await ( await fetch ("http://127.0.0.1:5010/libros")).json();
    console.log(res)
}

consultar();