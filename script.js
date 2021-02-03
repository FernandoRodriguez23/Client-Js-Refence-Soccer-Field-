
field.onclick = function (event) {

    //Find the window relative field coordinates
    //This gets where you click your cousors and gives you it cordinates (Dom Object)
    let fieldCord = this.getBoundingClientRect();
    
    //clientTop means border, It will show the px of the border, If we dont subtract this, it will put the ball in the millde of the
    //cursor //console.log(field.clientTop)
    //ball. subtarcts the height and width of the ball and divides it by 2, I think

    let ballCord = {
        top: event.clientY - fieldCord.top - field.clientTop - ball.clientHeight/2,
        left: event.clientX - fieldCord.left - field.clientTop - ball.clientWidth/2
    }
    
    //Prevent the ball from going out of bounds
    if(ballCord.top < 0) ballCord.top = 0
    if(ballCord.left < 0) ballCord.left = 0
    //This adds the width of the ball and make sure it cant go pass
    if(ballCord.left + ball.clientWidth > field.clientWidth) ballCord.left = field.clientWidth - ball.clientWidth
    if(ballCord.top + ball.clientHeight > field.clientHeight) ballCord.top = field.clientHeight - ball.clientHeight

    ball.style.left = ballCord.left+'px'
    ball.style.top = ballCord.top+'px'

}