const testVar = {
  year:12,
  result:'w'
}

function testFunc() {
  return "hi"
}
function superbowlWin(arr){
  for(let element of arr){
    if(element.result ==="W"){
      return arr.year
    }
    alert('nothing like this found')
  }
}