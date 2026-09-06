# Smallest Stable Index I [https://leetcode.com/problems/smallest-stable-index-i/?envType=daily-question&envId=2026-09-06]

# Problem

You are given an integer array nums of length n and an integer k.

For each index i, define its instability score as max(nums[0..i]) - min(nums[i..n - 1]).

In other words:

max(nums[0..i]) is the largest value among the elements from index 0 to index i.
min(nums[i..n - 1]) is the smallest value among the elements from index i to index n - 1.
An index i is called stable if its instability score is less than or equal to k.

Return the smallest stable index. If no such index exists, return -1.

# Explain

They give us the following inputs:

nums → an array of integers
k → an integer

We have to return the smallest stable index i.

So, what is a stable index?

An index i is considered stable if the difference between the maximum value in the left part of the array (nums[0..i]) and the minimum value in the right part (nums[i..n-1]) is less than or equal to k.

In other words, we can calculate the stability of an index as:

stability = max(nums[0..i]) - min(nums[i..n-1])


If:

stability <= k


then i is a stable index, and since we need the smallest stable index, we return it as soon as we find one.

So, we could use the following approach:

for i from 0 to n - 1:
    stability = max(nums[0..i]) - min(nums[i..n-1])

    if stability <= k:
        return i


# Explain II

The previous approach has a time complexity of O(n²) because, for every index i, we would have to scan the left and right parts of the array to find the maximum and minimum values.

To improve this, we can notice that the right-side minimum depends on future elements, so we can precompute all the suffix minimums.

We create an array suffix_min where:

suffix_min[i] = min(nums[i..n-1])

We can build this array from right to left in O(n) time:

suffix_min[n-1] = nums[n-1]

for i from n-2 down to 0:
    suffix_min[i] = min(nums[i], suffix_min[i+1])

For example:

nums        = [3, 1, 5, 2, 4]
suffix_min  = [1, 1, 2, 2, 4]

Now we have the minimum value of the right part for every index.

For the left part, we don't need another array. We can keep a single variable called prefix_max while traversing the array from left to right.

At each index:

prefix_max = max(prefix_max, nums[i])

Now we have both values we need:

prefix_max = max(nums[0..i])
suffix_min[i] = min(nums[i..n-1])

So we can calculate the stability of index i in O(1):

stability = prefix_max - suffix_min[i]

If the stability is less than or equal to k, we immediately return i because we are traversing from left to right, so this is the smallest stable index.

The complete idea is:

1. Precompute suffix minimums → O(n)
2. Traverse from left to right while maintaining prefix maximum → O(n)
3. Check stability at each index → O(1)

Therefore, the total time complexity is O(n).

The space complexity is O(n) because we only store the suffix_min array. We don't need a prefix_max array because we can maintain the maximum using a single variable.

The key optimization is to precompute the information we need from the right, while maintaining the information from the left as we traverse the array.

This gives us O(n) time and O(n) space, instead of O(n²) time.