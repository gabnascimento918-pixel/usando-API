//Lianguagem de programaçao

const url = "https://viacep.com.br/ws/01001000/json/"

//fertch => pega os dados de API
//then => Decide o que eu vou fazer com a resposta do 
// fertch
fetch(url)
.then(resposta => resposta.json ())
.then (data => {
    console.log(data)
})

function buscarApi(url) {
  fetch(url)
       .then(resposta => resposta.json ())
       .then(data => {
        if (data.erro) {
            console.log("cep nao encontrado")
        }else{
            console.log(data)

        }
       })
}

buscarAPI("https://jsonplaceholder.typicode.com/posts")





