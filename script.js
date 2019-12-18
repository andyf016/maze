/*
1. Display maze
    - convert the map array into html elements
        a Dvi for each row and a div for each block in that row
        CSS grid?
        table?
        canvas?
    - Insert those elements into the dom 
    - style those elements 
2. Allow player to move through the maze 
3. Win Condition
*/

const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];



const displayBlock = function(blockChar, rowDiv){
    let blockDiv = document.createElement('div')
    //set class to "row"
    blockDiv.classList.add("block")
    if(blockChar === "W"){
        blockDiv.classList.add("wall")
    }else if (blockDiv === " "){
    blockDiv.classList.add("floor")
    }else if (blockChar === "S"){
        blockDiv.classList.add("start")
    }
    rowDiv.appendChild(blockDiv)
}

const displayRow = function(rowStr, index){
    const maze = document.querySelector("#maze")
    let rowDiv = document.createElement('div')
    //set class to "row"
    rowDiv.classList.add("row")
    maze.appendChild(rowDiv)
    
   // const rowArr=rowStr.split("")
    //rowArr.forEach(displayBlock)
    for (let colNum = 0; colNum<rowStr.length; colNum++){
        displayBlock(rowStr.charAt(colNum), rowDiv)
    }
}

map.forEach(displayRow)
//create new div for player 
//append to start div
// give id of player 

document.addEventListener('keydown', movePlayer);

//player div should be relative 
//2 more variables "playerRow" "playerColumn"
//give starting coordinates 
//If statement for wall or not 

let playerLeft = 0;
let playerTop = 0;


const movePlayer = function(e){
    let key = e.code 
    if (key === "ArrowUp"){
        playerTop = playerTop - 5
    }
    else if (key === "ArrowDown"){
        playerTop = playerTop + 5
    }
    else if( key === "ArrowLeft"){
        playerLeft = playerLeft - 5
    }
    else if( key === "ArrowRight"){
        playerLeft = playerLeft +5
    }
    document.getElementsByClassName("player").style.left = playerLeft + "px";
    document.getElementsByClassName("player").style.top = playerTop + "px"

}
