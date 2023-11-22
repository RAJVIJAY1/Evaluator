const inputBox = document.querySelector('.inputBox');
const clearBtn = document.querySelector('.clearBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const equleBtn = document.querySelector('.equleBtn');

const calculation = (e) => {
  inputBox.value = inputBox.value += e;
}

clearBtn.onclick = () => {
  inputBox.value = '';
}

deleteBtn.onclick = () => {
  inputBox.value = inputBox.value.slice(0, -1);
}
equleBtn.onclick = () => {
  if (inputBox.value.length >= 1){
    try{
      inputBox.value = eval(inputBox.value);
    }
    catch(err){
      alert('Please Enter valid Input');
    }
  }
  else{
    alert('Please Add Some Value First');
  }
}