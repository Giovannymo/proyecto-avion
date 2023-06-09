const $form = document.getElementById('form')
const $id = document.getElementById('id')
const $name = document.getElementById('name')
const $lastName = document.getElementById('lastName')
const $phone = document.getElementById('phone')
const $email = document.getElementById('email')
const $birthday = document.getElementById('birthday')
const $nacionality = document.getElementById('nacionality')


const listCustomers = []

$form.addEventListener('click', save)


//Cuando le den click a guardar recolecta los value en los 
//input y los guarda en un array
function save(e){
    const $selection = e.target

    if($selection.id === 'btnSave'){

        const customer = {
            id: undefined,
            name: undefined,
            lastName: undefined,
            phone: undefined,
            email: undefined,
            birthday: undefined,
            nacionality: undefined,
        }

        customer.id = $id.value
        customer.name = $name.value
        customer.lastName = $lastName.value
        customer.phone = $phone.value
        customer.email = $email.value
        customer.birthday = $birthday.value
        customer.nacionality = $nacionality.value
        
        listCustomers.push(customer);

        clearInputs()
        addTable();
    }
    
}

//limpiar inputs
function clearInputs(){

    $id.value = ''
    $name.value = ''
    $lastName.value = ''
   $phone.value = ''
    $email.value = ''
    $birthday.value = ''
    $nacionality.value = ''
}



//Dibuja y actualiza la tabla despues de guardar
function addTable(){
    const $table = document.getElementById('containerTable');
    const fragment = document.createDocumentFragment();

    
    for(const user of listCustomers){
        for(const prop in user){
            console.log(user.prop);    
        }
    }    
}