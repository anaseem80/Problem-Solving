/*

Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

*/

/*

1 - get the calculation of two ip addresses by minus from each other
2 - I get string with ip address seperated by comma
2 - should make sum and loop through the each string after converting it into a array and at the end convert it into string

*/

function ipConvert(ip){
    const convertedIP = ip.split(".").map(num => Number(num))
    
    return (
        convertedIP[0] * 256 ** 3 +
        convertedIP[1] * 256 ** 2 +
        convertedIP[2] * 256 +
        convertedIP[3]
    )
}

const ipsBetween = (start, end) => ipConvert(end) - ipConvert(start)

console.log(ipsBetween("20.0.0.10", "20.0.1.0"))