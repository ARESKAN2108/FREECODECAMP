function bouncer(arr) {
    const array = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]) {
            array.push(arr[i]);
        }
    }
    return array;
}

console.log(bouncer([7, "ate", "", false, 9]));