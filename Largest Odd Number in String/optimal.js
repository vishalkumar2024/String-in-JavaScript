function largestOddNumber(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 === 1) {
            return num.slice(0, i + 1)
        }
    }
    return ''
}
let num = "925346"
console.log(largestOddNumber(num))