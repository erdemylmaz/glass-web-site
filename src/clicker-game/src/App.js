// isletme adini alma
const form = document.getElementById('operation-name-form');
const input = document.getElementById('operation-name-input');
const startArea = document.getElementById('start');
const gameArea = document.getElementById('game');
let operationName;
const operationNameH1 = document.getElementById('operationName');


onSubmit = (e) => {
    e.preventDefault();

    if (input.value !== "") {
        operationName = input.value;
        startArea.style.display = "none";
        gameArea.style.display = "block";
        operationNameH1.innerHTML = operationName;
    }
}
form.addEventListener('submit' , onSubmit);
gameArea.style.display = "none";

// GAME
const materialArea = document.getElementById('material');
const moneyArea = document.getElementById('money');
const currentCigKofteArea = document.getElementById('currentCigKofte');
const cigKofteFeeArea = document.getElementById('cigKofteFee');
const makedCigKofteArea = document.getElementById('makedCigKofte')
const makeButton = document.getElementById('makeCigKofteButton');
const buyMaterialButton = document.getElementById('buyMaterial');
const materialCostArea = document.getElementById('materialCost');
const autoBuyerArea = document.getElementById('autoBuyer');
const autoBuyerActivityArea = document.getElementById('autoBuyerActivity');
const autoBuyerCostArea = document.getElementById('autoBuyerCost');
const buyAutoBuyerButton = document.getElementById('buyAutoBuyer');
const increasePriceButton = document.getElementById('increasePrice');
const decreasePriceButton = document.getElementById('decreasePrice');
// ingredients
    // Nar Eksisi
    const narPriceArea = document.getElementById('narPrice');
    const buyNarButton = document.getElementById('buyNar');
    const hasNarArea = document.getElementById('hasNar');

    // Marul 
    const marulPriceArea = document.getElementById('marulPrice');
    const buyMarulButton = document.getElementById('buyMarul');
    const hasMarulArea = document.getElementById('hasMarul');

    // Tursu
    const tursuPriceArea = document.getElementById('tursuPrice');
    const buyTursuButton = document.getElementById('buyTursu');
    const hasTursuArea = document.getElementById('hasTursu');

    // Yesillik
    const yesillikPriceArea = document.getElementById('yesillikPrice');
    const buyYesillikButton = document.getElementById('buyYesillik');
    const hasYesillikArea = document.getElementById('hasYesillik');

    // Limon
    const limonPriceArea = document.getElementById('limonPrice');
    const buyLimonButton = document.getElementById('buyLimon');
    const hasLimonArea = document.getElementById('hasLimon');


// workers
    // errandBoy
    const buyErrandBoyButton = document.getElementById('buyErrandBoy');
    const errandBoysPriceArea = document.getElementById('errandBoysPrice')
    const errandBoysAmountArea = document.getElementById('errandBoysAmount');
    // master
    const buyMasterButton = document.getElementById('buyMaster');
    const mastersPriceArea = document.getElementById('mastersPrice')
    const mastersAmountArea = document.getElementById('mastersAmount');
    

class Game {
    material = 10000;
    money = 0;
    cigKofteFee = 20;
    maxPrice = this.cigKofteFee;
    minPrice = this.cigKofteFee;
    cigKofteMaterialAmount = 100;
    makedCigKofte = 0;
    currentCigKofte = 0;
    materialCost = 1000;
    hasAutoBuyer = false;
    autoBuyerCost = 15000;
    autoBuyerShow = 2000;
    
    newMaterialCost;

    materialsCost = () => {
        this.newMaterialCost = this.materialCost + Math.floor(Math.random() * 300 - Math.random() * 300);
        
        materialCostArea.innerHTML = `${this.newMaterialCost}₺`;
    }

    makeCigKofte = () => {
        
            this.material -= this.cigKofteMaterialAmount;
            this.makedCigKofte++;
            this.currentCigKofte++;

            materialArea.innerHTML = `${this.material}`;
            currentCigKofteArea.innerHTML = `${game.currentCigKofte}`;
            makedCigKofteArea.innerHTML = `${game.makedCigKofte}`;

        
    }

    sellCigKofte = () => {
            this.money += this.cigKofteFee;
            this.currentCigKofte--;

            currentCigKofteArea.innerHTML = `${game.currentCigKofte}`;
            moneyArea.innerHTML = `${game.money}₺`;
    }

    buyMaterial = () => {
        this.money -= this.newMaterialCost;
        this.material += 10000;

        materialArea.innerHTML = `${this.material}`;
        moneyArea.innerHTML = `${game.money}₺`;

        makeButton.disabled = false;
    }

    buyAutoBuyer = () => {
        if (this.money > this.autoBuyerCost) {
            this.money -= this.autoBuyerCost;
            this.hasAutoBuyer = true;

            buyAutoBuyerButton.style.display = "none";
        }
    }

    canMakeCigKofte = () => {
        return this.material >= this.cigKofteMaterialAmount ? makeButton.disabled = false : makeButton.disabled = true;
    }
    canBuyMaterial = () => {
        return this.money >= this.newMaterialCost ? buyMaterialButton.disabled = false : buyMaterialButton.disabled = true;
    }
    canBuyAutoBuyer = () => {
        return this.money >= this.autoBuyerCost ? buyAutoBuyerButton.disabled = false : buyAutoBuyerButton.disabled = true;
    }

    increasePrice = () => {
        this.cigKofteFee++;
        cigKofteFeeArea.innerHTML = `${this.cigKofteFee}₺`;
    }
    decreasePrice = () => {
        this.cigKofteFee--;
        cigKofteFeeArea.innerHTML = `${this.cigKofteFee}₺`;
    }


}
class Ingredients {
    // Nar Eksisi
    narsPrice = 50000;
    hasNar = false;

    buyNar = () => {
        game.money -= this.narsPrice;
        this.hasNar = true;

        game.maxPrice += 10;

        moneyArea.innerHTML = `${game.money}₺`;
    }

    // Limon
    lemonsPrice = 75000;
    hasLemon = false;

    buyLemon = () => {
        game.money -= this.lemonsPrice;
        this.hasLemon = true;

        game.maxPrice += 10;

        moneyArea.innerHTML = `${game.money}`;
    }

    // Marul
    marulsPrice = 150000;
    hasMarul = false;

    buyMarul = () => {
        game.money -= this.marulsPrice;
        this.hasMarul = true;

        game.maxPrice += 10;

        moneyArea.innerHTML = `${game.money}`;
    }

    // Tursu
    tursusPrice = 100000;
    hasTursu = false;

    buyTursu = () => {
        game.money -= this.tursusPrice;
        this.hasTursu = true;

        game.maxPrice += 10;

        moneyArea.innerHTML = `${game.money}`;
    }
    // Yesillik
    yesilliksPrice = 125000;
    hasYesillik = false;

    buyYesillik = () => {
        game.money -= this.yesilliksPrice;
        this.hasYesillik = true;

        game.maxPrice += 10;

        moneyArea.innerHTML = `${game.money}`;
    }


}
class yardimcilar {
    // errdand boy
    hasErrandBoy = false;
    errandBoysPrice = 500;
    currentErrandBoy = 0;

    buyErrandBoy = () => {
        game.money -= this.errandBoysPrice;
        this.hasErrandBoy = true;
        this.currentErrandBoy += 1;

        this.errandBoysPrice = this.errandBoysPrice + Math.floor(((this.errandBoysPrice * 50) / 100));
        errandBoysPriceArea.innerHTML = `${helpers.errandBoysPrice}₺`;

        moneyArea.innerHTML = `${game.money}₺`;
        errandBoysAmountArea.innerHTML = `Mevcut: ${this.currentErrandBoy}`;

    }
    errandBoy = () => {
        if (this.hasErrandBoy == true && game.material >= game.cigKofteMaterialAmount * this.currentErrandBoy) {

            game.material -= (game.cigKofteMaterialAmount * this.currentErrandBoy);
            game.makedCigKofte += this.currentErrandBoy;
            game.currentCigKofte+= this.currentErrandBoy;

            materialArea.innerHTML = `${game.material}`;
            currentCigKofteArea.innerHTML = `${game.currentCigKofte}`;
            makedCigKofteArea.innerHTML = `${game.makedCigKofte}`;
        }
    }
    // master
    hasMaster = false;
    mastersPrice = 1250;
    currentMaster = 0;
    master = 3;

    buyMaster = () => {
        game.money -= this.mastersPrice;
        this.hasMaster = true;
        this.currentMaster += 1;

        this.mastersPrice = this.mastersPrice + Math.floor(((this.mastersPrice * 50) / 100));
        mastersPriceArea.innerHTML = `${helpers.mastersPrice}₺`;

        moneyArea.innerHTML = `${game.money}₺`;
        mastersAmountArea.innerHTML = `Mevcut: ${this.currentMaster}`;

    }
    master = () => {
        if (this.hasMaster == true && game.material >= game.cigKofteMaterialAmount * this.currentMaster) {

            game.material -= (game.cigKofteMaterialAmount * this.currentMaster);
            game.makedCigKofte += this.currentMaster;
            game.currentCigKofte+= this.currentMaster;

            materialArea.innerHTML = `${game.material}`;
            currentCigKofteArea.innerHTML = `${game.currentCigKofte}`;
            makedCigKofteArea.innerHTML = `${game.makedCigKofte}`;
        }
    }

    

}

let helpers = new yardimcilar();
let ingredients = new Ingredients();
let game = new Game();


makeButton.addEventListener('click', game.makeCigKofte);
buyMaterialButton.addEventListener('click', game.buyMaterial);
buyAutoBuyerButton.addEventListener('click', game.buyAutoBuyer);
increasePriceButton.addEventListener('click', game.increasePrice);
decreasePriceButton.addEventListener('click', game.decreasePrice);
buyErrandBoyButton.addEventListener('click', helpers.buyErrandBoy);
buyMasterButton.addEventListener('click', helpers.buyMaster);

// Ingredients
    //Nar Eksisi
    buyNarButton.addEventListener('click', ingredients.buyNar);
    narPriceArea.innerHTML = `${ingredients.narsPrice}₺`;
    // Limon
    buyLimonButton.addEventListener('click', ingredients.buyLemon);
    limonPriceArea.innerHTML = `${ingredients.lemonsPrice}₺`;
    // Tursu
    buyTursuButton.addEventListener('click', ingredients.buyTursu);
    tursuPriceArea.innerHTML = `${ingredients.tursusPrice}₺`;
    // Marul
    buyMarulButton.addEventListener('click', ingredients.buyMarul);
    marulPriceArea.innerHTML = `${ingredients.marulsPrice}₺`;
    // Yesillik
    buyYesillikButton.addEventListener('click', ingredients.buyYesillik);
    yesillikPriceArea.innerHTML = `${ingredients.yesilliksPrice}₺`;

// Ingredients's End

materialArea.innerHTML = `${game.material}`;
moneyArea.innerHTML = `${game.money}₺`;
currentCigKofteArea.innerHTML = `${game.currentCigKofte}`;
makedCigKofteArea.innerHTML = `${game.makedCigKofte}`;
cigKofteFeeArea.innerHTML = `${game.cigKofteFee}₺`;
materialCost.innerHTML = `${game.materialCost}₺`;
autoBuyerCostArea.innerHTML = `${game.autoBuyerCost}₺`;
errandBoysPriceArea.innerHTML = `${helpers.errandBoysPrice}₺`;
errandBoysAmountArea.innerHTML = `Mevcut: ${helpers.currentErrandBoy}`;
mastersPriceArea.innerHTML = `${helpers.mastersPrice}₺`;
mastersAmountArea.innerHTML = `Mevcut: ${helpers.currentMaster}`;

check = () => {
    game.canMakeCigKofte();
    game.canBuyMaterial();
    game.canBuyAutoBuyer();


     if (Math.random() * game.cigKofteFee < 5 && game.currentCigKofte > 0) {
        game.sellCigKofte();
    }

    if (game.makedCigKofte >= game.autoBuyerShow) {
        autoBuyerArea.style.display = "block";
    } else {
        autoBuyerArea.style.display = "none";
    }
    if (game.hasAutoBuyer == true && game.money >= game.newMaterialCost && game.material <= game.cigKofteMaterialAmount * (helpers.currentErrandBoy + helpers.currentMaster)) {
        game.buyMaterial();
    }
    if (game.hasAutoBuyer == false) {
        autoBuyerActivityArea.innerHTML = `Yok`;
    } else {
        autoBuyerActivityArea.innerHTML = `Aktif`;
    }
    game.cigKofteFee >= game.maxPrice ? increasePriceButton.disabled = true : increasePriceButton.disabled = false;

    game.cigKofteFee <= game.minPrice ? decreasePriceButton.disabled = true : decreasePriceButton.disabled = false;
    
    game.money <= helpers.errandBoysPrice ? buyErrandBoyButton.disabled = true : buyErrandBoyButton.disabled = false;
    game.money <= helpers.mastersPrice ? buyMasterButton.disabled = true : buyMasterButton.disabled = false;
    
    // ingrediants
    if (ingredients.hasNar == true) {
        buyNarButton.style.display = "none";
        narPriceArea.style.display = "none";
        hasNarArea.innerHTML = `Satın Alındı`;
    }
    if (ingredients.hasLemon == true) {
        buyLimonButton.style.display = "none";
        limonPriceArea.style.display = "none";
        hasLimonArea.innerHTML = `Satın Alındı`;
    }
    if (ingredients.hasMarul == true) {
        buyMarulButton.style.display = "none";
        marulPriceArea.style.display = "none";
        hasMarulArea.innerHTML = `Satın Alındı`;
    }
    if (ingredients.hasTursu == true) {
        buyTursuButton.style.display = "none";
        tursuPriceArea.style.display = "none";
        hasTursuArea.innerHTML = `Satın Alındı`;
    }
    if (ingredients.hasYesillik == true) {
        buyYesillikButton.style.display = "none";
        yesillikPriceArea.style.display = "none";
        hasYesillikArea.innerHTML = `Satın Alındı`;
    }
    game.money <= ingredients.narsPrice ? buyNarButton.disabled = true : buyNarButton.disabled = false;
    game.money <= ingredients.lemonsPrice ? buyLimonButton.disabled = true : buyLimonButton.disabled = false;
    game.money <= ingredients.marulsPrice ? buyMarulButton.disabled = true : buyMarulButton.disabled = false;
    game.money <= ingredients.yesilliksPrice ? buyYesillikButton.disabled = true : buyYesillikButton.disabled = false;
    game.money <= ingredients.tursusPrice ? buyTursuButton.disabled = true : buyTursuButton.disabled = false;
}

setInterval(check, 1000/30);
setInterval(helpers.errandBoy, 1000);
setInterval(helpers.master, 1000 / 3)
setInterval(game.materialsCost, 10000);


/*
                YAPILACAKLAR LISTESI

    -MARKETTE NAR EKSISI VS. SATIN ALINCA MAXFIYAT 10TL ARTICAK (YAPILIYOR)
        -NAR EKSISI 
        -LIMON 
        -YESILLIK
        -TURSU

    -CIRAK,USTA VS.EKLENECEK (YAPILDI);
    -MARKETTE 2X HIZLI SATMA VS YAPILACAK
    -FIYAT ARTTIR AZALT (YAPILDI);
*/
