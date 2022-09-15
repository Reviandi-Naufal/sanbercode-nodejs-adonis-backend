function balikKata(kata) {
    var len = kata.length;
    var reverse = "";
    for (var i= len - 1; i >= 0; i--) {
        reverse += kata[i];
    }
    return reverse;
}

console.log(balikKata("SanberCode"))