// var c = 300
let a = 500
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

console.log(a);
// console.log(b);
// console.log(c); 


function one(){
    const username = "Priya"

    function two(){
         const website = "Youtube"
         console.log(username);
    }

    // console.log(website);
    two()
}
// one()

if(true){
    const username = "Priya"
    if(username === "Priya"){
        const website = " Youtube"
        console.log(username + " Youtube");
        
    }
    // console.log(website);
}

// console.log(username);

/*******************************Interesting ***************************/

console.log(addone(5));

function addone(num){
  return num + 1
}

const addtwo = function(num){
   return num + 2
}
addtwo(5)
