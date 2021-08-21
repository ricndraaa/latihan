//built in method foreach
const cars = ["BMW","Tesla","Toyota","Porsche"]

// cars.foreach(function(e){
//     console.log(e)
// })

cars.forEach(function(e,i){
    console.log(`${e},${i}`)
})