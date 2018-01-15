function detVowel(word) {
  var newWord = word.split('');
 
  var vowels = wordLoop(word,newWord,function(arr1,arr2,n,arr3) {
    arr3.push(arr1[n]);
  });  //console.log(vowels);
 
  var leng = vowels.length-1;  //console.log('vowels: '+ leng);
 
  wordLoop(newWord,vowels,function(arr,arr2,n,arr3) {  //console.log(arr2[leng]);
    arr[n] = arr2[leng];
    leng--;
  });
 
  var product = '';
  for (var i = 0; i < word.length; i++) {
    product += newWord[i];
  }
  console.log(product);
}

function wordLoop(array,array2,fn) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' || array[i] === 'u') {
      fn(array,array2,i,newArray);
    }
  }
  return newArray;
}

detVowel('alligators');