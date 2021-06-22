var arr = [2,10,5,20,88,1,8,13];

var maxNumber = function (arr){
    var max=0;
    for(i=0;i<arr.length;i++){
        if(max<arr[i])
            max = arr[i];
    }
    return max;
}
var minNumber = function (arr){
    var min=999;
    for(i=0;i<arr.length;i++){
        if(min>arr[i])
            min = arr[i];    
    }
    return min;
}
document.write('Max Element '+maxNumber());
document.write('Min Element '+minNumber());
