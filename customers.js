let formInput = document.getElementById('customers');
let choice_New = document.getElementById("new_btn");
let choice_Browse = document.getElementById("browse_btn");
let choice_Delete = document.getElementById("delete_btn");
formInput.addEventListener("submit", createNewCustomer);
choice_New.addEventListener("click", addNewCustomer);
choice_Browse.addEventListener("click", browse_Customers);

function addNewCustomer() {
        document.getElementById('add_Customer').style.display = 'initial';
}

function browse_Customers() {
    document.getElementById('add_Customer').style.display = 'none';
    document.getElementById("browse_Customers").style.display = 'initial';

}

function createNewCustomer() {
    let newCustomerObject = {
        c_name: formInput.c_name.value,
        c_phone: formInput.c_phone.value,
        c_notes: formInput.c_notes.value,
    };
    console.log(newCustomerObject);
    alert('Customers name:' + newCustomerObject.c_name);
    alert('Customers phone:' + newCustomerObject.c_phone);
    alert('Customers notes:' + newCustomerObject.c_notes);

    //document.getElementById('calc_result').style.display = 'initial';
    //document.getElementById('litr').innerHTML = (newPaintCalcObject.w_width * newPaintCalcObject.w_height / newPaintCalcObject.coverage).toFixed(2) +' litres of paint';
    //document.getElementById('buckets').innerHTML = (newPaintCalcObject.w_width * newPaintCalcObject.w_height / newPaintCalcObject.coverage / newPaintCalcObject.bucket_size).toFixed(2) +' buckets of paint';
    //document.getElementById('all_price').innerHTML = 'Paint cost: ' + (newPaintCalcObject.w_width * newPaintCalcObject.w_height / newPaintCalcObject.coverage / newPaintCalcObject.bucket_size * newPaintCalcObject.bucket_price).toFixed(2) +' monies';



    //}


   if (localStorage.getItem("BobCustomers")) {
    alert('dodanie');
    let BobCustomers = JSON.parse(localStorage.getItem("BobCustomers"));
        alert('dodanie1');
        //alert(questionsStorage.question);
        //alert(newQuestionObject.question);
        BobCustomers.push(newCustomerObject);
        //alert('dodanie2');
        localStorage.setItem('BobCustomers', JSON.stringify(BobCustomers));
        //alert('dodano?');
    } else {
        alert('pierwszy');
       // alert(newQuestion.question);
        localStorage.setItem("BobCustomers",  JSON.stringify([newCustomerObject]));

}
formInput.reset();
}
