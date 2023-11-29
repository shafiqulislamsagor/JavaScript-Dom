function moved(){
    const animate = document.getElementById('animate');
    let pos = 0;

    const interval = setInterval(frame,5);
    function frame(){
        if(pos < 450){
            pos++;
            animate.style.top = pos + "px";
            animate.style.left = pos + "px";
        }
        else{
            clearInterval(interval);
        }
    }
}
const button = document.getElementById('move');
button.addEventListener('click',moved)
function remove(){
    document.getElementById('move').removeEventListener('click',moved)
}