
function isLegalBarcode(input) {
    return /^[|: ]+$/.test(input);
}

function isLegalFrame(input) {
    return ((input[0] === '|') && (input[1] === ' ') && (input[input.length - 2] === ' ') && (input[input.length - 1] === '|'));
}

function isLegalLength(input) {
    let arr=input.split(' ');

    let arr1=arr.slice(1,arr.length-1);
    if (arr1.filter(item=>item.length !== 5).length != 0)
        return false;
    return true;
}

function isWholeLegalLength(input) {
    return !(input.length !== 39 && input.length !== 63);

}
