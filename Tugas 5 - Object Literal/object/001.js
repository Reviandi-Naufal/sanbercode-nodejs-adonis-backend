function arrayToObject(arr) {
    for (var i=0; i<arr.length; i++){
        var personArr = arr[i]

        var thisYear = (new Date()).getFullYear();

        var objPerson = {
            firstName : personArr[0],
            lastName : personArr[1],
            gender : personArr[2],   
        }

        if(!personArr[3] || personArr[3] > thisYear) {
            objPerson.age = "Invalid birth year";
        }else{
            objPerson.age = thisYear - personArr[3]
        }

        var fullName = objPerson.firstName + " " + objPerson.lastName
        console.log(`${ i + 1} . ${fullName} : `, objPerson)
    }
}
 
// Driver Code
// var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
// arrayToObject(people) 
 
// var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
// arrayToObject(people2) 
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
// Error case 
arrayToObject([]) // ""