function majorityElement(nums: number[]): number {
    const sortedNum = nums.sort();
    let count = 1;
    for (let i = 0; i < sortedNum.length; i++) {
        if (sortedNum[i] === sortedNum[i + 1]) {
            count++
        }
        if (count > (sortedNum.length / 2)) {
            return sortedNum[i]
        }
    }
};