let draggables = document.querySelectorAll('div.draggable');
function draggableELement(draggable){
    let toLeftX = 0;
    let toLeftY = 0;
    draggable.addEventListener('mousedown', onMouseDown);
    function onMouseDown(event){
        console.log('mousedown');
        event.preventDefault();
        let Rect = draggable.getBoundingClientRect();
        toLeftX = event.clientX - Rect.x;
        toLeftY = event.clientY - Rect.y;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
    function onMouseMove(event){
        console.log('mousemove');
        event.preventDefault();
        let newX = event.clientX - toLeftX;
        let newY = event.clientY - toLeftY;
        draggable.style.top = newY + "px";
        draggable.style.left = newX + 'px';


    }
    function onMouseUp(event){
        console.log('mouseup');
        event.preventDefault();
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
}
draggableELement(draggables[0])