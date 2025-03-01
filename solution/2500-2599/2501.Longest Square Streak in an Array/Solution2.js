function longestSquareStreak(nums) {
    const set = new Set(nums);
    const cache = new Map();
    const dfs = x => {
        if (cache.has(x)) return cache.get(x);
        if (!set.has(x)) return 0;
        cache.set(x, 1 + dfs(x ** 2));
        return cache.get(x);
    };

    for (const x of set) dfs(x);
    const ans = Math.max(...cache.values());

    return ans > 1 ? ans : -1;
}
