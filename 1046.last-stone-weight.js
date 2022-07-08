// Array - Heap (Priority Queue)

/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        let a = stones.pop();
        let b = stones.pop();
        if (a !== b) stones.push(a - b);                     
    }
    return stones.length > 0 ? stones[0] : 0;
};