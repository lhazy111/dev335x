

let formInput = document.getElementById('customers');
let submit_Customer = document.getElementById("add_customer_btn");
let main_Window = document.getElementById("main_Window");
let message_Box = document.getElementById("message");
let choice_New = document.getElementById("new_btn");
let choice_Browse = document.getElementById("browse_btn");
let choice_Delete = document.getElementById("del_btn");
let choice_prev = document.getElementById("prev_btn");
let choice_next = document.getElementById("next_btn");
let delete_yes = document.getElementById("delete_yes");
let delete_no = document.getElementById("delete_no");
let msg_box_btn = document.getElementById("msg_Box_off");
let customersList = [];
let customer_number = 1;
//formInput.addEventListener("submit", createNewCustomer);
submit_Customer.addEventListener("click", createNewCustomer);
choice_New.addEventListener("click", addNewCustomer);
choice_Browse.addEventListener("click", browse_Customers);
choice_next.addEventListener("click", showCustomerNumberUp);
choice_prev.addEventListener("click", showCustomerNumberDown);
choice_Delete.addEventListener("click", deleteCustomer);
delete_yes.addEventListener("click", delete_ok);
delete_no.addEventListener("click", delete_hide);
msg_box_btn.addEventListener("click", msg_box_off);

function msg_box_off(){
    message_Box.style.display = "none";

}


function deleteCustomer() {
    document.getElementById('choice3').style.display = 'initial';

}

function delete_ok() {
    customersList.splice(customer_number - 1, 1);
    //alert("Customer deleted");
    //alert("Customers list length " + customersList.length);
    localStorage.removeItem("BobCustomers");
    if (customersList.length > 0) {
        localStorage.setItem("BobCustomers", JSON.stringify(customersList));
        document.getElementById('choice3').style.display = 'none';
        if (customer_number > 1){
        customer_number--;
        } else {
            customer_number = 1;
        }
        display_Customer();
    }
    else {
        document.getElementById('browse_Customers').style.display = 'none';
        no_Customers()    
    }
}

function delete_hide() {
    document.getElementById('choice3').style.display = 'none';
}

function showCustomerNumberUp() {
    if (customer_number + 1 > customersList.length) {
        customer_number = 1;
    } else {
        customer_number++;
    }
    display_Customer();
}

function showCustomerNumberDown() {
    if (customer_number === 1) {
        customer_number = customersList.length
    } else {
        customer_number--;
    }
    display_Customer();
}


function addNewCustomer() {
    msg_box_off();
    document.getElementById('browse_Customers').style.display = 'none';
    document.getElementById('add_Customer').style.display = 'initial';
}

function browse_Customers() {
    delete_hide();
    document.getElementById('add_Customer').style.display = 'none';
    if (localStorage.getItem("BobCustomers")) {
        customersList = JSON.parse(localStorage.getItem("BobCustomers"));
        document.getElementById("browse_Customers").style.display = 'initial';
        display_Customer();
    } else {
        no_Customers();
       //alert ("Customers base empty");

    }

}

function display_Customer() {
    document.getElementById("customer_number").innerHTML = customer_number + "/" + customersList.length;
    document.getElementById("customer_name").innerHTML = customersList[customer_number - 1].c_name;
    document.getElementById("customer_phone").innerHTML = customersList[customer_number - 1].c_phone;
    document.getElementById("customer_notes").innerHTML = customersList[customer_number - 1].c_notes;
}

function createNewCustomer() {
    if (formInput.c_name.value.length > 0){
        //alert('customer: ' + formInput.c_name.value);
    let newCustomerObject = {
        c_name: formInput.c_name.value,
        c_phone: formInput.c_phone.value,
        c_notes: formInput.c_notes.value,
    };
    if (localStorage.getItem("BobCustomers")) {
        let BobCustomers = JSON.parse(localStorage.getItem("BobCustomers"));
        BobCustomers.push(newCustomerObject);
        localStorage.setItem('BobCustomers', JSON.stringify(BobCustomers));
    } else {
        localStorage.setItem("BobCustomers", JSON.stringify([newCustomerObject]));
    }
    formInput.reset();
} else {
    //alert("Can't be empty");
    empty();
    
}
}

function no_Customers(){
    message_Box.style.display = "initial";
    document.getElementById("message_Content").innerHTML = "NO CUSTOMERS IN DATABASE";
}

function empty(){
    document.getElementById('add_Customer').style.display = 'none';
    message_Box.style.display = "initial";
    document.getElementById("message_Content").innerHTML = "do not save empty form";


}