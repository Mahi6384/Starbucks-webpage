const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four =document.querySelector('.four');
const big = document.querySelector('.big-img');
   
one.addEventListener('click', function(){
big.src = one.src ;

})


two.addEventListener('click', function(){
console.log(one.width);
big.src = two.src ;
})


three.addEventListener('click', function(){
big.src = three.src ;
})


four.addEventListener('click', function(){
big.src = four.src ;
})


