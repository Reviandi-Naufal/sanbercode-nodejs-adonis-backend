var sentence_1 = "Santai";
var sentence_2 = "Berkualitas";
var sentence_3 = "I Love Coding"; 

for(i=1; i<=20; i++) {
    if(i % 2 == 0) {
        console.log(i + " - " + sentence_2)
    } 
    else if (i % 2 != 0 && i % 3 == 0) {
        console.log(i + " - " + sentence_3)
    }
    else if(i % 2 != 0) {
        console.log(i + " - " + sentence_1)
    } 
}