var output = "";

function makeLadder(sisi) {
    for(var i=0; i<sisi; i++) {
        for(var j=0; j < i+1; j++) {
            output += "#";
        }
        console.log(output);
        output = "";
    }
  }
  
  // TEST CASE
  makeLadder(7)