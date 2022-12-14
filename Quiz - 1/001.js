function kelompokAngka(arr){
    var ganjil = [];
    var genap = [];
    var kelipatan_3 = [];
    var result = [];

    for(var i=0; i<arr.length; i++) {
        if (arr[i] % 2 != 0 && arr[i] % 3 != 0) {
            ganjil.push(arr[i])
        } 
        else if(arr[i] % 2 == 0 && arr[i] % 3 != 0) {
            genap.push(arr[i])
        }
        else if(arr[i] % 3 == 0){
            kelipatan_3.push(arr[i])            
        }
    }
    result.push(ganjil, genap, kelipatan_3)

    return result;
}

//Test Case

console.log(kelompokAngka([1,2,3,4,5,6,7]))

//Output:[[1,5,7],[2,4],[3,6]]

console.log(kelompokAngka([13,27,11,15]))

//Output:[[13,11],[],[27,15]]

console.log(kelompokAngka([]))

//output:[[],[],[]]