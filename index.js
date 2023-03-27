// string and array
let data1 = 1
let data2 = "1.25"
console.log(data1, typeof data1)
console.log(data2, typeof data2)

let data3 = data1 + parseFloat(data2)
console.log(data3, typeof data3)

// Array
let data = ["one", 2, true]
console.log(data[2], typeof data[2])

// object
let user = {
    name : "jul",
    faculty : "FKEKK",
    phone : {
        office :"01127293392",
        mobile : "0196050002"
    },
    email : "zzulhkim2501@gmail.com"

}
console.log(user.phone.mobile)