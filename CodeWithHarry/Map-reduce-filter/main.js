// const coding=["js","ruby","java","c","c++"]
// const values= coding.forEach((e)=>{
//   console.log(e);
//   return item
// })
// console.log(values)

// let myNums = [1,2,3,4,5,6,7,8,9,10]
// let newNums = myNums.filter((e)=>{ return e>5
// })
// console.log(newNums)

// const books = [
//   { title: "book one", genre: "romance", publish: 1995, edition: 2000 },
//   { title: "book two", genre: "romance", publish: 1990, edition: 2005 },
//   { title: "book three", genre: "thriller", publish: 1995, edition: 2010 },
//   { title: "book four", genre: "mystery", publish: 2000, edition: 2015 },
//   {
//     title: "book five",
//     genre: "History",
//     publish: 1985,
//     edition: 2001,
//   },
//   { title: "book six", genre: "fantasy", publish: 1978, edition: 1999 },
//   { title: "book seven", genre: "biography", publish: 1988, edition: 2003 },
//   { title: "book eight", genre: "self-help", publish: 1992, edition: 2007 },
//   { title: "book nine", genre: "adventure", publish: 2003, edition: 2018 },
//   { title: "book ten", genre: "drama", publish: 1981, edition: 2004 },
//   { title: "book eleven", genre: "horror", publish: 1998, edition: 2012 },
// ];

// let userBooks =books.filter((bk)=> bk.publish ==="History")
// userBooks=books.filter((bk)=>{
//    return bk.publish>1990 && bk.genre==="romance"
// })
// console.log(userBooks);


const myNumbers=[1,2,,3,4,5,6,7,8,9,10]
//const newNumbers=myNumbers.map((num)=>num+10)


//multiple chaining
const newNumbers= myNumbers
                          .map((num)=>num*10) 
                          .map((num)=>num+1)
                          .filter((num)=>num>50)
console.log(newNumbers)

// reduce method
const num=[1,2,3]
let output=num.reduce(function(acc,currVal){
  console.log(`acc:${acc} and currVal: ${currVal}`)
  return acc+currVal
},0)
console.log(output)

const shopingCard=[
  {
    itemName:"js course",
    price:2999
  },
  {
    itemName:"python",
    price:4999
  },
  {
    itemName:"Data science",
    price:5999
  },
  {
    itemName:"web development",
    price:4999
  },
]
let output1 = shopingCard.reduce((acc,item)=>{return acc+item.price},0)
console.log(output1)


console.log("thanks for watching...")