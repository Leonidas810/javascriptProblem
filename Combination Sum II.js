/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

    candidates.sort((a, b) => a - b)
    let combinations=[]
    let sum=0;
    let root=0;
    let path=[];
    let aux=1;


    const searchCombination=(combinations,path,sum,i)=>{
        if(sum>target){
            if(i===candidates.length){
                root++;
                aux=0;
            }
            aux++;
            i=root;
            path=[candidates[i]];
            sum=candidates[i];
            i+=aux;
        }
        if(sum===target) {
            !combinations.some(c => c.length === path.length && c.every((val, index) => val === path[index])) && combinations.push(path.slice());
            path.pop()
            sum-=candidates[i-1];
            searchCombination(combinations,path,sum,i);
        }

        //Push Element
        path.push(candidates[i])
        sum+=candidates[i];
        i++;
        searchCombination(combinations,path,sum,i);
    }



    searchCombination(combinations,path,sum,0);
};




combinationSum2([10,1,2,7,6,1,5],8);