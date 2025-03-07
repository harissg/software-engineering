function twoSum(inputs, target) {
    var mappedValues = new Map();

    for(let i = 0; i <= inputs; i++) {
        let complement = target - inputs[i];
        if(mappedValues.has(complement)){
            mappedValues.set(complement, [inputs[i], i]);
        }
    }

}
