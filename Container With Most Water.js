/**
 * @param {number[]} height
 * @return {number}
 * 
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 */

    var maxArea = function(height) {

        const n= height.length;
        let xAxis=n-1;
        let maxArea = 0;
        let left= 0, right= n-1;

        while(left < right){

            if(height[left] > height[right]){
                maxArea = maxArea < (xAxis * height[right]) ?  xAxis * height[right] : maxArea
                xAxis--;
                right--;
                continue;
            }
            if(height[left] < height[right]){
                maxArea = maxArea < (xAxis * height[left]) ?  (xAxis * height[left]) : maxArea
                xAxis--;
                left ++;
                continue;
            }
            if(height[left] === height[right]){
                maxArea = maxArea < (xAxis * height[left]) ?  (xAxis * height[left]) : maxArea
                xAxis--;
            }
            left++;
        }

        return maxArea;

    };


console.log(maxArea([1,2,4,3]));