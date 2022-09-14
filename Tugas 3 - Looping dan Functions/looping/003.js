var output = "";

function makeRectangle(panjang,lebar) {
    for(var i=0; i<lebar; i++) {
        for(var j=0; j<panjang; j++) {
            output += "#";
        }
        console.log(output);
        output = ""
    }
  }
  
  // TEST CASE
  
  makeRectangle(8,4)