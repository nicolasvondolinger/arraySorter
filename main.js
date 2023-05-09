function sortArray(array){
  let number = array[0]; 
  let control;
  for(let i = 0; i<array.lenght; i++){
    for(let j = 0; j < arr.length - i - 1; j++){
	 control = array[j+1]
       arr[j + 1] = arr[j]
 	 arr[j] = control
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
	for(let i = arr.length/2; i<arr.length; i++){
		newArray[count] = array[i]
		count++	
	}
	return newArray.reverse()
}

let array = [10, 9 , 8, 3, 1, 2, 6, 5, 4, 7];
sortArray(array);