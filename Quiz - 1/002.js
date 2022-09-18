function hitungVokal(str){

    let vocalCounter = 0
    const vocalList = ['a', 'i', 'u', 'e', 'o']

    for(let character of str.toLowerCase()){
        if(vocalList.includes(character)){
            vocalCounter++
        }
    }
    return vocalCounter;
}
    
// Test Cases

console.log(hitungVokal("Adonis"))// Output:3

console.log(hitungVokal("Error"))//Output:2

console.log(hitungVokal("Eureka"))//Output:4

console.log(hitungVokal("Rsch")) // Output: 0