// VARIABLES
let number = document.querySelector('span');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');

// FUNCTIONS

const numberStyles = () => {

  if(number.textContent < 0) {

    number.style.color = 'red';

  } else if(number.textContent == 0) {

    number.style.color = 'rgb(21, 21, 184)';

  } else {

    number.style.color = 'green';

  };
};

resetBtn.onclick = () => {
  
  number.textContent = 0;
  numberStyles();

}

increaseBtn.onclick = () => {

  number.textContent++;
  numberStyles();
  
}

decreaseBtn.onclick = () => {

  number.textContent--;
  numberStyles();

};


