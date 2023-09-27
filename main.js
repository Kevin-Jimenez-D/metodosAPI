//Sin repetir IDs o sino hay error
const enviar = async () => {
    let config =
    {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id:2,
            titulo: "HOLA",
            fecha: "2020",
            autor: "pachon"
        })
    }




let res = await(await fetch("http://127.0.0.1:5010/libros", config)).json();
    console.log(res)
}
//No olvidar
enviar()