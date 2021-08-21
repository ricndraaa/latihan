

   let bahasaIndo= 80
   let bahasaInggris= 75
   let math= 85
   let ipa= 0


if(bahasaIndo !=0 && bahasaInggris !=0 && math !=0 && ipa !=0){

    const sum = bahasaIndo + bahasaInggris + math + ipa
    console.log("Total nilai: "+ sum)
    
    let avg = sum/4
    console.log("Rata Rata = "+ avg)

    if (avg>= 90 && avg<=100 ){
        console.log("Nilai A")
    } else if (avg>=80 && avg<=89){
        console.log("Nilai B")
    } else if(avg>=70 && avg<=79){
        console.log("Nilai C")
    } else if(avg>=60 && avg<=69){
        console.log("Nilai D")
    } else {
        ("Nilai E") 
    }

} else {
    (console.log("Input Tidak Boleh 0"))

}