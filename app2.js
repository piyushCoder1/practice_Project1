let boxes=document.querySelectorAll(".box");
let res_btn=document.querySelector(".reset-btn");
let win = document.querySelector("#win");
let msg = document.querySelector(".msg");
let newbtn=document.querySelector(".new-btn");


// let body = document.querySelector("body");

//in this project we use the 2D array!

/*let demo=[[1,2,3],[4,5,6],[7,8,9]];
console.log(demo[0]);
console.log(demo[0][1]);*/

let turnX=true;//playerX,playerO

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

//it is use for players
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    console.log("the bottun is clicked");
    if(turnX){
        //playerX
        box.style.color="blue";
        box.innerText="X";
       
        turnX=false;

    }
    else{
         //playerO
         box.style.color="black";
         box.innerText="O";
         turnX=true;
    }
    box.disabled=true; //it is use for use any thing only one time
    checkWinner(); //it is check the winner & loser
    });
});

//it is use for find the winner
const checkWinner = () => {
    for(let pattern of winPattern){
       
         let pos1Val= boxes[pattern[0]].innerText;
         let pos2Val=boxes[pattern[1]].innerText;
         let pos3Val=boxes[pattern[2]].innerText;

         if(pos1Val != "" && pos2Val !="" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("winner",pos1Val)
                        shawWinner(pos1Val);
                    }
         }


    }
};

//it is show the winner msg
const shawWinner = (winner) =>{
    win.innerText=`Cangratulation you win ${winner}`;
    msg.classList.remove("hide");

   for(let box of boxes){
    box.disabled=true;
   }
};

//this code use for botton
const resetBtn = () => {
    turnX=true;
    msg.classList.add("hide");
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}

res_btn.addEventListener("click", resetBtn)
newbtn.addEventListener("click", resetBtn)