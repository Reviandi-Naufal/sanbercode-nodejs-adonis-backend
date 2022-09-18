function graduate(arr) {

    let laravel = []
    let vuejs = []
    let reactjs = []
    let result = {}

    for(var i=0; i<arr.length; i++){
        if(arr[i].class == "Laravel"){
            if(arr[i].score < 60){
                let data = {name:arr[i].name, score:arr[i].score, grade: "participated"}
                laravel.push(data)
            }
            else if(arr[i].score > 59 && arr[i].score < 86){
                let data = {name:arr[i].name, score:arr[i].score, grade: "completed"}
                laravel.push(data)
            }
            else if(arr[i].score > 85){
                let data = {name:arr[i].name, score:arr[i].score, grade: "mastered"}
                laravel.push(data)
            }
        }
        else if(arr[i].class == "Vuejs"){
            if(arr[i].score < 60){
                let data = {name:arr[i].name, score:arr[i].score, grade: "participated"}
                vuejs.push(data)
            }
            else if(arr[i].score > 59 && arr[i].score < 86){
                let data = {name:arr[i].name, score:arr[i].score, grade: "completed"}
                vuejs.push(data)
            }
            else if(arr[i].score > 85){
                let data = {name:arr[i].name, score:arr[i].score, grade: "mastered"}
                vuejs.push(data)
            }
        }
        else if(arr[i].class == "Reactjs"){
            if(arr[i].score < 60){
                let data = {name:arr[i].name, score:arr[i].score, grade: "participated"}
                reactjs.push(data)
            }
            else if(arr[i].score > 59 && arr[i].score < 86){
                let data = {name:arr[i].name, score:arr[i].score, grade: "completed"}
                reactjs.push(data)
            }
            else if(arr[i].score > 85){
                let data = {name:arr[i].name, score:arr[i].score, grade: "mastered"}
                reactjs.push(data)
            }
        }
    }
    result = {
        Laravel:laravel,
        Vuejs:vuejs,
        Reactjs:reactjs
    }
    return result;
}

// TEST CASE
// Contoh Input

var arr = [
    {name:"Ahmad",score:80, class: "Laravel"}, 
    {name:"Regi",score:86, class: "Vuejs"}, 
    {name:"Robert",score:59, class: "Laravel"}, 
    {name:"Bondra",score:81, class: "Reactjs" }
]


console.log(graduate(arr))

//Output

// {

// Laravel:[{name:"Ahmad",score:80, grade: "completed"}, { name: "Robert", score: 59, grade: "participated"}],

// Vuejs:[

// {name:"Regi",score:86, grade: "mastered"}

// ],

// Reactjs:[{name:"Bondra",score:81, grade: "completed"}]

// }