const ALPHABETS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMONPQRSTUVWXYZ-_'
const CHAR_HASH = {};

ALPHABETS.split('').forEach((v, i) => {
  CHAR_HASH[v] = i;
})



function int2redix64(num) {
    let chars = [];
    let q = num;
    
    while (q > 0) {

        let r = q % 64;
        //console.log(r +":"+ ALPHABETS.charAt(r) +num)
        chars.push(ALPHABETS.charAt(r))
        q = parseInt(q/64)
        console.log(r +":"+ ALPHABETS.charAt(r) + num + ": " + q)
        
       
    }
    return chars.reverse().join("")

}


function redix64toint(str) {
    let chars = str.split('').reverse();
    let num = 0;
    for (let i = 0; i < chars.length; i++) {
        console.log(CHAR_HASH[chars[i]]  +":"+ chars[i])
        num += CHAR_HASH[chars[i]] * Math.pow(64, i) //indexof do linear search which takes longer time use hash map
    }

    return num
}


module.exports = {
    redix64toint,
    int2redix64
}

console.log(redix64toint('Iu1zPp'))
console.log(int2redix64(47748365529))