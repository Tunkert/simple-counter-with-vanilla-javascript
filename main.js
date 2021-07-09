let x = 0;

const increment = document.getElementById('increment');

const decrement = document.getElementById('decrement');

const counter = document.getElementById('counter');

increment.addEventListener('click', function(){
  x += 1;
  
  counter.innerText = `${x}`;
});

decrement.addEventListener('click', function(){
  x -= 1;
  
  counter.innerText = `${x}`;
})