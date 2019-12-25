let formInput = document.getElementById('paint');
const calcResult = document.getElementById('calc_result');
formInput.addEventListener("submit", createNewPaintCalc);

function createNewPaintCalc() {
    let newPaintCalcObject = {
        w_width: formInput.w_width.value,
        w_height: formInput.w_height.value,
        coverage: formInput.coverage.value,
        bucket_size: formInput.bucket_size.value,
        bucket_price: formInput.bucket_price.value,
    };
    calcResult.style.display = 'initial';
    calcResult.scrollIntoView();
    document.getElementById('litr').innerHTML = (newPaintCalcObject.w_width * newPaintCalcObject.w_height / newPaintCalcObject.coverage).toFixed(2) +' litres of paint';
    document.getElementById('buckets').innerHTML = (newPaintCalcObject.w_width * newPaintCalcObject.w_height / newPaintCalcObject.coverage / newPaintCalcObject.bucket_size).toFixed(2) +' buckets of paint';
    document.getElementById('all_price').innerHTML = 'Paint cost: ' + (newPaintCalcObject.w_width * newPaintCalcObject.w_height / newPaintCalcObject.coverage / newPaintCalcObject.bucket_size * newPaintCalcObject.bucket_price).toFixed(2) +' monies';

}
