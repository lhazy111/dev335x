let formInput = document.getElementById('paint');
formInput.addEventListener("submit", createNewPaintCalc);

function createNewPaintCalc() {
    let newPaintCalcObject = {
        w_width: formInput.w_width.value,
        w_height: formInput.w_height.value,
        coverage: formInput.coverage.value,
        bucket_size: formInput.bucket_sizPe.value,
        bucket_price: formInput.bucket_price.value,
    };
    document.getElementById('calc_result').style.display = 'initial';
    document.getElementById('litr').innerHTML = (newPaintCalcObject.w_width * newPaintCalcObject.w_height / newPaintCalcObject.coverage).toFixed(2) +' litres of paint';
    document.getElementById('buckets').innerHTML = (newPaintCalcObject.w_width * newPaintCalcObject.w_height / newPaintCalcObject.coverage / newPaintCalcObject.bucket_size).toFixed(2) +' buckets of paint';
    document.getElementById('all_price').innerHTML = 'Paint cost: ' + (newPaintCalcObject.w_width * newPaintCalcObject.w_height / newPaintCalcObject.coverage / newPaintCalcObject.bucket_size * newPaintCalcObject.bucket_price).toFixed(2) +' monies';

}

    //}


    //if (localStorage.getItem("Questions")) {
    // alert('dodanie');
    //    let Questions = JSON.parse(localStorage.getItem("Questions"));
        //alert('dodanie1');
        //alert(questionsStorage.question);
        //alert(newQuestionObject.question);
    //    Questions.push(newQuestionObject);
        //alert('dodanie2');
   //     localStorage.setItem('Questions', JSON.stringify(Questions));
        //alert('dodano?');
    //} else {
    //    alert('pierwszy');
       // alert(newQuestion.question);
    //    localStorage.setItem("Questions",  JSON.stringify([newQuestionObject]));

//}
//formInput.reset();

