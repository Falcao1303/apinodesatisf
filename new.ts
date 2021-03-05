


// UUID => universally unique indentifier

// function enviarEmail(para,id,assunto,texto){
// //biblioteca de envio de e-mail
// console.log(para,id,assunto,texto);


// }

// class EnviarEmailParaUsuario{
    
//     send(){   enviarEmail("lucasjesus22@hotmail.com",9899,"Olá", "Tudo Bem?")

//     }
// }
 
interface DadosDeEnvioEmail{
    para: string;
    id: string;
    assunto: string;
    texto: string;

}


function enviarEmail({ para, id, assunto, texto}: DadosDeEnvioEmail){
    console.log(para,id,assunto,texto);
}

class EnviarEmailParaUsuario{
send(){
    enviarEmail({
        para:"lucasjesus22@hotmail.com",
        id:"9899",
        assunto:"Olá!",
        texto:"Tudo bem?"})
}

}