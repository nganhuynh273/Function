// Bài 1
function writeArray(size, min = 0, max = 10) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return arr;
}
console.log(createArray());
