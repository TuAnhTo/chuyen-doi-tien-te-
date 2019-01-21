
function changeMoney() {
    let a = document.getElementById("amount").value;

    let f = document.getElementById("formcurr").value;

    let t = document.getElementById("tocurr").value;

    let mon;

    if (f === "vietnam") {
        if (t === "usd") mon = a / 23000;
        else if (t === "euro") mon = a / 27000;
        else if (t === "yen") mon = a / 215;
    }
    alert(mon);
}
