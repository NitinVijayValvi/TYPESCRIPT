var arraysort = (arr:number[]):number[]=>{
	var length = arr.length;
	
	for(let i = 0; i< length;i++){
		for(let j = 0; j< length; j++){
		
			if(arr[j] > arr[j+1]){
				[arr[j],arr[j+1]] =[arr[j+1],arr[j]];
			}
		
		}
	
	}
	return arr;

}

console.log(arraysort([11,2,15,34,22,27,9]));

//console.log(arraysort)