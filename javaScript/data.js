//Este Js Guarda as Informações dos produtos

//Estado default
const produtosAll = {
    madWolf:{   
        //produto - Board Mad Wolf
        nome: 'Mad Wolf',
        sobrenome: 'Special Edition',
        preco: 'R$149,99',
        imagem: 'src/skateMadWolf.svg'
    },
    madMonkey:{
        //produto - Board Mad Monkey
        nome: 'Mad Monkey',
        sobrenome: 'Special Edition',
        preco: 'R$149,99',
        imagem: 'src/skateMadMonkey.svg'
    },
    tonightAlive:{
        //produto - Boards Mad Bear
        nome: 'Tonight Alive',
        sobrenome: 'Hooligan Skateboards',
        preco: 'R$89,99',
        imagem: 'src/skateTonightAlive.svg'

    },
    crocodileKit:{
        //produto - Crocodile Kit
        nome: 'Crocodille Kit',
        sobrenome: 'Shape + Wheels',
        preco: 'R$279,99',
        imagem: 'src/skateAndWheelsCroc.svg'
    },
    pigeonKit:{
        //produto - Pigeon Kit
        nome: 'Pigeon Kit',
        sobrenome: 'Shape + Wheels',
        preco: 'R$279,99',
        imagem: 'src/skateAndWheelsPigeon.svg'
    },
    spitfireRedKit:{
        //produto - Red Truck + Wheels
        nome: 'SpitFire Red Kit',
        sobrenome:'Truck + Wheels SpitFire',
        preco:'R$150,00',
        imagem: 'src/truckAndWheelsRed.svg'
    },
    spitefireBlackKit:{
        //produto - Black Truck + Wheels
        nome: 'SpitFire Black Kit',
        sobrenome: 'Truck + Wheels Spitfire',
        preco: 'R$150,00',
        imagem: 'src/truckAndWheelsBlack.svg'

    }
};

//Trucks
const produtosTrucks = {
    redTruck:{
        //Red Truck
        nome:'Red Truck',
        sobrenome: '',
        preco:'R$180,00',
        imagem:'src/redTruck.svg'
    },
    blackTruck:{
        nome:'Black Truck',
        sobrenome:'',
        preco:'R$180,00',
        imagem:'src/blackTruck.svg'
    },
    silverTruck:{
        nome:'Silver Truck',
        sobrenome:'',
        preco:'R$180,00',
        imagem:'src/silverTruck.svg'
    },
    slayerTruck:{
        nome:'Slayer Truck',
        sobrenome:'',
        preco:'R$320,00',
        imagem:'src/slayerTruck.svg'
    },
    thunderTruck:{
        nome:'Thunder Truck',
        sobrenome:'',
        preco:'R$380,00',
        imagem:'src/thunderTruck.svg'
    },
    wannyTruck:{
        nome:'Wanny Truck',
        sobrenome:'',
        preco:'R$180,00',
        imagem:'src/wannyTruck.svg'
    },
    wannyTruck:{
        nome:'Gold Truck',
        sobrenome:'',
        preco:'R$220,00',
        imagem:'src/tensorGoldTruck.svg'
    },
    theeveTruck:{
        nome:'Theeve Truck',
        sobrenome:'Golden Edition',
        preco:'R$380,00',
        imagem:'src/theeveTruck.svg'
    },
    berleTruck:{
        nome:'Berle Truck',
        sobrenome:'',
        preco:'R$279,00',
        imagem:'src/berleTruck.svg'
    }


}

//Produtos da seção oferta
const produtosOferta = {
    AnimalsKit:{   
        //Oferta01 - Skate Mad Wolf
        nome: 'Animals Kit',
        sobrenome: 'Shape + Wheels',
        preco: 'R$458,99',
        imagem: 'src/animalsKit.svg'
    },
    EvanSmith:{   
        //Oferta02 - Element Shapes
        nome: 'Evan Smith + Mark Appleyard + Nick Garcia',
        sobrenome: 'Element Shapes',
        preco: 'R$589,99',
        imagem: 'src/elementShapes.svg'
    },
    FiveBoroKit:{
        //Oferta03 - Shapes
        nome :'Five boro extreme Kit',
        sobrenome : '5 shapes FiverBoro',
        preco : 'R$750,00',
        imagem:'src/fiveborokit.svg'

    },
    MiniRampAndCorrimao:{
        //Oferta04 - Shapes
        nome :'Mini Ramp + Corrimão',
        sobrenome :'Kit mini pista de skate',
        preco : 'R$1780,00',
        imagem:'src/miniRampCorrimão.svg'

    }

};

//Produtos Boards
    const produtosBoards = {
    kitMadAnimal:{
        //porduto - Kit Mad Animalsws
        nome: 'Mad Animals Kit',
        sobrenome: '5 Boards Mad Animals',
        preco:'R$600,00',
        imagem:'src/kitMadAnimals.svg'

    },
    shapeBakerRedOrBlue:{
        //Produto shape baker, red or blue
        nome: 'Shape Baker',
        sobrenome: 'Red or Blue',
        preco:'R$290,00',
        imagem:'src/blueBaker.svg',
        imagemAlternativa:'src/redBaker.svg'

    },
    zeroRattShape:{
        //Produto Zero Ratt Shape
        nome:'Zero Rat',
        sobrenome:'Zerto Rat Black Shape',
        preco:'170,00',
        imagem:'src/zeroRatt.svg'
    },
    jokerShape:{
        //Produto Joker Shape
        nome:'Joker Shape',
        sobrenome:'Shape Almost - Joker',
        preco:'170,00',
        imagem:'src/jokerShape.svg'
    },
    elementEagle:{
        //Produto Elemnet Eagle Shape
        nome:'Element Shape',
        sobrenome:'Eagle Element',
        preco:'220,00',
        imagem:'src/elementEagleShape.svg'
    },
    traumaShape:{
    //Produto Trauma Shape
    nome:'Trauma Shape',
    sobrenome:'Fuck the world',
    preco:'R$220,00',
    imagem:'src/traumaShape.svg'
    },
    markShape:{
    //Mark Appleyard Shape
    nome:'Element Shape',
    sobrenome:'Mark Appleyard Custom Shape',
    preco:'R$300,00',
    imagem:'src/markShape.svg'
    }


};
//Produtos Wheels
    const produtosWheels = {
        creepnWheel:{
            nome:'Creepn Crawl',
            sobrenome:'Wheels',
            preco:'R$100,00',
            imagem:'src/creepnWheels.svg'
        },
        jarneWheel:{
            nome:'SpitFire Jarne Verbruggen',
            sobrenome:'Wheels',
            preco:'R$120,00',
            imagem:'src/jarneWheels.svg'
        },
        kaderWheel:{
            nome:'Kader SpitFire',
            sobrenome:'Wheels',
            preco:'R$120,00',
            imagem:'src/kaderWheels.svg'
        },
        kowaskiWheel:{
            nome:'Kowalski Wheels',
            sobrenome:'Wheels',
            preco:'R$120,00',
            imagem:'src/kowaskiWheels.svg'
        },
        skiddlesWheel:{
            nome:'Skiddles Wheels',
            sobrenome:'Wheels',
            preco:'R$120,00',
            imagem:'src/skidleWheels.svg'
        },
        peraltaWheels:{
            nome:'Peralta Wheels',
            sobrenome:'Wheels',
            preco:'R$120,00',
            imagem:'src/peraltaWheels.svg'
        },
        spitFireWheels:{
            nome:'SpitFire Wheels',
            sobrenome:'Blue Wheels',
            preco:'R$175,00',
            imagem:'src/spitfireBlueWheel.svg'
        }
    }
    