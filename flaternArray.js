/**
 * Flatten an array
 */
const arr =[1,2,3,{name: "Sabir"},true, [4,[5,6]],[7,8]]

function flattenArray(arr){
    const result = [];
    for(const item of arr){
        if(Array.isArray(item)){
            result.push(...flattenArray(item));
        }else{
            result.push(item);
        }
    }
    return result;      
}
console.log(flattenArray(arr)); // [1,2,3,4,5,6,7,8]