// built in function map filter
//seperti search, berbeda dengan maps
const cars = ["BMW","Tesla","Toyota","Porsche"]

const dataBaru2 = cars.filter(function(e,i){
    if(e === "BMW"){
        return e 
    }
})

console.log(dataBaru2)