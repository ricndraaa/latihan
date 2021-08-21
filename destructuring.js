const bio = {
    name: "Aji",
    alamat: "Jakarta",
    noTelp: "0812345"

}

//console.log(bio.name) <- cara lama

 //destructuring untuk object
 const {name,alamat} = bio // -> const name = biodata name; const alamat = biodata.alamat

 console.log(name)

 //destructuring untuk array

 const arr = ["Semangka","Melon","Apel"]

 const [data1,data2,data3] = arr

 console.log(data2)