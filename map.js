//built in function map
//map ini merubah isi array

const cars = ["BMW","Tesla","Toyota","Porsche"]


const dataBaru = cars.map(function(e,i){
    return`${e}, ${i}`
})

console.log(dataBaru)

//ditambahkan if

const dataBaru2 = cars.map(function(e,i){
    if(e === "BMW"){
        return "Mobil BMW"
    }else {
        return e
    }
})

console.log(dataBaru2)