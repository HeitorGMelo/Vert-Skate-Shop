//Este Js Realiza as ações do Site

const skate = document.getElementById("skate");
skate.cameraOrbit = '75deg 2.5m';

const options = document.querySelectorAll(".storeOption");
options.forEach(option =>{
    option.addEventListener('click' , () => {
        options.forEach(btn => btn.classList.remove('selected'));
        option.classList.add('selected');
});
});

//Tudo / Estado Deafault
//Mad Wolf Special Edition
document.querySelectorAll('.imagem')[0].src = produtosAll.madWolf.imagem;
document.querySelectorAll('.nomeProduto')[0].textContent = produtosAll.madWolf.nome;
document.querySelectorAll('.sobreNome')[0].textContent = produtosAll.madWolf.sobrenome;
document.querySelectorAll('.preco')[0].textContent = produtosAll.madWolf.preco;

//Mad Monkey Special Edition 
document.querySelectorAll('.imagem')[1].src = produtosAll.madMonkey.imagem;
document.querySelectorAll('.nomeProduto')[1].textContent = produtosAll.madMonkey.nome;
document.querySelectorAll('.sobreNome')[1].textContent = produtosAll.madMonkey.sobrenome;
document.querySelectorAll('.preco')[1].textContent = produtosAll.madMonkey.preco;

//Tonight Alive
document.querySelectorAll('.imagem')[2].src = produtosAll.tonightAlive.imagem;
document.querySelectorAll('.nomeProduto')[2].textContent = produtosAll.tonightAlive.nome;
document.querySelectorAll('.sobreNome')[2].textContent = produtosAll.tonightAlive.sobrenome;
document.querySelectorAll('.preco')[2].textContent = produtosAll.tonightAlive.preco;

//Crocodile Kit
document.querySelectorAll('.imagem')[3].src = produtosAll.crocodileKit.imagem;
document.querySelectorAll('.nomeProduto')[3].textContent = produtosAll.crocodileKit.nome;
document.querySelectorAll('.sobreNome')[3].textContent = produtosAll.crocodileKit.sobrenome;
document.querySelectorAll('.preco')[3].textContent = produtosAll.crocodileKit.preco;

//Pigeon Kit
document.querySelectorAll('.imagem')[4].src = produtosAll.pigeonKit.imagem;
document.querySelectorAll('.nomeProduto')[4].textContent = produtosAll.pigeonKit.nome;
document.querySelectorAll('.sobreNome')[4].textContent = produtosAll.pigeonKit.sobrenome;
document.querySelectorAll('.preco')[4].textContent = produtosAll.pigeonKit.preco;

//SpitFire Redkit
document.querySelectorAll('.imagem')[5].src = produtosAll.spitfireRedKit.imagem;
document.querySelectorAll('.nomeProduto')[5].textContent = produtosAll.spitfireRedKit.nome;
document.querySelectorAll('.sobreNome')[5].textContent = produtosAll.spitfireRedKit.sobrenome;
document.querySelectorAll('.preco')[5].textContent = produtosAll.spitfireRedKit.preco;

//SpitFire Blackkit
document.querySelectorAll('.imagem')[6].src = produtosAll.spitefireBlackKit.imagem;
document.querySelectorAll('.nomeProduto')[6].textContent = produtosAll.spitefireBlackKit.nome;
document.querySelectorAll('.sobreNome')[6].textContent = produtosAll.spitefireBlackKit.sobrenome;
document.querySelectorAll('.preco')[6].textContent = produtosAll.spitefireBlackKit.preco;





//Ofertas / Estado
//Animals Kit
document.querySelectorAll('.imagemOferta')[0].src = produtosOferta.AnimalsKit.imagem;
document.querySelectorAll('.nomeOferta')[0].textContent = produtosOferta.AnimalsKit.nome;
document.querySelectorAll('.sobreNomeOferta')[0].textContent = produtosOferta.AnimalsKit.sobrenome;
document.querySelectorAll('.precoOferta')[0].textContent = produtosOferta.AnimalsKit.preco;

//Element ShapeKit
document.querySelectorAll('.imagemOferta')[1].src = produtosOferta.EvanSmith.imagem;
document.querySelectorAll('.nomeOferta')[1].textContent = produtosOferta.EvanSmith.nome;
document.querySelectorAll('.sobreNomeOferta')[1].textContent = produtosOferta.EvanSmith.sobrenome;
document.querySelectorAll('.precoOferta')[1].textContent = produtosOferta.EvanSmith.preco;

//Five Boro Extreme KIt
document.querySelectorAll('.imagemOferta')[2].src = produtosOferta.FiveBoroKit.imagem;
document.querySelectorAll('.nomeOferta')[2].textContent = produtosOferta.FiveBoroKit.nome;
document.querySelectorAll('.sobreNomeOferta')[2].textContent = produtosOferta.FiveBoroKit.sobrenome;
document.querySelectorAll('.precoOferta')[2].textContent = produtosOferta.FiveBoroKit.preco;

//MiniRamp + Corrimão
document.querySelectorAll('.imagemOferta')[3].src = produtosOferta.MiniRampAndCorrimao.imagem;
document.querySelectorAll('.nomeOferta')[3].textContent = produtosOferta.MiniRampAndCorrimao.nome;
document.querySelectorAll('.sobreNomeOferta')[3].textContent = produtosOferta.MiniRampAndCorrimao.sobrenome;
document.querySelectorAll('.precoOferta')[3].textContent = produtosOferta.MiniRampAndCorrimao.preco;



//Ações Onclick dos produtos para mudar categorias
function tudo(){
//Produtos - Tudo/Default
document.querySelector("#categoria").innerHTML = "MELHORES<br>ESCOLHAS";


//Mad Wolf Special Edition
document.querySelectorAll('.imagem')[0].src = produtosAll.madWolf.imagem;
document.querySelectorAll('.nomeProduto')[0].textContent = produtosAll.madWolf.nome;
document.querySelectorAll('.sobreNome')[0].textContent = produtosAll.madWolf.sobrenome;
document.querySelectorAll('.preco')[0].textContent = produtosAll.madWolf.preco;

//Mad Monkey Special Edition 
document.querySelectorAll('.imagem')[1].src = produtosAll.madMonkey.imagem;
document.querySelectorAll('.nomeProduto')[1].textContent = produtosAll.madMonkey.nome;
document.querySelectorAll('.sobreNome')[1].textContent = produtosAll.madMonkey.sobrenome;
document.querySelectorAll('.preco')[1].textContent = produtosAll.madMonkey.preco;

//Tonight Alive
document.querySelectorAll('.imagem')[2].src = produtosAll.tonightAlive.imagem;
document.querySelectorAll('.nomeProduto')[2].textContent = produtosAll.tonightAlive.nome;
document.querySelectorAll('.sobreNome')[2].textContent = produtosAll.tonightAlive.sobrenome;
document.querySelectorAll('.preco')[2].textContent = produtosAll.tonightAlive.preco;

//Crocodile Kit
document.querySelectorAll('.imagem')[3].src = produtosAll.crocodileKit.imagem;
document.querySelectorAll('.nomeProduto')[3].textContent = produtosAll.crocodileKit.nome;
document.querySelectorAll('.sobreNome')[3].textContent = produtosAll.crocodileKit.sobrenome;
document.querySelectorAll('.preco')[3].textContent = produtosAll.crocodileKit.preco;

//Pigeon Kit
document.querySelectorAll('.imagem')[4].src = produtosAll.pigeonKit.imagem;
document.querySelectorAll('.nomeProduto')[4].textContent = produtosAll.pigeonKit.nome;
document.querySelectorAll('.sobreNome')[4].textContent = produtosAll.pigeonKit.sobrenome;
document.querySelectorAll('.preco')[4].textContent = produtosAll.pigeonKit.preco;

//SpitFire Redkit
document.querySelectorAll('.imagem')[5].src = produtosAll.spitfireRedKit.imagem;
document.querySelectorAll('.nomeProduto')[5].textContent = produtosAll.spitfireRedKit.nome;
document.querySelectorAll('.sobreNome')[5].textContent = produtosAll.spitfireRedKit.sobrenome;
document.querySelectorAll('.preco')[5].textContent = produtosAll.spitfireRedKit.preco;

//SpitFire Blackkit
document.querySelectorAll('.imagem')[6].src = produtosAll.spitefireBlackKit.imagem;
document.querySelectorAll('.nomeProduto')[6].textContent = produtosAll.spitefireBlackKit.nome;
document.querySelectorAll('.sobreNome')[6].textContent = produtosAll.spitefireBlackKit.sobrenome;
document.querySelectorAll('.preco')[6].textContent = produtosAll.spitefireBlackKit.preco;
}


//Onclick dos boards
function boards(){
    document.querySelector("#categoria").innerHTML = "MELHORES<br>BOARDS";

    //Mad Animals Kit
    document.querySelectorAll(".imagem")[0].src = produtosBoards.kitMadAnimal.imagem;
    document.querySelectorAll(".nomeProduto")[0].textContent = produtosBoards.kitMadAnimal.nome;
    document.querySelectorAll(".sobreNome")[0].textContent = produtosBoards.kitMadAnimal.sobrenome;
    document.querySelectorAll(".preco")[0].textContent = produtosBoards.kitMadAnimal.preco;

    //Shape Baker Red or blue
    document.querySelectorAll(".imagem")[1].src = produtosBoards.shapeBakerRedOrBlue.imagem;
    document.querySelectorAll(".nomeProduto")[1].textContent = produtosBoards.shapeBakerRedOrBlue.nome;
    document.querySelectorAll(".sobreNome")[1].textContent = produtosBoards.shapeBakerRedOrBlue.sobrenome;
    document.querySelectorAll(".preco")[1].textContent = produtosBoards.shapeBakerRedOrBlue.preco;
         //Ação Shpe Baker
             document.querySelectorAll(".imagem")[1].addEventListener("mouseover", baker);
             document.querySelectorAll(".imagem")[1].addEventListener("mouseleave", bakerOut);


                 function baker(evento){
                        if(evento.target.src.includes('src/blueBaker.svg')){
                            document.querySelectorAll(".imagem")[1].src = produtosBoards.shapeBakerRedOrBlue.imagemAlternativa;
                        }};
                
                function bakerOut(evento){
                        if(evento.target.src.includes('src/redBaker.svg')){
                            document.querySelectorAll(".imagem")[1].src = produtosBoards.shapeBakerRedOrBlue.imagem;
                        }};   
    
    //Zero Ratt Shape
    document.querySelectorAll(".imagem")[2].src = produtosBoards.zeroRattShape.imagem;
    document.querySelectorAll(".nomeProduto")[2].textContent = produtosBoards.zeroRattShape.nome;
    document.querySelectorAll(".sobreNome")[2].textContent = produtosBoards.zeroRattShape.sobrenome;
    document.querySelectorAll(".preco")[2].textContent = produtosBoards.zeroRattShape.preco;

    //Joker Shape
    document.querySelectorAll(".imagem")[3].src = produtosBoards.jokerShape.imagem;
    document.querySelectorAll(".nomeProduto")[3].textContent = produtosBoards.jokerShape.nome;
    document.querySelectorAll(".sobreNome")[3].textContent = produtosBoards.jokerShape.sobrenome;
    document.querySelectorAll(".preco")[3].textContent = produtosBoards.jokerShape.preco;

    //Element Eagle Shape
    document.querySelectorAll(".imagem")[4].src = produtosBoards.elementEagle.imagem;
    document.querySelectorAll(".nomeProduto")[4].textContent = produtosBoards.elementEagle.nome;
    document.querySelectorAll(".sobreNome")[4].textContent = produtosBoards.elementEagle.sobrenome;
    document.querySelectorAll(".preco")[4].textContent = produtosBoards.elementEagle.preco;

    //Trauma Shape
    document.querySelectorAll(".imagem")[5].src = produtosBoards.traumaShape.imagem;
    document.querySelectorAll(".nomeProduto")[5].textContent = produtosBoards.traumaShape.nome;
    document.querySelectorAll(".sobreNome")[5].textContent = produtosBoards.traumaShape.sobrenome;
    document.querySelectorAll(".preco")[5].textContent = produtosBoards.traumaShape.preco;

    //Mark Appleyard Shape
    document.querySelectorAll(".imagem")[6].src = produtosBoards.markShape.imagem;
    document.querySelectorAll(".nomeProduto")[6].textContent = produtosBoards.markShape.nome;
    document.querySelectorAll(".sobreNome")[6].textContent = produtosBoards.markShape.sobrenome;
    document.querySelectorAll(".preco")[6].textContent = produtosBoards.markShape.preco;

}
//Onclick dos trcuks
function trucks(){
    document.querySelector("#categoria").innerHTML = "MELHORES<br>TRUCKS";


    //Red Truck
    document.querySelectorAll(".imagem")[0].src = produtosTrucks.redTruck.imagem;
    document.querySelectorAll(".nomeProduto")[0].textContent = produtosTrucks.redTruck.nome;
    document.querySelectorAll(".sobreNome")[0].textContent = produtosTrucks.redTruck.sobrenome;
    document.querySelectorAll(".preco")[0].textContent = produtosTrucks.redTruck.preco;

    //Black Truck
    document.querySelectorAll(".imagem")[1].src = produtosTrucks.blackTruck.imagem;
    document.querySelectorAll(".nomeProduto")[1].textContent = produtosTrucks.blackTruck.nome;
    document.querySelectorAll(".sobreNome")[1].textContent = produtosTrucks.blackTruck.sobrenome;
    document.querySelectorAll(".preco")[1].textContent = produtosTrucks.blackTruck.preco;

    //Sivler Truck
    document.querySelectorAll(".imagem")[2].src = produtosTrucks.silverTruck.imagem;
    document.querySelectorAll(".nomeProduto")[2].textContent = produtosTrucks.silverTruck.nome;
    document.querySelectorAll(".sobreNome")[2].textContent = produtosTrucks.silverTruck.sobrenome;
    document.querySelectorAll(".preco")[2].textContent = produtosTrucks.silverTruck.preco;

    //Slyer Truck
    document.querySelectorAll(".imagem")[2].src = produtosTrucks.slayerTruck.imagem;
    document.querySelectorAll(".nomeProduto")[2].textContent = produtosTrucks.slayerTruck.nome;
    document.querySelectorAll(".sobreNome")[2].textContent = produtosTrucks.slayerTruck.sobrenome;
    document.querySelectorAll(".preco")[2].textContent = produtosTrucks.slayerTruck.preco;

    //Thunder Truck
    document.querySelectorAll(".imagem")[3].src = produtosTrucks.thunderTruck.imagem;
    document.querySelectorAll(".nomeProduto")[3].textContent = produtosTrucks.thunderTruck.nome;
    document.querySelectorAll(".sobreNome")[3].textContent = produtosTrucks.thunderTruck.sobrenome;
    document.querySelectorAll(".preco")[3].textContent = produtosTrucks.thunderTruck.preco;

    //Wanny Truck
    document.querySelectorAll(".imagem")[4].src = produtosTrucks.wannyTruck.imagem;
    document.querySelectorAll(".nomeProduto")[4].textContent = produtosTrucks.wannyTruck.nome;
    document.querySelectorAll(".sobreNome")[4].textContent = produtosTrucks.wannyTruck.sobrenome;
    document.querySelectorAll(".preco")[4].textContent = produtosTrucks.wannyTruck.preco;

    //Thevee Truck
    document.querySelectorAll(".imagem")[5].src = produtosTrucks.theeveTruck.imagem;
    document.querySelectorAll(".nomeProduto")[5].textContent = produtosTrucks.theeveTruck.nome;
    document.querySelectorAll(".sobreNome")[5].textContent = produtosTrucks.theeveTruck.sobrenome;
    document.querySelectorAll(".preco")[5].textContent = produtosTrucks.theeveTruck.preco;

    //Berlee Truck
    document.querySelectorAll(".imagem")[6].src = produtosTrucks.berleTruck.imagem;
    document.querySelectorAll(".nomeProduto")[6].textContent = produtosTrucks.berleTruck.nome;
    document.querySelectorAll(".sobreNome")[6].textContent = produtosTrucks.berleTruck.sobrenome;
    document.querySelectorAll(".preco")[6].textContent = produtosTrucks.berleTruck.preco;
}
function wheels(){
    document.querySelector("#categoria").innerHTML = "MELHORES<br>WHEELS";

    //Creepn Crawl Wheels
    document.querySelectorAll(".imagem")[0].src = produtosWheels.creepnWheel.imagem;
    document.querySelectorAll(".nomeProduto")[0].textContent = produtosWheels.creepnWheel.nome;
    document.querySelectorAll(".sobreNome")[0].textContent = produtosWheels.creepnWheel.sobrenome;
    document.querySelectorAll(".preco")[0].textContent = produtosWheels.creepnWheel.preco;

    //Jarne Wheels
    document.querySelectorAll(".imagem")[1].src = produtosWheels.jarneWheel.imagem;
    document.querySelectorAll(".nomeProduto")[1].textContent = produtosWheels.jarneWheel.nome;
    document.querySelectorAll(".sobreNome")[1].textContent = produtosWheels.jarneWheel.sobrenome;
    document.querySelectorAll(".preco")[1].textContent = produtosWheels.jarneWheel.preco;

    //Kader Wheels
    document.querySelectorAll(".imagem")[2].src = produtosWheels.kaderWheel.imagem;
    document.querySelectorAll(".nomeProduto")[2].textContent = produtosWheels.kaderWheel.nome;
    document.querySelectorAll(".sobreNome")[2].textContent = produtosWheels.kaderWheel.sobrenome;
    document.querySelectorAll(".preco")[2].textContent = produtosWheels.kaderWheel.preco;

    //Kowaski Wheels
    document.querySelectorAll(".imagem")[3].src = produtosWheels.kowaskiWheel.imagem;
    document.querySelectorAll(".nomeProduto")[3].textContent = produtosWheels.kowaskiWheel.nome;
    document.querySelectorAll(".sobreNome")[3].textContent = produtosWheels.kowaskiWheel.sobrenome;
    document.querySelectorAll(".preco")[3].textContent = produtosWheels.kowaskiWheel.preco;

    //Skiddle Wheels
    document.querySelectorAll(".imagem")[4].src = produtosWheels.skiddlesWheel.imagem;
    document.querySelectorAll(".nomeProduto")[4].textContent = produtosWheels.skiddlesWheel.nome;
    document.querySelectorAll(".sobreNome")[4].textContent = produtosWheels.skiddlesWheel.sobrenome;
    document.querySelectorAll(".preco")[4].textContent = produtosWheels.skiddlesWheel.preco;

    //Peralta Wheels
    document.querySelectorAll(".imagem")[5].src = produtosWheels.peraltaWheels.imagem;
    document.querySelectorAll(".nomeProduto")[5].textContent = produtosWheels.peraltaWheels.nome;
    document.querySelectorAll(".sobreNome")[5].textContent = produtosWheels.peraltaWheels.sobrenome;
    document.querySelectorAll(".preco")[5].textContent = produtosWheels.peraltaWheels.preco;

    //SpitFire Wheels
    document.querySelectorAll(".imagem")[6].src = produtosWheels.spitFireWheels.imagem;
    document.querySelectorAll(".nomeProduto")[6].textContent = produtosWheels.spitFireWheels.nome;
    document.querySelectorAll(".sobreNome")[6].textContent = produtosWheels.spitFireWheels.sobrenome;
    document.querySelectorAll(".preco")[6].textContent = produtosWheels.spitFireWheels.preco;
}









