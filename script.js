document.getElementById('btn').addEventListener('click', function() {
  const input = document.getElementById('ip').value;
  const num = Number(input);
  const outputDiv = document.getElementById('output');
  
  function firstPromise(num) {
    return new Promise((resolve) => {
      setTimeout(() => {
        outputDiv.textContent = `Result: ${num}`;
        resolve(num);
      }, 2000);
    });
  }
  
  function secondPromise(num) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num * 2;
        outputDiv.textContent = `Result: ${result}`;
        resolve(result);
      }, 2000);
    });
  }
  
  function thirdPromise(num) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num - 3;
        outputDiv.textContent = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  }
  
  function fourthPromise(num) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num / 2;
        outputDiv.textContent = `Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  }
  
  function fifthPromise(num) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = num + 10;
        outputDiv.textContent = `Final Result: ${result}`;
        resolve(result);
      }, 1000);
    });
  }
  
  firstPromise(num)
    .then(secondPromise)
    .then(thirdPromise)
    .then(fourthPromise)
    .then(fifthPromise)
    .catch(error => {
      console.error('Error:', error);
    });
});