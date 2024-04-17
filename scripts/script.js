var nome;
var senha;
var autenticado;

const usuarios = [
    {
        nome: "icaro_botelho",
        senha: "123"
    },
    {
        nome: "lucas",
        senha: "321"
    }
]

function fazerLogin() {

    nome = document.getElementById("nome").value; 
    senha = document.getElementById("senha").value;
    autenticado = false;
    
    for(let i = 0; i < usuarios.length; i++) { 
       if ((usuarios[i].nome == nome) && (usuarios[i].senha == senha)) {
        autenticado = true;
        window.location.pathname = "/resultado.html"
        break;
       }
    }

    if (!autenticado) {
        alert("nao autenticado")
    }

}

function mostrarResultado() {

    for(let i = 0; i < usuarios.length; i++) {
        document.getElementById(i).innerHTML = "nome = " + usuarios[i].nome + " | senha = " + usuarios[i].senha
     }
 
}