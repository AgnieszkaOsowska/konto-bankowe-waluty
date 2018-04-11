class Konto {
    constructor() {
        this.numer = Math.floor(Math.random() *100);
        this.stan = 0;
        this.wplacona = 0;
        this.wyplacona = 0;
    }
    wplac() {
        let wplacona = parseInt(document.getElementById('wplacone').value);
        this.wplacona = wplacona;
        if(wplacona > 0) {
            this.stan += wplacona;
        } 
        else {
            alert('Kwota musi być wieksza od 0');
        } 
        const placeStan = document.getElementById('stanKonta');
        placeStan.innerHTML = this.stan;
    }
    wyplac() {
        let wyplacona = parseInt(document.getElementById('wyplacone').value);
        this.wyplacona = wyplacona;
       if(wyplacona >= 0 && wyplacona <= this.stan) {
            this.stan -= wyplacona;
        }
        else {
            alert('Nie mozesz wyplacic takiej kwoty');
        }
        const placeStan = document.getElementById('stanKonta');
        placeStan.innerHTML = this.stan;
    }
    sprawdzStan() {
        const placeStan = document.getElementById('stanKonta');
        placeStan.innerHTML = this.stan;
    }
    utworz() {
        const placeKontoZ = document.getElementById('kontoZ');
        placeKontoZ.innerHTML = '<p>Konto zwykłe:</p><br/><label for="wplacone">Kwota wplaty: </label><input type="text" id="wplacone" name="wplacone"/><button value="wplac" id="wplacc">Wplac</button><br/><label for="wyplacone">Kwota wyplaty: </label><input type="text" id="wyplacone" name="wyplacone"/><button value="wyplac" id="wyplacc">Wyplac</button>';
    }
}

const btnWplata = document.getElementById('wplacc');
btnWplata.addEventListener('click', () => {
    konto1.wplac();
});
    
const btnWyplata = document.getElementById('wyplacc');
btnWyplata.addEventListener('click', () => {
    konto1.wyplac();
});

const btnStan = document.getElementById('stan');
btnStan.addEventListener('click', () => {
    konto1.sprawdzStan();
});

let konto1 = new Konto;
console.log(konto1);

// zad 3


class VipKonto extends Konto {
    constructor() {
        super();
        this.kwotaProwizji = 0.12;
    }
    prowizjaPrzyWplacie() {
        super.wplac();
        let pr = parseFloat(this.wplacona * this.kwotaProwizji);
        this.stan -= pr;
    }
    prowizjaPrzyWyplacie() {
        super.wyplac();
        let pr = parseFloat(this.wyplacona * this.kwotaProwizji);
        this.stan -= pr;
    }
    utworz() {
        const placeKontoV = document.getElementById('kontoV');
        placeKontoV.innerHTML = '<p>Konto VIP:</p><br/><label for="wplacone">Kwota wplaty: </label><input type="text" id="wplacone" name="wplacone"/><button value="prowizjaWplata" id="prWplata">Wplata z prowizja</button><br/><label for="wyplacone">Kwota wyplaty: </label><input type="text" id="wyplacone" name="wyplacone"/><button value="prowizjaWyplata" id="prWyplata">Wyplata z prowizja</button><br/>';
    }
}

let vip1 = new VipKonto;
console.log(vip1);

const btnProwizjaWplata = document.getElementById('prWplata');
btnProwizjaWplata.addEventListener('click', () => {
    vip1.prowizjaPrzyWplacie();
})

const btnProwizjaWyplata = document.getElementById('prWyplata');
btnProwizjaWyplata.addEventListener('click', () => {
    vip1.prowizjaPrzyWyplacie();
})


class WalutoweKonto extends Konto {
    constructor() {
        super();
        this.przelicznikEuro = 4.22;
        this.przelicznikPln = 0.24;
    }
    dopiszWalute1() {
        super.wplac();

        let walutaa = document.getElementById('waluta').value;
        const wall = document.getElementById('wal');
        if(walutaa === 'euro') {
            wall.innerHTML = 'EUR';
        }
        else {
            wall.innerHTML = 'PLN';
        }
    }
    dopiszWalute2() {
        super.wyplac();

        let walutaa = document.getElementById('waluta').value;
        let wall = document.getElementById('wal');
        if(walutaa === 'euro') {
            wall.innerHTML = 'EUR';
        }
        else {
            wall.innerHTML = 'PLN';
        } 
    }
    zamienWalute() {
        let wall = document.getElementById('wal');
        if(wall.innerHTML ==='EUR') {
            let przyEuro = parseFloat(this.stan * this.przelicznikEuro);
            wall.innerHTML = 'PLN';
            const placeStan = document.getElementById('stanKonta');
            placeStan.innerHTML = przyEuro;

        }
        else {
            let przyPln = parseFloat(this.stan * this.przelicznikPln);
            wall.innerHTML = 'EUR';
            const placeStan = document.getElementById('stanKonta');
            placeStan.innerHTML = przyPln;
        }
    }
    utworz() {
        const placeKontoW = document.getElementById('kontoW');
        placeKontoW.innerHTML = '<p>Konto walutowe:</p><br/><label for="wplacone">Kwota wplaty: </label><input type="text" id="wplacone" name="wplacone"/><label for="wyplacone">Kwota wyplaty: </label><input type="text" id="wyplacone" name="wyplacone"/><select id="waluta"><option value="euro">EUR</option><option value="zloty">PLN</option></select><button value="wplacW" id="wplacW">Wplac walute</button><button value="wyplacW" id="wyplacW">Wyplac walute</button><button value="zamienW" id="zamienW">Zamien walute</button><br/><label for="rodzajKonta">Utworz konto:</label><select id="rodzajKonta"><option value="zwykle">Zwykłe</option><option value="vip">VIP</option><option value="walutowe">Walutowe</option></select>';
    }
}

let wal1 = new WalutoweKonto;

const btnWalutaWplata = document.getElementById('wplacW');
btnWalutaWplata.addEventListener('click', () => {
    wal1.dopiszWalute1();
})
const btnWalutaWyplata = document.getElementById('wyplacW');
btnWalutaWyplata.addEventListener('click', () => {
    wal1.dopiszWalute2();
})
const btnZamianaWaluty = document.getElementById('zamienW');
btnZamianaWaluty.addEventListener('click', () => {
    wal1.zamienWalute();
})

