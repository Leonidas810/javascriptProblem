#First aproach
class Solution:
    def firstStableIndex(self, nums: list[int], k: int) -> int:
        for i in range(len(nums)):
            currentStable = max(nums[0:i+1]) - min(nums[i:])
            
            if currentStable <= k:
                return i
        
        return -1