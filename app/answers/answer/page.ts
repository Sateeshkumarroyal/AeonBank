/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

export default function twoSum(numbers: number[], target: number): number[] {
    let left = 1, right = numbers.length;

    while (left < right) {
        const sum = numbers[left - 1] + numbers[right - 1];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

// If no solution is found (although the problem guarantees one)
    return [];
}

console.log(twoSum([4, 11, 17, 25], 21));
console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
console.log(twoSum([-1, 0], -1));