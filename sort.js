//Built in function sort
//sort hanya bisa mengurutkan array element int dan string

const buah = ["semangka","apel","nanas",'melon']

console.log(buah.sort())

const angka = [3,8,3,9,5]

console.log(angka.sort())

const angka2 =[110,95,14,22,234]

console.log(angka2.sort((a,b)=> b-a)) //mengurutkan angka dengan trik