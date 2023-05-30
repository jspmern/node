function SumofArr(arr){
    // sum=0;
    // for(ele of arr){
    //     sum+=ele;
    // }
    // return sum;
    return arr.reduce((accum,elem)=>accum+elem,0)
}
function findMax(arr){
    return Math.max(...arr)
}
function findMin(arr){
    return Math.min(...arr)
}
module.exports={SumofArr,findMax,findMin};