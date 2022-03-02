var img_store = ["images/dice1.png","images/dice2.png", "images/dice3.png", "images/dice4.png","images/dice5.png", "images/dice6.png",];
var random_one = Math.floor(Math.random()*img_store.length);
var random_two = Math.floor(Math.random()*img_store.length);

function reload(){
    document.querySelector(".img1").setAttribute("src", `${img_store[random_one]}`);
    document.querySelector(".img2").setAttribute("src", `${img_store[random_two]}`);

    if(random_one == random_two){
        document.querySelector("h1").innerHTML = "Match Tie";
    }else if(random_one > random_two){
        document.querySelector("h1").innerHTML = "Player 1 Win";
    }else{
        document.querySelector("h1").innerHTML = "Player 2 Win";
    }
}
document.querySelector("a").addEventListener("click", ()=>{
    reload()
}) 