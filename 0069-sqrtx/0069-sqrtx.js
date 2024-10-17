/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // Method 1
    // let i = 1;

    // while(i * i <= x){
    //     i++
    // }
    // return (i - 1)

    //Method 2

    if (x === 0) return 0; 
    
    let l = 1;
    let h = x;
    let ans = 0;

    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        let squr = mid * mid;

        if (squr === x) {
            return mid;  
        } else if (squr < x) {
            ans = mid;   
            l = mid + 1;
        } else {
            h = mid - 1; 
        }
    }

    return ans;
};