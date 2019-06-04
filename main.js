let array = [];
input1 = document.querySelector('.first');
plus = document.querySelector('.button');
coutarr = document.querySelector('.button2');
count = document.querySelector('.button3');
div = document.querySelector('.array');
plus.addEventListener('click', function() {
    array.push(input1.value);
});
coutarr.addEventListener('click', function() {
    document.querySelector('.arr').innerHTML = array;
});
count.addEventListener('click', function() {
    let counter = array.map(Number).reduce(function(product, value) { return product * value; }) / array.length;
    document.querySelector('.count').innerHTML = counter;
});