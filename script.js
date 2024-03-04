let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");
let input4 = document.querySelector(".input4");
let select = document.querySelector(".sel");
let btn = document.querySelector(".btn");
let blockst = document.querySelector(".blockst");
let del = document.querySelector(".del-button");
let op1 = document.querySelector(".op1");
let op2 = document.querySelector(".op2");
let op3 = document.querySelector(".op3");
let op4 = document.querySelector(".op4");

btn.addEventListener("click", () => fanc());
function fanc() {
  if (select.value === "visa") {
    if (!input1.value && !input2.value && !input3.value && !input4.value) {
      alert("Пустой Написать Нельзя");
      return;
    } else if (!input1.value || input1.value.trim() === "") {
      alert("Напишите Name");
      input1.value = "";
      return;
    } else if (!input2.value || input2.value.trim() === "") {
      alert("Напишите Card number");
      input2.value = "";
      return;
    } else if (!input3.value || input3.value.trim() === "") {
      alert("Напишите Expiry date");
      input3.value = "";
      return;
    } else if (!input4.value || input4.value.trim() === "") {
      alert("Напишите Cvv");
      input4.value = "";
      return;
    }
    blockst.innerHTML += `
    <div class="blo">
    <img class="img" src="./img/img/visa.png" alt="img">
    <div class = "h33">
    
    <h3 class = "h1"> name :${input1.value}</h3>
    <h3 class = "h2"></br>${input2.value}</h3>
    
    <h3 class = "h4"> Cvv :  ${input4.value}</h3>
    <h3 class = "h3"> Date : </br>${input3.value}</h3>
    </div>
    </div>
    `;
  } else if (select.value === "mbank") {
    if (!input1.value && !input2.value && !input3.value && !input4.value) {
      alert("Пустой Написать Нельзя");
      input.value = "";
      return;
    } else if (!input1.value || input1.value.trim() === "") {
      alert("Напишите Name");
      input1.value = "";
      return;
    } else if (!input2.value || input2.value.trim() === "") {
      alert("Напишите Card number");
      input2.value = "";
      return;
    } else if (!input3.value || input3.value.trim() === "") {
      alert("Напишите Expiry date");
      input3.value = "";
      return;
    } else if (!input4.value || input4.value.trim() === "") {
      alert("Напишите Cvv");
      input4.value = "";
      return;
    }
    blockst.innerHTML += `
    <div class="push">
    <img class = "img2" src="./img/img/1.png" alt="img"> 
    <div class = "h33 h44">
    <h3 class = "h1 hh1 hhh1"> name : ${input1.value}</h3>
    <h3 class = "hhh2"></br> ${input2.value}</h3>
    <h3 class = "hh4 hhh3 "> Cvv :  ${input4.value}</h3>
    <h3 class = "hh3" hhh3> Date : ${input3.value}</h3>
    </div>
    </div>
    `;
  } else if (select.value === "Optima") {
    if (!input1.value && !input2.value && !input3.value && !input4.value) {
      alert("Пустой Написать Нельзя");
      input.value = "";
      return;
    } else if (!input1.value || input1.value.trim() === "") {
      alert("Напишите Name");
      input1.value = "";
      return;
    } else if (!input2.value || input2.value.trim() === "") {
      alert("Напишите Card number");
      input2.value = "";
      return;
    } else if (!input3.value || input3.value.trim() === "") {
      alert("Напишите Expiry date");
      input3.value = "";
      return;
    } else if (!input4.value || input4.value.trim() === "") {
      alert("Напишите Cvv");
      input4.value = "";
      return;
    }
    blockst.innerHTML += `
    <div class="push">
    <img class = "img2" src="./img/img/optima-gold.png" alt="img"> 
    <div class = "h33 h44">
    <h3 class = "h1 hh1 hhh1"> name : ${input1.value}</h3>
    <h3 class = "hhh2"></br> ${input2.value}</h3>
    <h3 class = "hh4 hhh3 "> Cvv :  ${input4.value}</h3>
    <h3 class = "hh3" hhh3> Date : ${input3.value}</h3>
    </div>
    </div>
    `;
  }
  read();
}

function key() {
  input1.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.keyCode === "Enter") {
      fanc();
    }
  });
  input2.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.keyCode === "Enter") {
      fanc();
    }
  });
  input3.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.keyCode === "Enter") {
      fanc();
    }
  });
  input4.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.keyCode === "Enter") {
      fanc();
    }
  });
}
key();

function addDash(input2) {
  let format = /[^0-9]/g;
  let cardNumber = input2.value.replace(format, "");
  if (cardNumber.length > 0) {
    cardNumber = cardNumber.match(new RegExp(".{1,4}", "g")).join(" - ");
  }
  input2.value = cardNumber;
}

function it3(input3) {
  let format = /[^0-9]/g;
  let cardNumber = input3.value.replace(format, "");
  if (cardNumber.length > 0) {
    cardNumber = cardNumber.match(new RegExp(".{1,2}", "g")).join(". ");
  }
  input3.value = cardNumber;
}

input1.addEventListener("click", (e) => {
  op1.style.transition = ".6s";
  op1.style.fontSize = "13px";
  op1.style.marginTop = "-10px";
});
input2.addEventListener("click", (e) => {
  op2.style.transition = ".6s";
  op2.style.fontSize = "13px";
  op2.style.marginTop = "-10px";
});
input3.addEventListener("click", (e) => {
  op4.style.transition = ".6s";
  op4.style.fontSize = "13px";
  op4.style.marginTop = "-10px";
});
input4.addEventListener("click", (e) => {
  op3.style.transition = ".6s";
  op3.style.fontSize = "13px";
  op3.style.marginTop = "-10px";
});

del.addEventListener("click", (e) => {
  blockst.innerHTML = "";
});
