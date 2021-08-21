//-function pada ES5
function doSomething(){
    console.log("do Something")
}

doSomething()

function cariData(id,text){

    console.log(text)
    console.log(`cari dengan id = ${id}`)
}
cariData(10023,"Hello")


// const perkalian = function(angka1,angka2){
// const hasil = angka1*angka2
// console.log(hasil)
// }
// perkalian(3,10)

//menggunakan return
const perkalian = function(angka1,angka2){
    const hasil = angka1*angka2
    return hasil
    }
console.log(perkalian(3,10))

//-function pada ES6 dengan return
const penambahan =(angka1,angka2)=> {
    const hasil = angka1+angka2
    return hasil
}

console.log(penambahan(12,5))
//-Method
//memanggil function dalam object (ES5)
const perintah = {
    name: "Udin" //value string
    makan: function(){ // value function
        console.log(this.minum())//memanggil function ke dalam function dalam 1 object(perintah)
        return "Makan"
    },
    minum: function(){
        return "Minum"
    }
    
    main: () => { //memanggil function dalam object (ES6)
        return "main"
    }

    perkalian: function(num1,num2){
        return num1*num2
    }
}
console.log(perintah.makan())
console.log(perintah.perkalian(5,10))

