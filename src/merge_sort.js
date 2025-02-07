#!/usr/bin/env node 

const merge = (mergeLeft, mergeRight) => {
    const sortedArr = [];
    let i = 0;
    let j = 0;
    // console.log("Merging: " + mergeLeft + " and " + mergeRight);
    while(j< mergeRight.length) {
        if(mergeLeft[i] < mergeRight[j]) {
            sortedArr.push(mergeLeft[i]);
            if(i === mergeLeft.length - 1) {
                for(let k = j; k < mergeRight.length; k++) {
                    sortedArr.push(mergeRight[k]);
                }
                return sortedArr;
            }
            i++;
        }
        else {
            sortedArr.push(mergeRight[j]);
            if(j === mergeRight.length - 1) {
                for(let k = i; k < mergeLeft.length; k++) {
                    sortedArr.push(mergeLeft[k]);
                }
                return sortedArr;
            }
            j++;
        }
    }
}

const mergeSort = (arr) => {
    if(arr.length === 1) {
        return arr;
    }
    // break up into left and right half
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0,center);
    const right = arr.slice(center, arr.length);
    //console.log 
    // console.log("left: " + left);
    // console.log("right: " + right);
    const mergeLeft = mergeSort(left);
    // console.log(mergeLeft);
    const mergeRight = mergeSort(right);
    // console.log(mergeRight);
    return merge(mergeLeft, mergeRight);    

}
console.log(mergeSort([5,2,1])); 
console.log(mergeSort([5,2,1,3])); 

console.log(mergeSort([1, 3, 2, 4, 5, 7, 6, 8, 9, 0])); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
