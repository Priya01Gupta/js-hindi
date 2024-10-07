const coding = ["javascript", "python", "cpp", "java", "ruby"]

// coding.forEach(function (val) {
//     console.log(val);
    
// })


//  coding.forEach( (item) => {
//     console.log(item);   
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach((item, index, arr)=> {
    console.log(item, index, arr);
    
})

const mycoding = [
    {
        languageName: "Javascript",
        languagefileNeme: "js"
    },
    {
        languageName: "C++",
        languagefileNeme: "cpp"
    },
    {
        languageName: "Java",
        languagefileNeme: "java"
    },
    {
        languageName: "Ruby",
        languagefileNeme: "rb"
    },
    {
        languageName: "Python",
        languagefileNeme: "py"
    },
]

mycoding.forEach((item)=> {
    console.log(item.languageName);
    console.log(item.languagefileNeme);
})