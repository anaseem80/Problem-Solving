/*

Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.
*/

/**
 * first check if there are any nested array -> recursion ?
 * Remove any item inside the array and then convert the array into string and then compare
 * if the array doesn't have any index so will just compare without looping
*/

Array.prototype.sameStructureAs = function (other) {
    if(!isArray(other) || !isArray(this)) return false;

    if (this.length !== other.length) return false;

    for (let i = 0; i < this.length; i++) {
        const el1 = this[i];
        const el2 = other[i];

        if (Array.isArray(el1) && Array.isArray(el2)) {
            if (!el1.sameStructureAs(el2)) return false;
        }
        else if (Array.isArray(el1) !== Array.isArray(el2)) {
            return false;
        }
    }

    return true;
};

console.log([1, 1, [5]].sameStructureAs([2, 2, [2]]))