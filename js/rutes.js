const $nameRute = document.getElementById('txtNameRute')
const $valueTicket = document.getElementById('txtValueTicket')
const $cityFrom = document.getElementById('txtCityFrom')
const $cityTo = document.getElementById('txtCityTo')
const $points = document.getElementById('txtPoints')
const $btnSave = document.getElementById('btnSaveRute')

const $table = document.getElementById('table')

let idGenerator =0
const listRutes = []
$btnSave.addEventListener('click', saveRute)
$table.addEventListener('click', remove)


function saveRute(e){
  try{
    
    const rute = {
      id: idGenerator +=1,
      name: $nameRute.value,
      value: $valueTicket.value,
      cityFrom: $cityFrom.value,
      cityTo: $cityTo.value,
      points: $points.value
    }

    listRutes.push(rute)

  }catch(err){
    console.log(err);
  }
  addTable()
  reset()

}

//agrega a la tabla

function addTable(){
  
 const fragment = document.createDocumentFragment() 

  for(const rute of listRutes){
    const row = document.createElement('tr')
    const thId = document.createElement('th')
    const tdName = document.createElement('td')
    const tdValue = document.createElement('td')
    const tdFrom = document.createElement('td')
    const tdTo = document.createElement('td')
    const tdPoints = document.createElement('td')
    const tdBtn = document.createElement('td')
    const btnRemove = document.createElement('button')
  
    thId.textContent = rute.id
    tdName.textContent = rute.name
    tdValue.textContent = rute.value
    tdFrom.textContent = rute.cityFrom
    tdTo.textContent = rute.cityTo
    tdPoints.textContent = rute.points
    btnRemove.className = "btn btn-danger"
    btnRemove.id = rute.id
    btnRemove.textContent = 'Eliminar'

    tdBtn.appendChild(btnRemove)
    row.appendChild(thId)
    row.appendChild(tdName)
    row.appendChild(tdValue)
    row.appendChild(tdFrom)
    row.appendChild(tdTo)
    row.appendChild(tdPoints)
    row.appendChild(tdBtn)
    
    fragment.appendChild(row)
  }
  removeAllRows($table)
  $table.appendChild(fragment)

}

function remove(e){
  const select = e.target
  if(select.classList[1] === 'btn-danger'){
    const rowDeteled = select.parentNode.parentNode
    $table.removeChild(rowDeteled)
    for(const rute of listRutes){
      console.log(select.id, rute.id);
      if(select.id == rute.id){
        let i = listRutes.indexOf(rute)
        listRutes.splice(i,1)

      }

    }

  }

}

//Limpia la tabla antes de hacer la nueva inserción
function removeAllRows(element){
  while(element.hasChildNodes()) {
      element.removeChild(element.firstChild)
  }
}

//Limpia los inputs despues de guardar
function reset(){
  return $nameRute.value  = '',
  $valueTicket.value = '',
  $cityFrom.value = '',
  $cityTo.value = '',
  $points.value = ''
}