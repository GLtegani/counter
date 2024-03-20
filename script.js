// VARIABLES
let number = document.querySelector('.current-number');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');
const increaseBtn = document.getElementById('increase-btn');

// FUNCTIONS
resetBtn.onclick = (event) => {
  event.preventDefault();

  number.innerHTML = 0;
}

increaseBtn.onclick = (event) => {
  event.preventDefault();

  number.innerHTML++;
}

decreaseBtn.onclick = (event) => {
  event.preventDefault();

  if(number.innerHTML <= 0 ) {
    number.innerHTML = 0;
  } else {
    number.innerHTML--;
  };
};
