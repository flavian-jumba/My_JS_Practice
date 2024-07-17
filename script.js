
//EXERCISE CHORES 

//1.WALK THE DOGS 
//2.CLEAN THE KITCHEN
//3.TAKE OUT THE TRASH 

//(b)Use of Promises

//PENDING ->RESOLVED or REJECTED
//new promise ((resolve, reject) => {asynchronous code}
//When a asynchrouse fails to do something we should reject whe inside a promise 
function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{ 
            const walked=true;
            if(walked){
             resolve("Walk the dogs out")
            }else{
             reject("You didn't take the dog for a walk ")   
            }
       },5000);
    })
}
function cleanTheKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const cleaned=true
            if(cleaned){
           resolve("Time to clean the kitchen")
        }else{
            reject("You did not clean the kitchen")
        }
        },3000); 
    })
}
function takeOutTrash(){
   return new Promise((resolve, reject) => {
    setTimeout(()=>{
        const trashedOut=false
        if(trashedOut){
        resolve("Time to take out the trash")
    }else{
        reject("Yo didn't take out the trash")
    }  
}, 500);
   })
}
//method chaining 
walkDog().then(value =>{console.log(value);return cleanTheKitchen()})
         .then(value =>{console.log(value);return takeOutTrash()})
          .then(value =>{console.log(value);console.log("You finished all the chores")}) 
        .catch(error =>console.error(error));
          //So like literally it means that the first code 
          //will run to the next if it is only resolved,when 
          //rejected the next code does't show up 
          
// walkDog()
// .then((value) => {
//   console.log(value);
//   return cleanTheKitchen();
// })
// .then((value) => {
//   console.log(value);
//   return takeOutTrash();
// })
// .then((value) => {
//   console.log(value);
//   console.log("You finished all the chores");
// })
// .catch((error) => {
//   console.error(error);
// });