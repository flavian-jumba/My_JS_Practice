
//EXERCISE CHORES 

//1.WALK THE DOGS 
//2.CLEAN THE KITCHEN
//3.TAKE OUT THE TRASH 

//(b)Use of Promises

//PENDING ->RESOLVED or REJECTED
//new promise ((resolve, reject) => {asynchronous code}

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{ 
             resolve("Walk the dogs out")
       },5000);
    })
}
function cleanTheKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
           resolve("Time to clean the kitchen")
        },3000); 
    })
}
function takeOutTrash(){
   return new Promise((resolve, reject) => {
    setTimeout(()=>(
        resolve("Time to take out the trash")
    ), 500);
   })
}
walkDog(()=>{
    cleanTheKitchen(()=>{
        takeOutTrash(()=>{console.log("You've finished all the chores")})
    })
})
//method chaining 
walkDog().then(value =>{console.log(value);return cleanTheKitchen()})
         .then(value =>{console.log(value);return takeOutTrash()})
          .then(value =>{console.log(value);console.log("You finished all the chores")}) 