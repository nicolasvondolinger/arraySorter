function sortArray(array){
  let control = array[0]
  for(let i = 0; i<array.length; i++){
    for(let j = 0; j < array.length - i - 1; j++){
	 if(array[j+1] < array[j]){
	    control = array[j+1]
            array[j + 1] = array[j]
 	    array[j] = control    
	 }
    }
  } 
  let newArray = invertArray(array)
  let it = 0;
  for(let i = array.length/2; i<array.length; i++){
  	array[i] = newArray[it]
	it++;
  }
  console.log(array)
}

function invertArray(array){
	let newArray = [], count = 0;
	for(let i = array.length/2; i<array.length; i++){
		newArray[count] = array[i]
		count++	
	}
	return newArray.reverse()
}

let array = [10, 9 , 8, 3, 1, 2, 6, 5, 4, 7];
sortArray(array);
