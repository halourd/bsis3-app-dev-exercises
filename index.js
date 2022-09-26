function getHighestNum(a, b, c, d, e){
    var high = arguments[0];
    var low = arguments[0];

    for(var i=0;i < arguments.length;i++){
        if(arguments[i] > high){
            high = arguments[i];
        }else{
            if(arguments[i] < low){
                low = arguments[i];
            }
        }
        // console.log("Iteration: " + i + " High: "+high+" Low: "+low) //FOR DEBUGGING ONLY 
    }
    
    console.log("==> 5 Params: Get highest and lowest number.");
    console.log("   HIGH => "+high);
    console.log("   LOW => "+low);
}


function getHighestNumArr(arr){
    let sorted = arr.sort(function(a, b){return a - b});
    var lowest = sorted[0];
    var highest = sorted[sorted.length-1];
    
    console.log("==> Array: Get highest and lowest number.");
    console.log("   Highest: "+ highest);
    console.log("   Lowest: "+ lowest);

}

function is_leap_year(year){
    let answer = year % 4 == 0 ? true : false;
    return answer;
}


getHighestNum(2, 4, 1, 6, -31);
var arr1 = [9, 1, 8, 2, 7, 3, 6, 4, 5, 4, 2, 0, 2, 89, 7, 7, 3];
getHighestNumArr(arr1);

console.log("Is Leap Year? : "+ is_leap_year(2024))