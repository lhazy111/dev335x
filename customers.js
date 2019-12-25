//variables
const formInput = document.getElementById('customers');
const submit_Customer = document.getElementById("add_customer_btn");
const message_Box = document.getElementById("message");
const choice_New = document.getElementById("new_btn");
const choice_Browse = document.getElementById("browse_btn");
const choice_Delete = document.getElementById("del_btn");
const choice_Prev = document.getElementById("prev_btn");
const choice_Next = document.getElementById("next_btn");
const delete_Yes = document.getElementById("delete_yes");
const delete_No = document.getElementById("delete_no");
const msg_Box_Btn = document.getElementById("msg_Box_off");
let customersList = []; //array to store customer database
let customer_Number = 1; //setting customer number first to view in browse option

//Events
submit_Customer.addEventListener("click", createNewCustomer);
choice_New.addEventListener("click", addNewCustomer);
choice_Browse.addEventListener("click", browse_Customers);
choice_Next.addEventListener("click", showCustomerNumberUp);
choice_Prev.addEventListener("click", showCustomerNumberDown);
choice_Delete.addEventListener("click", deleteCustomer);
delete_Yes.addEventListener("click", delete_Ok);
delete_No.addEventListener("click", delete_Hide);
msg_Box_Btn.addEventListener("click", msg_Box_Off);

//functions

//hiding message box
function msg_Box_Off() {
    message_Box.style.display = "none";

}

//display delete customers options
function deleteCustomer() {
    document.getElementById('choice3').style.display = 'initial';

}

//deleting customer from localstorage file 
function delete_Ok() {
    customersList.splice(customer_Number - 1, 1);
    localStorage.removeItem("BobCustomers");
    if (customersList.length > 0) {
        localStorage.setItem("BobCustomers", JSON.stringify(customersList));
        document.getElementById('choice3').style.display = 'none';
        if (customer_Number > 1) {
            customer_Number--;
        } else {
            customer_Number = 1;
        }
        display_Customer();
    }
    else {
        document.getElementById('browse_Customers').style.display = 'none';
        no_Customers()
    }
}

//hide delete customers options
function delete_Hide() {
    document.getElementById('choice3').style.display = 'none';
}

//showing next customer from database
function showCustomerNumberUp() {
    if (customer_Number + 1 > customersList.length) {
        customer_Number = 1;
    } else {
        customer_Number++;
    }
    display_Customer();
}

//showing previous customer from database
function showCustomerNumberDown() {
    if (customer_Number === 1) {
        customer_Number = customersList.length
    } else {
        customer_Number--;
    }
    display_Customer();
}

//display add customer window
function addNewCustomer() {
    msg_Box_Off();
    document.getElementById('browse_Customers').style.display = 'none';
    document.getElementById('add_Customer').style.display = 'initial';
}

//display customer window
function browse_Customers() {
    delete_Hide();
    document.getElementById('add_Customer').style.display = 'none';
    if (localStorage.getItem("BobCustomers")) {
        customersList = JSON.parse(localStorage.getItem("BobCustomers"));
        document.getElementById("browse_Customers").style.display = 'initial';
        display_Customer();
    } else {
        no_Customers();
    }

}

//display customer
function display_Customer() {
    document.getElementById("customer_number").innerHTML = customer_Number + "/" + customersList.length;
    document.getElementById("customer_name").innerHTML = customersList[customer_Number - 1].c_name;
    document.getElementById("customer_phone").innerHTML = customersList[customer_Number - 1].c_phone;
    document.getElementById("customer_notes").innerHTML = customersList[customer_Number - 1].c_notes;
}

//adding created customer to localstorage file
function createNewCustomer() {
    if (formInput.c_name.value.length > 0) {
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
        empty();

    }
}

//empty customer base case
function no_Customers() {
    message_Box.style.display = "initial";
    document.getElementById("message_Content").innerHTML = "NO CUSTOMERS IN DATABASE";
}

//preventing from saving empty customer record
function empty() {
    document.getElementById('add_Customer').style.display = 'none';
    message_Box.style.display = "initial";
    document.getElementById("message_Content").innerHTML = "Do not save empty form";


}