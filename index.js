var even = [2, 4, 6, 8]

function iterativeLog(array){

  array.forEach((element, index, array) => {
    debugger;
    console.log(`${index}` + `:` + `${element}`);
  })

}
interativeLog(even);
