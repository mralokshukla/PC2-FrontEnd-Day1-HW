
var myArr = ["James", "Jack", "Flora", "Mikhil"];
var arrElement = document.getElementById('arrList');

//display length of each array element in a separate line in the browser


myArr.forEach(function(item){
  arrElement.innerText+=` ${item.length} \n`
});

