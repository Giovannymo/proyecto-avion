const $form = document.getElementById('form')
const $id = document.getElementById('id')
const $name = document.getElementById('name')
const $lastName = document.getElementById('lastName')
const $phone = document.getElementById('phone')
const $email = document.getElementById('email')
const $birthday = document.getElementById('birthday')
const $nacionality = document.getElementById('nacionality')
const $tableBody = document.getElementById('containerTable')


const listCustomers = []

$form.addEventListener('click', save)
$tableBody.addEventListener('click', remove)

function remove(e){
    const select = e.target.className
}


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
    removeAllRows($tableBody)   
    const fragment = document.createDocumentFragment();
    //Recorre la lista y accede al value con la key recorrida    
    for(const user of listCustomers){
        const $row = document.createElement('tr')
        for(const prop in user){
            
            const $column = document.createElement('td')
            $column.textContent = user[prop]
            $row.appendChild($column)
            if(prop === 'nacionality'){
                const $columnTrash = document.createElement('td')
                const $btnTrash = document.createElement('button')
                $btnTrash.className += "btn btn-danger"
                $btnTrash.innerHTML = `<i id="btnRemove" class="fa-solid fa-trash" style="color: #black;"></i>`
                $columnTrash.appendChild($btnTrash)
                $row.appendChild($columnTrash)
            }
        }
        fragment.appendChild($row)
    } 
    
    return $tableBody.appendChild(fragment);
}


//Limpia la tabla antes de hacer la nueva inserción
function removeAllRows(element){
    while(element.hasChildNodes()) {
        element.removeChild(element.firstChild)
    }
}