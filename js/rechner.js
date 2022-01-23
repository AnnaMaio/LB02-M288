const EUR = "eur";
const CHF = "chf";
const USD = "usd";



/* html-Dom */
let locAm = document.getElementById("localAmount");
let locEx = document.getElementById("localExchange");
let forAm = document.getElementById("foreignAmount");
let forEx = document.getElementById("foreignExchange");

/* Umrechnung */
const convert = {
    round:function (betrag, kurs){
        return Math.fround(betrag * kurs).toFixed(4);
    },
    /* von CHF nach Fremdwährung */
    localToForeign:function (){
        if (locEx.value === CHF) {
            if (forEx.value === EUR) {
                forAm.value = convert.round(locAm.value, CurrencyRate.CHF_EUR);
            } else if (forEx.value === USD) {
                forAm.value = convert.round(locAm.value, CurrencyRate.CHF_USD);
            }
        }
    },
    /* von Fremdwährung nach CHF */
    foreignToLocal:function () {

        if (locEx.value === CHF) {
            if (forEx.value === EUR) {
                locAm.value = convert.round(forAm.value, CurrencyRate.EUR_CHF);
            } else if (forEx.value === USD) {
                locAm.value = convert.round(forAm.value, CurrencyRate.USD_CHF);
            }
        }
    }
}


