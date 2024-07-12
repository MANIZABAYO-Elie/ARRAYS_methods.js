// understanding arrays

let arrays = [20, 30, 40, 50,90,55,60,25]
console.log(arrays.length);
console.log(arrays[1]);
let sum =0;
for(let i=0; i<arrays.length ;i++){
    sum += arrays[i];
}
console.log(sum);
let average = sum/arrays.length
console.log(average);
const numbers =[1,2,3,4,5,6,7,8,9,10]
const filteredNumbers= numbers.map((number,index)=>{
    if(index<3){
return number
    }
})
console.log(filteredNumbers);
// filter arrays

const values =[13,28,74,80,90,29,40,30,37,35,43]
const even = values.filter(getEvenNumber)
function getEvenNumber(number){
    if (number%2===0) {
        return number;
        
    }
}
console.log(even);
// arrays as objects
const students =[
{ name:'James',
    age: 25,
    sex: 'M' ,
 }],
// { name:'Jane',
//     age: 15,
//     sex: 'F' ,
// },
// { name:'Edward',
//     age: 30,
//     sex: 'M' ,
// },
// { name:'Mary',
//     age: 27,
//     sex: 'F' ,
// }
// ];
// const adults = students.filter(student=>student>=18)
// console.log(adults);

const car = {type:"Fiat", 
               model:"500", 
               color:"white"
            };
const colors= ["white","yellow","black"]
console.log(colors.length);