const array1 = ["Mangga","Melon","Jeruk","Kelapa"]
const array2 = [...array1,"Apel","Semangka"]

console.log(array2)


const dataLama={
    id:1,
    name: "Udin",
    alamat: "Jakarta"
}

const dataBaru ={
    ...dataLama, //name di dataLama akan ke replace dengan name di data baru, syarat spreadop harus paling atas
    name: "Heru",
    noTelp: "08932121",
    Hobbi: "Game"
}
console.log(dataBaru)