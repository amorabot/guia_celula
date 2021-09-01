//CONTEUDO REFERENTE À DEFINIÇÃO DA ARVORE DE DECISÕES DO GUIA

let arvore = [ ]

let bancoDeRespostas = [ ]

let bancoDePerguntas = [ ]

let metodos = [
    {nome: 'Analise de competidores', relacionado: []},
    {nome: 'Entrevista', relacionado: []},
    {nome: 'Questionario', relacionado: []},
    {nome: 'Grupos de foco', relacionado: []},
    {nome: '', relacionado: []},
    {nome: '', relacionado: []},
    {nome: '', relacionado: []},
]

const C1 = 0
const C2 = 1 //constantes pra usar nos vetores que estruturam a arvore
const C3 = 2
const C4 = 3
const C5 = 4
const C6 = 5

//=========================================================================================
criarCamada(1,1)
criarCamada(2,1)
criarCamada(3,2)
criarCamada(4,6)
criarCamada(5,10)
criarCamada(6,6)
console.log(arvore)
//=========================================================================================

//====================================PERGUNTAS============================================

//                                  1a CAMADA
let P1C1 = { conteudo: 'o que deseja avaliar?',
                    childs: arvore[C1].respostas[0]}
        bancoDePerguntas[C1].push(P1C1)
//=========================================================

//                                  2a CAMADA
let P1C2 = { conteudo: 'Que tipo de informação você quer descobrir?',
                    childs: arvore[C2].respostas[0]}
        bancoDePerguntas[C2].push(P1C2)
//=========================================================

//                                  3a CAMADA
let P1C3 = { conteudo: 'Que artefatos podem representar a etapa do meu projeto atualmente?',
                    childs: arvore[C3].respostas[0]}
let P2C3 = { conteudo: 'Que artefatoooooooooooos podem representar a etapa do meu projeto atualmente?',
                    childs: arvore[C3].respostas[1]}
        bancoDePerguntas[C3].push(P1C3)
        bancoDePerguntas[C3].push(P2C3)
//=========================================================

//                                  4a CAMADA
let P1C4 = { conteudo: 'Já temos algumas sugestões:',
                    childs: arvore[C4].respostas[0]}
let P2C4 = { conteudo: 'Gostaria de realizar a avaliação com ou sem usuários?',
                    childs: arvore[C4].respostas[1]}
let P3C4 = { conteudo: 'Gostaria de realizar a avaliação com ou sem usuários?',
                    childs: arvore[C4].respostas[2]}
                    
let P4C4 = { conteudo: 'Como você gostaria de obter suas informações?',
                    childs: arvore[C4].respostas[3]}
let P5C4 = { conteudo: 'Como você gostaria de obter suas informações?',
                    childs: arvore[C4].respostas[4]}
let P6C4 = { conteudo: 'Como você gostaria de obter suas informações?',
                    childs: arvore[C4].respostas[5]}
        bancoDePerguntas[C4].push(P1C4)
        bancoDePerguntas[C4].push(P2C4)
        bancoDePerguntas[C4].push(P3C4)
        bancoDePerguntas[C4].push(P4C4)
        bancoDePerguntas[C4].push(P5C4)
        bancoDePerguntas[C4].push(P6C4)
//=========================================================

//                                  5a CAMADA
let P1C5 = { conteudo: 'Aqui vão algumas sugestões finais:',
                    childs: arvore[C5].respostas[0]}
let P2C5 = { conteudo: 'Aqui vão algumas sugestões finais:',
                    childs: arvore[C5].respostas[1]}
let P3C5 = { conteudo: 'Que tipo de informação você quer descobrir?',
                    childs: arvore[C5].respostas[2]}
let P4C5 = { conteudo: 'Que tipo de informação você quer descobrir?',
                    childs: arvore[C5].respostas[3]}
let P5C5 = { conteudo: 'Que tipo de informação você quer descobrir?',
                    childs: arvore[C5].respostas[4]}
let P6C5 = { conteudo: 'Que tipo de informação você quer descobrir?',
                    childs: arvore[C5].respostas[5]}
let P7C5 = { conteudo: 'Que tipo de informação você quer descobrir?',
                    childs: arvore[C5].respostas[6]}
let P8C5 = { conteudo: 'Que tipo de informação você quer descobrir?',
                    childs: arvore[C5].respostas[7]}
let P9C5 = { conteudo: 'Que tipo de informação você quer descobrir?',
                    childs: arvore[C5].respostas[8]}
let P10C5 = { conteudo: 'Que tipo de informação você quer descobrir?',
                    childs: arvore[C5].respostas[9]}
        bancoDePerguntas[C5].push(P1C5)
        bancoDePerguntas[C5].push(P2C5)
        bancoDePerguntas[C5].push(P3C5)
        bancoDePerguntas[C5].push(P4C5)
        bancoDePerguntas[C5].push(P5C5)
        bancoDePerguntas[C5].push(P6C5)
        bancoDePerguntas[C5].push(P7C5)
        bancoDePerguntas[C5].push(P8C5)
        bancoDePerguntas[C5].push(P9C5)
        bancoDePerguntas[C5].push(P10C5)
//=========================================================================================

                        preencherCamadas('Perguntas')

//====================================RESPOSTAS============================================

//                                  1a CAMADA

let respostasP1C1 = [           //RESPOSTAS 1a PERGUNTA
    criarResposta('Ideias e alternativas de design', false, arvore[C2].perguntas[0][0]),
    criarResposta('opção 1', true, null),
    criarResposta('opção 2', true, null),
    criarResposta('opção 3', true, null)
]                                                               
        bancoDeRespostas[C1].push(respostasP1C1)
//=========================================================================================

//                                  2a CAMADA

let respostasP1C2 = [           //RESPOSTAS 1a PERGUNTA
    criarResposta('Avaliar e/ou comparar alternativas de design',
    false, arvore[C3].perguntas[0][0]),
    
    criarResposta('Avaliar como o usuário utiliza determinado sistema',
    false, arvore[C3].perguntas[1][0]),
]                   
        bancoDeRespostas[C2].push(respostasP1C2)
//=========================================================================================

//                                  3a CAMADA

let respostasP1C3 = [           //RESPOSTAS 1a PERGUNTA
    criarResposta('Artefatos que descrevem o conceito do design',
    false, arvore[C4].perguntas[0][0]),
    
    criarResposta('Protótipos de média e baixa fidelidade',
    false, arvore[C4].perguntas[1][0]),
    
    criarResposta('Protótipos de alta fidelidade ou navegáveis',
    false, arvore[C4].perguntas[2][0])
]  


                 
let respostasP2C3 = [           //RESPOSTAS 2a PERGUNTA
    criarResposta('Artefatos que descrevem o conceito do design.',
    false, arvore[C4].perguntas[3][0]),
    
    criarResposta('Protótipos de média e baixa fidelidadeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.',
    false, arvore[C4].perguntas[4][0]),
    
    criarResposta('Protótipos de alta fidelidade ou navegáveis.',
    false, arvore[C4].perguntas[5][0])
]                   
        bancoDeRespostas[C3].push(respostasP1C3)
        bancoDeRespostas[C3].push(respostasP2C3)
//=========================================================================================

//                                  4a CAMADA

let respostasP1C4 = [           //RESPOSTAS 1a PERGUNTA
    criarResposta('Quero examinar produtos com funcionalidades semelhantes ou complementares ao do meu projeto',
    true, 'Analise de competidores'),
    
    criarResposta('Quero coletar informações detalhadas e profundas de usuários individualmente',
    true, 'Entrevista'),
    
    criarResposta('Quero coletar dados(principalmente quantitativos) rapidamente de muitos usuários',
    true, 'Questionario'),
    
    criarResposta('Quero avaliar atitudes, opiniões e impressões de vários usuários',
    true, 'Grupos de foco'),
]                  

let respostasP2C4 = [
    criarResposta('Com usuários',
    false, arvore[C5].perguntas[0][0]),
    
    criarResposta('Sem usuários',
    false, arvore[C5].perguntas[1][0])
]

let respostasP3C4 = [
    criarResposta('Com usuários.',
    false, arvore[C5].perguntas[2][0]),
    
    criarResposta('Sem usuários.',
    false, arvore[C5].perguntas[3][0])
]



let respostasP4C4 = [
    criarResposta('Gostaria de ouvir as opiniões e expectativas dos usuários',
    false, arvore[C5].perguntas[4][0]),
    
    criarResposta('Gostaria de observar como o usuário realiza suas atividades',
    false, arvore[C5].perguntas[5][0])
]

let respostasP5C4 = [
    criarResposta('Gostaria de ouvir as opiniões e expectativas dos usuários.',
    false, arvore[C5].perguntas[6][0]),
    
    criarResposta('Gostaria de observar como o usuário realiza suas atividades.',
    false, arvore[C5].perguntas[7][0])
]

let respostasP6C4 = [
    criarResposta('Gostaria de ouvir as opiniões e expectativas dos usuários',
    false, arvore[C5].perguntas[8][0]),
    
    criarResposta('Gostaria de observar como o usuário realiza suas atividades',
    false, arvore[C5].perguntas[9][0])
]
        bancoDeRespostas[C4].push(respostasP1C4)
        bancoDeRespostas[C4].push(respostasP2C4)
        bancoDeRespostas[C4].push(respostasP3C4)
        bancoDeRespostas[C4].push(respostasP4C4)
        bancoDeRespostas[C4].push(respostasP5C4)
        bancoDeRespostas[C4].push(respostasP6C4)
//=========================================================================================

//                                  5a CAMADA

let respostasP1C5 = [           //RESPOSTAS 1a PERGUNTA
    criarResposta('Avaliar e/ou comparar alternativas de design1',
    false, arvore[C6].perguntas[0][0]),
    
    criarResposta('Avaliar como o usuário utiliza determinado sistema1',
    false, arvore[C6].perguntas[1][0]),
]
let respostasP2C5 = [           //RESPOSTAS 2a PERGUNTA
    criarResposta('Avaliar e/ou comparar alternativas de design2',
    false, arvore[C6].perguntas[2][0]),
    
    criarResposta('Avaliar como o usuário utiliza determinado sistema2',
    false, arvore[C6].perguntas[3][0]),
]
let respostasP3C5 = [           //RESPOSTAS 3a PERGUNTA
    criarResposta('Avaliar e/ou comparar alternativas de design3',
    false, arvore[C6].perguntas[4][0]),
    
    criarResposta('Avaliar como o usuário utiliza determinado sistema3',
    false, arvore[C6].perguntas[5][0]),
]
        bancoDeRespostas[C5].push(respostasP1C5)
        bancoDeRespostas[C5].push(respostasP2C5)
        bancoDeRespostas[C5].push(respostasP3C5)
//=========================================================================================

                        preencherCamadas('Respostas')
                        
//===============funções e variáveis de display do guia====================================
// BOTÃO DE START
const startBtn = document.getElementById("start-btn")
startBtn.addEventListener('click', startGuia)
// CONTAINER DE QUESTÕES
const questionContainerElement = document.getElementById("question-container")
// ELEMENTO COM AS PERGUNTAS
const questionElement = document.getElementById('question')
// GRID DE RESPOSTAS
const answerButtonsElement = document.getElementById('answer-buttons')
let camadaAtualPerguntas
let numNaCamada
let contResp
//===========================FUNÇÕES=======================================================
function startGuia(){
    console.log("deu certo!")
    startBtn.classList.add('hide') //torna o botão de inicio invisivel
    camadaAtualPerguntas = 0 //contador para indicar em que camada estamos
    numNaCamada = 0
    contResp = 0
    questionContainerElement.classList.remove('hide') //torna as perguntas visiveis
    setarProximaPergunta(camadaAtualPerguntas, numNaCamada) //prepara tudo para setar a próxima pergunta(primeira no caso)
    // console.log(arvore[C5].perguntas[1][0])
}
function setarProximaPergunta(camada, num){
    resetState()  
    mostrarPergunta(arvore[camada].perguntas[num][0])
    // console.log(camada,num)
}
function mostrarPergunta(pergunta){
    questionElement.innerText = pergunta.conteudo
    displayRespostas(pergunta.childs[0])
}
function displayRespostas(childsPergunta){
    childsPergunta.forEach((respAtual, indice)=>{
        const buttonP = document.createElement('button')
        buttonP.innerText = respAtual.conteudo
        buttonP.classList.add('btn')
        buttonP.dataset.num = indice
        buttonP.dataset.nome = respAtual.conteudo
        buttonP.dataset.isFinal = respAtual.isFinal
        
        // console.log(buttonP.dataset.nome)
        if(buttonP.dataset.isFinal == 'true'){
            buttonP.addEventListener('click', encerrar)
            answerButtonsElement.appendChild(buttonP)
        }else {
            buttonP.dataset.indexArvore
            buttonP.addEventListener('click', setarPosicaoArvore)
            answerButtonsElement.appendChild(buttonP)
        }
    })
    
}
function setarPosicaoArvore(p){
    // console.log(`cliquei em ${p.target.dataset.nome}`)
    let concatLayer = []
    for(let i = 0; i<arvore[camadaAtualPerguntas].respostas.length; i++){
        concatLayer = concatLayer.concat(arvore[camadaAtualPerguntas].respostas[i][0])
        // console.log(arvore[camadaAtualPerguntas].respostas[i][0])
        // console.log('-')
    }
    if(camadaAtualPerguntas == 3){ //retirar o excesso(itens de recomendação)
        for(let i = 0; i<4; i++){
            concatLayer.shift()
        }
    }
        console.log(concatLayer.length)
        console.log(camadaAtualPerguntas,numNaCamada)
    let pos = concatLayer.map(function(e) { return e.conteudo; }).indexOf(p.target.dataset.nome);
    numNaCamada = pos
    camadaAtualPerguntas++
    // console.log(camadaAtualPerguntas,numNaCamada)
    setarProximaPergunta(camadaAtualPerguntas, numNaCamada)
}

function encerrar(){
    console.log('cabo')
}

function resetState(){
    questionElement.innerText = 'Abordagens:'
    
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
//=========================================================================================
function criarCamada(numCamada, numPerguntas){   
    let i = 0;
    let camada = {
    camada: numCamada,
    perguntas: [],
    respostas: []
    }
    do{
        camada.respostas.push([])
        camada.perguntas.push([])
        i++
    }while(i<numPerguntas);
    arvore.push(camada)
    bancoDeRespostas.push([])
    bancoDePerguntas.push([])
}

function preencherCamadas(string){
    arvore.forEach((camadaAtual, index)=>{
       let camada = index
       if(string === 'Perguntas'){
       bancoDePerguntas[camada].forEach((perguntaAtual, indexP)=>{
           camadaAtual.perguntas[indexP].push(perguntaAtual)
       })       }
       if(string === 'Respostas'){
       bancoDeRespostas[camada].forEach((arrayRespAtual, indexR)=>{
           camadaAtual.respostas[indexR].push(arrayRespAtual)
       })       }
       
    })
}

function criarResposta(conteudo, isFinal, child){
    return {
        conteudo: conteudo,
        isFinal: isFinal,
        child: child
    }
}

function recomendar(metodo, baseDeMetodos){
    let i = 0
    let relacionados = []
    do{
        i++
    }while(baseDeMetodos[i].nome != metodo)
    for(let c = 0; c < baseDeMetodos[i].relacionado.length; c++){
        // console.log(baseDeMetodos[i].relacionado[c])
        // let aux = []
        baseDeMetodos.forEach((itemAtual)=>{
            if(baseDeMetodos[i].nome != itemAtual.nome){
            itemAtual.relacionado.forEach((caracteristicaBuscada)=>{
                if(caracteristicaBuscada === baseDeMetodos[i].relacionado[c]){
                    // aux.push(itemAtual.nome)
                    relacionados.push(itemAtual.nome)
                }
            })
            }
               
        })
        // relacionados.push(aux)
    }
    relacionados.sort()
    // console.log(relacionados)
    frequenciasEm(relacionados)
}

function frequenciasEm(array){
    let i = 0
    let acc = 0
    let frequencias = []
    let itemPassado = null
    let itemAtual = array[i]
    do{
    if((i+1) != array.lenght){ // 'posso avançar?' se sim, prossiga, se não, termine
        i++
        acc++
        itemPassado = array[i-1]
    } 
    else{
    //quando o ultimo for atingido, somar 1 e enviar o objeto contendo tudo
    acc++
    frequencias.push({
        nome: array[i],
        num: acc
    })
    i++
    }
    if(array[i-1] != array[i]){ //se os 2 forem diferentes, salvo em "frequencias"
        frequencias.push({
            nome: array[i-1],
            num: acc,
        })
        acc = 0
    }  
    }while(i<array.length)
    // console.log(frequencias)
    let aux = []
    frequencias.forEach((metodo)=>{
        aux.push(metodo.num)
    })
    aux.sort()
    aux.reverse()
    aux.splice(3, aux.length-3)
    let mensagem = `Outros métodos relacionados são: `
    aux.forEach((num, indice)=>{
        let c = 0
        do{
            c++
        }while(frequencias[c].num != num)
        if(indice === 2){
            mensagem += ` ${frequencias[c].nome}. Conheça e combine novas opções para ter resultados ainda melhores em seu projeto! `
        }else{
        mensagem += ` ${frequencias[c].nome},`
        frequencias.splice(c,1)
        }
    })
    console.log(mensagem)  
}