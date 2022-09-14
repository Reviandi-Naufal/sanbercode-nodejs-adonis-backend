var i_Loop = 2;
var sentence_1 = "I love coding";
var sentence_2 = "I will become a mobile developer";

console.log("LOOPING PERTAMA")
while(i_Loop <= 20) {
    comp_sentence = i_Loop + " - " + sentence_1
    console.log(comp_sentence)
    i_Loop += 2;
}

i_Loop -= 2;
console.log("LOOPING KEDUA")
while(i_Loop >= 2) {
    comp_sentence = i_Loop + " - " + sentence_2
    console.log(comp_sentence)
    i_Loop -= 2;
}
