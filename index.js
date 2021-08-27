//CONTEUDO REFERENTE À DEFINIÇÃO DA ARVORE DE DECISÕES DO GUIA

let arvore = [ ]

let bancoDeRespostas = [ ]

let bancoDePerguntas = [ ]

let metodos = [
    {nome: 'torta de abacaxi', relacionado: ['doce','almoço','lanche','fruta']},
    {nome: 'torta de biscoito', relacionado: ['doce','almoço','janta','chocolate']},
    {nome: 'rapadura', relacionado: ['doce','almoço','neutro']},
    {nome: 'gelatina de morango', relacionado: ['gelatina','almoço','fruta']},
    {nome: 'bolo formigueiro', relacionado: ['bolo','lanche','chocolate']},
    {nome: 'Mousse de maracujá', relacionado: ['doce','almoço','lanche','fruta']},
    {nome: 'bolo de cenoura', relacionado: ['bolo','lanche','neutro']},
]

const C1 = 0
const C2 = 1 //constantes pra usar nos vetores que estruturam a arvore
const C3 = 2
const C4 = 3

//=========================================================================================
criarCamada(1,2)
criarCamada(2,1)
criarCamada(3,1)
criarCamada(4,1)
console.log(arvore)
//=========================================================================================

//====================================PERGUNTAS============================================

//                                  1a CAMADA
let P1C1 = { conteudo: 'que sobremesa deseja?',
                    childs: arvore[C1].respostas[0]}
let P2C1 = { conteudo: 'que asjkdijemaiopdj',
                    childs: arvore[C1].respostas[0]}
        bancoDePerguntas[C1].push(P1C1)
        bancoDePerguntas[C1].push(P2C1)
//=========================================================

//                                  2a CAMADA
let P1C2 = { conteudo: 'qual ocasião?',
                    childs: arvore[C2].respostas[0]}
        bancoDePerguntas[C2].push(P1C2)
//=========================================================

//                                  3a CAMADA
let P1C3 = { conteudo: 'qual sabor?',
                    childs: arvore[C3].respostas[0]}
        bancoDePerguntas[C3].push(P1C3)
//=========================================================================================

                        preencherCamadas('Perguntas')

//====================================RESPOSTAS============================================

//                                  1a CAMADA

let respostasP1C1 = [           //RESPOSTAS 1a PERGUNTA
    criarResposta('bolo', true, null),
    criarResposta('sorvete', true, null),
    criarResposta('gelatina', true, null),
    criarResposta('doce', false, arvore[C2].perguntas[0][0])
]                                                               
        bancoDeRespostas[C1].push(respostasP1C1)
//=========================================================================================

//                                  2a CAMADA

let respostasP1C2 = [           //RESPOSTAS 1a PERGUNTA
    criarResposta('almoço', false, arvore[C3].perguntas[0][0]),
    criarResposta('lanche', false, arvore[C3].perguntas[0][0]),
    criarResposta('jantar', false, arvore[C3].perguntas[0][0])
]                   
        bancoDeRespostas[C2].push(respostasP1C2)
//=========================================================================================

//                                  3a CAMADA

let respostasP1C3 = [           //RESPOSTAS 1a PERGUNTA
    criarResposta('fruta', false, 'Mousse de maracujá'),
    criarResposta('chocolate', false, 'Suflê de chocolate'),
    criarResposta('baunilha', false, 'Biscoito com creme')
]                   
        bancoDeRespostas[C3].push(respostasP1C3)
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
//===========================FUNÇÕES=======================================================
function startGuia(){
    console.log("deu certo!")
    startBtn.classList.add('hide') //torna o botão de inicio invisivel
    camadaAtualPerguntas = 0
    questionContainerElement.classList.remove('hide') //torna as perguntas visiveis
    setarProximaPergunta()
}
function setarProximaPergunta(){
    mostrarPerguntas(bancoDePerguntas[camadaAtualPerguntas])
}
function mostrarPerguntas(perguntas){
    perguntas.forEach((pergAtual, index)=>{
        const button = document.createElement('button')
        button.innerText = pergAtual.conteudo
        button.classList.add('btn')
        button.dataset.camada = camadaAtualPerguntas
        button.dataset.numero = index
        button.dataset.child = pergAtual.childs
        button.addEventListener('click', selecionarPergunta)
        questionElement.appendChild(button)
    })
}
function selecionarPergunta(p){
    console.log(p.target.dataset.numero)
}
function selecionarResposta(){
    
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