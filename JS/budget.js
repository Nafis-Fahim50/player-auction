function getPlayerTextById(textId,setId){
    const playerText = document.getElementById(textId);
    const playerName = playerText.innerText;

    const selectedPlayer = document.getElementById(setId);
    const li = document.createElement('li');
    li.innerText = playerName;
    selectedPlayer.appendChild(li);

    
}

document.getElementById('btn-messi').addEventListener('click',function(){
    getPlayerTextById('messi','select-five');
})
document.getElementById('btn-dybala').addEventListener('click',function(){
    getPlayerTextById('dybala','select-five');

})
document.getElementById('btn-suarez').addEventListener('click',function(){
   getPlayerTextById('suarez','select-five');
})
document.getElementById('btn-neymar').addEventListener('click',function(){
    getPlayerTextById('neymar','select-five');
})
document.getElementById('btn-aguero').addEventListener('click',function(){
    getPlayerTextById('aguero','select-five');
})
document.getElementById('btn-ronaldo').addEventListener('click',function(){
    getPlayerTextById('ronaldo','select-five');
})