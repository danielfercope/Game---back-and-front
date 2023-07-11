async function buscarDadosServidor(){
    const url = "http://localhost:3000/";
    const resposta = await fetch(url);
    const converterResposta = await resposta.json();

    const buscarNaDom = document.getElementById("dados");
    console.log(buscarNaDom);
    buscarNaDom.append(converterResposta.msg);
}
buscarDadosServidor()