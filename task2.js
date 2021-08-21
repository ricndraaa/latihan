//concate
// const str1 = "Hello"
// const str2 = "Beautiful"
// const str3 = "World"
// const str4 = str1.concat(' ',str2,' ',str3);

// console.log(str4)

//

let data1 = {

    name: "Paul",
    address: "Medan"
}

let data2 = {
    name: "Samuel",
    address: "Lampung"
}

const str4 = data1.name.concat(' ',data2.name)

console.log(str4)

//match()

let string1 = "Pauline@gmail.com"
let string2 = "Pauline@gmail.com"

if(string1.match(string2)){
    console.log("Email tidak boleh sama")
} else {
    console.log("Berhasil")
}

//lenght()\
const pass = "kru"

if(pass.length != 10 || pass.length < 10){
    console.log("Your password must be 10 character or more")
}
else{
    console.log("Success!")
}


//split
let text = "its a beautiful day?";
const text2 = text.split(" ");
console.log(text2)