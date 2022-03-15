let str = '';

function isPrime(number) {
    for (let n = 2; n < number; n++) {
        let flag = false;
        for (let k = 2; k < n; k++) {
            if (n % k == 0) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            str += n + ', ';
        }

    }
}
isPrime(10000);
console.log(str);
