
//EXERCISE CHORES 

//1.WALK THE DOGS 
//2.CLEAN THE KITCHEN
//3.TAKE OUT THE TRASH 

//use of callbacks 

function walkDog(Callback){
    setTimeout(()=>{
         console.log("Walk the dogs out") 
         Callback()
    },5000);
}
function cleanTheKitchen(Callback){
    setTimeout(()=>{
        console.log("Clean the kitchen")
        Callback()
    },3000);
}
function takeOutTrash(Callback){
    setTimeout(()=>(
        console.log("Time to take out the trash")
        Callback()
    ), 500);
}
walkDog(()=>{
    cleanTheKitchen(()=>{
        takeOutTrash(()=>{console.log("You've finished all the chores")})
    })
})
