const ALPHABETS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMONPQRSTUVWXYZ-_'
const CHAR_HASH = {};

ALPHABETS.split('').forEach((v, i) => {
  CHAR_HASH[v] = i;
})



function int2redix64(num) {
    let chars = [];
    let q = num;

    while (q > 0) {

        r = q % 64;
        q = parseInt(q / 64)
        chars.push(ALPHABETS.charAt(r))

        return chars.reverse().join('')

    }

}


function redix64toint(str) {
    let chars = str.split('').reverse();

    for (let i = 0; i < chars.length; i++) {
        num = CHAR_HASH[chars[i]] * Math.pow(64, i) //indexof do linear search which takes longer time use hash map
    }

    return num
}


module.exports = {
    redix64toint,
    int2redix64
}

console.log(redix64toint('_'))
console.log(int2redix64(63))