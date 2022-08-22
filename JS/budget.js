let playersName = [];

function displayName(array){
    const selectPlayerName = document.getElementById('select-five');
    selectPlayerName.innerHTML = "";
    for(let i=0; i<array.length; i++){
        const li = document.createElement('li');
        li.innerText = `${array[i].name}`
        selectPlayerName.appendChild(li);
    }
}

function playerName(element){
    const name = element.parentNode.children[0].innerText;
    const nameObj = {
        name: name
    }
    playersName.push(nameObj);
    if(playersName.length>5){
        alert('You alreay selected 5 players')
        return;
    }
    element.setAttribute('disabled',true);
    displayName(playersName);
}



















// let player = [];

// function getPlayerTextById(textId,setId){
//     const playerText = document.getElementById(textId);
//     const playerName = playerText.innerText;

//     const selectedPlayer = document.getElementById(setId);
//     const li = document.createElement('li');
//     li.innerText = playerName;
//     selectedPlayer.appendChild(li);

//     const selectPlayerName = document.getElementById('select-five');
//     const fivePlayerName = selectPlayerName.getElementsByTagName('li').length;
//     if(fivePlayerName>5){
//         alert('You alreay select 5 player');
//         return;
// }
 
// }

// document.getElementById('btn-messi').addEventListener('click',function(event){
//     getPlayerTextById('messi','select-five');
//     player.push(playerName);
//     event.target.setAttribute('disabled',true);
    
// })
// document.getElementById('btn-dybala').addEventListener('click',function(event){
//     getPlayerTextById('dybala','select-five');
//     event.target.setAttribute('disabled',true);
// })
// document.getElementById('btn-suarez').addEventListener('click',function(event){
//    getPlayerTextById('suarez','select-five');
//    event.target.setAttribute('disabled',true);
// })
// document.getElementById('btn-neymar').addEventListener('click',function(event){
//     getPlayerTextById('neymar','select-five');
//     event.target.setAttribute('disabled',true);
// })
// document.getElementById('btn-aguero').addEventListener('click',function(event){
//     getPlayerTextById('aguero','select-five');
//     event.target.setAttribute('disabled',true);
// })
// document.getElementById('btn-ronaldo').addEventListener('click',function(event){
//     getPlayerTextById('ronaldo','select-five');
//     event.target.setAttribute('disabled',true);
// })




