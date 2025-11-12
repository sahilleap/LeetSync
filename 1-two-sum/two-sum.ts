function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        let firstValue = nums[i]
        for (let j = 1; j < nums.length; j++) {
            let secondValue = nums[j]
            if (((firstValue + secondValue) === target) && (i !== j)) {
                return [i, j]
            }
        }
    }
};