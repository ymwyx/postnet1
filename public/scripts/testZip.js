
function checkZipCode(input) {
    let reg = /^\d{5}(-?\d{4})?$/;
    if (reg.test(input)) {
        return true;
    }
    return false;
}
