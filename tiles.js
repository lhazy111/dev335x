let formInput = document.getElementById ('tiles');
const calcResult = document.getElementById('calc_result');
formInput.addEventListener("submit" , createNewTileCalc);

function createNewTileCalc(){
    let newTileCalcObject  = {
    w_width : formInput.w_width.value,
    w_height :  formInput.w_height.value,
    t_width :  formInput.t_width.value,
    t_height :  formInput.t_height.value,
    in_the_pack : formInput.in_the_pack.value,
    price : formInput.price.value,
    };
    calcResult.style.display = 'initial';
    calcResult.scrollIntoView();
    document.getElementById('m2').innerHTML = newTileCalcObject.w_width*newTileCalcObject.w_height + ' m2 of tiles';
    document.getElementById('packets').innerHTML = ((newTileCalcObject.w_width*newTileCalcObject.w_height)/(newTileCalcObject.t_width/100*newTileCalcObject.t_height/100)/newTileCalcObject.in_the_pack).toFixed(2) + ' packets of tiles';
    document.getElementById('all_price').innerHTML ='Tiles cost: ' + (newTileCalcObject.w_width*newTileCalcObject.w_height*newTileCalcObject.price).toFixed(2) + ' monies';
}
