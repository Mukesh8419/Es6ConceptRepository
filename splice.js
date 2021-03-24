// //Removing Items
// let colors=['green','yellow','blue','purple']
// colors.splice(0,3);
// console.log(colors)//['purple]

//if 2nd parameter is not declared
// let colors=['green','yellow','blue','purple']
// colors.splice(3)
// console.log(colors)//[ 'green', 'yellow', 'blue' ]

// //remove 4first elements & replace them with another
// let schedule=['I','have','a','meeting','tommorrow']
// schedule.splice(0,4,'we','are','going','to','swim');
// console.log(schedule)

// adding item/element:-

let schedule=['I','have','a','meeting','with']
//add 3 new elements to the array
schedule.splice(5,0,'some','clients','tommorrow')
console.log(schedule)