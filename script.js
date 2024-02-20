const llogaria = document.getElementById('llogaria')

let vleraLlogaris = 0;

llogaria.innerText = "Llogaria: $" + vleraLlogaris

let intervalId;

function mbush() {
  const input = document.getElementById('mbushje')
  const vlera = input.value

  if (!vlera) {
    return alert('Ju lutem shkruani vleren')
  }

  if (vlera < 0) {
    return alert("Vlera nuk mund te jet negative")
  }

  vleraLlogaris += parseInt(vlera);
  llogaria.innerText = "Llogaria: $" + vleraLlogaris
}


function thirr() {
  const info = document.getElementById('info')
  const numberInput = document.getElementById('number')
  const numri = numberInput.value.split(' ').join('')

  if (!numri) {
    return alert("Ju lutem shkruani numrin qe deshironi te telefononi")
  }

  if ((numri.startsWith('044') || numri.startsWith('049')) && numri.length === 9) {
    intervalId = setInterval(function () {
      if (vleraLlogaris > 0) {
        vleraLlogaris -= 1
        llogaria.innerText = "Llogaria: $" + vleraLlogaris
        info.innerText = ""
      } else {
        vleraLlogaris = 0
        perfundo("Lidhja ka perfunduar per shkak te llogaris tuaj")
        info.innerText = "Llogaria juaj eshte harxhuar ju lutem rimbushni llogarin tuaj"
        llogaria.innerText = "Llogaria: $" + vleraLlogaris
      }
    }, 1000)
  } else if (numri.startsWith('+1') && numri.length === 12) {
    return alert('Amerik')
  } else {
    return alert("Please write a valid number")
  }
}

function perfundo(string) {
  clearInterval(intervalId)
  alert(string)
}