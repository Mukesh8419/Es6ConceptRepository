// const nos=[100,300,500,70];
// // const sum=nos.reduce((accul,val)=>accul+val,0)
// const sum=nos.reduce((accul,val)=>accul+val)

// console.log(sum)

// [0,1,2,3,4].reduce(function(accul,currentValue,currentIndex,array) {
//     return accul+currentValue;
    
// })
const euros=[29.76,41.85,46.5];
const avg=euros.reduce((total,amount,index,array)=>{
    total +=amount;
    if( index === array.length-1){
        return total/array.length;
    }
    else{
        return total;
    }
})
console.log(avg)