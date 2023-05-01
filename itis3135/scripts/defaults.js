
function submitInfo() {
    const name = document.getElementById("name").value;
    const feeling = document.getElementById("feeling").value;
    const greeting = document.querySelector("#greeting");
    greeting.innerHTML = "Hello " + name + ", I'm glad you are feeling " + feeling + " today!";

}


function img() {
    document.getElementById("fox").src = src="images/fox1.jpg";
}

function guess() {
   
    const guess = document.querySelector("#guess");
    guess.innerHTML = "my number is 5";
    
}

function add() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const result = document.querySelector("#result");
    result.innerHTML = parseInt(num1) + parseInt(num2);
}
