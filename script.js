
let count = 0
let countEl = document.getElementById("count-el")
console.log(countEl)
countEl.innerText = "0 people entered" 
let saveEl = document.getElementById("save-el")
let string1 = "Pevious Entries: "




function increment() {
	
	let randomNumber = Math.floor(Math.random() * 1000) + 1;

	count = count + randomNumber
	
    countEl.innerText = count + " people entered" 
	
}


function save() {
    string1 = string1 + count + "-"
	document.getElementById("save-el").textContent = string1
	count = 0
    countEl.innerText = count + " people entered"

}


async function waitOneSecond() {
  await new Promise(resolve => setTimeout(resolve, 10));
}

async function example() {
  console.log("Before wait");
  await waitOneSecond();
  console.log("After wait");
  
  do {
  countEl.innerText = count + Math.floor(Math.random() * 10) + 1;
  document.getElementById("save-el").textContent = count + Math.floor(Math.random() * 10) + 1;
 
  await waitOneSecond();
  
  } while (true);
}

example();

