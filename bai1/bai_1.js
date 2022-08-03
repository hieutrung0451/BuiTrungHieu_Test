function showPrimeNumbers() {
  let start = document.querySelector("#start").value;
  let end = document.querySelector("#end").value;
  let result = document.querySelector("#result");

  result.innerHTML = "Kết quả: ";


  for (let i = start; i <= end; i++) {
    
    let flag = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = false;
        break;
      } 
    }

    if (flag) {
      result.insertAdjacentHTML("beforeend", i + " ");
    } 
  }
}

showPrimeNumbers();
