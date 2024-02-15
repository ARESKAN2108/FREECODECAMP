function chunkArrayInGroups(arr, size) {
    let subarray = [];
    for(let i = 0; i < arr.length; i += size) {
        let chunk = arr.slice(i, i + size);
        subarray.push(chunk);
    }
    return subarray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));