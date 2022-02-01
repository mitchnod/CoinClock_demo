//starting variables
var coin = 0.00;
var minutes = 0;

function start(){
    //sets variables
    var hours = document.getElementById('hours').value;
    var menu = document.getElementById('settings');
    
    //toggles form
    menu.style.display = menu.style.display === 'none' ? '' : 'none';
    document.getElementById('menu').style.backgroundColor = "black";

    //starts counting based on pay input
    var interval = setInterval(() => {
        minutes += 1;
        coin += 0.20;
        document.getElementById('earnings').innerText = '$ ' + coin.toFixed(2);
        
        //stops counting based on hour input
        if (minutes == hours * 60){
            clearInterval(interval);
        }
    }, 100);
}

//toggles form display
function toggle_display(){
    var menu = document.getElementById('settings');
    menu.style.display = menu.style.display === 'none' ? '' : 'none';
    if (menu.style.display != 'none'){
        document.getElementById('menu').style.backgroundColor = "rgb(27, 27, 27)"
    }
    if (menu.style.display === 'none'){
        document.getElementById('menu').style.backgroundColor = "black"
    }
}