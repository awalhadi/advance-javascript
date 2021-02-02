const nums = [1,2,3,4,5,6,7,8, -4,-3, -34];
for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (number < -4) {
        break;
    }
    console.log(number);
}

console.log("continue");
for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (number > 0) {
        continue;
    }
    console.log(number);
}