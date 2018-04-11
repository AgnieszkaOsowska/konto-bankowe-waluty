'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Konto = function () {
    function Konto() {
        _classCallCheck(this, Konto);

        this.numer = Math.floor(Math.random() * 100);
        this.stan = 0;
        this.wplacona = 0;
        this.wyplacona = 0;
    }

    _createClass(Konto, [{
        key: 'wplac',
        value: function wplac() {
            var wplacona = parseInt(document.getElementById('wplacone').value);
            this.wplacona = wplacona;
            if (wplacona > 0) {
                this.stan += wplacona;
            } else {
                alert('Kwota musi być wieksza od 0');
            }
            var placeStan = document.getElementById('stanKonta');
            placeStan.innerHTML = this.stan;
        }
    }, {
        key: 'wyplac',
        value: function wyplac() {
            var wyplacona = parseInt(document.getElementById('wyplacone').value);
            this.wyplacona = wyplacona;
            if (wyplacona >= 0 && wyplacona <= this.stan) {
                this.stan -= wyplacona;
            } else {
                alert('Nie mozesz wyplacic takiej kwoty');
            }
            var placeStan = document.getElementById('stanKonta');
            placeStan.innerHTML = this.stan;
        }
    }, {
        key: 'sprawdzStan',
        value: function sprawdzStan() {
            var placeStan = document.getElementById('stanKonta');
            placeStan.innerHTML = this.stan;
        }
    }, {
        key: 'utworz',
        value: function utworz() {
            var placeKontoZ = document.getElementById('kontoZ');
            placeKontoZ.innerHTML = '<p>Konto zwykłe:</p><br/><label for="wplacone">Kwota wplaty: </label><input type="text" id="wplacone" name="wplacone"/><button value="wplac" id="wplacc">Wplac</button><br/><label for="wyplacone">Kwota wyplaty: </label><input type="text" id="wyplacone" name="wyplacone"/><button value="wyplac" id="wyplacc">Wyplac</button>';
        }
    }]);

    return Konto;
}();

var btnWplata = document.getElementById('wplacc');
btnWplata.addEventListener('click', function () {
    konto1.wplac();
});

var btnWyplata = document.getElementById('wyplacc');
btnWyplata.addEventListener('click', function () {
    konto1.wyplac();
});

var btnStan = document.getElementById('stan');
btnStan.addEventListener('click', function () {
    konto1.sprawdzStan();
});

var konto1 = new Konto();
console.log(konto1);

// zad 3


var VipKonto = function (_Konto) {
    _inherits(VipKonto, _Konto);

    function VipKonto() {
        _classCallCheck(this, VipKonto);

        var _this = _possibleConstructorReturn(this, (VipKonto.__proto__ || Object.getPrototypeOf(VipKonto)).call(this));

        _this.kwotaProwizji = 0.12;
        return _this;
    }

    _createClass(VipKonto, [{
        key: 'prowizjaPrzyWplacie',
        value: function prowizjaPrzyWplacie() {
            _get(VipKonto.prototype.__proto__ || Object.getPrototypeOf(VipKonto.prototype), 'wplac', this).call(this);
            var pr = parseFloat(this.wplacona * this.kwotaProwizji);
            this.stan -= pr;
        }
    }, {
        key: 'prowizjaPrzyWyplacie',
        value: function prowizjaPrzyWyplacie() {
            _get(VipKonto.prototype.__proto__ || Object.getPrototypeOf(VipKonto.prototype), 'wyplac', this).call(this);
            var pr = parseFloat(this.wyplacona * this.kwotaProwizji);
            this.stan -= pr;
        }
    }, {
        key: 'utworz',
        value: function utworz() {
            var placeKontoV = document.getElementById('kontoV');
            placeKontoV.innerHTML = '<p>Konto VIP:</p><br/><label for="wplacone">Kwota wplaty: </label><input type="text" id="wplacone" name="wplacone"/><button value="prowizjaWplata" id="prWplata">Wplata z prowizja</button><br/><label for="wyplacone">Kwota wyplaty: </label><input type="text" id="wyplacone" name="wyplacone"/><button value="prowizjaWyplata" id="prWyplata">Wyplata z prowizja</button><br/>';
        }
    }]);

    return VipKonto;
}(Konto);

var vip1 = new VipKonto();
console.log(vip1);

var btnProwizjaWplata = document.getElementById('prWplata');
btnProwizjaWplata.addEventListener('click', function () {
    vip1.prowizjaPrzyWplacie();
});

var btnProwizjaWyplata = document.getElementById('prWyplata');
btnProwizjaWyplata.addEventListener('click', function () {
    vip1.prowizjaPrzyWyplacie();
});

var WalutoweKonto = function (_Konto2) {
    _inherits(WalutoweKonto, _Konto2);

    function WalutoweKonto() {
        _classCallCheck(this, WalutoweKonto);

        var _this2 = _possibleConstructorReturn(this, (WalutoweKonto.__proto__ || Object.getPrototypeOf(WalutoweKonto)).call(this));

        _this2.przelicznikEuro = 4.22;
        _this2.przelicznikPln = 0.24;
        return _this2;
    }

    _createClass(WalutoweKonto, [{
        key: 'dopiszWalute1',
        value: function dopiszWalute1() {
            _get(WalutoweKonto.prototype.__proto__ || Object.getPrototypeOf(WalutoweKonto.prototype), 'wplac', this).call(this);

            var walutaa = document.getElementById('waluta').value;
            var wall = document.getElementById('wal');
            if (walutaa === 'euro') {
                wall.innerHTML = 'EUR';
            } else {
                wall.innerHTML = 'PLN';
            }
        }
    }, {
        key: 'dopiszWalute2',
        value: function dopiszWalute2() {
            _get(WalutoweKonto.prototype.__proto__ || Object.getPrototypeOf(WalutoweKonto.prototype), 'wyplac', this).call(this);

            var walutaa = document.getElementById('waluta').value;
            var wall = document.getElementById('wal');
            if (walutaa === 'euro') {
                wall.innerHTML = 'EUR';
            } else {
                wall.innerHTML = 'PLN';
            }
        }
    }, {
        key: 'zamienWalute',
        value: function zamienWalute() {
            var wall = document.getElementById('wal');
            if (wall.innerHTML === 'EUR') {
                var przyEuro = parseFloat(this.stan * this.przelicznikEuro);
                wall.innerHTML = 'PLN';
                var placeStan = document.getElementById('stanKonta');
                placeStan.innerHTML = przyEuro;
            } else {
                var przyPln = parseFloat(this.stan * this.przelicznikPln);
                wall.innerHTML = 'EUR';
                var _placeStan = document.getElementById('stanKonta');
                _placeStan.innerHTML = przyPln;
            }
        }
    }, {
        key: 'utworz',
        value: function utworz() {
            var placeKontoW = document.getElementById('kontoW');
            placeKontoW.innerHTML = '<p>Konto walutowe:</p><br/><label for="wplacone">Kwota wplaty: </label><input type="text" id="wplacone" name="wplacone"/><label for="wyplacone">Kwota wyplaty: </label><input type="text" id="wyplacone" name="wyplacone"/><select id="waluta"><option value="euro">EUR</option><option value="zloty">PLN</option></select><button value="wplacW" id="wplacW">Wplac walute</button><button value="wyplacW" id="wyplacW">Wyplac walute</button><button value="zamienW" id="zamienW">Zamien walute</button><br/><label for="rodzajKonta">Utworz konto:</label><select id="rodzajKonta"><option value="zwykle">Zwykłe</option><option value="vip">VIP</option><option value="walutowe">Walutowe</option></select>';
        }
    }]);

    return WalutoweKonto;
}(Konto);

var wal1 = new WalutoweKonto();

var btnWalutaWplata = document.getElementById('wplacW');
btnWalutaWplata.addEventListener('click', function () {
    wal1.dopiszWalute1();
});
var btnWalutaWyplata = document.getElementById('wyplacW');
btnWalutaWyplata.addEventListener('click', function () {
    wal1.dopiszWalute2();
});
var btnZamianaWaluty = document.getElementById('zamienW');
btnZamianaWaluty.addEventListener('click', function () {
    wal1.zamienWalute();
});
//# sourceMappingURL=app.js.map