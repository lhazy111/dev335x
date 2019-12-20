let formInput = document.getElementById('customers');
let choice_New = document.getElementById("new_btn");
let choice_Browse = document.getElementById("browse_btn");
let choice_Delete = document.getElementById("delete_btn");
let choice_prev = document.getElementById("prev_btn");
let choice_next = document.getElementById("next_btn");
let customersList = [];
let customer_number = 1;
formInput.addEventListener("submit", createNewCustomer);
choice_New.addEventListener("click", addNewCustomer);
choice_Browse.addEventListener("click", browse_Customers);
choice_next.addEventListener("click", showCustomerNumberUp);
choice_prev.addEventListener("click", showCustomerNumberDown);
choice_Delete.addEventListener("click", deleteCustomer);

function deleteCustomer(){
    
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
    document.getElementById('browse_Customers').style.display = 'none';
    document.getElementById('add_Customer').style.display = 'initial';
}

function browse_Customers() {
    document.getElementById('add_Customer').style.display = 'none';
    if (localStorage.getItem("BobCustomers")) {
        customersList = JSON.parse(localStorage.getItem("BobCustomers"))
    } else {
        alert("Customers base empty");
    }
    document.getElementById("browse_Customers").style.display = 'initial';
    display_Customer();
}

function display_Customer() {
    document.getElementById("customer_number").innerHTML = customer_number + "/" + customersList.length;
    document.getElementById("customer_name").innerHTML = customersList[customer_number - 1].c_name;
    document.getElementById("customer_phone").innerHTML = customersList[customer_number - 1].c_phone;
    document.getElementById("customer_notes").innerHTML = customersList[customer_number - 1].c_notes;
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
    if (localStorage.getItem("BobCustomers")) {
        alert('dodanie');
        let BobCustomers = JSON.parse(localStorage.getItem("BobCustomers"));
        alert('dodanie1');
        BobCustomers.push(newCustomerObject);
        localStorage.setItem('BobCustomers', JSON.stringify(BobCustomers));
    } else {
        alert('pierwszy');
        localStorage.setItem("BobCustomers", JSON.stringify([newCustomerObject]));

    }
    formInput.reset();
}
