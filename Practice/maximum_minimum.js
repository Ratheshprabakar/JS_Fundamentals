var arr = [2,10,5,20,88,1,8,13];
maximumMinimum(arr);

function maximumMinimum(arr){
    var max=0,min=999;
    for(i=0;i<arr.length;i++){
        if(max<arr[i])
            max = arr[i];
        if(min>arr[i])
            min = arr[i];   
    }
    document.write('Maximum Element '+max +'<br/>');
    document.write('Minimum Element '+min +'<br/>');
}