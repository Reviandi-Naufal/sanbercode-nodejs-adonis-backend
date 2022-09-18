function tandaiA(str) {

    let charTarget = 'a'
    let charReplace = 'x'
    let result = ''

    for(var i=0; i<str.length; i++){
        if(i == 0){
            if(str.charAt(i) == charTarget){
                result = str.substring(0, i) + charReplace + str.substring(i + 1)
            }
            else{
                result = str
            }
        }
        else{
            if(str.charAt(i) == charTarget){
                result = result.substring(0, i) + charReplace + result.substring(i + 1)
            }
        }
    }
    
    return result;
}

// Tes Cases
console.log(tandaiA("abrakadabra")) // xbrxkxdxbrx
console.log(tandaiA("garuda")) // gxrudx
console.log(tandaiA("kucing")) // kucing